import Sidebar from "~/components/sidebar";

export default function () {
  return (
    <div>
      <div className="h-10 w-full border-b">navbar</div>
      <div className="grid grid-cols-10">
        <div className="col-span-2">
          <Sidebar />
        </div>
        <div className="col-span-6">feed</div>
        <div className="col-span-2">friends</div>
      </div>
    </div>
  );
}
