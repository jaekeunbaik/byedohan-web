import { Zap } from 'lucide-react';

const techStack = [
  { name: 'React', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'TypeScript', level: 80 },
  { name: 'Node.js', level: 75 },
  { name: 'HTML/CSS', level: 90 },
  { name: 'Redux', level: 70 },
];

const TechStackSection = () => {
  return (
    <section className="mb-20 transition-all duration-1000 ease-in-out delay-500 transform translate-y-0 opacity-100">
      <h2 className="text-3xl font-bold mb-10 text-center">기술 스택</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium text-lg">{tech.name}</h3>
              <Zap size={20} className="text-yellow-500" />
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${tech.level}%`, transition: 'width 1.5s ease-in-out' }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStackSection;
