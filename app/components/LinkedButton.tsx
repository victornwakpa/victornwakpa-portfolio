// components/StyledLink.tsx
import { ReactNode } from 'react'

interface StyledLinkProps {
  href: string
  children: ReactNode
  className?: string
}

const StyledLink = ({ href, children, className = '' }: StyledLinkProps) => {
  return (
    <a
      href={href}
      className={`
        bg-white/5
        border dark:border-white/10 border-zinc-300
        rounded-full
        inline-flex justify-center items-center gap-x-2
        py-1 px-2 md:py-2 md:px-4
        text-xs md:text-base
        transition
        hover:scale-110 hover:bg-white/10
        ${className}
      `}
    >
      {children}
    </a>
  )
}

export default StyledLink