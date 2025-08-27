export interface LoginTypes {
  email: string;
  password: string;
}
export interface LoginResponseTypes {
  email: string;
  message: string;
  token: string;
  refreshToken: string;
}
