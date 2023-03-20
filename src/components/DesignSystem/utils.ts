/**
 * Converts bytes to megabytes
 * @param bytes
 * @param round optional param to check if return value should be rounded
 */
export function bytesToMegabytes(bytes: number, round?: boolean): number {
    const megabytes = bytes / (1024 * 1024);
    return round ? Number(megabytes.toFixed(2)) : megabytes;
}
