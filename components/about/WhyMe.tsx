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
    <section className="text-gray-900 relative">
      <div className="absolute -top-12 left-0" id="dlaczegoja" />
      <div className="max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 flex flex-col justify-center items-center align-middle">
        <div className="max-w-screen-md flex flex-col justify-center items-center align-middle">
          <h2 className="text-3xl font-bold sm:text-4xl text-center">
            Dlaczego ja?
          </h2>
          <p className="mt-4 text-gray-600 text-justify">
            Przez większość mojego życia sport towarzyszył mi na każdym kroku.
            Już od dziewiątego roku życia oddawałem się grze w&nbsp;koszykówkę
            z&nbsp;niesłabnącym zapałem i&nbsp;determinacją. Moje umiejętności
            rozwijały się w&nbsp;szybkim tempie, co zaowocowało osiągnięciem
            poziomu profesjonalnej ligi koszykarskiej.
          </p>
          <p className="mt-4 text-gray-600 text-justify">
            W&nbsp;wieku 22&nbsp;lat otworzyły się przed mną nowe możliwości,
            kiedy to dostałem szansę pracy w&nbsp;renomowanym klubie sportowym.
            Moja rola w&nbsp;tym zespole polegała na pracy z&nbsp;koszykarzami
            na różnych etapach ich kariery. Byłem odpowiedzialny rozwijanie ich
            zdolności motorycznych jak siła czy kondycja. Miałem okazję
            współpracować zarówno z&nbsp;utalentowanymi debiutantami, jak
            i&nbsp;doświadczonymi zawodnikami.
          </p>
          <p className="mt-4 text-gray-600 text-justify">
            W&nbsp;tej roli zdobyłem nieocenione doświadczenie, które pomogło mi
            pogłębić moją wiedzę na temat treningu sportowego oraz podejścia do
            procesu treningowego. Praca z&nbsp;koszykarzami na różnych poziomach
            umożliwiła mi lepsze zrozumienie ich indywidualnych potrzeb
            i&nbsp;wyzwań, a&nbsp;także umocniła moje umiejętności
            komunikacyjne.
          </p>
          <p className="mt-4 text-gray-600 text-justify">
            Sport nie tylko stanowi moje życie, ale również pasję, która napędza
            mnie do ciągłego rozwoju. Dzięki mojej dotychczasowej drodze mogłem
            zaobserwować, jak wielki wpływ ma sport na rozwój jednostki, zarówno
            fizyczny, jak i&nbsp;mentalny. Jestem zdecydowany kontynuować moją
            pracę w&nbsp;świecie sportu i&nbsp;pomagać innym osiągać swoje cele
            sportowe.
          </p>
          <p className="mt-4 md:mt-8 text-xl text-justify font-bold">
            Aktualnie pracuję z&nbsp;osobami, które&nbsp;chcą:
          </p>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-2 md:gap-8 md:mt-8 md:grid-cols-2  lg:grid-cols-3">
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
                <h2 className="text-md font-bold">{item.title}</h2>

                {/* <p className="mt-1 text-sm text-gray-600 dark:text-gray-100">
                  {item.text}
                </p> */}
              </div>
            </div>
          ))}
        </div>
        <h3 className="text-2xl font-bold sm:text-3xl mt-8 pt-8 md:mt-16 md:pt-16 text-center">
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
