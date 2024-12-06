import { useCallback } from 'react';

export const useScroll = () => {
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      console.log(`Scrolled to ${id}`);
    }
  }, []);

  return { scrollToSection };
};