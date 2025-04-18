"use client";
import { useState, useEffect } from "react";
import {
  Code,
  Database,
  Server,
  Languages,
  Users,
  Clock,
  Medal,
  Coffee,
} from "lucide-react";

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("experience");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 컴포넌트 가시성을 위한 스크롤 감지
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // 10% 가시성에서 트리거
    );

    const element = document.getElementById("about");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  // 경력 사항
  const experiences = [
    {
      period: "2025.05 - 현재",
      position: "부산은행 단기채권 시스템",
      project: "한국 클라우드",
      description:
        "부산은행의 단기채권 시스템을 클라우드로 이전하는 프로젝트에 참여. Spring Boot 기반의 REST API를 구축. 데이터베이스 마이그레이션 및 성능 최적화 작업 수행.",
      technologies: ["Java", "Spring Boot", "Oracle", "Redis", "Docker"],
    },
    {
      period: "2024.05 - 현재",
      position:
        "건설근로자 공제회 고도화 작업/데이터베이스 마이그레이션/EAI 연동",
      project: "한국 클라우드",
      description:
        "공제회 내부 CRM 시스템 고도화 및 클라우드 이전 프로젝트에 참여. Spring Boot 기반 REST API 구축과 Redis 캐시 처리로 응답 속도 개선. EAI 시스템과의 연동을 통해 데이터 흐름 최적화.",
      technologies: ["Java", "Spring Boot", "Oracle", "Redis", "Docker"],
    },
    {
      period: "2023 - 2024",
      position: "보스톤 사이언티픽 코리아",
      project: "그레이 소프트",
      description:
        "글로벌 의료기기 회사의 내부 시스템 통합 프로젝트 수행. 복잡한 업무 로직을 Java 기반 백엔드로 구현하고, 배치프로그램 개발. Spring Batch를 활용한 대량 데이터 처리 및 스케줄링. REALGRID 시스템과의 연동을 통한 데이터 통합.",
      technologies: ["Java", "Spring Boot", "Oracle", "Redis", "Docker"],
    },
    {
      period: "2022 - 2023",
      position: "이수시스템 웹/앱 유지보수",
      project: "그레이 소프트",
      description:
        "인사 시스템의 유지보수 및 기능 개선 업무 담당. RESTful API 설계, 프론트엔드와의 연동을 위한 Ajax 통신 처리, 복잡한 SQL 튜닝을 통한 조회 속도 30% 향상. 사용자 요구사항 기반 신규 기능 개발.",
      technologies: ["Java", "Spring MVC", "JavaScript", "jQuery", "MSSQL"],
    },
    {
      period: "2022.04 - 2022.08",
      position: "더존ERP 구축 프로젝트 참여",
      project: "그레이 소프트",
      description:
        "중소기업 대상 ERP 시스템 구축 프로젝트에 투입되어 회계/구매/인사 모듈 기능 개발. 화면 UI 구현 및 DB 연동, 초기 개발 가이드를 수립하며 표준화에 기여.",
      technologies: ["Java", "Spring MVC", "JavaScript", "jQuery", "MSSQL"],
    },
  ];
  const certificates = [
    {
      name: "정보처리기사",
      issuer: "한국산업인력공단",
      date: "2019.06",
    },
    {
      name: "SQLD (SQL 개발자)",
      issuer: "한국데이터산업진흥원",
      date: "2020.10",
    },
    {
      name: "AWS Certified Developer – Associate",
      issuer: "Amazon Web Services",
      date: "2023.04",
    },
  ];
  const skills = {
    backend: [
      { name: "Java", level: 90 },
      { name: "Spring Framework", level: 80 },
      { name: "Spring Boot", level: 80 },
      { name: "Node.js", level: 60 },
      { name: "Go", level: 50 },
    ],
    frontend: [
      { name: "JavaScript", level: 80 },
      { name: "React", level: 75 },
      { name: "Vue.js", level: 65 },
      { name: "HTML/CSS", level: 60 },
      { name: "Tailwind CSS", level: 60 },
    ],
    database: [
      { name: "Oracle", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "MSSQL", level: 75 },
      { name: "MongoDB", level: 70 },
      { name: "PostgreSQL", level: 65 },
    ],
  };

  // 주요 성과
  const achievements = [
    {
      icon: <Server size={20} />,
      title: "기업 ERP 시스템 아키텍처 개선",
      description: "시스템 응답 시간 40% 단축 및 사용자 수용량 3배 증가",
    },
    {
      icon: <Database size={20} />,
      title: "데이터베이스 최적화",
      description: "쿼리 성능 개선으로 전체 애플리케이션 처리 속도 50% 향상",
    },
    {
      icon: <Users size={20} />,
      title: "고객사 솔루션 구축",
      description: "15개 이상의 고객사에 성공적인 IT 솔루션 개발 및 적용",
    },
    {
      icon: <Coffee size={20} />,
      title: "개발 문화 개선",
      description: "코드 리뷰 및 테스트 자동화 시스템 도입으로 버그 30% 감소",
    },
  ];

  return (
    <section
      id="about"
      className="scroll-mt-24 py-20 bg-white dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
            <div className="w-full md:w-1/3">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                소개
              </h2>
              <div className="h-1 w-20 bg-blue-600 mb-6"></div>
              <div className="prose dark:prose-invert">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  4년 차 백엔드 개발자로, ERP / CRM(CTI) 기업 솔루션 개발에
                  전문성을 갖추고 있습니다. 자바와 스프링 프레임워크를 활용한
                  시스템 아키텍처 설계부터 성능 최적화까지 전체 개발 생명주기를
                  경험했습니다.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  문제 해결에 대한 열정을 가지고 있으며, 사용자 중심의 서비스를
                  개발하는 것을 가장 큰 보람으로 여깁니다. 다양한 DBMS 경험과
                  함께 프론트엔드 기술에도 관심을 갖고 풀스택 개발자로 성장하고
                  있습니다.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  끊임없이 새로운 기술을 학습하고 적용하는 것을 즐기며, 특히
                  최근에는 마이크로서비스 아키텍처와 클라우드 네이티브
                  애플리케이션 개발에 집중하고 있습니다.
                </p>
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                    <Clock size={28} className="text-blue-600 mb-2" />
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      4+
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      경력
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                    <Code size={28} className="text-blue-600 mb-2" />
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      12+
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      프로젝트
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                    <Languages size={28} className="text-blue-600 mb-2" />
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      8+
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      기술 스택
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                    <Medal size={28} className="text-blue-600 mb-2" />
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      3+
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      자격증
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap border-b border-gray-300 dark:border-gray-700 mb-6">
                  <button
                    className={`px-4 py-2 text-sm font-medium ${
                      activeTab === "experience"
                        ? "text-blue-600 border-b-2 border-blue-600 dark:border-blue-400 dark:text-blue-400"
                        : "text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                    }`}
                    onClick={() => setActiveTab("experience")}
                  >
                    경력
                  </button>
                  <button
                    className={`px-4 py-2 text-sm font-medium ${
                      activeTab === "skills"
                        ? "text-blue-600 border-b-2 border-blue-600 dark:border-blue-400 dark:text-blue-400"
                        : "text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                    }`}
                    onClick={() => setActiveTab("skills")}
                  >
                    기술 스택
                  </button>
                  <button
                    className={`px-4 py-2 text-sm font-medium ${
                      activeTab === "achievements"
                        ? "text-blue-600 border-b-2 border-blue-600 dark:border-blue-400 dark:text-blue-400"
                        : "text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                    }`}
                    onClick={() => setActiveTab("achievements")}
                  >
                    주요 성과
                  </button>
                  <button
                    className={`px-4 py-2 text-sm font-medium ${
                      activeTab === "certificates"
                        ? "text-blue-600 border-b-2 border-blue-600 dark:border-blue-400 dark:text-blue-400"
                        : "text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                    }`}
                    onClick={() => setActiveTab("certificates")}
                  >
                    자격증
                  </button>
                </div>

                {/* 경력 탭 */}
                {activeTab === "experience" && (
                  <div className="space-y-6">
                    {experiences.map((exp, index) => (
                      <div
                        key={index}
                        className="relative pl-8 pb-6 border-l-2 border-gray-300 dark:border-gray-700 last:border-l-0 last:pb-0"
                      >
                        <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                            {exp.period}
                          </span>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-1">
                            {exp.position}
                          </h3>
                          <h4 className="text-md text-gray-700 dark:text-gray-300 mb-2">
                            {exp.project}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400 mb-3">
                            {exp.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, i) => (
                              <span
                                key={i}
                                className="px-2 py-1 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded text-xs"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* 기술 스택 탭 */}
                {activeTab === "skills" && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                        <Server size={18} className="mr-2" /> 백엔드
                      </h3>
                      <div className="space-y-3">
                        {skills.backend.map((skill, index) => (
                          <div key={index}>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                {skill.name}
                              </span>
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                {skill.level}%
                              </span>
                            </div>
                            <div className="w-full bg-gray-300 dark:bg-gray-600 rounded-full h-2">
                              <div
                                className="bg-blue-600 h-2 rounded-full"
                                style={{ width: `${skill.level}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                        <Code size={18} className="mr-2" /> 프론트엔드
                      </h3>
                      <div className="space-y-3">
                        {skills.frontend.map((skill, index) => (
                          <div key={index}>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                {skill.name}
                              </span>
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                {skill.level}%
                              </span>
                            </div>
                            <div className="w-full bg-gray-300 dark:bg-gray-600 rounded-full h-2">
                              <div
                                className="bg-blue-600 h-2 rounded-full"
                                style={{ width: `${skill.level}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                        <Database size={18} className="mr-2" /> 데이터베이스
                      </h3>
                      <div className="space-y-3">
                        {skills.database.map((skill, index) => (
                          <div key={index}>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                {skill.name}
                              </span>
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                {skill.level}%
                              </span>
                            </div>
                            <div className="w-full bg-gray-300 dark:bg-gray-600 rounded-full h-2">
                              <div
                                className="bg-blue-600 h-2 rounded-full"
                                style={{ width: `${skill.level}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* 주요 성과 탭 */}
                {activeTab === "achievements" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {achievements.map((achievement, index) => (
                      <div
                        key={index}
                        className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm"
                      >
                        <div className="flex items-center mb-3">
                          <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 mr-3">
                            {achievement.icon}
                          </div>
                          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                            {achievement.title}
                          </h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">
                          {achievement.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
                {activeTab === "certificates" && (
                  <div className="space-y-4">
                    {certificates.map((cert, index) => (
                      <div
                        key={index}
                        className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm flex justify-between items-center"
                      >
                        <div>
                          <h3 className="text-md font-semibold text-gray-900 dark:text-white">
                            {cert.name}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {cert.issuer}
                          </p>
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {cert.date}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
