import Image from "next/image";
import Link from "next/link";
import { PostContentFragment } from "../../generated/graphql";

export default function BlogCard(data: PostContentFragment) {
  const date = new Date(data.createdAt).toLocaleDateString("pl-PL");
  return (
    <article className="flex flex-col flex[0 0 1] md:flex[0 0 calc(33.33%-20px)] w-72 text-center p-6 m-4 text-gray-900 bg-white dark:bg-gray-50 rounded-lg border border-gray-100 shadow dark:border-gray-600 duration-150 hover:shadow-xl">
      <Link href={`blog/${data.slug}`}>
        <Image
          height={300}
          width={300}
          alt={data.title}
          src={data.coverImage!.url}
          className="w-full object-cover"
        />
      </Link>

      <div className="p-4 sm:p-6">
        {/* <Link href={`blog/${data.slug}`}>
          <p className="mt-0.5 text-xs text-gray-900 text-left">Category</p>
        </Link> */}
        <Link href={`blog/${data.slug}`}>
          <div>
            <h3 className="mt-0.5 text-lg text-gray-900">{data.title}</h3>
            <time
              dateTime={date}
              className="block text-xs text-gray-500 mt-2 mb-2"
            >
              {date}
            </time>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              {data.excerpt}
            </p>
          </div>
        </Link>
        <Link href={`blog/${data.slug}`} title="Przeczytaj więcej">
          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 underline">
            Przeczytaj więcej
          </p>
        </Link>
      </div>
    </article>
  );
}
