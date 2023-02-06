import Animation from './animation'

export default function Hero() {
    return (
        <>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <Animation></Animation>
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Welcome to junyeokk's Dev Blog!
                    <br className="hidden lg:inline-block"/>
                </h1>
                <p className="mb-8 leading-relaxed">이 페이지는 메인 페이지입니다.</p>
                <div className="flex justify-center">
                    <button
                        className="btn-project">프로젝트 보러가기
                    </button>
                </div>
            </div>
        </>
    );
}