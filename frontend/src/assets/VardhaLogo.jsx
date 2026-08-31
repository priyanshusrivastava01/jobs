import React from 'react';
import logoSrc from './logo.png';

export const VardhaLogo = ({ variant = "default" }) => {
  const isDark = variant === "light";

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', userSelect: 'none', flexShrink: 0 }}>
      <img
        src={logoSrc}
        alt="Vardha Links"
        className="header-logo-img"
        style={{
          height: '40px',
          width: 'auto',
          objectFit: 'contain',
          filter: isDark ? 'brightness(0) invert(1)' : 'none',
        }}
      />
    </div>
  );
};

export default VardhaLogo;
