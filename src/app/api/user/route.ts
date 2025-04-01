import db from "@/lib/db";
import { Response } from "@/lib/response";
import { CreateUser, CreateUserSchema } from "@/types";

export async function GET(request: Request, env: Env) {
  try {
    const users = await db(env).user.findMany();

    return Response.success(users);
  } catch (error) {
    return Response.error(error);
  }
}

export async function POST(request: Request, env: Env) {
  try {
    const body = await request.json();

    const { success, error } = CreateUserSchema.safeParse(body);

    if (!success) {
      throw new Error(error.message);
    }

    const user = await db(env).user.create({ data: body as CreateUser });

    return Response.success(user);
  } catch (error) {
    return Response.error(error);
  }
}
