import Link from "next/link";
import DarkModeToggleButton from "./dark-mode-toggle-button";

export default function Header() {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-row items-center font-medium">
          <div className="flex title-font items-center text-gray-900 mb-0">
            <Link className="text-xl" href="/">
              junyeokk.dev
            </Link>
          </div>
          <nav className="ml-auto flex flex-wrap items-center text-base justify-center">
            <Link className="mr-5 hover:text-gray-900" href="/about-me">
              about
            </Link>
            <Link className="mr-5 hover:text-gray-900" href="/projects">
              projects
            </Link>
            <Link className="mr-5 hover:text-gray-900" href="/posts">
              posts
            </Link>
            <Link
              className="mr-5 hover:text-gray-900"
              href="https://open.kakao.com/o/saOFI3Ke"
            >
              contact
            </Link>
          </nav>
          <DarkModeToggleButton />
        </div>
      </header>
    </>
  );
}
