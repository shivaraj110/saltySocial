interface Friends {
  username: string;
  lastSeen: string;
  imgUrl: string;
}

export default function (props: Friends) {
  return (
    <div className="mx-5 2xl:mx-10 mt-5 2xl:mt-10 flex justify-between">
      <div className="  h-10 w-10 bg-blue-400 rounded-full flex  justify-between">
        <img src={props.imgUrl} alt="pfp" className="rounded-full" />
        <div className="mx-3 mt-1">{props.username}</div>
      </div>
      <div className="text-gray-600 mt-1">{props.lastSeen}</div>
    </div>
  );
}
