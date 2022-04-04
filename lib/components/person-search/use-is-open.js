import { useEffect, useState } from 'react';

export function useIsOpen() {
  const [isOpen, setIsOpen] = useState(false);

  // Open search box on Ctrl+K or Cmd+K
  useEffect(() => {
    function onKeydown(event) {
      if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setIsOpen((currentOpenState) => !currentOpenState);
      }
    }

    window.addEventListener('keydown', onKeydown);

    return () => {
      window.removeEventListener('keydown', onKeydown);
    };
  }, []);

  return [isOpen, setIsOpen];
}
