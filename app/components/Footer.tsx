import Link from "next/link";
import Spacer from "./Spacer";

export default function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <div>
      <Spacer />
      <footer className="m-4 mx-auto mb-10 w-full rounded-lg bg-black/5 shadow backdrop-blur-lg xl:w-[1120px] dark:bg-white/5">
        <div className="mx-auto w-full max-w-screen-xl flex justify-center p-4">
          <span className="text-sm text-blue-800/90 dark:text-blue-200/90">
            © {currentYear} {" "}
            Made with ❤️ by{" "}
            <Link href="/" className="hover:underline">
              Victorious
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
}
