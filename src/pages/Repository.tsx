
import SpecificHeader from "@/components/SpecificHeader"
import { useParams } from "react-router-dom"
 import { useEffect, useState } from "react"
 import axios from "axios"
import { Calendar, GitFork, Globe, Star } from "lucide-react"
interface IssueType {
    id: string;
    title: string;
    url: string;
    description: string;
  }
  
  interface RepoType {
    id: string;
    languages: string;
    forks: number;
    name: string;
    recentPRs: string[];
    stars: number;
    updatedAt: Date;
    url: string;
    recentIssues: IssueType[];
  }
export default function Repository(){
    const {language} = useParams()
    const [repo, setRepo] = useState<RepoType[]>([])
    const fetchrepo = async()=>{
        try {
            const response =  await axios.get(`https://openlang-backend.onrender.com/api/repo/${language}`)
    setRepo(response.data)
    console.log(response.data)
        } catch (error) {
            console.error("Failed to fetch repositories:", error);
        }
       }
       useEffect(()=>{
        fetchrepo()
       },[language])
      return (
        <>
        <div className="bg-black text-white">       
        <SpecificHeader/>
        <div className="flex flex-col md:flex-row min-h-screen ">
        <main className="flex-1 p-6 ">
        <h1 className="text-xl capitalize -ml-  sm:text-3xl md:text-4xl font-mono sm:text-center font-bold mb-8 sm:mb-12">
          {language} Repositories 
        </h1>
       
        <div className="grid  sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-items-center">
{
  repo.map((repo)=>(
<div className=' w-[290px] h-[290px] border shadow-lg bg-white/40 backdrop-blur-lg bg-cover bg-center border-gray-300 hover:border-[#39ff14] rounded-2xl  '  style={{
    clipPath: 'polygon(12px 0, calc(100% - 12px) 0, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px), 0 12px)', backgroundImage:'url("https://intent-js.ramx.in/_next/image?url=%2Ffeature%2F10.png&w=384&q=75")'
  }}>
    <div className="text-center capitalize p-2 sm:p-3  font-anzo text-lg sm:text-xl border-black truncate">
                {repo.name}
              </div>
    <div className='text-center mt- h-2/3  backdrop-blur-lg  ' // Semi-transparent background
  >
              <div className="p-3 space-y-2">
                {/* Stars */}
                <div className="flex items-center ">
                  <Star className="h-6 w-6 mt-5 ml-2 mr-4 flex-shrink-0" />
                  <span className="text-lg mt-3  font-anzo">{repo.stars} Stars</span>
                </div>

                {/* Forks */}
                <div className="flex items-center">
                  <GitFork className="h-6 w-6  mr-4 ml-2 mt-7 flex-shrink-0" />
                  <span className="text-lg mt-3 font-anzo"> {repo.forks} Forks</span>
                </div>


               
                {/* Updated Date */}
                <div className="flex items-center">
                  <Calendar className="h-6 w-6 mr-4 ml-2 mt-7 flex-shrink-0" />
                  <span className="text-lg mt-3 font-anzo">Updated on {new Date(repo.updatedAt).toLocaleDateString()} </span>
                </div>
              </div>
              <div className="border-t border-[#39ff14] flex justify-end mr-5 ml-5 items-end  sm:py-4">
                <Globe className="h-6 w-6 mr-1.5   flex-shrink-0 text-[#39ff14] " />
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline font-anzo text-center -mt-4 text-[#39ff14] mr-6 text-xl sm:text-base truncate"
                >
                  View Repository
                </a>
              </div>
           

    </div>
    
  </div>

  ))
}
  </div>
      </main>
  
   </div>
   </div>

        </>
    )
}