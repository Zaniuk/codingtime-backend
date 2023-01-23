import mongoose from 'mongoose';

export enum Role {
  ADMIN = 'admin',
  USER = 'user',
}

export enum Status {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

export interface UserI extends mongoose.Document {
  name: string;
  email: string;
  password: string;
  role: Role;
  status: Status;
}

export interface CreateUserI {
  name: string;
  email: string;
  password: string;
  role?: Role;
  status?: Status;
}

export type UpdateUserI = Partial<CreateUserI>;
