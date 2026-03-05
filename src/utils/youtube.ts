/**
 * YouTube utility functions
 */

/**
 * Extract YouTube video ID from URL or return ID directly
 * Supports various YouTube URL formats:
 * - https://www.youtube.com/watch?v=VIDEO_ID
 * - https://youtu.be/VIDEO_ID
 * - https://www.youtube.com/embed/VIDEO_ID
 */
export function extractYouTubeId(input: string): string {
  if (!input) return '';
  // If it's already just an ID (no slashes or dots), return as-is
  if (!/[\/\.]/.test(input)) return input;
  // Try to extract ID from various YouTube URL formats
  const match = input.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/
  );
  if (match) return match[1];
  return input;
}
