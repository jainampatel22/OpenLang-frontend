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
      const response = await axios.get('http://localhost:3001/api/active-repos');
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
    <div className="min-h-screen ">
      <SpecificHeader />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-xl  -ml-  sm:text-3xl md:text-4xl font-mono sm:text-center font-bold mb-8 sm:mb-12">
          🚀 Buzzing Repos
        </h1>

        {isLoading && (
          <p className="text-center text-gray-600">Loading repositories...</p>
        )}

        {error && (
          <p className="text-center text-red-600">{error}</p>
        )}

        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
          {repos.map((repo) => (
            <div key={repo.id} className="sm:w-full -ml-32 sm:ml-5 gap-3 mt-3  sm:max-w-[280px] h-auto border-2 font-anzo border-black rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              {/* Header */}
              <div className="text-center capitalize p-2 sm:p-3 border-b-2 font-anzo text-lg sm:text-xl border-black truncate">
                {repo.name}
              </div>

              <div className="p-3 space-y-2">
                {/* Stars */}
                <div className="flex items-center">
                  <Star className="h-4 w-4 mr-1.5 flex-shrink-0" />
                  <span className="text-sm">{repo.stars} stars</span>
                </div>

                {/* Forks */}
                <div className="flex items-center">
                  <GitFork className="h-4 w-4 mr-1.5 flex-shrink-0" />
                  <span className="text-sm">{repo.forks} forks</span>
                </div>

                {/* Languages */}
                <div className="flex items-center">
                  <Code className="h-4 w-4 mr-1.5 flex-shrink-0" />
                  <span className="text-sm truncate">{repo.languages}</span>
                </div>

                {/* Updated Date */}
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1.5 flex-shrink-0" />
                  <span className="text-sm">Updated on {new Date(repo.updatedAt).toLocaleDateString()}</span>
                </div>
              </div>

              {/* Footer Section */}
              <div className="border-t-2 border-black flex justify-center items-center p-2 sm:p-3">
                <Globe className="h-4 w-4 mr-1.5 flex-shrink-0" />
                <a
                  href={repo.url}
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
  );
}

