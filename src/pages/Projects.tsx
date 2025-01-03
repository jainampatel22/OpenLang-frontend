import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Code, Star, GitFork } from 'lucide-react'

const categories = [
  { id: 'typescript', name: 'TypeScript' },
  { id: 'javascript', name: 'JavaScript' },
  { id: 'c', name: 'C' },
  { id: 'python', name: 'Python' },
  { id: 'go', name: 'Go' },
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-black p-6 text-white">
        <h2 className="text-2xl font-bold mb-6">Categories</h2>
        <div className="space-y-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "secondary" : "ghost"}
              className={`w-full rounded-full justify-start text-left hover:bg-white  ${
                selectedCategory === category.id ? 'bg-white text-black' : 'text-white hover:bg-gray-800'
              }`} 
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 bg-white">
        <h1 className="text-4xl font-bold mb-8 text-black">Buzzing Repos</h1>
        
        {/* Search bar */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input 
              type="search" 
              placeholder="Search repositories..." 
              className="pl-10 pr-4 py-2 w-full border-black focus:ring-black focus:border-black"
            />
          </div>
        </div>

        {/* Repository grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, index) => (
            <Card key={index} className="border-2 border-black">
              <CardHeader className="border-b border-black">
                <CardTitle className="flex items-center space-x-2 text-black">
                  <Code className="h-5 w-5" />
                  <span>Repository {index + 1}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-sm text-gray-600 mb-4">
                  This is a sample description for Repository {index + 1}. It showcases the project's main features and goals.
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span className="flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    {Math.floor(Math.random() * 1000)}
                  </span>
                  <span className="flex items-center">
                    <GitFork className="h-4 w-4 mr-1" />
                    {Math.floor(Math.random() * 100)}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}

