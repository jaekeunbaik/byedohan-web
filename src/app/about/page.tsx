'use client';

import { Code, Briefcase, GraduationCap, Award, ChevronRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-slate-800 py-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* 헤더 섹션 */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden mb-10">
          <div className="relative h-48 bg-gradient-to-r from-blue-400 to-indigo-500">
            <div className="absolute -bottom-16 left-8">
              <div className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg">
                <img
                  src="/api/placeholder/150/150"
                  alt="Profile"
                  className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-800"
                />
              </div>
            </div>
          </div>

          <div className="pt-20 pb-8 px-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-1">EDOHAN</h1>
                <p className="text-lg text-blue-600 dark:text-blue-400 font-medium flex items-center">
                  <Code size={20} className="mr-2" />
                  Full-Stack Developer
                </p>
              </div>
              <div className="mt-4 md:mt-0 flex space-x-3">
                <a
                  href="/playground"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors flex items-center"
                >
                  <Briefcase size={18} className="mr-2" />
                  프로젝트 보기
                </a>
                <a
                  href="/connect"
                  className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-white px-5 py-2.5 rounded-lg font-medium transition-colors flex items-center"
                >
                  연락하기
                  <ChevronRight size={18} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 소개 섹션 */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg mr-3">
                  <Code className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                About Me
              </h2>

              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-lg">
                  안녕하세요. 저는 풀스택 개발자{' '}
                  <span className="font-semibold text-blue-600 dark:text-blue-400">EDOHAN</span>입니다.
                </p>

                <p>
                  사용자 중심의 웹 애플리케이션 개발에 열정을 가지고 있으며, 프론트엔드부터 백엔드까지 종합적인 개발
                  경험을 쌓아왔습니다. 복잡한 문제를 해결하고 효율적인 코드를 작성하는 것을 좋아합니다.
                </p>

                <p>
                  최신 웹 기술 트렌드를 지속적으로 학습하며, React, Next.js, Node.js 등의 현대적인 기술 스택을 활용한
                  프로젝트를 개발해왔습니다. 이 포트폴리오 웹사이트에서 제 경험과 작업물을 소개드리고자 합니다.
                </p>

                <p>
                  팀 프로젝트에서는 협업과 커뮤니케이션을 중요시하며, 함께 성장하는 개발 문화를 지향합니다. 새로운
                  도전과 기회에 항상 열려있으니 흥미로운 프로젝트가 있으시다면 연락 주세요!
                </p>
              </div>
            </div>
          </div>

          {/* 스킬 & 자격증 섹션 */}
          <div className="space-y-8">
            {/* 스킬 카드 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <div className="bg-green-100 dark:bg-green-900/30 p-1.5 rounded-md mr-2">
                  <GraduationCap className="text-green-600 dark:text-green-400" size={18} />
                </div>
                핵심 스킬
              </h3>

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">백엔드</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">프론트엔드</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">js</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* 자격증 카드 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <div className="bg-amber-100 dark:bg-amber-900/30 p-1.5 rounded-md mr-2">
                  <Award className="text-amber-600 dark:text-amber-400" size={18} />
                </div>
                자격증 & 수상
              </h3>

              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="min-w-3 h-3 bg-blue-600 rounded-full mt-1.5 mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300">AWS Certified Solutions Architect</span>
                </li>
                <li className="flex items-start">
                  <div className="min-w-3 h-3 bg-blue-600 rounded-full mt-1.5 mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300">Google Cloud Professional Developer</span>
                </li>
                <li className="flex items-start">
                  <div className="min-w-3 h-3 bg-blue-600 rounded-full mt-1.5 mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300">2023 해커톤 최우수상</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
