import React, { useState } from "react";

interface KeyProps {
  keyvalue: string;
  onClick: () => void;
}

const Key: React.FC<KeyProps> = ({ keyvalue, onClick }) => (
  <div className="key" onClick={onClick}>
    {keyvalue.includes("_") ? (
      keyvalue.split("_").map((part, index) => <span key={index}>{part}</span>)
    ) : keyvalue === '<i className="fa-solid fa-delete-left"></i>' ? (
      <i className="fa-solid fa-delete-left"></i>
    ) : (
      <span>{keyvalue}</span>
    )}
  </div>
);

interface IProps {
    setInputText?: any
    inputText?: any
}

const Keyboard: React.FC<IProps> = ({setInputText, inputText}) => {
  const [isCaps, setIsCaps] = useState(false);
  const [isShift, setIsShift] = useState(false);

  const handleKeyClick = (key: string) => {
    if (key === "Enter") {
      handleEnterKey();
    } else if (key === "Ctrl" || key === "Alt" || key === "<" || key === ">") {
      // Handle special keys
    } else if (key === " ") {
      handleSpaceKey();
    } else if (key === "Caps Lock") {
      handleCapsLock();
    } else if (key === '<i className="fa-solid fa-delete-left"></i>') {
      handleDeleteKey();
    } else if (key === "Shift") {
      handleShiftKey();
    } else if (key === "Tab") {
      handleTabKey();
    } else {
      handleRegularKey(key);
    }
  };

  const handleSpaceKey = () => {
    const newContent = inputText + "\u00A0";
    setInputText(newContent);
  };

  const handleEnterKey = () => {
    const newContent = inputText + "\n";
    setInputText(newContent);
  };

  const handleCapsLock = () => {
    const updatedCaps = !isCaps;
    setIsCaps(updatedCaps);
    const keys = document.querySelectorAll(".key");
    keys.forEach((key) => {
      const firstSpanElement = key.querySelector(
        "span:first-child"
      ) as HTMLElement;
      if (firstSpanElement) {
        const keyText = firstSpanElement.innerText.toLowerCase();
        if (
          !["shift", "alt", "ctrl", "enter", "caps lock", "tab"].includes(
            keyText
          )
        ) {
          firstSpanElement.innerText =
            (updatedCaps && isShift) || (!updatedCaps && !isShift)
              ? keyText.toLowerCase()
              : keyText.toUpperCase();
        }
        if (keyText === "caps lock") {
          firstSpanElement.parentElement!.style.backgroundColor = updatedCaps
            ? "white"
            : "white";
        }
      }
    });
  };

  const handleTabKey = () => {
    const newContent = inputText + "    ";
    setInputText(newContent);
  };

  const handleDeleteKey = () => {
    if (inputText.length === 0) {
      return;
    }
    const newContent = inputText.slice(0, inputText.length - 1);
    setInputText(newContent);
  };

  const handleShiftKey = () => {
    const updatedShift = !isShift;
    setIsShift(updatedShift);
    const keys = document.querySelectorAll(".key");
    keys.forEach((key) => {
      const firstSpanElement = key.querySelector(
        "span:first-child"
      ) as HTMLElement;
      if (firstSpanElement) {
        const keyText = firstSpanElement.innerText.toLowerCase();
        if (
          !["shift", "alt", "ctrl", "enter", "caps lock", "tab"].includes(
            keyText
          )
        ) {
          firstSpanElement.innerText =
            (updatedShift && isCaps) || (!updatedShift && !isCaps)
              ? keyText.toLowerCase()
              : keyText.toUpperCase();
        }
        if (keyText === "shift") {
          firstSpanElement.parentElement!.style.backgroundColor = updatedShift
            ? "white"
            : "white";
        }
      }
    });
  };

  const handleRegularKey = (key: string) => {
    const keys = key.split(/[._]/);
    let newContent;
    if (keys.length > 1) {
      if (isShift) {
        if (keys.length === 3) {
          if (keys[0] === ">") newContent = inputText + ">";
          else newContent = inputText + "_";
        } else newContent = inputText + keys[0];
      } else {
        if (keys.length === 3) {
          if (keys[0] === ">") newContent = inputText + ".";
          else newContent = inputText + "-";
        } else newContent = inputText + keys[1];
      }
    } else {
      let character =
        (isShift && isCaps) || (!isShift && !isCaps)
          ? key.toLowerCase()
          : key.toUpperCase();
      newContent = inputText + character;
    }
    setInputText(newContent);
  };

  return (
    <div className="keyboard">
      <div className="keyboardcontainer">
        <div className="container">
          <div className="row">
            {[
              "~",
              "!.1",
              "ә",
              "і",
              "ң",
              "ғ",
              ",",
              ".",
              "ү",
              "ұ",
              "қ",
              "ө",
              "һ",
              '<',
            ].map((keyvalue, index) => (
              <Key
                key={index}
                keyvalue={keyvalue}
                onClick={() => handleKeyClick(keyvalue)}
              />
            ))}
          </div>
          <div className="row">
            {[
              "Tab",
              "й",
              "ц",
              "у",
              "к",
              "е",
              "н",
              "г",
              "ш",
              "щ",
              "з",
              "{_[",
              "}_]",
              "|_\\",
            ].map((keyvalue, index) => (
              <Key
                key={index}
                keyvalue={keyvalue}
                onClick={() => handleKeyClick(keyvalue)}
              />
            ))}
          </div>
          <div className="row">
            {[
              "Caps Lock",
              "ф",
              "ы",
              "в",
              "а",
              "п",
              "р",
              "о",
              "л",
              "д",
              ":_;",
              `"_'`,
              "Enter",
            ].map((keyvalue, index) => (
              <Key
                key={index}
                keyvalue={keyvalue}
                onClick={() => handleKeyClick(keyvalue)}
              />
            ))}
          </div>
          <div className="row">
            {[
              "Shift",
              "я",
              "ч",
              "с",
              "м",
              "и",
              "т",
              "ь",
              "б",
              "ю",
              "?_/",
              "Shift",
            ].map((keyvalue, index) => (
              <Key
                key={index}
                keyvalue={keyvalue}
                onClick={() => handleKeyClick(keyvalue)}
              />
            ))}
          </div>
          <div className="row">
            {["Ctrl", "Alt", " ", "Ctrl", "Alt", "<", ">"].map(
              (keyvalue, index) => (
                <Key
                  key={index}
                  keyvalue={keyvalue}
                  onClick={() => handleKeyClick(keyvalue)}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
