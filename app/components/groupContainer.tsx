import FriendsCard from "./FriendCard";

export default function () {
  return (
    <div className=" bg-white/25 backdrop-blur-md h-[500px] mt-10 left-0 right-0 ml-auto w-[280px] rounded-l-[10px] 2xl:w-[450px] top-0 overflow-scroll p-3 2xl:p-10">
      <div className="font-semibold">Groups</div>
      <FriendsCard
        username="asdasd"
        imgUrl="https://utfs.io/f/FY8OMBAlLeCo9ZQ0hJCyICJ6jp8FQSe1OxiEL2znot4XvkVr"
        lastSeen="online"
      />{" "}
      <FriendsCard
        username="J Cole"
        imgUrl="https://utfs.io/f/FY8OMBAlLeCo9ZQ0hJCyICJ6jp8FQSe1OxiEL2znot4XvkVr"
        lastSeen="typing..."
      />{" "}
      <FriendsCard
        username="asdasd"
        imgUrl="https://utfs.io/f/FY8OMBAlLeCo9ZQ0hJCyICJ6jp8FQSe1OxiEL2znot4XvkVr"
        lastSeen="15 secs"
      />{" "}
      <FriendsCard
        username="asdasd"
        imgUrl="https://utfs.io/f/FY8OMBAlLeCo9ZQ0hJCyICJ6jp8FQSe1OxiEL2znot4XvkVr"
        lastSeen="online"
      />{" "}
      <FriendsCard
        username="asdasd"
        imgUrl="https://utfs.io/f/FY8OMBAlLeCo9ZQ0hJCyICJ6jp8FQSe1OxiEL2znot4XvkVr"
        lastSeen="69 yrs"
      />{" "}
      <FriendsCard
        username="asdasd"
        imgUrl="https://utfs.io/f/FY8OMBAlLeCo9ZQ0hJCyICJ6jp8FQSe1OxiEL2znot4XvkVr"
        lastSeen="97 weeks"
      />{" "}
      <FriendsCard
        username="asdasd"
        imgUrl="https://utfs.io/f/FY8OMBAlLeCo9ZQ0hJCyICJ6jp8FQSe1OxiEL2znot4XvkVr"
        lastSeen="3 hrs"
      />{" "}
      <FriendsCard
        username="asdasd"
        imgUrl="https://utfs.io/f/FY8OMBAlLeCo9ZQ0hJCyICJ6jp8FQSe1OxiEL2znot4XvkVr"
        lastSeen="5 mins"
      />{" "}
      <FriendsCard
        username="asdasd"
        imgUrl="https://utfs.io/f/FY8OMBAlLeCo9ZQ0hJCyICJ6jp8FQSe1OxiEL2znot4XvkVr"
        lastSeen="5 mins"
      />{" "}
      <FriendsCard
        username="asdasd"
        imgUrl="https://utfs.io/f/FY8OMBAlLeCo9ZQ0hJCyICJ6jp8FQSe1OxiEL2znot4XvkVr"
        lastSeen="5 mins"
      />
    </div>
  );
}
