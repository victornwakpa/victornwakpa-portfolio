import Spacer from "./Spacer";

export default function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <div>
      <Spacer />
      <footer className="m-4 mx-auto mb-10 w-full rounded-lg bg-black/5 shadow backdrop-blur-lg xl:w-[1120px] dark:bg-white/5">
        <div className="mx-auto w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-blue-800/90 sm:text-center dark:text-blue-200/90">
            © 2023 - {currentYear}
            Made with ❤️ by{" "}
            <a href="https://srgobi.com/" className="hover:underline">
              SrGobi
            </a>
          </span>
          <ul className="mt-3 flex flex-wrap items-center text-sm font-medium sm:mt-0 dark:text-white/90">
            <li>
              <a href="/#sobre-mi" className="me-4 hover:underline md:me-6">
                Sobre mí
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
