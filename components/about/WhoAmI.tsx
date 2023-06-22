import Image from "next/image";
import Main from "../layout/Main";

export default function WhoAmI() {
  return (
    // <div className="flex items-center justify-center">
    <div className="min-h-screen sm:grid sm:grid-cols-2">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24 flex">
        <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right flex flex-col justify-center align-middle">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
            Czym różnię się od innych?
          </h2>

          <p className="text-gray-500 dark:text-gray-100">
            <br /> Ja NIE gwarantuję Ci świetnych wyników, w&nbsp;prosty
            i&nbsp;przyjemny sposób bez zaangażowania i&nbsp;bez wysiłku.
            Gwarantuję Ci za to najlepsze możliwe narzędzia do osiągnięcia
            Twojego celu. Bez&nbsp;względu na to czy chcesz schudnąć, poprawić
            wyniki siłowe czy zbudować ogólną sprawność, pomogę Ci przejść przez
            cały proces zmiany Twojego życia na lepsze. Od&nbsp;nawyków
            żywieniowych, przez regenerację, po aktywność fizyczną. Jedyne czego
            potrzebujesz to chęci, zaangażowanie i&nbsp;dokładne słuchanie,
            resztą zajmę się ja.
          </p>
          {/* <span className="font-bold text-red-500"></span> */}
          <p className="text-gray-500 md:mt-4 dark:text-gray-100 italic font-semibold text-xl">
            „Nie potrzebujesz talentu, żeby ciężko pracować”
          </p>
        </div>
      </div>
      <Image
        alt="Ja"
        src="/images/about.webp"
        width={1920}
        height={1080}
        className="h-56 w-full object-cover sm:h-full"
      />
    </div>

    // </div>
  );
}
