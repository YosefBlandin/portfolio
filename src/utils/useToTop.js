import { useEffect } from 'react';

const useToTop = () =>
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

export default useToTop;
