import {Random} from "./components/Random";
import  {Tag}  from "./components/Tag";

export default function App() {
  return (
    <div className="w-full h-screen flex flex-col 
    background relative overflow-x-hidden items-center ">
      <h1 className= " bg-white rounded-lg  w-full text-center mt-[40px] ml-[0px] mr-[0px] text-3xl font-bold">
      RANDOM GIFS GENERATOR</h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[20px]"> 
        <Random />
        <Tag />
      </div>
    </div>
  );
}
