interface AvatarProps {
  src?: string | null // The image source
  alt?: string // Alt text for the image
  size?: 'small' | 'large' | 'xl' // Size variants
}

export function Avatar({ src, alt = '', size = 'small' }: AvatarProps) {
  const sizeClasses = {
    small:
      'h-10 w-10 rounded-sm outline outline-2 outline-offset-2 outline-primary object-cover',
    large:
      'w-16 h-16 rounded-lg outline outline-offset-2 outline-primary object-cover',
    xl: 'w-20 h-20 rounded-lg outline outline-offset-2 outline-primary object-cover',
  }

  if (src === undefined || src === null) {
    src =
      'https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg'
  }

  return (
    <img
      src={src}
      alt={alt}
      className={sizeClasses[size]} // Dynamically apply classes based on the size
    />
  )
}
