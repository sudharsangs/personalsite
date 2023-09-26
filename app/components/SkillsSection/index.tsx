import Image from 'next/image';
import React from 'react';

const SkillsSection: React.FC = () => {
  const skills = [
    'HTML',
    'CSS',
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
    <section className="bg-gray-700 px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-lg mt-6 p-10">
      <div className="container mx-auto">
        <h2 className="text-2xl mb-2">Skills</h2>
        <p className='mb-4 text-gray-300'>I love learning new things in computer science and web development. I use what I learn to solve real problems. Here are some technologies I enjoy using:</p>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="flex w-full justify-center items-center flex-col">
              <div
                className="bg-slate-50 shadow-xl ring-1 ring-gray-900/5 rounded-md p-2 flex justify-center items-center w-16"
              >
                <Image src={`/skills/${skill?.toLowerCase()}.svg`} alt={skill} width={50} height={50} />
              </div>
              <p className='capitalize mt-1'>{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
