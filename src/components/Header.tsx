import { Button } from "./ui/button";

export default function Header(){
    return (
        <>
        <div className="h-20 flex font-anzo  border-b-2 border-black ">
            <div className="text-black text-3xl flex items-center ml-5 ">
                OpenLang
            </div>
            <div className="flex justify-end ml-[78%] gap-10  items-center">

<Button className=" rounded-full h-11 font-anzo text-xl   sm:text-lg hover:text-black hover:bg-white bg-black text-white ">Get Started </Button>
            </div>
        </div>
        </>
    )
}