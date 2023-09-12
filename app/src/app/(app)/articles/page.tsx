import { getAllArticles } from "@/lib/post";
import Link from "next/link";
import Card from "@/components/CardV";

export default async function PageArticles() {
  const articles = await getAllArticles();

  return (
    <div className="bg-slate-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-6xl text-gray-900 font-bold mb-4">
          Core building blocks <br />
          for your design system
        </h2>
        <p className="text-xl text-gray-500 mb-8">
          Unstyled, accessible, open source React primitives
          <br />
          for high-quality web apps and design systems.
        </p>
        <ul className="flex flex-wrap">
          {articles.map((article: any) => {
            const {
              id,
              slug,
              title,
              description,
              content,
              createdAt,
              updatedAt,
              published,
              userId,
            } = article;
            return (
              <li key={id} className="m-2 min-w-[400px]">
                <Link href={`/articles/${id}`}>
                  <Card
                    image={{ src: "/profile.webp", alt: "Image de profile" }}
                    width={400}
                    height={400}
                    description={description}
                    title={title}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
