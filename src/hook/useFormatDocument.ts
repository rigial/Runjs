import { useEffect } from 'react';

type Callback = () => void;

const useFormatDocument = (formatDocument: Callback) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const isCtrlOrCmd = event.ctrlKey || event.metaKey;
      const isQ = event.key === 'q' || event.key === 'Q';
      const isShiftAltF =
        event.shiftKey &&
        event.altKey &&
        (event.key === 'f' || event.key === 'F' || event.code === 'KeyF');

      if ((isCtrlOrCmd && isQ) || isShiftAltF) {
        event.preventDefault();
        formatDocument();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [formatDocument]);
};

export default useFormatDocument;
