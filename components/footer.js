export default function Footer() {
  return (
    <>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <div className="text-sm text-gray-500 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2023 Junhyeok CHAE —
            <a
              href="https://github.com/junyeokk"
              className="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @junyeokk
            </a>
          </div>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start"></span>
        </div>
      </footer>
    </>
  );
}
