import SingleItem from "@/components/SingleItem";
import { prisma } from "@/db";
import Link from "next/link";

const getTodo = () => {
  return prisma.todo.findMany();
};

const toggleTodo = async (id: string, complete: boolean) => {
  "use server";

  await prisma.todo.update({ where: { id }, data: { complete } });
};

export default async function Home() {
  const todos = await getTodo();

  return (
    <main className=" p-6">
      <div className=" flex items-center justify-between">
        <h1 className=" text-2xl font-semibold">Todo list</h1>
        <Link
          href="/new"
          className=" btn border border-sky-900 rounded-lg py-2 px-4 hover:bg-black hover:text-white transition duration-300 outline-none"
        >
          New
        </Link>
      </div>

      <ul>
        {todos.map((todo) => (
          <SingleItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </main>
  );
}
