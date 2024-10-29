interface postProps {
  username: string;
  likes: number;
  comments: number;
  tags: string[];
  caption: string;
}
export default function (props: postProps) {
  return (
    <div className="h-[350px] p-2 bg-white w-[500px] col-span-3  rounded-md">
      <div className="">{props.username}</div>
    </div>
  );
}
