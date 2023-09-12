import { getOneProject } from "@/lib/project";
type Params = {
  params: {
    id: string;
  };
};
export default async function PageProject({ params }: Params) {
  const { id, slug, title, description, content, createdAt } =
    await getOneProject(Number(params.id));
  return (
    <div className="bg-slate-100 py-16">
      <div className="container mx-auto">
        <h1 className="text-6xl text-gray-900 font-bold mb-4">{title}</h1>
        <p className="text-xl text-gray-500 mb-8">{description}</p>
      </div>
    </div>
  );
}
