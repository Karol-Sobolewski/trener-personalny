import Image from "next/image";
import Main from "../layout/Main";

export default function WhyMe() {
  const featuresList = [
    {
      icon: "",
      title: "pozbyć się bólu",
      text: "",
    },
    {
      icon: "",
      title: "schudnąć",
      text: "",
    },
    {
      icon: "",
      title: "nabrać masy",
      text: "",
    },
    {
      icon: "",
      title: "poprawić wyniki siłowe",
      text: "",
    },
    {
      icon: "",
      title: "poprawić kondycję",
      text: "",
    },
    {
      icon: "",
      title: "czuć się lepiej w swoim ciele",
      text: "",
    },
  ];
  return (
    <section className="text-gray-900 mt-8 pt-8" id="dlaczegoja">
      <div className="max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 flex flex-col justify-center items-center align-middle">
        <div className="max-w-screen-md flex flex-col justify-center items-center align-middle">
          <h2 className="text-3xl font-bold sm:text-4xl text-center">
            Dlaczego ja?
          </h2>

          <p className="mt-4 text-gray-600 text-justify">
            Całe moje życie to sport. Od 9&nbsp;roku życia grałem
            w&nbsp;koszykówkę dochodząc do&nbsp;poziomu 1&nbsp;ligi.
            W&nbsp;wieku 22&nbsp;lat zacząłem pracę w&nbsp;koszykarskim klubie
            sportowym, gdzie&nbsp;pracowałem z&nbsp;koszykarzami na&nbsp;każdym
            poziomie.
          </p>
          <p className="mt-4 md:mt-8 text-gray-600 text-justify font-bold">
            Aktualnie pracuję z&nbsp;osobami które chcą:
          </p>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-8 md:mt-8 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
          {featuresList.map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="shrink-0 bg-inherit p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-red-700 dark:text-red-200"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                  />
                </svg>
              </span>

              <div>
                <h2 className="text-lg font-bold">{item.title}</h2>

                {/* <p className="mt-1 text-sm text-gray-600 dark:text-gray-100">
                  {item.text}
                </p> */}
              </div>
            </div>
          ))}
        </div>
        <h3 className="text-2xl font-bold sm:text-3xl mt-16 pt-16 text-center">
          Jeżeli jesteś w&nbsp;którejś z&nbsp;tych grup,
          napisz&nbsp;do&nbsp;mnie:
        </h3>

        {/* <Image
          alt="Ja"
          src="/images/whyme.webp"
          width={1920}
          height={1080}
          className="h-56 w-full object-cover sm:h-full  rounded-md shadow-lg mt-16"
        /> */}
      </div>
    </section>
  );
}
