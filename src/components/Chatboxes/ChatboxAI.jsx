import React, { useState, useEffect } from 'react';
import tempAIpicture from '../../assets/tempAIpicture.png';

const ChatboxAI = ({ text, delay, isLoading }) => {
  const [currentText, setCurrentText] = useState('');
  const [isLoadingState, setIsLoadingState] = useState(true);
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
      setIsLoadingState(false); // Transition from loading to response
      setCurrentIndex(0);
    }
  }, [isLoading]);

  useEffect(() => {
    if (currentIndex < text.length && !isLoadingState) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 10);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text, isLoadingState]);

  return (
    <div className='ChatboxAI'>
      <img className='chatIMG' src={tempAIpicture} alt="AI Avatar" />
      <span className='chatText'>{isLoading ? `Loading${'.'.repeat(dots)}` : currentText}</span>
    </div>
  );
};

export default ChatboxAI;
