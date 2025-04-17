'use client';

import { useState, useEffect } from 'react';
import { Mail, Phone, MessageSquare, Send, MapPin, Linkedin, Github } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
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

    const element = document.getElementById('contact');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 여기서 실제 폼 제출 로직을 구현할 수 있습니다.
    // 백엔드 API 연동 예시
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitResult({
        success: true,
        message: '메시지가 성공적으로 전송되었습니다. 빠른 시일 내에 답변 드리겠습니다.',
      });

      // 폼 초기화
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      // 성공 메시지 5초 후 제거
      setTimeout(() => {
        setSubmitResult(null);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="w-full py-24 bg-gray-50 dark:bg-gray-800 px-4 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="flex flex-col lg:flex-row gap-10">
            {/* 연락처 정보 */}
            <div className="lg:w-1/3 order-2 lg:order-1">
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-8 h-full">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">연락처 정보</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 mr-4">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="text-md font-medium text-gray-800 dark:text-gray-200 mb-1">이메일</h4>
                      <a
                        href="mailto:your@email.com"
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        your@email.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 mr-4">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="text-md font-medium text-gray-800 dark:text-gray-200 mb-1">전화번호</h4>
                      <a
                        href="tel:+821012345678"
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        010-1234-5678
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 mr-4">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="text-md font-medium text-gray-800 dark:text-gray-200 mb-1">위치</h4>
                      <p className="text-gray-600 dark:text-gray-400">서울특별시 강남구</p>
                    </div>
                  </div>
                </div>

                {/* 소셜 미디어 링크 */}
                <div className="mt-10">
                  <h4 className="text-md font-medium text-gray-800 dark:text-gray-200 mb-3">소셜 미디어</h4>
                  <div className="flex space-x-3">
                    <a
                      href="https://github.com/your-username"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-full text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      aria-label="Github"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href="https://linkedin.com/in/your-profile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-full text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>

                {/* 반응 시간 정보 */}
                <div className="mt-10 p-4 bg-blue-50 dark:bg-blue-900/10 rounded-lg">
                  <div className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                    <MessageSquare size={16} className="mr-2 text-blue-600 dark:text-blue-400" />
                    평균 응답 시간: 24시간 이내
                  </div>
                </div>
              </div>
            </div>

            {/* 문의 폼 */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
