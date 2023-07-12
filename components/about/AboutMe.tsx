import Image from "next/image";
import Main from "../layout/Main";

export default function AboutMe() {
  return (
    <div className="min-h-screen text-center">
      <div className="sm:grid sm:grid-cols-2 mb-8 md:mb-16">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24 flex">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right flex flex-col justify-center align-middle">
            <h2 className="text-gray-500 text-justify mb-4 font-bold">
              Poszukujesz profesjonalnego trenera personalnego, który pomoże Ci
              osiągnąć Twoje cele treningowe?
            </h2>
            <p className="text-gray-500 text-justify mb-4">
              Witaj! Jestem doświadczonym trenerem personalnym, gotowym zapewnić
              Ci najlepsze narzędzia do odniesienia sukcesu. Nie obiecuję
              łatwych rezultatów bez wysiłku, ale mogę zagwarantować, że
              otrzymasz kompleksowe wsparcie na drodze do osiągnięcia swoich
              celów.
            </p>
            <p className="text-gray-500 text-justify mb-4">
              Nie ważne, czy Twoim celem jest utrata wagi, zwiększenie siły czy
              ogólna poprawa sprawności fizycznej - jestem tutaj, aby Ci pomóc.
              Przez cały proces zmiany Twojego życia na lepsze, zajmę się
              wszystkimi aspektami, takimi jak nawyki żywieniowe, regeneracja
              oraz aktywność fizyczna. Wspólnie opracujemy spersonalizowany plan
              treningowy i&nbsp;żywieniowy, dostosowany do Twoich indywidualnych
              potrzeb.
            </p>
            <p className="text-gray-500 text-justify mb-4">
              Ważne jest, abyś miał chęci, zaangażowanie i&nbsp;umiejętność
              słuchania. Jeśli dostarczysz te elementy, ja zajmę się resztą.
              Moje podejście opiera się na prostocie i&nbsp;przyjemności,
              a&nbsp;jednocześnie jest skuteczne i&nbsp;dostosowane do Ciebie.
            </p>
          </div>
        </div>
        <Image
          alt="Ja"
          src="/images/about.webp"
          width={1920}
          height={1080}
          className="h-56 w-full object-cover sm:h-full rounded-md shadow-lg"
        />
      </div>
      <div className="sm:grid sm:grid-cols-2 mb-4">
        <Image
          alt="Ja"
          src="/images/about2.webp"
          width={1080}
          height={1920}
          className="h-56 w-full object-cover sm:h-full rounded-md shadow-lg"
        />
        <div className="p-8 md:p-12 lg:px-16 lg:py-24 flex">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right flex flex-col justify-center align-middle">
            <p className="text-gray-500 text-justify mb-4">
              Zaufaj mojemu doświadczeniu i&nbsp;wiedzy. Moim celem jest nie
              tylko pomóc Ci osiągnąć wymarzoną sylwetkę, ale również nauczyć
              Cię zdrowych nawyków, które utrzymasz na dłuższą metę. Będę Cię
              motywować i&nbsp;inspirować w&nbsp;każdym kroku, abyś czerpał
              radość z&nbsp;procesu transformacji.
            </p>
            <p className="text-gray-500 text-justify mb-4">
              Jeśli jesteś gotowy na zmiany i&nbsp;chcesz skorzystać
              z&nbsp;najlepszej opieki trenera personalnego, skontaktuj się ze
              mną już dziś. Razem przekroczymy Twoje dotychczasowe możliwości
              i&nbsp;osiągniemy wyjątkowe rezultaty. Nie czekaj - zacznij
              inwestować w&nbsp;swoje zdrowie i&nbsp;dobre samopoczucie już
              teraz!
            </p>
            <p className="text-red-700  dark:text-red-300 mt-8 italic font-semibold text-xl">
              „Nie potrzebujesz talentu, żeby ciężko pracować”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
