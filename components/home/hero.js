import Animation from "./animation";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div
        className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요.<br/> 🐻 컷을 하면, 🧸
          <br className="hidden lg:inline-block" />
          <br /> 식빵이 입니다.
        </h1>
        <p className="mb-8 leading-relaxed">

          모량 풍부~
          <br/>
          애교만땅~
          <br/>
          꼬리꼽터~
          <br/>
          이쁜외모~
          <br/>
          앙증맞은 체형~
          <br/>
          짧고~둥근~머즐~
          <br/>
          뽀뽀귀신~
          <br/>
          똥꼬~발랄~
          <br/>
          충분한 모유수유~
          <br/>
          애교가 많습니다♧
        </p>
        <div className="flex justify-center">
          <Link href={"/projects"}>
            <button
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              식빵이 보러가기
            </button>
          </Link>
        </div>
      </div>
      <div className={"lg: max-w-lg lg:w-full md:w-1/2 w-5/6"}>
        <Animation />
      </div>
    </>
  );
}
