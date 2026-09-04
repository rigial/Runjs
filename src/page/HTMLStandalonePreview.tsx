import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import { getLivePreviewDoc } from '../utils/previewStorage';

const BROADCAST_CHANNEL_NAME = 'runjs_html_live_preview';

export default function HTMLStandalonePreview() {
  const [searchParams] = useSearchParams();
  const targetId = searchParams.get('target') || 'scratch';
  const targetStorageKey = `runjs_html_live_doc_${targetId}`;

  const [doc, setDoc] = useState<string>(() => getLivePreviewDoc(targetId));
  const [isSyncing, setIsSyncing] = useState(false);

  useEffect(() => {
    document.title =
      targetId === 'scratch'
        ? 'RunJS — HTML Scratchpad Preview'
        : 'RunJS — Project Live Preview';
  }, [targetId]);

  useEffect(() => {
    // 1. Listen via BroadcastChannel (fastest, modern cross-tab communication)
    let channel: BroadcastChannel | null = null;
    if (typeof BroadcastChannel !== 'undefined') {
      try {
        channel = new BroadcastChannel(BROADCAST_CHANNEL_NAME);
        channel.onmessage = (event) => {
          if (
            event.data?.type === 'LIVE_DOC_UPDATE' &&
            typeof event.data.compiledDoc === 'string' &&
            (!event.data.targetId || event.data.targetId === targetId)
          ) {
            setDoc(event.data.compiledDoc);
            setIsSyncing(true);
            setTimeout(() => setIsSyncing(false), 600);
          }
        };
      } catch (err) {
        console.warn('BroadcastChannel error in preview tab', err);
      }
    }

    // 2. Listen via storage event (reliable cross-tab fallback)
    const handleStorage = (event: StorageEvent) => {
      if (event.key === targetStorageKey && event.newValue) {
        setDoc(event.newValue);
        setIsSyncing(true);
        setTimeout(() => setIsSyncing(false), 600);
      }
    };

    window.addEventListener('storage', handleStorage);

    return () => {
      channel?.close();
      window.removeEventListener('storage', handleStorage);
    };
  }, [targetId, targetStorageKey]);

  return (
    <div className="w-screen h-screen overflow-hidden bg-white relative">
      {/* Floating subtle Live Sync Indicator */}
      <div className="fixed top-3 right-3 z-50 pointer-events-none select-none flex items-center gap-2 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-white/90 text-xs font-medium shadow-md border border-white/10 transition-opacity">
        <span
          className={`w-2 h-2 rounded-full transition-colors ${
            isSyncing ? 'bg-amber-400 animate-ping' : 'bg-emerald-400'
          }`}
        />
        <span>
          {targetId === 'scratch' ? 'Scratchpad Sync' : 'Project Live Sync'}
        </span>
      </div>

      {doc ? (
        <iframe
          key={doc.length}
          title="RunJS Live Output"
          sandbox="allow-scripts allow-modals"
          srcDoc={doc}
          className="w-full h-full border-none bg-white"
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-950 text-zinc-400 font-sans gap-2">
          <p className="text-sm font-medium">Waiting for playground code...</p>
          <p className="text-xs text-zinc-600">
            Start typing in RunJS to see output live.
          </p>
        </div>
      )}
    </div>
  );
}
