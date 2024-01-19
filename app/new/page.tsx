import Link from "next/link";
import React from "react";

const AddItem = () => {
  return (
    <main className=" p-6">
      <div className=" flex items-center justify-between">
        <h1 className=" text-2xl font-semibold">Todo list</h1>
      </div>
      <form action="" className="flex flex-col gap-2">
        <input
          type="text"
          name="title"
          className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <div className="flex gap-2 justify-end">
          <Link
            href=".."
            className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
          >
            Back
          </Link>
          <button
            type="submit"
            className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
          >
            ADD
          </button>
        </div>
      </form>
    </main>
  );
};

export default AddItem;
