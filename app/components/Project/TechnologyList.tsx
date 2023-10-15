import React from 'react';

interface TechnologyListProps {
  technologies: string[];
}

const TechnologyList: React.FC<TechnologyListProps> = ({ technologies }) => {
  return (
    <ul className="flex flex-wrap gap-1.5 text-sm mt-3">
      {technologies.map((technology, index) => (
        <li key={index} className="shadow-md text-xs  font-medium bg-gray-600/20 text-gray-300  px-3 py-1 rounded-md">
          {technology}
        </li>
      ))}
    </ul>
  );
};

export default TechnologyList;
