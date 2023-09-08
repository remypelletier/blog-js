import { getOneUser } from "@/lib/user";

type Params = {
  params: {
    id: string;
  };
};
export default async function UserPage({ params }: Params) {
  const user = await getOneUser(Number(params.id));
  return (
    <div>
      <h1>User detail</h1>
      <p>name: {user.name}</p>
      <p>email: {user.email}</p>
      <p>id: {user.id}</p>
    </div>
  );
}
