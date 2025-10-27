import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="flex items-center justify-center min-h-screen space-y-4 flex-col text-white mt-50">
      <div className="font-extrabold text-6xl">Buy Me a Coffee<script src="https://cdn.lordicon.com/lordicon.js"></script>
<lord-icon
    src="https://cdn.lordicon.com/oyxqonng.json"
    trigger="hover"
    stroke="bold"
    className="scale-200 ml-7 mb-2">
</lord-icon></div>

      <div className="flex justify-center text-xl items-center">
        <p>
          BuyMeaCoffee - A Crowdfunding Platofrm Where You Can Support Your
          Favourite Creators.
        </p>
      </div>
      <div className="flex justify-center items-center">
        {/* <button className="bg-gradient-to-tr from-blue-400 to-emerald-200 scale-105 rounded-xl px-4 py-1">Get Started</button> */}
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black text-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            Get Started
          </span>
        </button>
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-tl from-green-400 to-blue-600 group-hover:from-blue-400 group-hover:to-green-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black text-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            Read More
          </span>
        </button>
 
      </div>
      <div className="border-t mt-70 border-cyan-300/70 h-1 w-full">

      </div>
      <div className="cards mb-30 mt-40">
        <h1 className="text-4xl mt-2 mb-4 text-center font-bold">Your Fans Can Buy You A Coffee</h1>

<div className="grid hehe grid-cols-3 gap-10 justify-center items-center lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1">
     <div className="card w-120 border-4 h-100 flex justify-center items-center border-blue-400 hover:border-blue-700 rounded-3xl">
    <div className="text-center">
      <lord-icon
      className="w-40 h-40 scale-90 outline-4 outline-cyan-400 rounded-full"
    src="https://cdn.lordicon.com/iiudwewg.json"
    trigger="hover"
    stroke="bold"
   >
</lord-icon>
          <h1 className="text-3xl mb-3">Become A Creator</h1>
          <p className="">You can become a creator and recieve funds from your fans</p>
          </div>
        </div>
  <div className="card w-120 border-4 h-100 flex justify-center items-center border-blue-400 hover:border-blue-700 rounded-3xl">
    <div className="text-center">
      <lord-icon
      className="w-40 h-40 scale-90 outline-4 outline-cyan-400 rounded-full"
    src="https://cdn.lordicon.com/vciwwbwo.json"
    trigger="hover"
    stroke="bold"
    >
</lord-icon>
{/* <lord-icon
      className="w-40 h-40 scale-90 outline-4 outline-cyan-400 rounded-full"
    src="https://cdn.lordicon.com/bkzrrccj.json"
    trigger="hover"
    stroke="bold"
   >
</lord-icon> */}
          <h1 className="text-3xl mb-3">Build a Fanbase</h1>
          <p>You Can build a Fanbase </p>
          </div>
        </div>
  <div className="card w-120 border-4 h-100 flex justify-center items-center border-blue-400 hover:border-blue-700 rounded-3xl">
    <div className="text-center">
      
      <lord-icon
      className="w-33 h-33 text-center outline-4 outline-offset-10 mb-6 outline-cyan-400 rounded-full"
    src="https://cdn.lordicon.com/wyaqzesp.json"
    trigger="hover"
    stroke="bold"
    >
      
</lord-icon>

{/* <lord-icon
      className="w-40 h-40 scale-90 outline-4 outline-cyan-400 rounded-full"
    src="https://cdn.lordicon.com/bkzrrccj.json"
    trigger="hover"
    stroke="bold"
   >
</lord-icon> */}
          <h1 className="text-3xl mb-3">Earn As an Independent Creator</h1>
          <p>Get Donations from your fans and build a following</p>
          </div>
        </div>
 
        </div>
      </div>
      <div className="border-t mt-70 border-cyan-300/70 h-1 w-full">

      </div>
      <div className="cards mb-30 mt-40">
        <h1 className="text-7xl mt-2 text-center mb-20 font-bold">Learn More About Us</h1>

<div className="flex flex-col gap-10 justify-center items-center ">
     <iframe width="560" height="315" src="https://www.youtube.com/embed/8-x2S8owxYQ?si=p1858r9J7YjDV2SH" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
    </div>
    </>
  );
}
