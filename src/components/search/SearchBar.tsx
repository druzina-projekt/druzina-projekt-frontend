"use client";

import { GoSearch } from "react-icons/go";
import { useState, useRef, useEffect } from "react";

export default function SearchBar() {
  const [showDialog, setShowDialog] = useState(false);

  const dialogRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => {
    setShowDialog(!showDialog);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dialogRef.current &&
      !dialogRef.current.contains(event.target as Node)
    ) {
      setShowDialog(false);
    }
  };

  useEffect(() => {
    if (showDialog) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDialog]);

  return (
    <>
      <button className="search-bar" onClick={handleButtonClick}>
        <GoSearch className="search-icon" />
        <p>Kaj želite prebrati?</p>
      </button>
      {showDialog && (
        <>
          <div className="search-dialog-overlay"></div>
          <div ref={dialogRef} className="search-dialog">
            <div className="dialog-input-container">
              <GoSearch className="search-icon" />
              <input type="text" placeholder="Kaj želite prebrati?" />
            </div>
          </div>
        </>
      )}
    </>
  );
}
