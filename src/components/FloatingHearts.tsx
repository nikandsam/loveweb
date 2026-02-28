function FloatingHearts() {
  const hearts = Array.from({ length: 15 }, (_, i) => i);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((i) => (
        <div
          key={i}
          className="floating-heart"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${15 + Math.random() * 10}s`,
            fontSize: `${20 + Math.random() * 30}px`,
            opacity: 0.3 + Math.random() * 0.4,
          }}
        >
          {['❤️', '💕', '💖', '💗', '💝'][Math.floor(Math.random() * 5)]}
        </div>
      ))}
    </div>
  );
}

export default FloatingHearts;
