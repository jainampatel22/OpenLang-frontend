"use client";

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

  const handleLanguageSelect = (language: Language) => {
    navigate(languageUrls[language] || "/"); // Default to home if the language is not found
  };

  return (
    <>
      <div className="h-20 flex font-anzo border-b-2 border-black">
        <div className="text-black font-anzo  text-lg sm:text-3xl ml-2 flex items-center sm:ml-5 cursor-pointer" onClick={()=>navigate('/')}>
          OpenLang
        </div>
        <div className="flex justify-end ml-[40%] text-sm sm:text-2xl sm:ml-[80%] gap-10 items-center">
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
                TypeScript
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem onClick={() => handleLanguageSelect('JavaScript')}>
                JavaScript
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem onClick={() => handleLanguageSelect('Cpp')}>
                C++
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem onClick={() => handleLanguageSelect('Python')}>
                Python
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem onClick={() => handleLanguageSelect('Go')}>
                Go
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  );
}
