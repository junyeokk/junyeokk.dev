import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="lg:w-full max-w-xs mb-10 md:mb-0">
        <img src="/images/junyeokk.jpg" alt="junyeokk" />
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요! 😆 개발자를 꿈꾸는 대학생 채준혁입니다.
          <br className="hidden lg:inline-block" />
        </h1>
        <p className="mb-8 leading-relaxed">
          경북대학교에 재학중이며, 현재(2023.02) 3학년입니다. <br />
          react와 next.js를 공부하며 개인 블로그인 junyeokk.dev를 풀스택
          개발하고 있습니다.
        </p>
        <div className="flex justify-center"></div>
      </div>
    </>
  );
}
