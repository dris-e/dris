import db from "@/lib/db";
import { Response } from "@/lib/response";
import { UpdateUser, UpdateUserSchema } from "@/types";

export async function GET(request: Request, env: Env, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    const user = await db(env).user.findUnique({ where: { id } });

    if (!user) {
      throw new Error("User not found");
    }

    return Response.success(user);
  } catch (error) {
    return Response.error(error);
  }
}

export async function PATCH(request: Request, env: Env, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const body = await request.json();

    const { success, error } = UpdateUserSchema.safeParse(body);

    if (!success) {
      return Response.error(error);
    }

    const user = await db(env).user.update({ where: { id }, data: body as UpdateUser });

    if (!user) {
      throw new Error("User not found");
    }

    return Response.success(user);
  } catch (error) {
    return Response.error(error);
  }
}

export async function DELETE(request: Request, env: Env, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    await db(env).user.delete({ where: { id } });

    return Response.success({ message: "User deleted" });
  } catch (error) {
    return Response.error(error);
  }
}
