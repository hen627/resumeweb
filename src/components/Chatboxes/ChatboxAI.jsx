import React, { useState, useEffect } from 'react';
import tempAIpicture from '../../assets/tempAIpicture.png';

const ChatboxAI = ({ text, delay, isLoading }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dots, setDots] = useState(0);

  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setDots((prevDots) => (prevDots + 1) % 4);
      }, 500);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isLoading]);

  useEffect(() => {
    if (!isLoading) {
      setDots(0);
      setCurrentText(text);
    }
  }, [isLoading, text]);

  useEffect(() => {
    if (currentIndex < text.length && isLoading) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text, isLoading]);

  return (
    <div className='ChatboxAI'>
      <img className='chatIMG' src={tempAIpicture} alt="AI Avatar" />
      <span className='chatText'>{isLoading ? `Loading${'.'.repeat(dots)}` : currentText}</span>
    </div>
  );
};

export default ChatboxAI;
