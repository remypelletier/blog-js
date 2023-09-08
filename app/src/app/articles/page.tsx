import { getAllArticles } from "@/lib/post";
import { Card, Heading, Flex } from "@radix-ui/themes";
import Link from "next/link";

export default async function PageArticles() {
  const articles = await getAllArticles();

  return (
    <Flex gap="2">
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
          <Card key={id}>
            <Heading as="h3">{title}</Heading>
            <p>{description}</p>
            <Link href={`/articles/${id}`}>details</Link>
          </Card>
        );
      })}
    </Flex>
  );
}
