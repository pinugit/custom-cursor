import { useEffect, useState } from "react";
import "./Cursor.css";

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState<{
    x: number;
    y: number;
  }>();
  useEffect(() => {
    // const rect = document.querySelectorAll(".cursor");

    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div
        className="cursor"
        // style={{ top: mousePosition?.y, left: mousePosition?.x }}
        style={{ top: `${mousePosition?.y}px`, left: `${mousePosition?.x}px` }}
      ></div>
      <div
        className="cursor outer"
        // style={{ top: mousePosition?.y, left: mousePosition?.x }}
        style={{ top: `${mousePosition?.y}px`, left: `${mousePosition?.x}px` }}
      ></div>
    </>
  );
};

export default Cursor;
