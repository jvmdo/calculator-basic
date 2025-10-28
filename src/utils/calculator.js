import { evaluate } from "mathjs";

export function safeEvaluate(expression) {
  const result = evaluate(expression);
  const errorObj = {
    success: false,
    error: "Division by zero not allowed!",
  };

  if (!Number.isFinite(result) && !Number.isNaN(result)) {
    // This case handles Infinity and -Infinity
    return errorObj;
  } else if (Number.isNaN(result)) {
    // This case handles NaN (e.g., 0/0)
    return errorObj;
  }

  return { success: true, data: result.toString() };
}
