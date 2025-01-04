
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
       
        <SpecificHeader/>
        <div className="flex flex-col md:flex-row min-h-screen bg-white">
        <main className="flex-1 p-6 bg-white">
        <h1 className="text-xl capitalize -ml-  sm:text-3xl md:text-4xl font-mono sm:text-center font-bold mb-8 sm:mb-12">
          {language} Repositories 
        </h1>
       
<div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
          {repo.map((repos) => (
            <div key={repos.id} className="sm:w-full -ml-32 sm:ml-5 gap-3 mt-3  sm:max-w-[280px] h-auto border-2 font-anzo border-black rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              {/* Header */}
              <div className="text-center capitalize p-2 sm:p-3 border-b-2 font-anzo text-lg sm:text-xl border-black truncate">
                {repos.name}
              </div>

              <div className="p-3 space-y-2">
                {/* Stars */}
                <div className="flex items-center">
                  <Star className="h-4 w-4 mr-1.5 flex-shrink-0" />
                  <span className="text-sm">{repos.stars} stars</span>
                </div>

                {/* Forks */}
                <div className="flex items-center">
                  <GitFork className="h-4 w-4 mr-1.5 flex-shrink-0" />
                  <span className="text-sm">{repos.forks} forks</span>
                </div>

                {/* Languages */}


                {/* Updated Date */}
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1.5 flex-shrink-0" />
                  <span className="text-sm">Updated on {new Date(repos.updatedAt).toLocaleDateString()}</span>
                </div>
              </div>

              {/* Footer Section */}
              <div className="border-t-2 border-black flex justify-center items-center p-2 sm:p-3">
                <Globe className="h-4 w-4 mr-1.5 flex-shrink-0" />
                <a
                  href={repos.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline font-anzo text-center text-sm sm:text-base truncate"
                >
                  View Repository
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
  
   </div>
        </>
    )
}