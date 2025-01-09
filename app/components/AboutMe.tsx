import ProfileCheck from "./icons/ProfileCheck";
import Image from "next/image";
import Spacer from "./Spacer";

export default function AboutMe() {
  return (
    <div>
      <Spacer />
      <div
        className="container mx-auto w-full px-5 md:max-w-2xl lg:max-w-4xl"
        id="about-me"
      >
        <h2 className="mb-6 flex items-center gap-x-3 text-3xl font-semibold text-black/90 dark:text-white/90">
          <ProfileCheck className="size-7" />
          About Me
        </h2>
        <article className="flex flex-col items-center justify-center gap-8 md:flex-row">
          <div className="order-2 text-pretty md:order-1 [&>p>strong]:font-mono [&>p>strong]:font-normal [&>p>strong]:text-blue-800 dark:[&>p>strong]:text-blue-400 [&>p]:mb-4">
            <div className="space-y-4">
              <p>
                Hi! I am Victor Nwakpa, but most people call me Victorious. I am
                a passionate web developer and a graduate of Computer Science.
                With over 5 years of experience building innovative and
                user-friendly web applications, I specialize in crafting
                scalable and efficient solutions using modern web technologies.
              </p>
              <p>
                My journey in tech began during my university days, where I
                developed a deep interest in solving problems through code.
                Since then, I’ve worked on various projects, including creating
                a comprehensive welcome page for Loggworks—a platform that
                connects homeowners with service providers.
              </p>
              <p>
                I’m highly skilled in <strong>Next.js, React, TypeScript, and Tailwind
                CSS</strong>. When I’m not coding, I enjoy sharing my knowledge and
                inspiring others in the tech community. I am currently exploring
                content creation on platforms like YouTube, Instagram, and
                LinkedIn to provide valuable insights to developers.
              </p>
              <p>
                I’m always looking for opportunities to work on exciting
                projects or collaborate with like-minded individuals. Let’s
                build something amazing together!
              </p>
            </div>
          </div>
          <div className="order-1 border-4 border-slate-300 h-full w bg-white md:order-2">
            <Image
              src={"/victornwakpa.jpeg"}
              alt=""
              width={810}
              height={1080}
              className="object-cover"
            />
          </div>
        </article>
      </div>
    </div>
  );
}
