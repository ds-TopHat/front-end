const TOKEN_KEY_ACCESS = 'token';
const TOKEN_KEY_REFRESH = 'refreshToken';

export const tokenService = {
  saveAccessToken(token: string): void {
    if (typeof window === 'undefined') {
      return;
    }
    localStorage.setItem(TOKEN_KEY_ACCESS, token);
  },

  saveRefreshToken(token: string): void {
    if (typeof window === 'undefined') {
      return;
    }
    localStorage.setItem(TOKEN_KEY_REFRESH, token);
  },

  getAccessToken(): string | null {
    if (typeof window === 'undefined') {
      return null;
    }
    return localStorage.getItem(TOKEN_KEY_ACCESS);
  },

  getRefreshToken(): string | null {
    if (typeof window === 'undefined') {
      return null;
    }
    return localStorage.getItem(TOKEN_KEY_REFRESH);
  },

  removeAccessToken(): void {
    if (typeof window === 'undefined') {
      return;
    }
    localStorage.removeItem(TOKEN_KEY_ACCESS);
  },

  removeRefreshToken(): void {
    if (typeof window === 'undefined') {
      return;
    }
    localStorage.removeItem(TOKEN_KEY_REFRESH);
  },

  hasToken(): boolean {
    const access = this.getAccessToken();
    const refresh = this.getRefreshToken();
    return Boolean(access && access.trim() && refresh && refresh.trim());
  },

  extractTokenFromBearer(bearerToken: string): string {
    if (bearerToken.startsWith('Bearer ')) {
      return bearerToken.slice('Bearer '.length);
    }
    return bearerToken;
  },
};
