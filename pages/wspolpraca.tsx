import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Main from "../components/layout/Main";
import Pricing from "../components/offer/Pricing";

export default function About() {
  const personal = {
    title: "Treningi personalne",
    id: "treningi-personalne",
    description: [
      "treningi 1 na 1 na których, po konsultacji, pracujemy nad realizacją Twoich celów. Jeżeli stawiasz pierwsze kroki na siłowni i chcesz nauczyć się dobrze trenować, jest to idealne rozwiązanie dla Ciebie. Podczas treningów pracujemy nad podstawowymi zdolnościami motorycznymi:",
    ],
    descriptionList: ["siłą", "gibkością", "wydolnością"],
    asterisk: "*pakiety do wykorzystania w ciągu miesiąca",
    pricingList: [
      {
        pricingTitle: "Pojedynczy trening",
        price: 200,
      },
      {
        pricingTitle: "4 treningi*",
        price: 600,
      },
      {
        pricingTitle: "8 treningów*",
        price: 1000,
      },
    ],
  };

  const plans = {
    title: "Plany treningowe",
    id: "plany-treningowe",
    description: [
      "Jeżeli jesteś bardziej zaawansowany, albo z racji mieszkania w innym mieście nie mamy możliwości pracy 1 na 1, masz możliwość skorzystania z indywidualnego planu treningowego, który pomoże Ci realizować swoje plany. W tym celu umawiamy się na konsultację online/telefoniczną i na podstawie zdobytych prze mnie informacji układam program treningowy „szyty na miarę”",
      "Dzięki regularnym raportom jestem w stanie na bieżąco modyfikować plan w razie potrzeby, a Ty dzięki temu wiesz, że idziesz w dobrym kierunku w odpowiednim tempie.",
    ],
    pricingList: [
      {
        pricingTitle: "Pojedynczy plan",
        pricingDescription: "(4 tygodnie)",
        price: 300,
      },
      {
        pricingTitle: "Współpraca gold",
        pricingDescription: "(12 tygodni)",
        price: 700,
      },
      {
        pricingTitle: "Współpraca VIP",
        pricingDescription: "(24 tygodnie)",
        price: 1200,
      },
    ],
  };

  const single = {
    title: "Pojedyncza konsultacja",
    id: "pojedyncza-konsultacja",

    description: [
      "Jeżeli nie interesują Cie treningi indywidualne, ani plany treningowe, ale chcesz umówić cokolwiek związanego ze swoją aktywnością fizyczną, stylem życia, dietą, regeneracją czy ogólnie pojętym zdrowiem, możesz skorzystać z pojedynczej konsultacji gdzie w ciągu godziny postaram się rozwiązać Twój problem.",
    ],
    pricingList: [
      {
        pricingTitle: "1h konsultacji",
        price: 150,
      },
    ],
  };

  return (
    <>
      <Head>
        <title>
          Współpraca z trenerem personalnym - Warszawa - Radek Trener
        </title>
        <meta name="description" content="Współpraca" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 text-center pt-16">
          Współpraca z trenerem personalnym
        </h1>
        <Pricing data={personal} />
        <Pricing data={plans} />
        <Pricing data={single} />
      </Main>
    </>
  );
}
