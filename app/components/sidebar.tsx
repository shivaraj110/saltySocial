import { useSearchParams } from "@remix-run/react";
import { useState } from "react";
import { redirect } from "react-router";

export default function () {
  const [searchparams,setsearchParams] = useSearchParams()
  const currRoute = searchparams.get("route")
  
  const [fold,setFold] = useState(true)
  return (
    <div className={`  ${fold ? "w-[75px] ": "w-[215px] "}  transi text-sm `} >
      <div className={` ${fold ? "hidden" : "flex"} pt-6 pr-3 text-gray-600 font-light cursor-pointer justify-end`}
      onClick={
        ()=>{ 
          setFold(true)
        }
      }>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" text-gray-500 size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>
      </div>
      <div className={` ${fold ? "flex":"hidden"} justify-center cursor-pointer  pt-6 gap-[2px] pb-[14px] mx-auto flex-row`}
      onClick={()=>{
        setFold(false)
      }}
      >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" text-gray-500 size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

      </div>
  <div className={`text-gray-500 flex cursor-pointer py-[10px] ${fold ? "justify-center" : " pl-6 justify-start"} ${currRoute == "feed" ? "bg-white/35" : null } hover:bg-white/35 mx-3 rounded-lg `}
      onClick={() => {
        setFold(true)
        const params = new URLSearchParams();
        params.set("route", "feed");
        setsearchParams(params, {
          preventScrollReset: true,
        });
      }} >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z"
          />
        </svg>
        <div className={` ${fold ? "hidden":"flex"} translate-y-[2px] font-semibold pl-3`} >Feed</div>
      </div>{" "}
    
      <div className= {`hover:bg-white/25 rounded-lg mx-3 ${currRoute == "friends" ? "bg-white/35" : null}`} >

      </div>
      <div 
     onClick={() => {
      setFold(true)
      const params = new URLSearchParams();
      params.set("route", "friends");
      setsearchParams(params, {
        preventScrollReset: true,
      });
    }}
      className={`text-gray-500 flex cursor-pointer py-[10px] ${fold ? "justify-center" : " pl-6 justify-start"} hover:bg-white/25 rounded-lg mx-3 ${ currRoute == "friends" ?  "rounded-lg bg-white/35 mx-3" : null } `} >
      <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
          />
        </svg>

        <div className={` ${fold ? "hidden":"flex"} translate-y-[2px] font-semibold pl-3`} >Friends</div>
      </div>{" "}
      <div className=" hover:bg-white/25 rounded-lg mx-3 ">

      </div>
      <div 
      onClick={() => {
        setFold(true)
        const params = new URLSearchParams();
        params.set("route", "events");
        setsearchParams(params, {
          preventScrollReset: true,
        });
      }}
      className={`text-gray-500 flex cursor-pointer py-[10px] ${fold ? "justify-center" : " pl-6 justify-start"} hover:bg-white/25 rounded-lg mx-3 ${ currRoute == "events" ?  "rounded-lg bg-white/35 mx-3" : null } `} 
      >
      <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
          />
        </svg>

        <div className={` ${fold ? "hidden":"flex"} translate-y-[2px] font-semibold pl-3`} >Events</div>      </div>{" "}
        <div 
          onClick={() => {
            setFold(true)
            const params = new URLSearchParams();
            params.set("route", "videos");
            setsearchParams(params, {
              preventScrollReset: true,
            });
          }}
        className={`text-gray-500 flex cursor-pointer py-[10px] ${fold ? "justify-center" : " pl-6 justify-start"} hover:bg-white/25 rounded-lg mx-3 ${ currRoute == "videos" ?  " rounded-lg bg-white/35 mx-3" : null } `} >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
          />
        </svg>

        <div className={` ${fold ? "hidden":"flex"} translate-y-[2px] font-semibold pl-3`} >Watch Videos</div>
      </div>{" "}
      <div className=" hover:bg-white/25 rounded-lg mx-3 ">

      </div>
      <div 
         onClick={() => {
          setFold(true)
          const params = new URLSearchParams();
          params.set("route", "photos");
          setsearchParams(params, {
            preventScrollReset: true,
          });
        }}
      className={`text-gray-500 flex cursor-pointer py-[10px] ${fold ? "justify-center" : " pl-6 justify-start"} hover:bg-white/25 rounded-lg mx-3 ${ currRoute == "photos" ?  "rounded-lg bg-white/35 mx-3" : null } `} >
      <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>

        <div className={` ${fold ? "hidden":"flex"} translate-y-[2px] font-semibold pl-3`} >Photos</div>      </div>{" "}
        <div className=" hover:bg-white/25 rounded-lg mx-3 ">

        </div>
        <div 
          onClick={() => {
            setFold(true)
            const params = new URLSearchParams();
            params.set("route", "files");
            setsearchParams(params, {
              preventScrollReset: true,
            });
          }}
        className={`text-gray-500 flex cursor-pointer py-[10px] ${fold ? "justify-center" : " pl-6 justify-start"} hover:bg-white/25 rounded-lg mx-3 ${ currRoute == "files" ? " rounded-lg bg-white/35 mx-3" : null }`} >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
          />
        </svg>

        <div className={` ${fold ? "hidden":"flex"} translate-y-[2px] font-semibold pl-3`} >Files</div>      </div>
        <div className= {` ${fold ? "flex " : "hidden" } mx-auto mt-4 bg-slate-500 h-[1px] w-[25px]`}>

        </div>
      <div className="pt-6">
        <div className= {` ${fold ? "hidden":"flex"} text-gray-400  pl-6 font-semibold`}  >PAGES YOU LIKE</div>
        <section>
          <div className={` ${fold ? "justify-center" : "pt-5 justify-start pl-6"} flex cursor-pointer`} >
            <div className= " h-8 w-8 text-gray-600 flex justify-center" >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
</svg>

            </div>
            <div className={` ${fold ? "hidden " : "flex"} font-semibold text-gray-600 pl-3 translate-y-1`} >
              Fashion Design
            </div>
          </div>{" "}
          <div className= {`flex pt-4 ${fold ? "justify-center" : "justify-start pl-6"}   cursor-pointer`} >
            <div className= " h-8 w-8 text-gray-600 flex justify-center" >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
</svg>

            </div>
            <div className={` ${fold ? "hidden" : "flex"} font-semibold text-gray-600 pl-3 translate-y-1`} >
              Graphic Design
            </div>
          </div>{" "}
          <div className= {`flex pt-4 ${fold ? "justify-center" : "justify-start pl-6"} cursor-pointer`} >
            <div className= " h-8 w-8 text-gray-600 flex justify-center" ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
</svg>
</div>
            <div className={` ${fold ? "hidden" : "flex"} font-semibold text-gray-600 pl-3 translate-y-1`} >
              UI/UX Community
            </div>
          </div>{" "}
          <div className= {`flex pt-4 ${fold ? "justify-center" : "justify-start pl-6"} cursor-pointer`} >
            <div className= " h-8 w-8 text-gray-600 flex justify-center" > 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
</svg>
            </div>
             <div className={` ${fold ? "hidden" : "flex"} font-semibold text-gray-600 pl-3 translate-y-1`} >
              Web Designer
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
