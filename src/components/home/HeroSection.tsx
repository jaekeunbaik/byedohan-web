"use client";
import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const HeroSection = () => {
  // 애니메이션을 위한 상태
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 컴포넌트 마운트 후 애니메이션 시작
    setIsVisible(true);
  }, []);

  return (
    <section className="w-full py-16 md:py-24 bg-white dark:bg-gray-900 px-4 overflow-hidden">
      <div
        className={`max-w-5xl mx-auto transition-all duration-1000 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* 왼쪽: 프로필 이미지 */}
          <div className="w-full md:w-2/5 flex justify-center md:justify-start">
            <div className="relative">
              {/* 배경 원 장식 */}
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-blue-100 dark:bg-blue-900/30 rounded-full blur-md"></div>
              <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-indigo-100 dark:bg-indigo-900/30 rounded-full blur-md"></div>

              {/* 프로필 이미지 */}
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
                {/* 기본 이미지 (실제 이미지 URL로 변경해주세요) */}
                <img
                  src="/api/placeholder/300/300"
                  alt="홍길동 프로필"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* 오른쪽: 텍스트 내용 */}
          <div className="w-full md:w-3/5 text-center md:text-left">
            <div className="inline-block px-4 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-4">
              백엔드 & 프론트엔드 개발자
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-3 text-gray-900 dark:text-white">
              홍길동
            </h1>

            <div className="flex items-center gap-2 mb-6 justify-center md:justify-start">
              <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
              <p className="text-gray-600 dark:text-gray-400">현재 구직중</p>
            </div>

            <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
              Java와 Spring 기반의 백엔드 개발을 주력으로 하며, Vue.js를 활용한
              프론트엔드 업무도 병행하고 있습니다. 다양한 기업의 ERP, 인사
              시스템, ISU 시스템을 구축 및 운영하며 실무에서 오라클, MSSQL,
              MySQL 등 여러 DBMS를 경험했습니다.
              <br />
              <br />
              현재는 Go와 React, PostgreSQL, MongoDB 기반의 사이드 프로젝트를
              진행하며 풀스택 개발자로 성장하고 있습니다. 고객과의 소통을
              중요하게 생각하며, 요구사항을 기술로 풀어내는 과정에 강점을 갖고
              있습니다.
            </p>

            {/* 기술 스택 태그 */}
            <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
              {[
                "Java",
                "Python",
                "Spring",
                "MongoDB",
                "React",
                "Go",
                "Oracle",
                "MySQL",
                "PostgreSQL",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* 소셜 링크와 이력서 다운로드 버튼 */}
            <div className="flex gap-3 mb-6 justify-center md:justify-start">
              <a
                href="https://github.com/your-github"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors flex items-center justify-center"
                aria-label="GitHub 프로필"
              >
                <Github
                  size={20}
                  className="text-gray-700 dark:text-gray-300"
                />
              </a>
              <a
                href="https://linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors flex items-center justify-center"
                aria-label="LinkedIn 프로필"
              >
                <Linkedin
                  size={20}
                  className="text-gray-700 dark:text-gray-300"
                />
              </a>
              <a
                href="mailto:your@email.com"
                className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors flex items-center justify-center"
                aria-label="이메일 보내기"
              >
                <Mail size={20} className="text-gray-700 dark:text-gray-300" />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors"
              >
                <Download size={16} />
                <span>이력서</span>
              </a>
            </div>

            {/* 간단한 통계 */}
            <div className="flex gap-6 justify-center md:justify-start">
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  4+
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">경력</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  12+
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  프로젝트
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  8+
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  기술 스택
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
