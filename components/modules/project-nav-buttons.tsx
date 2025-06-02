'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { Briefcase, User, LoaderPinwheel, Filter } from 'lucide-react';

const ProjectNavButtons: React.FC = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      <Button 
        variant="outline" 
        className="flex items-center gap-2 border-emerald-700/30 bg-emerald-900/10 text-emerald-400 hover:bg-emerald-900/20"
        onClick={() => scrollToSection('all-projects')}
      >
        <Filter className="w-4 h-4" />
        All Projects
      </Button>
      
      <Button 
        variant="outline"
        className="flex items-center gap-2 border-blue-700/30 bg-blue-900/10 text-blue-400 hover:bg-blue-900/20"
        onClick={() => scrollToSection('work-projects')}
      >
        <Briefcase className="w-4 h-4" />
        Work
      </Button>
      
      <Button 
        variant="outline"
        className="flex items-center gap-2 border-amber-700/30 bg-amber-900/10 text-amber-400 hover:bg-amber-900/20"
        onClick={() => scrollToSection('independent-projects')}
      >
        <LoaderPinwheel className="w-4 h-4" />
        Independent
      </Button>
      
      <Button 
        variant="outline"
        className="flex items-center gap-2 border-emerald-700/30 bg-emerald-900/10 text-emerald-400 hover:bg-emerald-900/20"
        onClick={() => scrollToSection('personal-projects')}
      >
        <User className="w-4 h-4" />
        Personal
      </Button>
    </div>
  );
};

export default ProjectNavButtons;
