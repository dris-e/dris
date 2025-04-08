import db from "@/lib/db";
import { Response } from "@/lib/response";
import { CreateUser, CreateUserSchema } from "@/types";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const users = await db().user.findMany();

    return Response.success(users);
  } catch (error) {
    return Response.error(error);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { success, error } = CreateUserSchema.safeParse(body);

    if (!success) {
      throw new Error(error.message);
    }

    const user = await db().user.create({ data: body as CreateUser });

    return Response.success(user);
  } catch (error) {
    return Response.error(error);
  }
}
