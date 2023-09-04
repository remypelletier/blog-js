import { getAllProjects } from "@/api/project";
import { Card, Flex, Text, Heading, Button } from "@radix-ui/themes";
import Link from "next/link";

export default async function PageProjects() {
  const projects = await getAllProjects();
  return (
    <Flex gap="2">
      {projects.map((project: any) => {
        const { id, title, description } = project;
        return (
          <Card key={id}>
            <Heading as="h3">{title}</Heading>
            <p>{description}</p>
            <Link href={`/projects/${id}`}>Detail</Link>
          </Card>
        );
      })}
    </Flex>
  );
}
