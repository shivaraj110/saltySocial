import React from "react";
import PostCard from "~/components/postCard";
import Sidebar from "~/components/sidebar";
interface postProps {
  username: string;
  likes: number;
  comments: number;
  tags: string[];
  caption: string;
}

const posts: postProps[] = [
  {
    username: "Alex madrchod",
    likes: 69,
    comments: 100,
    tags: ["asda,asd"],
    caption:
      "this is cool caption this is cool caption this is cool caption this is cool caption this is cool caption this is cool caption ",
  },
  {
    username: "Edward Newgate",
    likes: 69,
    comments: 100,
    tags: ["asda,asd"],
    caption:
      "this is cool caption this is cool caption this is cool caption this is cool caption this is cool caption this is cool caption ",
  },
  {
    username: "Edward Newgate",
    likes: 69,
    comments: 100,
    tags: ["asda,asd"],
    caption:
      "this is cool caption this is cool caption this is cool caption this is cool caption this is cool caption this is cool caption ",
  },
  {
    username: "Edward Newgate",
    likes: 69,
    comments: 100,
    tags: ["asda,asd"],
    caption:
      "this is cool caption this is cool caption this is cool caption this is cool caption this is cool caption this is cool caption ",
  },
];

export default function () {
  return (
    <div>
      <div className="h-10 w-full border-b">navbar</div>
      <div className="grid grid-cols-9">
        <div className="col-span-1">
          <Sidebar />
        </div>
        <div className="col-span-6 flex flex-row  bg-slate-100">
          <div className="grid grid-cols-6 gap-4 mt-20 mb-10 h-fit mx-auto">
            {posts.map((p) => (
              <PostCard
                username={p.username}
                likes={p.likes}
                comments={p.comments}
                tags={p.tags}
                caption={p.caption}
              />
            ))}
          </div>
        </div>
        <div className="col-span-2">friends</div>
      </div>
    </div>
  );
}
