/**
 * Generic Action State type for server actions
 * TData - data type for error case
 * TSuccessData - data type for success case (spread into success object)
 */
export type ActionState<
  TData = unknown,
  TSuccessData = Record<string, unknown>,
> =
  | ({
      success: true;
    } & TSuccessData)
  | {
      success: false;
      errors?: Record<string, string[]>;
      error?: string;
      data?: TData;
    };
