'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { Briefcase, User, LoaderPinwheel } from 'lucide-react';

const ProjectNavButtons: React.FC = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      
      <Button 
        variant="outline"
        className="flex items-center gap-2 border bg-card/50 text-primary hover:bg-card"
        onClick={() => scrollToSection('work-projects')}
      >
        <Briefcase className="w-4 h-4" />
        Work
      </Button>
      
      <Button 
        variant="outline"
        className="flex items-center gap-2 border bg-card/50 text-primary hover:bg-card"
        onClick={() => scrollToSection('independent-projects')}
      >
        <LoaderPinwheel className="w-4 h-4" />
        Independent
      </Button>
      
      <Button 
        variant="outline"
        className="flex items-center gap-2 border bg-card/50 text-primary hover:bg-card"
        onClick={() => scrollToSection('personal-projects')}
      >
        <User className="w-4 h-4" />
        Personal
      </Button>
    </div>
  );
};

export default ProjectNavButtons;
