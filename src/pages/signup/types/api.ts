export interface SignupTypes {
  email: string;
  password: string;
}
export interface SignupResponseTypes {
  id: number;
  email: string;
}

export interface VerifyCodeTypes {
  email: string;
  code: string;
}

export interface VerifyCodeResponseTypes {
  success: boolean;
  message: string;
}

export interface RequestCodeTypes {
  email: string;
}
export interface RequestCodeResponseTypes {
  success: boolean;
  message: string;
}
