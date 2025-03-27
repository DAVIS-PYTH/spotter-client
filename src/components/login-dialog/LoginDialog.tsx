import React from 'react';
import { RiGoogleFill } from '@remixicon/react';
import { useNavigate } from 'react-router-dom';
import GradientButton from '@components/gradient-button';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../dialog';
import Logo from '@assets/icons/Logo';

interface LoginDialogProps {
  trigger: React.ReactNode;
}

const LoginDialog: React.FC<LoginDialogProps> = ({ trigger }) => {
  const navigate = useNavigate();

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="border-white/10">
        <div className="flex flex-col items-center gap-2">
          <div
            className="flex size-14 shrink-0 items-center justify-center rounded-full border border-white/20"
            aria-hidden="true"
          >
            <Logo />
          </div>
          <DialogHeader>
            <DialogTitle className="sm:text-center">
              Welcome to Spotter
            </DialogTitle>
            <DialogDescription className="sm:text-center">
              Sign in to start managing your fleet
            </DialogDescription>
          </DialogHeader>
        </div>

        <form className="space-y-5">
          <div className="space-y-4">
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <GradientButton
            type="button"
            className="w-full"
            onClick={() => navigate('/onboarding')}
          >
            Continue with Email
          </GradientButton>
        </form>

        <div className="flex items-center gap-3 before:h-px before:flex-1 before:bg-white/10 after:h-px after:flex-1 after:bg-white/10">
          <span className="text-xs text-gray-400">Or continue with</span>
        </div>

        <GradientButton
          variant="variant"
          className="flex w-full items-center justify-center gap-2"
        >
          <RiGoogleFill className="h-5 w-5" />
          Continue with Google
        </GradientButton>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
