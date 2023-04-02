// signup

export interface ISignupRequest {
  fullName: string;
  birthDate: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ISignupResponse {
  token: string;
}

//login

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ILoginResponse {
  token: string;
}

// roles

export interface IRolesResponse {
  isTeacher: boolean;
  isStudent: boolean;
  isAdmin: boolean;
}

// profile

export interface IProfileResponse {
  fullName: string;
  email: string;
  birthDate: string;
}
