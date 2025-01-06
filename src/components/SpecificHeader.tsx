"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";
import logo from '../assets/Screenshot (80).png'
const languageUrls = {
  TypeScript: "/repos/typescript",
  JavaScript: "/repos/javascript",
  Cpp: "/repos/cpp",
  Python: "/repos/python",
  Go: "/repos/go",
} as const;

type Language = keyof typeof languageUrls;

export default function SpecificHeader() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('');

  const handleLanguageSelect = (language: Language) => {
    navigate(languageUrls[language] || "/"); 
    setActiveCategory(language)
  };

  return (
    <>
      <div className="h-20 flex font-anzo border-b-2 border-black">
        <div className="text-white font-anzo  text-lg sm:text-3xl ml-2 flex items-center sm:ml-5 cursor-pointer" onClick={()=>navigate('/')}>
        <img src={logo} alt="Logo" className="h-10" />
         <h1 className="-mt-2 gap-1">OpenLang</h1>
        </div>
        <div className="hidden sm:flex justify-center ml-[47%] cursor-pointer text-xl gap-10 items-center  ">
<div className={`${activeCategory === 'TypeScript' ? 'border-b border-[#39ff14]' : ''}`} onClick={() => handleLanguageSelect('TypeScript')} >Typescript</div>
<div className={`${activeCategory === 'JavaScript' ? 'border-b border-[#39ff14]' : ''}`}  onClick={() => handleLanguageSelect('JavaScript')}>Javascript</div>

<div className={`${activeCategory === 'Go' ? 'border-b border-[#39ff14]' : ''}`} onClick={() => handleLanguageSelect('Go')}>Go</div>
<div className={`${activeCategory === 'Python' ? 'border-b border-[#39ff14]' : ''}`} onClick={() => handleLanguageSelect('Python')}>Python</div>
<div className={`${activeCategory === 'Cpp' ? 'border-b border-[#39ff14]' : ''}`} onClick={() => handleLanguageSelect('Cpp')}>C++</div>


        </div>
        <div className="flex sm:hidden justify-end ml-[40%] text-sm sm:text-2xl sm:ml-[80%] gap-10 items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="bg-black text-white text-xs sm:text-lg rounded-full hover:bg-white hover:text-black"
              >
                Explore 
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 mt-4 mr-2 rounded-xl bg-gray-800 text-white font-anzo">
              <DropdownMenuLabel className="font-lg">
                Select Repositories
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem onClick={() => handleLanguageSelect('TypeScript')}>
              <div className={`${activeCategory === 'TypeScript' ? 'border-b border-[#39ff14]' : ''}`} >Typescript</div>

              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem >
              <div className={`${activeCategory === 'JavaScript' ? 'border-b border-[#39ff14]' : ''}`}  onClick={() => handleLanguageSelect('JavaScript')}>Javascript</div>

              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem >
              <div className={`${activeCategory === 'Cpp' ? 'border-b border-[#39ff14]' : ''}`} onClick={() => handleLanguageSelect('Cpp')}>C++</div>

              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem onClick={() => handleLanguageSelect('Python')}>
              <div className={`${activeCategory === 'Python' ? 'border-b border-[#39ff14]' : ''}`} onClick={() => handleLanguageSelect('Python')}>Python</div>

              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem onClick={() => handleLanguageSelect('Go')}>
              <div className={`${activeCategory === 'Go' ? 'border-b border-[#39ff14]' : ''}`} onClick={() => handleLanguageSelect('Go')}>Go</div>

              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  );
}
