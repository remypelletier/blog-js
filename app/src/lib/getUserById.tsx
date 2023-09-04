export default async function getUserById(id: string) {
  const res = await fetch(`http://localhost:3001/users/${id}`);
  if (!res.ok) throw new Error("Failed to fetch user");
  return res.json();
}
