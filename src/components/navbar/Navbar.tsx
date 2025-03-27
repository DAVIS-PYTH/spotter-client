import React from 'react';
import Logo from '@assets/icons/Logo';
import GradientButton from '@components/gradient-button';
import LoginDialog from '@components/login-dialog';
import { Link } from 'react-router-dom';
import { PAGES } from '@routes';

interface INavbar {
  withoutCta?: boolean;
}

const Navbar: React.FC<INavbar> = ({ withoutCta = false }) => {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to={PAGES.HOME.route} className="flex items-center">
            <Logo />
            <span className="ml-2 text-xl font-bold">Spotter</span>
          </Link>
          {!withoutCta && (
            <div>
              <LoginDialog
                trigger={
                  <GradientButton variant="variant">Get Started</GradientButton>
                }
              />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
