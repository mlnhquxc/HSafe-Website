/**
 * Helper function to add basePath to image paths for static export
 * This ensures images work correctly when deployed on subpaths (e.g., GitHub Pages)
 */
export function getImagePath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
  // If path already starts with basePath, return as is
  if (path.startsWith(basePath)) {
    return path;
  }
  
  // Ensure path starts with /
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  // Return path with basePath
  return basePath ? `${basePath}${cleanPath}` : cleanPath;
}

