export interface IUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  passwordHash: string;
  confirmationTokenHash: string | null;
  forgotPasswordTokenHash: string | null;
  forgotPasswordExpiry: Date | null;
  createdAt: Date;
  updatedAt: Date;
}
