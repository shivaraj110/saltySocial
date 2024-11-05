import React from "react";
import FriendsTab from "~/components/FriendsTab";
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
    <div className="overflow-hidden">
      <div className="h-16 text-center  w-full border-b fixed right-0 top-0 z-50 bg-white/30 backdrop-blur-lg ">
        navbar
      </div>
      <div className="flex flex-row mt-24">
        <div className="w-fit bg-white/35 rounded-r-[10px] fixed top-0 z-20 left-0 h-screen mt-16 overflow-y-auto backdrop-blur-md">
          <Sidebar />
        </div>
        <div className="flex flex-row w-fit ml-20">
          <div className="grid grid-cols-4 w-fit">
            <div className="flex flex-col col-span-4">
              {" "}
              <div className="font-semibold p-5 ">Stories</div>
              <div className="flex gap-4 px-5 col-span-3">
                <StoryComponent />
                <StoryComponent />
                <StoryComponent />
                <StoryComponent />
                <StoryComponent />
                <StoryComponent />
                <StoryComponent />
                <StoryComponent />
                <StoryComponent />
              </div>
            </div>
            <div className="mt-10 px-5 col-span-4 flex w-[900px] 2xl:w-[1350px] justify-between gap-5 font-semibold">
              <div>Recent Posts</div>
              <div className="flex gap-10">
                <div className="cursor-pointer">Feeds</div>
                <div className="text-gray-500 cursor-pointer">All</div>
                <div className="text-gray-500 cursor-pointer">Following</div>
                <div className="text-gray-500 cursor-pointer">Latest</div>
                <div className="text-gray-500 cursor-pointer">Popular</div>
              </div>
            </div>
            <div className="col-span-3 flex flex-row px-2">
              <div className=" 2xl:grid 2xl:grid-cols-6 lg:grid lg:grid-cols-2 flex flex-col p-3 gap-4 mt-2 h-fit">
                {posts.map((p) => (
                  <div className=" 2xl:col-span-2 cursor-pointer">
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
            <div className=" bg-white/25 backdrop-blur-md fixed left-0 right-0 ml-auto w-[280px] mt-16 rounded-l-[10px] 2xl:w-[450px] top-0 overflow-y-auto h-screen">
              <div className="pt-5 pl-10 font-semibold">Friends</div>
              <FriendsTab
                username="asdasd"
                imgUrl="https://utfs.io/f/FY8OMBAlLeCo9ZQ0hJCyICJ6jp8FQSe1OxiEL2znot4XvkVr"
                lastSeen="online"
              />{" "}
              <FriendsTab
                username="J Cole"
                imgUrl="https://utfs.io/f/FY8OMBAlLeCo9ZQ0hJCyICJ6jp8FQSe1OxiEL2znot4XvkVr"
                lastSeen="typing..."
              />{" "}
              <FriendsTab
                username="asdasd"
                imgUrl="https://utfs.io/f/FY8OMBAlLeCo9ZQ0hJCyICJ6jp8FQSe1OxiEL2znot4XvkVr"
                lastSeen="15 secs"
              />{" "}
              <FriendsTab
                username="asdasd"
                imgUrl="https://utfs.io/f/FY8OMBAlLeCo9ZQ0hJCyICJ6jp8FQSe1OxiEL2znot4XvkVr"
                lastSeen="online"
              />{" "}
              <FriendsTab
                username="asdasd"
                imgUrl="https://utfs.io/f/FY8OMBAlLeCo9ZQ0hJCyICJ6jp8FQSe1OxiEL2znot4XvkVr"
                lastSeen="69 years"
              />{" "}
              <FriendsTab
                username="asdasd"
                imgUrl="https://utfs.io/f/FY8OMBAlLeCo9ZQ0hJCyICJ6jp8FQSe1OxiEL2znot4XvkVr"
                lastSeen="9 months"
              />{" "}
              <FriendsTab
                username="asdasd"
                imgUrl="https://utfs.io/f/FY8OMBAlLeCo9ZQ0hJCyICJ6jp8FQSe1OxiEL2znot4XvkVr"
                lastSeen="2 years"
              />{" "}
              <FriendsTab
                username="asdasd"
                imgUrl="https://utfs.io/f/FY8OMBAlLeCo9ZQ0hJCyICJ6jp8FQSe1OxiEL2znot4XvkVr"
                lastSeen="5 mins"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
