import React from 'react';
import { Link } from 'react-router-dom';
import VardhaLogo from '../assets/VardhaLogo';
import { Send } from 'lucide-react';

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="header-left">
          <VardhaLogo />
        </Link>
        <div className="header-right">
          <Link to="/apply" className="btn-apply-now">
            <Send size={14} />
            <span>Vacancy</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
