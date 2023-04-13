import Link from "next/link";
import React from "react";
import { TbMessageChatbot } from "react-icons/tb";

const Feedback = () => {
  return (
    <div className="bg-reddish rounded-tl-md rounded-bl-md h-28 w-10 flex flex-col gap-y-3 justify-end pb-2 text-white fixed bottom-1/2 right-0 hover:shadow-md hover:shadow-darkish">
      <div className="-rotate-90"><Link href='/feedback'>Feedback</Link></div>
      <Link href='/feedback'><TbMessageChatbot className="mx-auto" size={20} /></Link>
    </div>
  );
};

export default Feedback;
