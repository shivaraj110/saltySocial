interface postProps {
  username: string;
  likes: number;
  comments: number;
  tags: string[];
  caption: string;
}
export default function (props: postProps) {
  return (
    <div className="h-[375px] bg-white min-w-[500px] max-w-[650px] px-3 py-3 shadow-lg rounded-3xl">
      <div className="flex flex-col justify-center">
        <img
          className="h-[200px] rounded-2xl bg-slate-400 text-center"
          src="https://utfs.io/f/FY8OMBAlLeCoPhnRPVvCNB4x5p9EhcSywkz2VAujIgGXZK1F"
          alt="post image"
        />
      </div>
      <div className="mt-2 flex flex-row mx-1 justify-between">
        <div className="flex flex-row">
          <img
            src="https://utfs.io/f/FY8OMBAlLeCo72C01wX8XBUzh3gQnvmulI7EJ2H6NDTMrOxK"
            alt="pfp"
            className="w-10 mt-2 h-10 rounded-full"
          />
          <div className="ml-3 mt-4">{props.username}</div>
        </div>
        <div className="flex flex-row justify-between mx-5">
          <div className="flex flex-row mt-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6  border-none">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </div>
            <div className="ml-1">{props.likes}</div>
          </div>
          <div className="flex flex-row ml-10 mt-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 ">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                />
              </svg>
            </div>
            <div className="ml-1">{props.comments}</div>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-2 text-gray-600 px-3 mt-5">
        {props.tags.map((t) => (
          <div>{"#" + t}</div>
        ))}
      </div>
      <div className="text-sm px-3">{props.caption.slice(0, 150) + "..."}</div>
    </div>
  );
}
