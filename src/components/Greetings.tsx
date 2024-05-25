import { useState } from 'react';

type Props = {
  messages: string[]
}

export default function Greeting({messages=['welcome']}:Props) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button className='bg-lime-400 px-4 py-2 rounded' onClick={() => setGreeting(randomMessage())}>
        New Greeting
      </button>
    </div>
  );
}