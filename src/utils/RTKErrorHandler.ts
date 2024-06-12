import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

/* A reference example to an error object */
export interface AppError {
  errorField?: string;
  message: string;
}

/**
 * Type predicate to narrow an unknown error to `FetchBaseQueryError`
 */
export function isFetchBaseQueryError(
  error: unknown,
): error is FetchBaseQueryError {
  return typeof error === "object" && error != null && "status" in error;
}

/**
 * Type predicate to narrow an unknown error to an object with a string 'message' property
 */
export function isErrorWithMessage(
  error: unknown,
): error is { message: string } {
  return (
    typeof error === "object" &&
    error != null &&
    "message" in error &&
    typeof (error as any).message === "string"
  );
}

export function extractRTKError(error: unknown): AppError {
  if (isFetchBaseQueryError(error)) {
    try {
      const err = "error" in error ? error.error : JSON.stringify(error.data);
      const parsedErr = JSON.parse(err);

      return {
        errorField: parsedErr?.errors?.errorField,
        message: parsedErr?.errors?.message || "Something went wrong.",
      };
    } catch (e) {
      return {
        message: "Something went wrong.",
      };
    }
  } else if (isErrorWithMessage(error)) {
    return {
      message: error.message,
    };
  } else {
    return {
      message: "Something went wrong.",
    };
  }
}
