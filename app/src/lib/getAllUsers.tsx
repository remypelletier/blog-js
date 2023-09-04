export default async function getAllUsers() {
  const res = await fetch("http://localhost:3001/users");
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}
