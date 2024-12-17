export interface User {
  id: string;
  username: string;
  email: string;
  points: number;
  avatar?: string;
  createdAt: string;
}

export interface LoginForm {
  email: string;
  password: string;
}

export interface RegisterForm extends LoginForm {
  username: string;
  confirmPassword: string;
}