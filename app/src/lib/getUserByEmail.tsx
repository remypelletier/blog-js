export default async function getUserByEmail(email: string) {
  const res = await fetch(`http://localhost:3001/users?email=${email}`);
  if (!res.ok) throw new Error("Failed to fetch user");
  return res.json();
}
