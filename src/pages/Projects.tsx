'use client'

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

  const fetchRepos = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/active-repos');
      setRepos(response.data);
    } catch (error) {
      console.error("Failed to fetch repositories:", error);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <SpecificHeader />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl sm:text-4xl font-anzo text-center font-bold mb-8 text-black">
          🚀 Buzzing Repos
        </h1>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo) => (
            <Card 
              key={repo.id} 
              className="rounded-xl border border-indigo-200 bg-white hover:bg-indigo-50 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 shadow-md hover:shadow-xl rounded-lg overflow-hidden mx-2 sm:mx-0"
            >
              <CardHeader className="border-b border-indigo-100 bg-white">
                <CardTitle className="flex items-center space-x-2 text-indigo-700">
                  <Code className="h-5 w-5" />
                  <span className='capitalize truncate'>{repo.name}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4 space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <GitFork className="h-4 w-4 mr-2 flex-shrink-0 text-pink-500" />
                  <span><strong className="text-black">Forks:</strong> {repo.forks}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Star className="h-4 w-4 mr-2 flex-shrink-0 text-yellow-500" />
                  <span><strong className="text-black">Stars:</strong> {repo.stars}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Code className="h-4 w-4 mr-2 flex-shrink-0 text-green-500" />
                  <span className="truncate"><strong className="text-black">Languages:</strong> {repo.languages}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Globe className="h-4 w-4 mr-2 flex-shrink-0 text-blue-500" />
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 truncate transition-colors duration-300"
                  >
                    {repo.url}
                  </a>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="h-4 w-4 mr-2 flex-shrink-0 text-purple-500" />
                  <span><strong className="text-black">Last Updated:</strong> {new Date(repo.updatedAt).toLocaleDateString()}</span>
                </div>
              </CardContent>
            </Card>
            
          ))}
          
        </div>
      </main>
    </div>
  );
}

