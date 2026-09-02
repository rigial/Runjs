import {
  createContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from 'react';
import InstallAppModal from '../components/InstallAppModal';

export interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

export interface PwaContextType {
  isInstallable: boolean;
  isInstalled: boolean;
  isModalOpen: boolean;
  openInstallModal: () => void;
  closeInstallModal: () => void;
  installApp: () => Promise<void>;
}

const PwaContext = createContext<PwaContextType | undefined>(undefined);

const DISMISSED_KEY = 'runjs_pwa_prompt_dismissed';
const AUTO_PROMPT_COOLDOWN_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

export function PwaProvider({ children }: { children: ReactNode }) {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [isInstallable, setIsInstallable] = useState<boolean>(false);
  const [isInstalled, setIsInstalled] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return (
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as unknown as { standalone?: boolean }).standalone ===
        true
    );
  });
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isInstalling, setIsInstalling] = useState<boolean>(false);

  // Monitor standalone display mode changes
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(display-mode: standalone)');
    const handleDisplayModeChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setIsInstalled(true);
        setIsInstallable(false);
        setIsModalOpen(false);
      }
    };

    mediaQuery.addEventListener('change', handleDisplayModeChange);
    return () =>
      mediaQuery.removeEventListener('change', handleDisplayModeChange);
  }, []);

  // Capture beforeinstallprompt and appinstalled events
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // If already running as standalone PWA, do not listen or show prompt
    if (
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as unknown as { standalone?: boolean }).standalone ===
        true
    ) {
      setIsInstalled(true);
      return;
    }

    const handleBeforeInstallPrompt = (e: Event) => {
      // Prevent browser's default mini-infobar from appearing
      e.preventDefault();
      const promptEvent = e as BeforeInstallPromptEvent;
      setDeferredPrompt(promptEvent);
      setIsInstallable(true);

      // Auto-prompt modal if not dismissed recently
      try {
        const lastDismissed = localStorage.getItem(DISMISSED_KEY);
        const now = Date.now();
        if (
          !lastDismissed ||
          now - Number(lastDismissed) > AUTO_PROMPT_COOLDOWN_MS
        ) {
          setTimeout(() => {
            setIsModalOpen((currentOpen) => {
              // Only auto-open if not already opened
              return currentOpen ? true : true;
            });
          }, 2000);
        }
      } catch {
        // Ignore localStorage access restrictions
      }
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setIsInstallable(false);
      setDeferredPrompt(null);
      setIsModalOpen(false);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener(
        'beforeinstallprompt',
        handleBeforeInstallPrompt
      );
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const openInstallModal = useCallback(() => {
    if (isInstallable && !isInstalled) {
      setIsModalOpen(true);
    }
  }, [isInstallable, isInstalled]);

  const closeInstallModal = useCallback(() => {
    setIsModalOpen(false);
    try {
      localStorage.setItem(DISMISSED_KEY, String(Date.now()));
    } catch {
      // Ignore localStorage write restrictions
    }
  }, []);

  const installApp = useCallback(async () => {
    if (!deferredPrompt) {
      closeInstallModal();
      return;
    }

    try {
      setIsInstalling(true);
      await deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;

      if (choiceResult.outcome === 'accepted') {
        setIsInstalled(true);
        setIsInstallable(false);
        setDeferredPrompt(null);
      }
    } catch (err) {
      console.error('[PWA] Error triggering install prompt:', err);
    } finally {
      setIsInstalling(false);
      setIsModalOpen(false);
    }
  }, [deferredPrompt, closeInstallModal]);

  return (
    <PwaContext.Provider
      value={{
        isInstallable,
        isInstalled,
        isModalOpen,
        openInstallModal,
        closeInstallModal,
        installApp,
      }}
    >
      {children}
      {/* Global custom PWA installation modal */}
      <InstallAppModal
        isOpen={isModalOpen && isInstallable && !isInstalled}
        onClose={closeInstallModal}
        onInstall={installApp}
        isInstalling={isInstalling}
      />
    </PwaContext.Provider>
  );
}

export default PwaContext;
