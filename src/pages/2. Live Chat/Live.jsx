import ChatboxAI from '../../components/Chatboxes/ChatboxAI';
import ChatboxUser from '../../components/Chatboxes/ChatboxUser';
import React, { useState } from 'react';
import Version from '../../components/Version/Version';
import HeaderComponent from '../../components/Header/HeaderComponent';




const LiveChat = () => {
  const [userInput, setUserInput] = useState('');
  const [responses, setResponses] = useState([{ role: 'assistant', content: "Ask virtual Henry anything. Please note that the requests take a bit of time due to the multiple api calls handled by aws, also message history is not saved so the ai will not remember previous responses (Api cost saving measure). "}]);
  const [isLoading, setIsLoading] = useState(false);
  const [messageCounter, setMessageCounter] = useState(0);

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = async () => {
    try {
      if (!userInput.trim() || isLoading) {
        return;
      }

      setResponses([]);
      setMessageCounter(messageCounter + 1);
      setResponses((prevResponses) => [...prevResponses, { role: 'user', content: userInput }]);

      setUserInput('');
      setIsLoading(true);

      const apiResponse = await fetch('https://0zwmjho6a8.execute-api.eu-north-1.amazonaws.com/prod/question', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: userInput }),
      });

      const data = await apiResponse.json();

      await new Promise((resolve) => setTimeout(resolve, 1000));

      setResponses((prevResponses) => [...prevResponses, { role: 'assistant', content: data.chatresult[0].message.content }]);
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <HeaderComponent></HeaderComponent>

      <div className='InputChatWrapper'>
        {responses.length > 0 && (
          <div>
            {responses.map((message, index) => (
              <div key={index}>
                {message.role === 'user' ? (
                  <ChatboxUser text={message.content} key={`user-${messageCounter} `} />
                ) : (
                  <ChatboxAI text={message.content} key={`assistant-${messageCounter} `}  />
                )}
              </div>
            ))}
          </div>
        )}

        {isLoading && (
          <div>
            <ChatboxAI text='' delay={20} isLoading={isLoading} key={`assistant-${messageCounter} `} />
          </div>
        )}

        <div className='Input'>
          <input
            className='InputField'
            type="text"
            value={userInput}
            onChange={handleUserInput}
            disabled={isLoading} // Disable input field while loading
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSendMessage();
              }
            }}
          />
          <button
            className='InputButton'
            onClick={handleSendMessage}
            disabled={isLoading} // Disable button while loading
          >
            <span className='EnterButton'>&#8629;</span>
          </button>
        </div>
      </div>
      <Version />
    </div>
  );
};

export default LiveChat;