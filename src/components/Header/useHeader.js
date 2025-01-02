import { useParams, usePathname, useRouter } from "next/navigation";
import { useRef, useState, useEffect, useTransition } from "react";
import { Expo, Power3, gsap, Elastic } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import useGetDeviceType from "@/hooks/useGetDeviceType";
import { useGSAP } from "@gsap/react";

gsap.config({ force3D: true });
export const useHeader = () => {
  gsap.registerPlugin(ScrollTrigger);
  const main = useRef(null);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const { width } = useGetDeviceType();

  useGSAP(
    (context, contextSafe) => {
      const subHeader = context.selector(".sub-header");

      const showAnim = gsap
        .from(subHeader, {
          yPercent: -100,
          paused: true,
          duration: 0.2,
        })
        .progress(1);

      ScrollTrigger.create({
        start: "top top",
        end: 99999,
        onUpdate: (self) => {
          if(self.scroll()>400) {
            self.direction === -1? showAnim.play() : showAnim.reverse();
          }
        },
      });

      ScrollTrigger.matchMedia({
        "(min-width: 992px)": function () {},

        "(min-width: 600px) and (max-width: 959px)": function () {
          // The ScrollTriggers created inside these functions are segregated and get
          // reverted/killed when the media query doesn't match anymore.
        },

        // small
        "(max-width: 599px)": function () {
          // The ScrollTriggers created inside these functions are segregated and get
          // reverted/killed when the media query doesn't match anymore.
        },

        // all
        all: function () {},
      });
    },
    { scope: main }
  );

  useEffect(() => {
    const scrollOffset = document.documentElement.scrollTop;
    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      setIsScrollingDown(currentScrollTop > 100);
    };

    if (scrollOffset > 100) {
      setIsScrollingDown(true);
    } else {
      setIsScrollingDown(false);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
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
  };

  return {
    main,
    isScrollingDown,
    onSelectChange,
  };
};
