'use client';

import { useState, useEffect } from 'react';
import { Github, ExternalLink, Star } from 'lucide-react';

const Playground = () => {
  const [filter, setFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('projects');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const toggleExpand = (id: number) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  // 프로젝트 데이터
  const projects = [
    {
      id: 1,
      title: '인사관리 시스템',
      description: '기업용 인사관리 시스템으로, 직원 정보 관리, 휴가 관리, 근태 관리 기능을 제공합니다.',
      image: '/images/img1.png',
      technologies: ['Java', 'Spring Boot', 'Oracle', 'React'],
      category: 'web',
      liveUrl: 'https://project1-demo.com',
      featured: true,
      details:
        '복잡한 조직 구조를 효율적으로 표현하는 데 어려움이 있었고, 트리 구조 기반의 UI 컴포넌트를 직접 커스터마이징해서 해결했습니다.',
    },
    {
      id: 2,
      title: '쇼핑몰 플랫폼',
      description: '중소기업을 위한 쇼핑몰 플랫폼으로, 상품 관리, 결제 시스템, 배송 관리 기능을 통합했습니다.',
      image: '/images/img2.png',
      technologies: ['Java', 'Spring', 'MySQL', 'Vue.js'],
      category: 'web',
      details:
        '결제 API 연동 과정에서 오류가 빈번하게 발생했고, 로그 추적을 통해 비동기 처리 순서를 조정해 문제를 해결했습니다.',
    },
    {
      id: 3,
      title: '데이터 분석 대시보드',
      description: '실시간 데이터 분석을 위한 대시보드로, 사용자 행동 패턴과 매출 데이터를 시각화합니다.',
      image: '/images/img3.jpg',
      technologies: ['Python', 'Flask', 'PostgreSQL', 'D3.js'],
      category: 'data',
      details:
        '대용량 데이터를 실시간으로 처리하는 데 병목 현상이 있었고, Redis 캐시와 쿼리 최적화를 통해 속도를 개선했습니다.',
    },
    {
      id: 4,
      title: '채팅 애플리케이션',
      description: '실시간 채팅 기능을 제공하는 웹 애플리케이션으로, 그룹 채팅과 파일 공유 기능을 지원합니다.',
      image: '/images/img4.jpg',
      technologies: ['Node.js', 'Socket.io', 'MongoDB', 'React'],
      category: 'app',
      details:
        '동시 접속자 수가 늘어나며 서버 성능 저하가 발생했고, Socket 연결 최적화와 서버 확장을 통해 해결했습니다.',
    },
    {
      id: 5,
      title: '블록체인 거래 시스템',
      description: '스마트 컨트랙트를 활용한 안전한 거래 시스템으로, 계약 이행을 자동화했습니다.',
      image: '/images/img5.png',
      technologies: ['Solidity', 'Ethereum', 'Web3.js', 'React'],
      category: 'web',
      details:
        '스마트 컨트랙트 배포 시 가스 비용이 예상보다 높게 측정되어, 코드를 리팩토링하여 효율적인 상태 관리로 최적화했습니다.',
    },
    {
      id: 6,
      title: 'API 게이트웨이',
      description: '마이크로서비스 아키텍처를 위한 API 게이트웨이로, 라우팅, 인증, 로드 밸런싱 기능을 제공합니다.',
      image: '/images/img6.jpg',
      technologies: ['Go', 'gRPC', 'Docker', 'Kubernetes'],
      category: 'backend',
      featured: true,
      details:
        '서비스 간 통신 실패율이 높아 gRPC 설정을 점검하고, 헬스 체크 및 리트라이 로직을 추가하여 안정성을 확보했습니다.',
    },
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter((project) => project.category === filter);

  const categories = [
    { value: 'all', label: '전체' },
    { value: 'web', label: '웹 개발' },
    { value: 'app', label: '애플리케이션' },
    { value: 'backend', label: '백엔드' },
    { value: 'data', label: '데이터' },
  ];

  return (
    <section id="projects" className="w-full py-24 bg-gray-50 dark:bg-gray-800 px-4 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setFilter(category.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === category.value
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-900'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className={`bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group ${
                  project.featured ? 'border-2 border-blue-500 dark:border-blue-400' : ''
                }`}
              >
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

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2 text-sm line-clamp-3">{project.description}</p>

                  <button
                    onClick={() => toggleExpand(project.id)}
                    className="text-blue-600 dark:text-blue-400 text-sm hover:underline mb-2"
                  >
                    {expandedId === project.id ? '간단히 보기' : '자세히 보기 +'}
                  </button>

                  {expandedId === project.id && (
                    <div className="mt-2 p-4 bg-gray-100 dark:bg-gray-800 rounded text-sm text-gray-700 dark:text-gray-300">
                      <strong>문제 해결 과정:</strong>
                      <p className="mt-1 whitespace-pre-wrap">{project.details}</p>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mt-4 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between">
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

export default Playground;
