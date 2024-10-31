import React from "react";
import PostCard from "~/components/postCard";
import Sidebar from "~/components/sidebar";
import StoryComponent from "~/components/storyComponent";
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
        <div className="flex flex-row w-fit bg-slate-50">
          <div className="grid grid-cols-4 w-fit">
            <div className="flex flex-col col-span-3">
              {" "}
              <div className="font-semibold p-5 text-sm">Stories</div>
              <div className="flex gap-4 pl-5 col-span-3">
                <StoryComponent />
                <StoryComponent />
                <StoryComponent />
                <StoryComponent />
                <StoryComponent />
                <StoryComponent />
              </div>
            </div>
            <div className="col-span-3 flex flex-row px-5 ">
              <div className=" 2xl:grid 2xl:grid-cols-6 flex flex-col p-3 gap-4 mt-20 mb-10 h-fit mx-auto">
                {posts.map((p) => (
                  <div className=" 2xl:col-span-3 cursor-pointer">
                    <PostCard
                      username={p.username}
                      likes={p.likes}
                      comments={p.comments}
                      tags={p.tags}
                      caption={p.caption}
                    />
                  </div>
                ))}
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
