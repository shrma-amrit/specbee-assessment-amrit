import React, { useEffect, useRef } from "react";
import "./LeftNavBar.scss";
import { AuthorFilterSection } from "../AuthorFilterSection";
import { CategoryFilterSection } from "../CategoryFilterSection";
import { SortSection } from "../SortSection";

interface LeftNavBarProps {
  setIsLeftNavBarOpen: (isLeftNavBarOpen: boolean) => void;
  isMobile: boolean;
}

const LeftNavBar: React.FC<LeftNavBarProps> = ({
  setIsLeftNavBarOpen,
  isMobile,
}) => {
  const navBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobile &&
        navBarRef.current &&
        !navBarRef.current.contains(event.target as Node)
      ) {
        setIsLeftNavBarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);

  return (
    <div>
      <div ref={navBarRef} className="left-nav-bar">
        <CategoryFilterSection />
        <AuthorFilterSection />
        <SortSection />
      </div>
    </div>
  );
};

export default LeftNavBar;
