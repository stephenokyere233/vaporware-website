import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [_document, set_document] = useState(null);
  const [showDrawer, setShowDrawer] = useState(false);

  useEffect(() => {
    if (typeof window === "object") {
      set_document(document);

      const pointer = window.document.querySelector(".pointer");

      const onPointerMove = (e) => {
        const mouseY = e.clientY;
        const mouseX = e.clientX;
        pointer.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      };

      const onMouseClick = () => {
        pointer.classList.add("pointer-clicked");
        setTimeout(() => {
          pointer.classList.remove("pointer-clicked");
        }, 150);
      };

      window.addEventListener("mousemove", onPointerMove);
      window.addEventListener("mousedown", onMouseClick);
    }
  }, [_document]);

  return (
    <AppContext.Provider value={{ showDrawer, setShowDrawer }}>
      {children}
    </AppContext.Provider>
  );
};
