import { User } from "../models/User";
import { Request, Response } from "express";

const UserController = {
  getUsers: async (req: Request, res: Response) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  },

  getUser: async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const user = await User.findOne({ _id: id });

      if (!user) {
        res.status(404).json({ error: "User not found" });
        return;
      }

      res.status(201).json(user);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  },

  createUser: async (req: Request, res: Response) => {
    const { fullName, address, phoneNumber, email } = req.body;

    if (!fullName) {
      res.status(422).json({ error: "Name is required" });
      return;
    }

    if (!address) {
      res.status(422).json({ error: "Address is required" });
      return;
    }

    if (!phoneNumber) {
      res.status(422).json({ error: "Phone is required" });
      return;
    }
    if (!email) {
      res.status(422).json({ error: "Email is required" });
      return;
    }

    const user = {
      fullName: fullName,
      address: address,
      phoneNumber: phoneNumber,
      email: email,
    };

    try {
      await User.create(user);
      res.status(201).json({ message: "User successfully registered" });
    } catch (err) {
      res.status(500).json({ error: err });
    }
  },

  updateUser: async (req: Request, res: Response) => {
    const { id } = req.params;
    const { fullName, address, phoneNumber, email } = req.body;

    const user = {
      fullName: fullName,
      address: address,
      phoneNumber: phoneNumber,
      email: email,
    };

    try {
      const updatedUser = await User.updateOne({ _id: id }, user);

      if (updatedUser.matchedCount === 0) {
        res.status(404).json({ error: "User not found" });
        return;
      }

      res.status(200).json({ message: "User successfully updated" });
    } catch (err) {
      res.status(500).json({ error: err });
    }
  },

  deleteUser: async (req: Request, res: Response) => {
    const { id } = req.params;

    const user = await User.findOne({ _id: id });

    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    try {
      await User.deleteOne({ _id: id });
      res.status(200).json({ message: "User successfully deleted" });
    } catch (err) {
      res.status(500).json({ error: err });
    }
  },
};

export default UserController;
