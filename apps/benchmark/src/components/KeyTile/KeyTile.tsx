import React from "react";
import "./KeyTile.css";

interface KeyTile {
  location: number;
  isAltPressed: boolean;
  isCtrlPressed: boolean;
  isMetaPressed: boolean;
  isShiftPressed: boolean;
}

const KeyTile: React.FC<KeyTile> = ({
  children,
  location,
  isAltPressed,
  isCtrlPressed,
  isMetaPressed,
  isShiftPressed,
}) => {
  return (
    <div className="keyTile">
      <div className="location">
        {location === 1 ? <small>L</small> : <small>R</small>}
      </div>
      <p className="key">{children}</p>
      <div className="modifiers">
        {isAltPressed && <p>A</p>}
        {isCtrlPressed && <small>C</small>}
        {isShiftPressed && <small>S</small>}
        {isMetaPressed && <small>⌘</small>}
      </div>
    </div>
  );
};

export default KeyTile;
