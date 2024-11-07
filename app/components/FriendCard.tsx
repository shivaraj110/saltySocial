interface Friends {
  username: string;
  lastSeen: string;
  imgUrl: string;
}

export default function (props: Friends) {
  return (
    <div className=" mt-5 2xl:mt-5 cursor-pointer flex justify-between">
      <div className=" h-fit w-[350px] p-1 bg-white/15 rounded-full flex  justify-between">
        <img
          src={props.imgUrl}
          alt="pfp"
          className=" h-10 w-10
         rounded-full"
        />
        <div className="mx-3 mt-1 ">{props.username}</div>
        <div className="text-gray-600 mt-1 px-5">{props.lastSeen}</div>
      </div>
    </div>
  );
}
// props.username.slice(0, 6) + "..."
