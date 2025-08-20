import { routePath } from '@routes/routePath.ts';

import { tokenService } from './tokenService.ts';

import { appConfig } from '@/shared/config/appConfig.ts';

export const authService = {
  isAuthenticated(): boolean {
    if (!appConfig.auth.isEnabled) {
      return true;
    }

    return tokenService.hasToken();
  },

  redirectToLogin(): void {
    if (typeof window === 'undefined') {
      return;
    }

    window.location.href = routePath.LOGIN;
  },

  logout(): void {
    tokenService.removeAccessToken();
    tokenService.removeRefreshToken();
    window.location.href = routePath.LOGIN || '/';
  },
};
