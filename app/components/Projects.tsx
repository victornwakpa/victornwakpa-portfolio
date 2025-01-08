import CodeIcon from "./icons/Code";
import ProjectList from "./ProjectList";
import Spacer from "./Spacer";

export default function Projects() {
  return (
    <div
      className="container mx-auto w-full px-5 md:max-w-2xl lg:max-w-4xl"
      id="projects"
    >
      <Spacer />
      <h2 className="mb-6 flex items-center gap-x-3 text-3xl font-semibold text-black/90 dark:text-white/90">
        <CodeIcon className="size-7" />
        Featured Projects
      </h2>
      <ProjectList />
    </div>
  );
}
