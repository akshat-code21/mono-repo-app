import { client } from "@repo/db/client"
export default async function Home() {
  const user = await client.users.findFirst();
  return (
    <div>
      Username : {user?.username || "Akshat" }
      <br />  
      Password : {user?.password || "whoami" }
    </div>
  );
}
