import { ReactNode } from 'react'

interface SocialPillProps {
  href: string
  children: ReactNode
  className?: string
}

const SocialLink = ({ href, children, className = '' }: SocialPillProps) => {
  return (
    <a
      className={`
        bg-zinc-500/5 dark:bg-white/5
        border border-black/10 dark:border-white/10 rounded-full
        flex justify-center items-center gap-x-2
        py-2 px-4
        transition
        hover:scale-110 hover:bg-zinc-500/10 dark:hover:bg-white/10
        ${className}
      `}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}

export default SocialLink