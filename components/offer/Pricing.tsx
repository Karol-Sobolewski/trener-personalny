import Image from "next/image";
import Main from "../layout/Main";

interface PricingList {
  pricingTitle: string;
  pricingDescription?: string;
  price: number;
}

interface Pricing {
  id: string;
  title: string;
  description: string[];
  descriptionList?: string[];
  pricingList: PricingList[];
  asterisk?: string;
}

export default function Pricing({ data }: { data: Pricing }) {
  return (
    <section className="relative">
      <div className="absolute -top-12 left-0" id={data.id} />
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-8 text-center text-3xl font-bold sm:text-4xl text-gray-900">
            {data.title}
          </h2>
          {data.description.map((desc, i) => (
            <p
              key={i}
              className="font-light text-gray-500 sm:text-xl text-justify"
            >
              {desc}
            </p>
          ))}
          <div className="mt-4 flex justify-center align-middle items-center flex-col">
            <ul role="list" className="mb-2 text-center flex flex-col">
              {data.descriptionList &&
                data.descriptionList.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center space-x-3 text-gray-500"
                  >
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          {data.pricingList.map((item, i) => (
            <div
              key={i}
              className="flex flex-col flex[0 0 1] md:flex[0 0 calc(33.33%-20px)] w-72 text-center p-6 m-4 text-gray-900 bg-white dark:bg-gray-50 rounded-lg border border-gray-100 shadow dark:border-gray-600"
            >
              <h3 className="mb-4 text-2xl font-semibold">
                {item.pricingTitle}
              </h3>
              <p className="font-light text-gray-500 sm:text-lg">
                {item.pricingDescription}
              </p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">
                  {item.price} zł
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto max-w-screen-md text-center mt-8">
          <p className="font-light text-gray-500 sm:text-xl">{data.asterisk}</p>
        </div>
      </div>
    </section>
  );
}
