import { useEffect } from 'react';

const useLockOrientation = (orientation) => {
  useEffect(() => {
    const lockOrientation = async () => {
      if ('screen' in window && 'orientation' in window.screen) {
        try {
          await window.screen.orientation.lock(orientation);
        } catch (error) {
          console.error('Screen orientation lock error:', error);
        }
      }
    };

    lockOrientation();
  }, [orientation]);
};

export default useLockOrientation;
