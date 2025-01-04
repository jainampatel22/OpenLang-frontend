import { useEffect, useState } from 'react';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {  Code } from 'lucide-react';
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
  starts: number;
  updatedAt: Date;
  url: string;
  recentIssues: IssueType[];
}

export default function Projects() {
  const [repo, setRepo] = useState<RepoType[]>([]);

  const fetchRepos = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/active-repos');
      setRepo(response.data);
    } catch (error) {
      console.error("Failed to fetch repositories:", error);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  return (
    <>
    
  <SpecificHeader/>
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      {/* Sidebar */}
     

      {/* Main Content */}
      <main className="flex-1 p-6 bg-white">
        <h1 className="text-4xl font-anzo text-center font-bold mb-8 text-black">
          Buzzing Repos
        </h1>

        {/* Search bar */}
  

        {/* Repository Grid */}
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
                  <p><strong>Stars:</strong> {repos.starts}</p>
                  <p><strong>Languages:</strong> {repos.languages}</p>
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
  );
}
