import React, { useState, useEffect } from 'react';

const SequentialText = ({ words, interval = 2000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isStrikethrough, setIsStrikethrough] = useState(false);

  useEffect(() => {
    if (currentIndex >= words.length - 1) return;

    const strikeTimer = setTimeout(() => {
      setIsStrikethrough(true);
    }, interval / 2);

    const nextWordTimer = setTimeout(() => {
      setCurrentIndex(prevIndex => prevIndex + 1);
      setIsStrikethrough(false);
    }, interval);

    return () => {
      clearTimeout(strikeTimer);
      clearTimeout(nextWordTimer);
    };
  }, [currentIndex, words, interval]);

  return (
    <span className="font-bold">
      <span className={isStrikethrough ? 'line-through' : ''}>{words[currentIndex]}</span>
    </span>
  );
};

export default SequentialText;
