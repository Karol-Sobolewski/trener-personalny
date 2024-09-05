import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://radeksenski.pl",
      lastModified: new Date(),
    },
    {
      url: "https://radeksenski.pl/wspolpraca",
      lastModified: new Date(),
    },
    {
      url: "https://radeksenski.pl/kontakt",
      lastModified: new Date(),
    },
    {
      url: "https://radeksenski.pl/blog",
      lastModified: new Date(),
    },
  ];
}
