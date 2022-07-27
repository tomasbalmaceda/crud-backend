import { model, Schema } from "mongoose";

import { IUser } from "../interface/userInterface";

export const userSchema = new Schema<IUser>({
  fullName: { type: String, required: true },
  address: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
});

export const User = model<IUser>("User", userSchema);
