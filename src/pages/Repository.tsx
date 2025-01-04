
import SpecificHeader from "@/components/SpecificHeader"
import { useParams } from "react-router-dom"
 import { useEffect, useState } from "react"
 import axios from "axios"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code } from "lucide-react"
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
            const response =  await axios.get(`http://localhost:3001/api/repo/${language}`)
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
        <h1 className="text-3xl font-anzo capitalize text-center  mb-8 text-black">
          {language} Repositories 
        </h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {repo.map((repos) => (
            <Card key={repos.id} className="border-2 border-black hover:shadow-lg">
              <CardHeader className="border-b border-black">
                <CardTitle className="flex items-center space-x-2 text-black">
                  <Code className="h-5 w-5" />
                  <span>{repos.name}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="text-sm text-gray-600 space-y-2">
                  <p><strong>Forks:</strong> {repos.forks}</p>
                  <p><strong>Stars:</strong> {repos.stars}</p>
                 
                  <p>
                    <strong>URL:</strong>{" "}
                    <a
                      href={repos.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      {repos.url}
                    </a>
                  </p>
                  <p><strong>Last Updated:</strong> {new Date(repos.updatedAt).toLocaleDateString()}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </main>
  
   </div>
        </>
    )
}