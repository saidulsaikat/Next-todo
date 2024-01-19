import React from "react";

interface SingleItemProps {
  id: string;
  title: string;
  complete: boolean;
}

const SingleItem = ({ id, title, complete }: SingleItemProps) => {
  return (
    <li className=" flex items-center gap-2">
      <input type="checkbox" id={id} className=" cursor-pointer peer" />
      <label htmlFor={id} className=" peer-checked:line-through peer-checked:text-slate-500 cursor-pointer">
        {title}
      </label>
    </li>
  );
};

export default SingleItem;
