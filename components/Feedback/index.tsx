import Link from "next/link";
import React from "react";
import { TbMessageChatbot } from "react-icons/tb";

const Feedback = () => {
  return (
    <Link href='/feedback'>
      <div className="bg-reddish rounded-tl-md rounded-bl-md h-28 w-10 flex flex-col gap-y-3 justify-end pb-2 text-white fixed my-auto right-0 hover:shadow-md hover:shadow-darkish">
        <div className="-rotate-90">Feedback</div>
        <TbMessageChatbot className="mx-auto" size={18} />
      </div>
    </Link>
  );
};

export default Feedback;
