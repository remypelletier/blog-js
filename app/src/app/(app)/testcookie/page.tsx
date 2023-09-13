import { cookies } from "next/headers";

export default function testcookie() {
  const cookieStore = cookies();
  return (
    <ul>
      {cookieStore.getAll().map((cookie, index) => (
        <li
          key={cookie.name}
          className="p-2 border-dashed border-2 border-sky-500"
        >
          <div className="flex">
            <div className="flex p-2 border-dashed border-2 border-sky-500 mr-2">
              <span className="font-bold">{index}</span>
            </div>
            <div>
              <p>
                <span className="font-bold">Name: </span> [{cookie.name}]
              </p>
              <p>
                <span className="font-bold">Value: </span> [{cookie.value}]
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
