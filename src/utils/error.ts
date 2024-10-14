
export interface CustomError extends Error {
    response?: {
        data?: {
            message?: string;
        };
    };
}

export function getErrorMessage(error: unknown): string {
    const customError = error as CustomError;
    return customError?.response?.data?.message || "Error desconocido";
}