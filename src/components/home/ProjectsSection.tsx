'use client';

import { Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="w-full py-24 text-center bg-white dark:bg-gray-900 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">홍길동</h1>
        <h2 className="text-2xl text-blue-600 dark:text-blue-400 mb-6">
          프론트엔드 개발자
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
          Java와 Spring 기반 백엔드 경험을 바탕으로<br />
          React, Vue, Node 등 다양한 기술 스택을 활용하여<br />
          사용자 중심의 서비스를 만드는 것을 좋아합니다.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:your@email.com"
            className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
