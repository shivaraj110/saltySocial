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
    tags: ["asdaasd", "adsads"],
    caption:
      "this is cool caption this is cool caption this is cool caption this is cool caption this is cool caption this is cool caption this is cool caption this is cool captionthis is cool caption this is cool captionthis is cool caption this is cool caption.",
  },
  {
    username: "Edward Newgate",
    likes: 69,
    comments: 100,
    tags: ["asdaasd", "adsads"],
    caption:
      "this is cool caption this is cool caption this is cool caption this is cool caption this is cool caption this is cool caption this is cool caption this is cool captionthis is cool caption this is cool captionthis is cool caption this is cool caption.",
  },
  {
    username: "Edward Newgate",
    likes: 69,
    comments: 100,
    tags: ["asdaasd", "adsads"],
    caption:
      "this is cool caption this is cool caption this is cool caption this is cool caption this is cool caption this is cool caption this is cool caption this is cool captionthis is cool caption this is cool captionthis is cool caption this is cool caption.",
  },
  {
    username: "Edward Newgate",
    likes: 69,
    comments: 100,
    tags: ["asdaasd", "adsads"],
    caption:
      "this is cool caption this is cool caption this is cool caption this is cool caption this is cool caption this is cool caption this is cool caption this is cool captionthis is cool caption this is cool captionthis is cool caption this is cool caption.",
  },
];

export default function () {
  return (
    <div>
      <div className="h-10 w-full border-b">navbar</div>
      <div className="flex flex-row">
        <div className="w-fit">
          <Sidebar />
        </div>
        <div className="grid grid-cols-4">
          <div className="col-span-3 flex flex-row px-5 bg-slate-50">
            <div className=" 2xl:grid 2xl:grid-cols-6 flex flex-col p-3 gap-4 mt-20 mb-10 h-fit mx-auto">
              {posts.map((p) => (
                <div className=" 2xl:col-span-3">
                  <PostCard
                    username={p.username}
                    likes={p.likes}
                    comments={p.comments}
                    tags={p.tags}
                    caption={p.caption}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-1">friends</div>
        </div>
      </div>
    </div>
  );
}
