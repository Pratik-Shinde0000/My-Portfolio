import { useState, useEffect, useMemo } from "react";

const useTypingEffect = (
  texts,
  typingSpeed = 150,
  deletingSpeed = 50,
  delay = 1000
) => {
  const [displayText, setDisplayText] = useState(""); // Text currently displayed
  const [fullTextIndex, setFullTextIndex] = useState(0); // Index of the current text
  const [isDeleting, setIsDeleting] = useState(false); // Whether the text is being deleted

  const fullTexts = useMemo(() => texts, [texts]); // Ensure the array remains stable

  useEffect(() => {
    const currentText = fullTexts[fullTextIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing the text
        if (displayText.length < currentText.length) {
          setDisplayText((prev) => currentText.slice(0, prev.length + 1));
        } else {
          // Once typing is complete, wait for a delay before deleting
          setTimeout(() => setIsDeleting(true), delay);
        }
      } else {
        // Deleting the text
        if (displayText.length > 0) {
          setDisplayText((prev) => prev.slice(0, -1));
        } else {
          // Once deletion is complete, move to the next text
          setIsDeleting(false);
          setFullTextIndex((prevIndex) => (prevIndex + 1) % fullTexts.length);
        }
      }
    };

    // Timer for typing/deleting
    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer); // Clear the timer
  }, [
    displayText,
    isDeleting,
    fullTextIndex,
    fullTexts,
    typingSpeed,
    deletingSpeed,
    delay,
  ]);

  return displayText;
};

export default useTypingEffect;
