export interface IRolesResponse {
  isTeacher: boolean;
  isStudent: boolean;
  isAdmin: boolean;
}

export interface IProfileResponse {
  fullName: string;
  email: string;
  birthDate: string;
}

export type IProfileEditRequest = Omit<IProfileResponse, "email">;
