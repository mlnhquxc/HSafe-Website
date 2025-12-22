import NextImage, { ImageProps } from 'next/image';
import { getImagePath } from '@/lib/image-path';

/**
 * Wrapper for Next.js Image component that automatically adds basePath
 * for static export compatibility (e.g., GitHub Pages subpath)
 */
export default function Image({ src, ...props }: ImageProps) {
  // If src is a string, add basePath
  const imageSrc = typeof src === 'string' ? getImagePath(src) : src;
  
  return <NextImage src={imageSrc} {...props} />;
}

