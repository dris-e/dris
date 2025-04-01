import { NextResponse } from "next/server";
import { ZodError } from "zod";

export class Response {
  private static isZodError = (obj: unknown): obj is ZodError => {
    return obj instanceof ZodError && Array.isArray((obj as ZodError).issues);
  };

  private static mapZodError = (error: ZodError) => {
    return error.issues.map((issue) => ({
      field: issue.path.join("."),
      message: issue.message,
    }));
  };

  static success<T>(data: T, statusCode = 200) {
    return NextResponse.json(
      {
        success: true,
        data,
      },
      { status: statusCode }
    );
  }

  static error(error: unknown, statusCode = 400) {
    return NextResponse.json(
      {
        success: false,
        error: this.isZodError(error) ? this.mapZodError(error) : error,
      },
      { status: statusCode }
    );
  }
}
