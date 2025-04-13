import { Github, Linkedin, Mail } from 'lucide-react';

const HeaderSection = () => {
  return (
    <header className="py-20 text-center transition-opacity duration-1000 ease-in-out opacity-100">
      <h1 className="text-5xl font-bold mb-4">홍길동</h1>
      <h2 className="text-2xl text-blue-600 dark:text-blue-400 mb-6">프론트엔드 개발자</h2>
      <div className="flex justify-center space-x-4">
        <a
          href="#"
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
        >
          <Github size={24} />
        </a>
        <a
          href="#"
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
        >
          <Linkedin size={24} />
        </a>
        <a
          href="#"
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
        >
          <Mail size={24} />
        </a>
      </div>
    </header>
  );
};

export default HeaderSection;
