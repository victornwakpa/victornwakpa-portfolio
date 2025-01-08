import Briefcase from "./icons/Briefcase";
import Spacer from "./Spacer";
import Timeline from "./Timeline";

export default function Experience() {
  return (
    <div
      className="container px-5 mx-auto w-full md:max-w-2xl lg:max-w-4xl"
      id="experience"
    >
      <Spacer />
      <h2 className="mb-6 flex items-center gap-x-3 text-3xl font-semibold  text-black/90 dark:text-white/90">
        <Briefcase className="size-7" />
        Work Experience
      </h2>
      <Timeline />
    </div>
  );
}
