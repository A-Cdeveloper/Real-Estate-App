/**
 * Extract platform name from URL for aria-label and display purposes
 */
export function getPlatformName(url: string): string {
  if (url.includes("facebook")) return "Facebook";
  if (url.includes("twitter") || url.includes("x.com")) return "Twitter";
  if (url.includes("instagram")) return "Instagram";
  if (url.includes("linkedin")) return "LinkedIn";
  if (url.includes("youtube")) return "YouTube";
  return "Social media";
}

