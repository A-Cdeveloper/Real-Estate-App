import { ZodError } from "zod";

/**
 * Formats Zod validation errors into a Record<string, string[]> format
 * suitable for form error handling
 */
export function formatZodErrors(error: ZodError): Record<string, string[]> {
  const errors: Record<string, string[]> = {};
  
  error.issues.forEach((issue) => {
    const field = issue.path[0] as string;
    if (!errors[field]) {
      errors[field] = [];
    }
    errors[field].push(issue.message);
  });
  
  return errors;
}

