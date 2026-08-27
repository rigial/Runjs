import { useEffect } from 'react';

type Callback = () => void;

const useDownloadFile = (downloadFile: Callback) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const isCtrlOrCmd = event.ctrlKey || event.metaKey;
      const isS = event.key === 's' || event.key === 'S';

      if (isCtrlOrCmd && isS) {
        event.preventDefault();
        downloadFile();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [downloadFile]);
};

export default useDownloadFile;
