import ProfileCheck from "./icons/ProfileCheck";
import Image from "next/image";
import Spacer from "./Spacer";

export default function AboutMe() {
  return (
    <div>
      <Spacer />
      <div
        className="container mx-auto px-5 w-full md:max-w-2xl lg:max-w-4xl"
        id="about-me"
      >
        <h2 className="mb-6 flex items-center gap-x-3 text-3xl font-semibold text-black/90 dark:text-white/90">
          <ProfileCheck className="size-7" />
          About Me
        </h2>
        <article className="flex flex-col items-center justify-center gap-8 md:flex-row">
          <div className="order-2 text-pretty md:order-1 [&>p>strong]:font-mono [&>p>strong]:font-normal [&>p>strong]:text-blue-800 dark:[&>p>strong]:text-blue-400 [&>p]:mb-4">
            <div>
              Hola, soy Alejandro, aunque muchos me conocen como SrGobi.{" "}
              <strong>
                He trabajado en diversos proyectos y colaborado con varias
                empresas
              </strong>
              , siempre con el objetivo de ofrecer soluciones efectivas y de
              calidad en desarrollo web y tecnologías avanzadas.
              <p>
                <strong>
                  Actualmente, me dedico al mundo del freelance, desarrollando
                  e-commerce y aplicaciones web.
                </strong>{" "}
                He creado ESP CUSTOMS LLC, un potente bot de Discord, y mi
                proyecto más reciente es AuraFut.com, una tienda en línea
                dedicada a la venta de camisetas de fútbol. Además, colaboro en
                proyectos comunitarios mientras continúo construyendo mi propia
                marca.
              </p>
            </div>
          </div>
          <div className="order-1  md:order-2 bg-white border-4 border-slate-300">
            <Image src={"/victornwakpa.jpeg"} alt="" width={810} height={1080} className="object-cover" />
          </div>
        </article>
      </div>
    </div>
  );
}
