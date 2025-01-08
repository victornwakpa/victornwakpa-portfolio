import GitHubIcon from "./icons/GitHub";
import LinkedInIcon from "./icons/LinkedIn";
import MailIcon from "./icons/Mail";
import SocialLink from "./SocialLink";

export default function HeroSection() {
  return (
    <div id="hero">
      <div className="container mx-auto w-full px-5 pb-8 pt-16 md:max-w-2xl md:pb-16 md:pt-48 lg:max-w-4xl">
        <img
          className="mb-4 size-12 rounded-full"
          src="/victornwakpa-1.jpeg"
          alt="srgobi logo"
        />
        <div className="flex flex-row gap-x-4 pb-6 text-3xl font-bold text-zinc-900 md:text-4xl lg:gap-x-8 lg:pb-10 lg:text-5xl dark:text-white">
          <h1>Hey, I'm Victorious</h1>

          <a
            href="https://linkedin.com/in/victornwakpa"
            target="_blank"
            rel="noopener"
            className="flex items-center justify-center transition hover:scale-105"
          >
            <span className="relative flex overflow-hidden rounded-full p-[1px]">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
              <div className="inline-flex h-full w-full cursor-pointer items-center justify-center whitespace-nowrap rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-black backdrop-blur-3xl dark:bg-slate-950/90 dark:text-white">
                Available to work
              </div>
            </span>
          </a>
        </div>
        <h2 className="max-w-[750px] text-balance text-xl text-black lg:text-2xl dark:text-white">
          <span>+5 years of experience.</span>
          <span className="text-yellow-800 dark:text-yellow-200">
            {" "}
            Web Developer.
          </span>
          <span className="text-red-800 dark:text-red-200">
            {" "}
            Ebonyi, Nigeria.
          </span>
          <span className="text-sky-800 dark:text-sky-200">
            {" "}
            Specialized in creating user-friendly applications.
          </span>
        </h2>

        <nav className="mt-8 flex flex-wrap gap-4">
          <SocialLink href="https://linkedin.com/in/victornwakpa">
            <LinkedInIcon className="size-4 md:size-6" />
            LinkedIn
          </SocialLink>
          <SocialLink href="https://github.com/victornwakpa">
            <GitHubIcon className="size-4 md:size-6" />
            GitHub
          </SocialLink>
          <SocialLink href="mailto:nwakpavictor@gmail.com">
            <MailIcon className="size-4 md:size-6" />
            nwakpavictor@gmail.com
          </SocialLink>
        </nav>
      </div>
    </div>
  );
}
