import { getOneProject } from "@/api/project";
import { Flex, Heading, Box } from "@radix-ui/themes";
type Params = {
  params: {
    id: string;
  };
};
export default async function PageProject({ params }: Params) {
  const { id, slug, title, description, content, createdAt } =
    await getOneProject(Number(params.id));
  return (
    <Box>
      <Heading as="h1">{title}</Heading>
      <p>{description}</p>
    </Box>
  );
}
