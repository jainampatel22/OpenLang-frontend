"use client"
 
import * as React from "react"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
 import { useNavigate } from "react-router-dom"
type Checked = DropdownMenuCheckboxItemProps["checked"]
 
export default function SpecificHeader(){
const navigate = useNavigate()
    const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
  const [showPanel, setShowPanel] = React.useState<Checked>(false)
 
    return (
        <>
        <div className="h-20 flex font-anzo  border-b-2 border-black ">
            <div className="text-black font-anzo text-3xl flex items-center ml-5 ">
                OpenLang
            </div>
            <div className="flex justify-end ml-[78%] gap-10  items-center">
            <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="bg-black text-white text-md rounded-full hover:bg-white hover:text-black">Explore More</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mt-4 mr-2 rounded-xl bg-gray-800 text-white font-anzo">
        <DropdownMenuLabel className="font-lg">Select Repositories</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
    
       onClick={()=>navigate('/ts-repos')}
        >
        TypeScript
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
   onClick={()=>navigate('/ts-repos')}
      
        >
        JavaScript
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
         
         onClick={()=>navigate('/ts-repos')}
      
          >
          C++
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
         
         onClick={()=>navigate('/ts-repos')}
      
          >
          Python
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
         
         onClick={()=>navigate('/ts-repos')}
      
          >
         GO
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>            
            </div>
        </div>
        </>
    )
}