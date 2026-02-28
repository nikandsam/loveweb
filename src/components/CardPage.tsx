import { useState } from 'react';

interface CardPageProps {
  onNext: () => void;
}

function CardPage({ onNext }: CardPageProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(true);
    setTimeout(() => {
      onNext();
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-purple-100 to-rose-200 animate-gradient">
      <div
        className={`card-container ${isFlipped ? 'flipped' : ''}`}
        onClick={!isFlipped ? handleCardClick : undefined}
      >
        <div className="card">
          <div className="card-front">
            <div className="card-content">
              <div className="text-6xl mb-4 animate-pulse">💌</div>
              <h1 className="text-4xl font-dancing text-rose-600 mb-2">
                For Someone
              </h1>
              <h2 className="text-3xl font-dancing text-rose-500">
                Very Special
              </h2>
              <p className="text-rose-400 mt-6 text-lg animate-bounce">
                Click to open
              </p>
            </div>
          </div>
          <div className="card-back">
            <div className="card-content">
              <div className="text-6xl mb-4">❤️</div>
              <h2 className="text-3xl font-dancing text-rose-600">
                Opening...
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPage;
