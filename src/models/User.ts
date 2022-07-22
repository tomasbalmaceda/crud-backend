import { model } from "mongoose";

import { IUser } from "../Interface/userInterface";

import { userSchema } from "../Schema/userSchema";

export const User = model<IUser>("User", userSchema);
