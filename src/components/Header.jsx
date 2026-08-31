import React from 'react';
import VardhaLogo from '../assets/VardhaLogo';
import { ShieldCheck, ExternalLink } from 'lucide-react';

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="https://web.vardha.live" target="_blank" rel="noopener noreferrer" className="header-left">
          <VardhaLogo />
        </a>
        <div className="header-right">

          <div className="header-nav-badge">
            <ShieldCheck size={14} />
            <span>Candidate Selection</span>
          </div>
        </div>
      </div>
    </header>
  );
}
