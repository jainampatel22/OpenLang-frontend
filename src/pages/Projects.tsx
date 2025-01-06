'use client'
import { useEffect, useState } from 'react';
import { Code, Star, GitFork, Globe, Calendar } from 'lucide-react';
import axios from 'axios';
import SpecificHeader from '@/components/SpecificHeader';

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

export default function Projects() {
  const [repos, setRepos] = useState<RepoType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRepos = async () => {
    try {
      const response = await axios.get('https://openlang-backend.onrender.com/api/active-repos');
      setRepos(response.data);
    } catch (error) {
      setError('Failed to fetch repositories');
      console.error("Failed to fetch repositories:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white ">
      <SpecificHeader />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-xl text-gray-300 -ml-  sm:text-3xl md:text-4xl font-mono sm:text-center font-bold mb-8 sm:mb-12">
           Buzzing Repositories
        </h1>

        {isLoading && (
          <p className="text-center text-gray-600">{isLoading && (
            <div className="grid gap-6 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-items-center">
              {[...Array(6)].map((_, idx) => ( // Generate 6 skeleton cards
                <div
                  key={idx}
                  className="w-[315px] h-[315px] border shadow-inner bg-white/10 backdrop-blur-lg border-gray-300 rounded-2xl animate-pulse"
                  style={{
                    clipPath:
                      'polygon(12px 0, calc(100% - 12px) 0, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px), 0 12px)',
                  }}
                >
                  {/* Name Skeleton */}
                  <div className="h-8 bg-gray-400/30 rounded w-3/4 mx-auto my-4"></div>
          
                  {/* Placeholder for details */}
                  <div className="p-4 space-y-3">
                    <div className="h-6 bg-gray-400/30 rounded w-1/2 mx-auto"></div>
                    <div className="h-6 bg-gray-400/30 rounded w-2/3 mx-auto"></div>
                    <div className="h-6 bg-gray-400/30 rounded w-1/3 mx-auto"></div>
                  </div>
          
                  {/* Footer skeleton */}
                  <div className="h-6 bg-gray-400/30 rounded w-1/3 mx-auto mt-6"></div>
                </div>
              ))}
            </div>
          )}
          </p>
        )}

        {error && (
          <p className="text-center text-red-600">{error}</p>
        )}

       <div className="grid gap-6 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-items-center">
{
  repos.map((repo)=>(
<div className=' w-[315px] h-[315px] border shadow-inner bg-white/40 backdrop-blur-lg bg-cover bg-center border-gray-300 rounded-2xl hover:border-[#39ff14] '  style={{
    clipPath: 'polygon(12px 0, calc(100% - 12px) 0, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px), 0 12px)', backgroundImage:'url("https://intent-js.ramx.in/_next/image?url=%2Ffeature%2F10.png&w=384&q=75")'
  }}>
    <div className="text-center capitalize p-2 sm:p-3 text-[#39ff14]  font-anzo text-lg sm:text-xl border-black truncate">
                {repo.name}
              </div>
    <div className='text-center mt- h-2/3  backdrop-blur-lg  ' // Semi-transparent background
  >
              <div className="p-3 space-y-2">
                {/* Stars */}
                <div className="flex items-center ">
                  <Star className="h-6 w-6 mt-4 ml-2 mr-4 flex-shrink-0" />
                  <span className="text-lg mt-3  font-anzo">{repo.stars} Stars</span>
                </div>

                {/* Forks */}
                <div className="flex items-center">
                  <GitFork className="h-6 w-6  mr-4 ml-2 mt-4 flex-shrink-0" />
                  <span className="text-lg mt-3 font-anzo"> {repo.forks} Forks</span>
                </div>

                {/* Languages */}
                <div className="flex items-center">
                  <Code className="h-6 w-6 mr-4 mt-4 ml-2  flex-shrink-0" />
                  <span className="text-lg truncate mt-3 font-anzo">{repo.languages}</span>
                </div>

                {/* Updated Date */}
                <div className="flex items-center">
                  <Calendar className="h-6 w-6 mr-4 ml-2 mt-4 flex-shrink-0" />
                  <span className="text-lg mt-3 font-anzo">Updated on {new Date(repo.updatedAt).toLocaleDateString()} </span>
                </div>
              </div>
              <div className="border-t border-[#39ff14] flex justify-end mr-5 p-4 ml-5 items-end  sm:py-4">
                <Globe className="h-6 w-6 mr-1.5   flex-shrink-0 text-[#39ff14] " />
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline font-anzo text-center text-[#39ff14] mr-6 text-xl sm:text-base truncate"
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
  );
}

