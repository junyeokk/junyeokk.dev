export default function Footer() {
  return (
    <>
      <footer className="text-gray-600 dark:text-white body-font">
        <div className="container mx-auto flex flex-col p-5 items-center">
          <div className="text-sm text-gray-500">
            © 2023 Junhyeok CHAE —
            <a
              href="https://github.com/junyeokk"
              className="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @junyeokk
            </a>
            , built with Next.js
          </div>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start"></span>
        </div>
      </footer>
    </>
  );
}
