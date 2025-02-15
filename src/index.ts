import { useEffect, useState } from "react";

interface VisibilityState {
  status: boolean;
  message: string;
}

const useBv = (): VisibilityState => {
  const [isVisible, setIsVisible] = useState<VisibilityState>({
    status: true,
    message: "The browser window is currently open and visible.",
  });

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        setIsVisible({
          status: true,
          message: "The browser window is currently open and visible.",
        });
      } else {
        setIsVisible({
          status: false,
          message: "The browser window is currently minimized and not visible.",
        });
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return isVisible;
};

export default useBv;
