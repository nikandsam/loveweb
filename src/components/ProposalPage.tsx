import { useState, useRef } from 'react';

interface ProposalPageProps {
  onYes: () => void;
}

function ProposalPage({ onYes }: ProposalPageProps) {
  const [noButtonPosition, setNoButtonPosition] = useState({ top: 0, left: 0 });
  const [noAttempts, setNoAttempts] = useState(0);
  const [playfulText, setPlayfulText] = useState('');
  const noButtonRef = useRef<HTMLDivElement>(null);

  const playfulMessages = [
    "Are you sure? 😜",
    "That's not the right choice 👀",
    "Try again 😏",
    "Come on, you know you want to say yes 💕",
    "The YES button is calling you 😘",
    "Wrong button! 🙈",
    "Still not the right one 💖",
    "You're making this harder than it needs to be 😅",
  ];

  const moveNoButton = () => {
    const maxX = window.innerWidth - 200;
    const maxY = window.innerHeight - 100;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    setNoButtonPosition({ top: randomY, left: randomX });
    setNoAttempts((prev) => prev + 1);
    setPlayfulText(playfulMessages[Math.min(noAttempts, playfulMessages.length - 1)]);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-rose-100 to-purple-100 p-6 relative overflow-hidden">
      <div className="max-w-3xl text-center fade-in z-10">
        <div className="text-8xl mb-8 animate-bounce">💖</div>

        <h1 className="text-4xl md:text-6xl font-dancing text-rose-600 mb-6 animate-fade-in">
          Will you go out on a date with me?
        </h1>

        <div className="mb-8 text-6xl">
          <span className="inline-block animate-pulse">🌹</span>
          <span className="inline-block animate-pulse delay-100">💐</span>
          <span className="inline-block animate-pulse delay-200">🌺</span>
        </div>

        {playfulText && (
          <p className="text-xl md:text-2xl text-rose-500 font-poppins mb-8 animate-bounce">
            {playfulText}
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center relative">
          <button
            onClick={onYes}
            className="px-12 py-6 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-full text-2xl font-poppins shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 glow-button-strong z-20"
          >
            YES 💕
          </button>

          <div
            ref={noButtonRef}
            className="no-button-container"
            style={
              noAttempts > 0
                ? {
                    position: 'fixed',
                    top: `${noButtonPosition.top}px`,
                    left: `${noButtonPosition.left}px`,
                    transition: 'all 0.3s ease',
                  }
                : {}
            }
          >
            <button
              onMouseEnter={moveNoButton}
              onTouchStart={moveNoButton}
              onClick={moveNoButton}
              className="px-12 py-6 bg-gradient-to-r from-gray-300 to-gray-400 text-gray-700 rounded-full text-2xl font-poppins shadow-lg hover:shadow-xl transition-all duration-300"
            >
              NO 🙈
            </button>
          </div>
        </div>

        <p className="mt-12 text-gray-600 text-lg font-poppins italic animate-fade-in-delay-2">
          Choose wisely... 😊
        </p>
      </div>
    </div>
  );
}

export default ProposalPage;
