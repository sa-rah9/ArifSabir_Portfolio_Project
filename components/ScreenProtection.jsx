"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function ScreenProtection({ children }) {
  const [blurred, setBlurred] = useState(false);

  useEffect(() => {
    const showWarning = () => {
      toast.error("Screenshots are not allowed", {
        duration: 2000,
      });
    };

    const disableRightClick = (e) => e.preventDefault();

    const disableKeys = (e) => {
      const blockedKeys = ["PrintScreen", "F12"];

      if (
        blockedKeys.includes(e.key) ||
        (e.ctrlKey && ["c", "u", "s", "p", "x"].includes(e.key.toLowerCase()))
      ) {
        e.preventDefault();
        showWarning();
      }
    };

    const handleBlur = () => {
      setBlurred(true);
      showWarning();
    };

    const handleFocus = () => {
      setBlurred(false);
    };

    const visibilityHandler = () => {
      if (document.hidden) {
        setBlurred(true);
        showWarning();
      }
    };

    document.addEventListener("contextmenu", disableRightClick);
    document.addEventListener("keydown", disableKeys);
    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);
    document.addEventListener("visibilitychange", visibilityHandler);

    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
      document.removeEventListener("keydown", disableKeys);
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
      document.removeEventListener("visibilitychange", visibilityHandler);
    };
  }, []);

  return (
    <div className="relative select-none">
      <div
        className={`transition-all duration-200 ${blurred ? "blur-lg" : ""}`}
      >
        {children}
      </div>
    </div>
  );
}
