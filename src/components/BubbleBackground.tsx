import React from 'react';

interface BubbleBackgroundProps {
  variant?: 'blue' | 'green' | 'purple';
  density?: 'low' | 'medium' | 'high';
  className?: string;
}

const BubbleBackground: React.FC<BubbleBackgroundProps> = ({ 
  variant = 'blue', 
  density = 'medium',
  className = ''
}) => {
  // Determine number of bubbles based on density
  const getBubbleCount = () => {
    switch (density) {
      case 'low': return 15;
      case 'high': return 50;
      case 'medium':
      default: return 30;
    }
  };

  const bubbleCount = getBubbleCount();

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Static bubbles */}
      {[...Array(bubbleCount)].map((_, i) => (
        <div 
          key={`bubble-${i}`}
          className="absolute rounded-full animate-float"
          style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
            width: `${Math.random() * 80 + 30}px`,
            height: `${Math.random() * 80 + 30}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 15 + 10}s`,
            opacity: Math.random() * 0.5 + 0.5,
            filter: 'blur(0.5px)',
            boxShadow: 'inset 5px 5px 15px rgba(255, 255, 255, 0.9), inset -5px -5px 15px rgba(255, 255, 255, 0.5)',
            border: '1px solid rgba(255, 255, 255, 0.8)'
          }}
        ></div>
      ))}

      {/* Soap SVG elements */}
      {[...Array(Math.floor(bubbleCount / 4))].map((_, i) => (
        <div 
          key={`soap-${i}`}
          className="absolute animate-float"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 20 + 15}s`,
            transform: `rotate(${Math.random() * 360}deg) scale(${Math.random() * 0.5 + 0.5})`,
            opacity: Math.random() * 0.5 + 0.4
          }}
        >
          <svg width="60" height="60" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Soap bar body */}
            <rect 
              x="5" 
              y="10" 
              width="50" 
              height="25" 
              rx="8" 
              fill="white" 
              fillOpacity="0.9"
            />
            
            {/* Rounded top surface */}
            <rect 
              x="5" 
              y="5" 
              width="50" 
              height="10" 
              rx="5" 
              fill="white" 
              fillOpacity="0.95"
            />
            
            {/* Shine effect */}
            <ellipse 
              cx="20" 
              cy="10" 
              rx="15" 
              ry="3" 
              fill="white" 
              fillOpacity="1"
            />
            
            {/* Small bubbles */}
            <circle 
              cx="45" 
              cy="25" 
              r="3" 
              fill="white" 
              fillOpacity="0.9"
            />
            <circle 
              cx="50" 
              cy="20" 
              r="2" 
              fill="white" 
              fillOpacity="0.9"
            />
            <circle 
              cx="10" 
              cy="25" 
              r="2.5" 
              fill="white" 
              fillOpacity="0.9"
            />
            
            {/* Text impression */}
            <rect 
              x="15" 
              y="15" 
              width="30" 
              height="3" 
              rx="1.5" 
              fill="rgba(255, 255, 255, 0.7)"
            />
            <rect 
              x="20" 
              y="22" 
              width="20" 
              height="3" 
              rx="1.5" 
              fill="rgba(255, 255, 255, 0.7)"
            />
          </svg>
        </div>
      ))}

      {/* Water droplet SVG elements */}
      {[...Array(Math.floor(bubbleCount / 5))].map((_, i) => (
        <div 
          key={`droplet-${i}`}
          className="absolute animate-float"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 20 + 10}s`,
            transform: `rotate(${Math.random() * 360}deg) scale(${Math.random() * 0.4 + 0.3})`,
            opacity: Math.random() * 0.5 + 0.4
          }}
        >
          <svg width="50" height="60" viewBox="0 0 30 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Water droplet body with gradient */}
            <defs>
              <linearGradient id={`dropletGradient-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="white" stopOpacity="0.95" />
                <stop offset="100%" stopColor="white" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            
            <path 
              d="M15 0C15 0 5 15 5 25C5 33.2843 9.47715 40 15 40C20.5228 40 25 33.2843 25 25C25 15 15 0 15 0Z" 
              fill={`url(#dropletGradient-${i})`} 
              stroke="rgba(255, 255, 255, 0.9)"
              strokeWidth="0.5"
            />
            
            {/* Shine effect */}
            <ellipse 
              cx="12" 
              cy="15" 
              rx="3" 
              ry="5" 
              fill="white" 
              fillOpacity="0.9"
              transform="rotate(-15, 12, 15)"
            />
            
            {/* Small highlight */}
            <circle 
              cx="18" 
              cy="25" 
              r="2" 
              fill="white" 
              fillOpacity="0.8"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default BubbleBackground;