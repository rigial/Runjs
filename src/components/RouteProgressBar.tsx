import { memo, useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router';

function RouteProgressBar() {
  const location = useLocation();
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const prevPathRef = useRef(location.pathname);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    if (prevPathRef.current === location.pathname) {
      return;
    }
    prevPathRef.current = location.pathname;

    // Clear any previous active timers
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];

    // Start progress bar
    setIsVisible(true);
    setProgress(35);

    const t1 = setTimeout(() => {
      setProgress(75);
    }, 100);

    const t2 = setTimeout(() => {
      setProgress(100);
    }, 250);

    const t3 = setTimeout(() => {
      setIsVisible(false);
      setProgress(0);
    }, 450);

    timersRef.current = [t1, t2, t3];

    return () => {
      timersRef.current.forEach(clearTimeout);
    };
  }, [location.pathname]);

  if (!isVisible && progress === 0) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[2.5px] z-50 pointer-events-none transition-opacity duration-200"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      <div
        className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 shadow-[0_0_10px_rgba(245,158,11,0.6)] transition-all ease-out"
        style={{
          width: `${progress}%`,
          transitionDuration: progress === 100 ? '150ms' : '200ms',
        }}
      />
    </div>
  );
}

export default memo(RouteProgressBar);
