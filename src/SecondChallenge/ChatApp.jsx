import { useState, useRef } from 'react';

const ChatApp = () => {
  const [text, setText] = useState('');
  const textRef = useRef('');

  const handleChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    textRef.current = newText;
  };

  const handleSend = () => {
    setTimeout(() => {
      alert('Sending: ' + textRef.current);
    }, 2000);
  };

  return (
    <div style={{display:"flex", justifyContent:"center", marginTop:40, gap:20}}>
      <input
        value={text}
        onChange={handleChange}
      />
      <button
        onClick={handleSend}>
        Send
      </button>
    </div>
  );
};

export default ChatApp;