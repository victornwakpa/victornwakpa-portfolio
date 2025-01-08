"use client"


import Image from 'next/image'
import { useState } from 'react'
import StyledLink from "./LinkedButton";
import { TAGS } from "./TagsIcons";
import { IoClose } from "react-icons/io5";
import { MdOutlineArrowOutward } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";

interface Tag {
  name: string
  class: string
  icon: React.ComponentType<{ className?: string }>
}

interface Project {
  title: string
  description: string
  link: string
  image: string
  tags: Tag[]
}

const PROJECTS: Project[] = [
	{
		title: 'Loggworks',
		description: `Loggworks is a platform designed to streamline and enhance business operations for professionals and enterprises. It offers tools such as job management, quoting and invoicing, business profile pages, employee management, omnichannel messaging, live chat, team collaboration, and feedback management. These features aim to increase efficiency and improve customer satisfaction by fitting seamlessly into natural workflows.`,
		link: 'https://loggworks.co.uk/',
		image: '/loggworks.jpg',
		tags: [TAGS.TYPESCRIPT, TAGS.NEXT, TAGS.NODE, TAGS.REACT, TAGS.TAILWIND]
	},
	{
		title: 'Censcer Investment',
		description:
			`Censcer is an online investment platform that brings various investment opportunities into a unified, easy-to-use dashboard. Established in 2019, the platform provides investment options in cryptocurrencies, stocks, and real estate, aiming to support users in growing their finances securely.\n
      The platform offers diverse investment opportunities, allowing users to invest in cryptocurrencies, fractional shares of stocks, and real estate properties. This variety ensures there are options to suit different financial goals. Censcer’s user-friendly dashboard enables investors to track their investments, monitor earnings, and manage transactions seamlessly.`,
		link: 'https://censcer.vercel.app/',
		image: '/censcer.png',
		tags: [TAGS.TAILWIND, TAGS.NODE, TAGS.JAVASCRIPT]
	},
	{
		title: 'Loggworks - Consumers',
		description: `Loggworks is an online platform that connects homeowners with reliable home service providers across the UK. It offers a user-friendly interface for posting jobs and receiving multiple quotes from vetted professionals, ensuring a hassle-free experience for users seeking services such as electricians, childminders, carpenters, cleaners, and more.`,
		link: 'https://loggworks-seven.vercel.app/',
		image: '/loggworks-consumer.png',
		tags: [TAGS.TYPESCRIPT, TAGS.NEXT, TAGS.NODE, TAGS.REACT, TAGS.TAILWIND]
	}
];

const ProjectCard = ({ project }: { project: Project }) => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)
  const [isDescriptionModalOpen, setIsDescriptionModalOpen] = useState(false)

  return (
    <article className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0">
      <div className="w-full md:w-1/2">
        <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-zinc-800 lg:hover:border-zinc-700 lg:hover:bg-zinc-800/50">
          <Image
            alt={`Image of ${project.title}`}
            className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105 cursor-pointer"
            src={project.image}
            width={800}
            height={400}
            onClick={() => setIsImageModalOpen(true)}
          />
        </div>
      </div>

      <div className="w-full md:w-1/2 md:max-w-lg">
        <h3 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
          {project.title}
        </h3>
        <div className="flex flex-wrap mt-2">
          <ul className="flex xl:flex-row flex-wrap mb-2 gap-2">
            {project.tags.map((tag, index) => (
              <li key={index}>
                <span className={`flex gap-x-2 rounded-full text-xs ${tag.class} py-1 px-2`}>
                  <tag.icon className="w-4 h-4" />
                  {tag.name}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-2 text-zinc-700 dark:text-zinc-400">
            {project.description.length > 200 ? (
              <>
                <p>{project.description.slice(0, 200)}...</p>
                <button
                  onClick={() => setIsDescriptionModalOpen(true)}
                  className="flex items-center gap-2 text-zinc-300 group-hover:underline decoration-zinc-500 decoration-dotted underline-offset-4"
                >
                  See more details
                  <MdOutlineArrowOutward />
                </button>
              </>
            ) : (
              <p style={{ whiteSpace: 'pre-line' }}>{project.description}</p>
            )}
          </div>
          <footer className="flex gap-x-4 items-end justify-start mt-4">
            <StyledLink href={project.link}>
              <TbWorldWww className='h-6 w-6' />
              Visit website
            </StyledLink>
          </footer>
        </div>
      </div>

      {/* Image Modal */}
      {isImageModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-2xl">
          <div className="relative w-full max-w-4xl bg-neutral-200 dark:bg-black rounded-lg shadow">
            <button
              onClick={() => setIsImageModalOpen(false)}
              className="absolute top-2 right-2 bg-black/70 border-2 dark:border-white/10 border-zinc-300 rounded-full p-1"
            >
              <IoClose className="w-4 h-4 text-zinc-300 dark:text-white" />
              <span className="sr-only">Close modal</span>
            </button>
            <Image
              src={project.image}
              alt={`Imagen ampliada de ${project.title}`}
              className="object-cover w-full rounded-lg"
              width={1200}
              height={800}
            />
          </div>
        </div>
      )}

      {/* Description Modal */}
      {isDescriptionModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-2xl">
          <div className="relative w-full max-w-2xl bg-neutral-200 dark:bg-black rounded-lg shadow">
            <div className="flex items-center justify-between p-4 md:p-5 border-b dark:border-white/10 border-zinc-300 rounded-t">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Detalls of {project.title}
              </h3>
              <button
                onClick={() => setIsDescriptionModalOpen(false)}
                className="bg-white/5 border dark:border-white/10 border-zinc-300 rounded-full inline-flex justify-center items-center gap-x-2 py-1 px-2 md:py-2 md:px-4 text-xs md:text-base transition hover:scale-110 hover:bg-white/10"
              >
                <IoClose className="w-4 h-4 text-black/90 dark:text-white/90" />
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-4 md:p-5 space-y-4">
              <p style={{ whiteSpace: 'pre-line' }}>{project.description}</p>
            </div>
            <div className="flex items-center p-4 md:p-5 border-t dark:border-white/10 border-zinc-300 rounded-b">
              <button
                onClick={() => setIsDescriptionModalOpen(false)}
                className="bg-white/5 border dark:border-white/10 border-zinc-300 rounded-full inline-flex justify-center items-center gap-x-2 py-1 px-2 md:py-2 md:px-4 text-xs md:text-base transition hover:scale-110 hover:bg-white/10"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </article>
  )
}

const ProjectList = () => {
  return (
    <div className="flex flex-col gap-y-16">
      {PROJECTS.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  )
}

export default ProjectList