import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

interface InfoItemProps {
  question: string;
  answer: string;
}

const InfoItem: React.FC<InfoItemProps> = (props) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-col m-1 w-full">
      <div
        className="flex border border-gray shadow p-2 bg-gray-200 justify-between text-left"
        onClick={() => setOpen(!open)}
      >
        {props.question}
        <div className="w-6 h-6">
          {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </div>
      </div>
      {open && <div className="border p-2 text-justify">{props.answer}</div>}
    </div>
  );
};

export default InfoItem;
