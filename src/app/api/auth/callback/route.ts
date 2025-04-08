import { Response } from "@/lib/response";
// import { createUser } from "@/services/clerk";
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const user = await currentUser();
    if (!user) throw new Error("User not found!", { cause: 401 });

    // await createUser(user);

    return Response.success(user);
  } catch (error) {
    return Response.error(error);
  }
}
