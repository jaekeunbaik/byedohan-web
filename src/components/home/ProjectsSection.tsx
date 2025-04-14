"use client";

import { useState, useEffect } from "react";
import { Github, ExternalLink, Star } from "lucide-react";

const ProjectsSection = () => {
  const [filter, setFilter] = useState("all");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("projects");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  // 프로젝트 데이터
  const projects = [
    {
      id: 1,
      title: "인사관리 시스템",
      description:
        "기업용 인사관리 시스템으로, 직원 정보 관리, 휴가 관리, 근태 관리 기능을 제공합니다.",
      image: "/api/placeholder/600/400",
      technologies: ["Java", "Spring Boot", "Oracle", "React"],
      category: "web",
      githubUrl: "https://github.com/username/project1",
      liveUrl: "https://project1-demo.com",
      featured: true,
    },
    {
      id: 2,
      title: "쇼핑몰 플랫폼",
      description:
        "중소기업을 위한 쇼핑몰 플랫폼으로, 상품 관리, 결제 시스템, 배송 관리 기능을 통합했습니다.",
      image: "/api/placeholder/600/400",
      technologies: ["Java", "Spring", "MySQL", "Vue.js"],
      category: "web",
      githubUrl: "https://github.com/username/project2",
    },
    {
      id: 3,
      title: "데이터 분석 대시보드",
      description:
        "실시간 데이터 분석을 위한 대시보드로, 사용자 행동 패턴과 매출 데이터를 시각화합니다.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "Flask", "PostgreSQL", "D3.js"],
      category: "data",
    },
    {
      id: 4,
      title: "채팅 애플리케이션",
      description:
        "실시간 채팅 기능을 제공하는 웹 애플리케이션으로, 그룹 채팅과 파일 공유 기능을 지원합니다.",
      image: "/api/placeholder/600/400",
      technologies: ["Node.js", "Socket.io", "MongoDB", "React"],
      category: "app",
      githubUrl: "https://github.com/username/project4",
    },
    {
      id: 5,
      title: "블록체인 거래 시스템",
      description:
        "스마트 컨트랙트를 활용한 안전한 거래 시스템으로, 계약 이행을 자동화했습니다.",
      image: "/api/placeholder/600/400",
      technologies: ["Solidity", "Ethereum", "Web3.js", "React"],
      category: "web",
    },
    {
      id: 6,
      title: "API 게이트웨이",
      description:
        "마이크로서비스 아키텍처를 위한 API 게이트웨이로, 라우팅, 인증, 로드 밸런싱 기능을 제공합니다.",
      image: "/api/placeholder/600/400",
      technologies: ["Go", "gRPC", "Docker", "Kubernetes"],
      category: "backend",
      featured: true,
    },
  ];

  // 필터링된 프로젝트
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  // 카테고리 목록
  const categories = [
    { value: "all", label: "전체" },
    { value: "web", label: "웹 개발" },
    { value: "app", label: "애플리케이션" },
    { value: "backend", label: "백엔드" },
    { value: "data", label: "데이터" },
  ];

  return (
    <section
      id="projects"
      className="w-full py-24 bg-gray-50 dark:bg-gray-800 px-4 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              프로젝트
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              다양한 기술 스택을 활용하여 개발한 프로젝트들입니다. 각 프로젝트는
              특정 문제를 해결하기 위해 설계되었으며, 실제 비즈니스 환경에
              적용된 사례도 포함되어 있습니다.
            </p>
          </div>

          {/* 필터 카테고리 */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setFilter(category.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === category.value
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-900"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* 프로젝트 그리드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className={`bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group ${
                  project.featured
                    ? "border-2 border-blue-500 dark:border-blue-400"
                    : ""
                }`}
              >
                {/* 프로젝트 이미지 */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {project.featured && (
                    <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs px-2 py-1 rounded-full flex items-center">
                      <Star size={12} className="mr-1" />
                      추천 프로젝트
                    </div>
                  )}
                </div>

                {/* 프로젝트 정보 */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm line-clamp-3">
                    {project.description}
                  </p>

                  {/* 기술 스택 태그 */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* 링크 버튼 */}
                  <div className="flex justify-between">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm"
                    ></a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm"
                      >
                        <ExternalLink size={16} className="mr-1" /> 데모 보기
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 더 많은 프로젝트 GitHub 링크 */}
          <div className="text-center mt-12">
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors"
            >
              <Github size={18} className="mr-2" />더 많은 프로젝트 보기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
