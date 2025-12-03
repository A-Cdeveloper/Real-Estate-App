/**
 * Validate a file for upload
 * @param file - The file to validate
 * @param allowedTypes - Array of allowed MIME types
 * @param maxFileSize - Maximum file size in bytes
 * @returns Error message if validation fails, null if valid
 */
export const validateFile = (
  file: File,
  allowedTypes: readonly string[],
  maxFileSize: number
): string | null => {
  if (!allowedTypes.includes(file.type)) {
    return "Only PNG, JPEG, JPG, SVG, and WebP images are allowed";
  }
  if (file.size > maxFileSize) {
    return `File size must be less than ${Math.round(maxFileSize / 1024 / 1024)}MB`;
  }
  return null;
};
