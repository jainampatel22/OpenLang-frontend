import { useState,useEffect } from "react"
import axios from "axios"
import {  Globe } from "lucide-react";
import SpecificHeader from "@/components/SpecificHeader";
interface issueType{
id:string,
title:string,
html_url:string;
created_at:Date;
}
export default function OpenSource(){
    const [issue, setIssue] = useState<issueType[]>([])
const fetchissues = async()=>{
const response =await axios.get('https://openlang-backend-pcy1.onrender.com/api/active-issues')

if (Array.isArray(response.data.items)) {
    setIssue(response.data.items); // Use the `items` array
  
  } else {
    console.error("Unexpected response format:", response.data);
    setIssue([]); // Ensure `issue` is an array
  }
}
useEffect(()=>{
fetchissues()
},[])
    
    return (
        <>
        <div className="bg-black text-white min-h-screen">
      <SpecificHeader />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-center -ml-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-anzo mb-4">
          Explore Good First Issues Opened
        </h1>
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-anzo mb-8">
          within last few <span className="text-[#39ff14]">Hours</span> or <span className="text-[#39ff14]">Days</span>.
        </h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {issue.map((issues) => (
            <div 
              key={issues.id}
              className='w-full max-w-[302px] h-[302px] mt-8 border shadow-inner bg-white/40 backdrop-blur-lg bg-cover bg-center border-gray-300 rounded-2xl hover:border-[#39ff14] transform transition-all duration-300 hover:scale-105'  
              style={{
                clipPath: 'polygon(12px 0, calc(100% - 12px) 0, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px), 0 12px)', 
                backgroundImage: 'url("https://intent-js.ramx.in/_next/image?url=%2Ffeature%2F1.png&w=384&q=75")'
              }}
            >
              <div className='h-full pt-14 backdrop-blur-lg bg-gradient-to-b from-transparent to-transparent p-4'>
                <h3 className="text-[#39ff14] ml-3 font-anzo text-2xl mb-2">
                  Issue: <span className="text-white text-base">{issues.title.slice(0, 30)}...</span>
                </h3>
                <p className="font-anzo text-[#39ff14]  ml-3 mt-10 text-xl mb-4">
                  Updated On: <span className="text-white text-base">{new Date(issues.created_at).toLocaleDateString()}</span>
                </p>
                <a 
                  href={issues.html_url}
                  className="inline-flex items-center mt-7  ml-3 text-[#39ff14] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Globe className="h-6 w-6 mr-2 flex-shrink-0" />
                  <span className="text-2xl">View</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
        </>
    )
}