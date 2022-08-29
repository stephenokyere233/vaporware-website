import React from "react";
import useMousePosition from "../../hooks/useMousePointer";

const Cursor = () => {
  const { x, y } = useMousePosition();
  return (
    <>
      <div className="cursor" style={{ left: `${x}px`, top: `${y}px` }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#fff"
        >
          <path d="M3 0l18 15h-11.081l-6.919 9z" />
        </svg>
      </div>
    </>
  );
};
export default Cursor;
