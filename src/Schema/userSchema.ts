import { Schema } from "mongoose";

import { IUser } from "../Interface/userInterface";

export const userSchema = new Schema<IUser>({
  fullName: { type: String, required: true },
  address: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
});
