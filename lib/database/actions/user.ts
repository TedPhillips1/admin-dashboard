"use server";

import { CreateUserParams } from "@/lib/types/databaseActions/user";
import connectToDatabase from "..";
import { handleError } from "@/lib/utils";
import User from "../models/user.model";

export const createUser = async (user: CreateUserParams) => {
  try {
    await connectToDatabase();

    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    handleError(error);
  }
};
