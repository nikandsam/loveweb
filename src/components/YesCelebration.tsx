import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

function YesCelebration() {
  const [emailSent, setEmailSent] = useState(false);

  useEffect(() => {
    createConfetti();
    sendEmailNotification();
  }, []);

  const sendEmailNotification = async () => {
    try {
      const templateParams = {
        to_email: 'nitsj24@gmail.com',
        subject: 'She Said YES!!! 💖',
        message: 'She agreed to go on a date with you!',
      };

      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        templateParams,
        'YOUR_PUBLIC_KEY'
      );

      setEmailSent(true);
    } catch (error) {
      console.error('Failed to send email:', error);
    }
  };

  const createConfetti = () => {
    const confettiCount = 100;
    const container = document.getElementById('confetti-container');
    if (!container) return;

    for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = Math.random() * 100 + '%';
      confetti.style.animationDelay = Math.random() * 3 + 's';
      confetti.style.backgroundColor = ['#ff69b4', '#ff1493', '#ff6b9d', '#c71585', '#db7093'][
        Math.floor(Math.random() * 5)
      ];
      container.appendChild(confetti);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-rose-200 to-purple-200 p-6 relative overflow-hidden">
      <div id="confetti-container" className="fixed inset-0 pointer-events-none z-50"></div>

      <div className="max-w-3xl text-center celebration-content z-10">
        <div className="text-9xl mb-8 animate-bounce-big">
          🎉
        </div>

        <h1 className="text-5xl md:text-7xl font-dancing text-rose-600 mb-6 animate-scale-in">
          You just made me
        </h1>
        <h2 className="text-4xl md:text-6xl font-dancing text-rose-700 mb-8 animate-scale-in-delay">
          the happiest person alive ❤️
        </h2>

        <div className="text-7xl mb-8 animate-float">
          💕 🥰 💖
        </div>

        <p className="text-2xl md:text-3xl text-gray-700 font-poppins mb-4 animate-fade-in-delay-3">
          I can't wait for our date!
        </p>

        <div className="mt-12 p-6 bg-white/80 backdrop-blur rounded-2xl shadow-xl animate-fade-in-delay-4">
          <p className="text-lg text-gray-600 font-poppins">
            Get ready for something special... ✨
          </p>
        </div>

        <div className="mt-8 flex justify-center gap-4 text-6xl animate-fade-in-delay-5">
          <span className="animate-bounce delay-0">❤️</span>
          <span className="animate-bounce delay-100">💝</span>
          <span className="animate-bounce delay-200">💗</span>
          <span className="animate-bounce delay-300">💖</span>
          <span className="animate-bounce delay-400">💕</span>
        </div>
      </div>
    </div>
  );
}

export default YesCelebration;
