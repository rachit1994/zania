import { MouseEvent, ReactNode, memo, useEffect, useState } from "react";

interface OverlayProps {
  children: ReactNode;
}

const Overlay: React.FC<OverlayProps> = ({ children }) => {
  const [showOverlay, setShowOverlay] = useState<boolean>(false);

  const toggleOverlay = () => setShowOverlay(!showOverlay);

  // Listen for ESC key to close the overlay
  useEffect(() => {
    const closeOnEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && showOverlay) {
        // Only set state if showOverlay is true
        setShowOverlay(false);
      }
    };
    window.addEventListener("keydown", closeOnEsc);
    return () => window.removeEventListener("keydown", closeOnEsc);
    // Added showOverlay to the dependency array to prevent unnecessary re-registrations
  }, [showOverlay]);

  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    toggleOverlay();
  };

  return (
    <div className="col-span-1 rounded-lg flex items-center justify-center">
      <button
        onClick={toggleOverlay}
        aria-expanded={showOverlay}
        className="rounded-lg focus:outline-none h-80"
      >
        {children}
      </button>
      {showOverlay && (
        <div
          className="fixed inset-0 bg-neutral-400 bg-opacity-50 flex justify-center items-center"
          onClick={handleOverlayClick}
          role="dialog"
          aria-modal="true"
        >
          <div className="rounded-lg shadow-lg h-64 w-64">{children}</div>
        </div>
      )}
    </div>
  );
};

export default memo(Overlay);
