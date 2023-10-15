import Image from 'next/image';
import React from 'react';

const SkillsSection: React.FC = () => {
  const skills = [
    'HTML',
    'CSS',
    'tailwind',
    'javascript',
    'TypeScript',
    'react',
    'nextJS',
    'nodeJS',
    'go',
    'docker',
    'python',
    'postgres',
    'mongoDB',
  ];

  return (
    <section className="my-6 pb-10">
      <div className="container mx-auto">

        <div className="flex  justify-between items-center">
          <p className='text-2xl border-r-4 pr-5 hidden sm:flex'>Tech Stack</p>
          <div className='overflow-hidden sm:w-4/5 w-screen relative'>
            <div className='flex gap-2 skills-animation shadow-xl'>
              {skills.map((skill, index) => (
                <div key={index} className="flex w-full justify-center items-center flex-col">
                  <div
                    className="bg-slate-50 shadow-xl ring-1 ring-gray-900/5 rounded-full p-4 flex justify-center items-center w-16"
                  >
                    <Image src={`/skills/${skill?.toLowerCase()}.svg`} alt={skill} width={50} height={50} />
                  </div>
                  <p className='capitalize mt-1'>{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
