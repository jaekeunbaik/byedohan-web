'use client';

import { useState } from 'react';
import { Mail, Send, Github, Linkedin, Phone, MapPin, ArrowRight, Check } from 'lucide-react';

export default function ConnectPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // 실제 구현에서는 폼 데이터를 서버로 전송하는 로직이 필요합니다
    setSubmitted(true);
    setTimeout(() => {
      setName('');
      setEmail('');
      setMessage('');
      setSubmitted(false);
    }, 3000);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 dark:from-gray-900 dark:to-gray-800 p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        {/* 헤더 섹션 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            함께 <span className="text-blue-600 dark:text-blue-400">협업</span>해요
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            새로운 프로젝트나 기회에 대해 논의하고 싶으신가요? 지금 바로 연락주세요!
          </p>
        </div>

        {/* 메인 콘텐츠 */}
        <div className="grid md:grid-cols-5 gap-8">
          {/* 연락처 정보 */}
          <div className="md:col-span-2 bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">연락처 정보</h2>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                  <Mail className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">이메일</p>
                  <a
                    href="mailto:example@example.com"
                    className="text-gray-900 dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    example@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                  <Phone className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">전화번호</p>
                  <a
                    href="tel:+82-10-1234-5678"
                    className="text-gray-900 dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    +82 10-1234-5678
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                  <MapPin className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">위치</p>
                  <p className="text-gray-900 dark:text-white font-medium">서울특별시, 대한민국</p>
                </div>
              </div>
            </div>

            {/* 소셜 미디어 링크 */}
            <div className="mt-10">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">소셜 미디어</h3>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 p-3 rounded-full transition-colors"
                  aria-label="Github"
                >
                  <Github className="text-gray-600 dark:text-gray-400" size={20} />
                </a>
                <a
                  href="#"
                  className="bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 p-3 rounded-full transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="text-gray-600 dark:text-gray-400" size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* 컨택트 폼 */}
          <div className="md:col-span-3 bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">메시지 보내기</h2>

            {submitted ? (
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 flex items-center gap-3">
                <div className="bg-green-100 dark:bg-green-800 p-2 rounded-full">
                  <Check className="text-green-600 dark:text-green-400" size={20} />
                </div>
                <p className="text-green-800 dark:text-green-200 font-medium">
                  메시지가 성공적으로 전송되었습니다! 곧 연락드리겠습니다.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      이름
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                      placeholder="홍길동"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      이메일
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                      placeholder="example@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    메시지
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none"
                    placeholder="협업하고 싶은 프로젝트나 궁금한 점을 알려주세요."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  <span>보내기</span>
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
