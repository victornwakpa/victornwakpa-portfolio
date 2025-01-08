import { SVGProps } from 'react'

// First define the base icon type
interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string
}

// Import all icons
import DiscordIcon from './icons/Discord'
import GitHubIcon from './icons/GitHub'
import NextJSIcon from './icons/NextJS'
import NodeJSIcon from './icons/NodeJS'
import ReactIcon from './icons/React'
import TailwindIcon from './icons/Tailwind'
import TypeScriptIcon from './icons/TypeScript'
import Javascript from './icons/JavaScript'

// Define the structure for a tag
type Tag = {
  name: string
  class: string
  icon: React.FC<IconProps>
}

// Define the TAGS object directly with its type
const TAGS = {
  NEXT: {
    name: 'Next.js',
    class: 'bg-black text-white',
    icon: NextJSIcon
  },
  REACT: {
    name: 'React',
    class: 'bg-[#00D8FF1a] dark:text-white text-black',
    icon: ReactIcon
  },
  TAILWIND: {
    name: 'Tailwind',
    class: 'bg-[#003159] text-white',
    icon: TailwindIcon
  },
  DISCORD: {
    name: 'Discord',
    class: 'bg-[#5865F2] text-white',
    icon: DiscordIcon
  },
  TYPESCRIPT: {
    name: 'TypeScript',
    class: 'bg-[#3178C655] dark:text-white text-black',
    icon: TypeScriptIcon
  },
  NODE: {
    name: 'Node.js',
    class: 'bg-[#215732] text-white',
    icon: NodeJSIcon
  },
  GITHUB: {
    name: 'GitHub',
    class: 'bg-[#181717] text-white',
    icon: GitHubIcon
  },
  JAVASCRIPT: {
    name: 'Javascript',
    class: 'bg-[#181600] text-white',
    icon: Javascript
  }
} as const

// Create a type from the TAGS object
type TagsType = typeof TAGS

// Export both the type and the object
export type { TagsType as Tags, Tag }
export { TAGS }