import Image from "next/image";
import Main from "../layout/Main";

export default function WhoAmI() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 md:order-last lg:h-full">
            <Image
              alt="Ja"
              src="/images/whyme.webp"
              width={1920}
              height={1080}
              className="h-56 w-full object-cover sm:h-full rounded-md shadow-lg"
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Czym różnię się od innych?
            </h2>

            <p className="mt-4 text-gray-600">
              Ja NIE gwarantuję Ci świetnych wyników, w&nbsp;prosty
              i&nbsp;przyjemny sposób bez zaangażowania i&nbsp;bez wysiłku.
              Gwarantuję Ci za to najlepsze możliwe narzędzia do osiągnięcia
              Twojego celu. Bez&nbsp;względu na to czy chcesz schudnąć, poprawić
              wyniki siłowe czy zbudować ogólną sprawność, pomogę Ci przejść
              przez cały proces zmiany Twojego życia na lepsze. Od&nbsp;nawyków
              żywieniowych, przez regenerację, po aktywność fizyczną. Jedyne
              czego potrzebujesz to chęci, zaangażowanie i&nbsp;dokładne
              słuchanie, resztą zajmę się ja.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
