

import { useParams } from "next/navigation";
import { useRef, useState, useEffect, useTransition } from "react";
 
export const useHeader = () => {

  const main = useRef(null);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  useEffect(() => {
    const scrollOffset = document.documentElement.scrollTop
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      setIsScrollingDown(currentScrollTop > 100);
    };

    if(scrollOffset > 100) {
      setIsScrollingDown(true);
    } else {
      setIsScrollingDown(false);
    }
  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const onSelectChange = (lang) => {
    const nextLocale = lang;
    
    startTransition(() => {
      router.replace(
        // Adjust this line according to your routing logic
        { pathname, params },
        { locale: nextLocale }
      );
    });
  }


  return {
    main,
    isScrollingDown,
    onSelectChange
  };
};
