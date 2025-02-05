import { useRef } from "react";

export const useHomeServices = () => {
  const main = useRef(null);

  return {
    main,
  };
}; 