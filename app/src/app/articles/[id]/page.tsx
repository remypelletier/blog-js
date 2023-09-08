import { getOneArticle } from "@/lib/post";
import { Box, Flex, Heading } from "@radix-ui/themes";
type Params = {
  params: {
    id: string;
  };
};
export default async function PageArticle({ params }: Params) {
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
  } = await getOneArticle(Number(params.id));
  return (
    <Box>
      <Heading as="h3">{title}</Heading>
      <p>{description}</p>
    </Box>
  );
}
