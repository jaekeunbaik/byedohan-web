import { ExternalLink } from 'lucide-react';

const featuredProjects = [
  {
    id: 1,
    title: 'AI 기반 웹 애플리케이션',
    description: 'React와 TensorFlow.js를 활용한 이미지 인식 웹 앱',
    tech: ['React', 'TensorFlow.js', 'Tailwind CSS'],
    image: '/api/placeholder/450/250',
  },
  {
    id: 2,
    title: '반응형 eCommerce 플랫폼',
    description: 'MERN 스택으로 개발한 완전 반응형 온라인 쇼핑몰',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    image: '/api/placeholder/450/250',
  },
];

const ProjectSection = () => {
  return (
    <section className="transition-all duration-1000 ease-in-out delay-700 transform translate-y-0 opacity-100">
      <h2 className="text-3xl font-bold mb-10 text-center">주요 프로젝트</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {featuredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a href="#" className="flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline">
                자세히 보기 <ExternalLink size={16} className="ml-1" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
