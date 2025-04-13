import { Code } from 'lucide-react';

const IntroSection = () => {
  return (
    <section className="mb-20 text-center transition-all duration-1000 ease-in-out delay-300 transform translate-y-0 opacity-100">
      <div className="max-w-3xl mx-auto">
        <p className="text-xl leading-relaxed mb-8">
          안녕하세요! 사용자 중심의 웹 경험을 만드는 프론트엔드 개발자입니다. React와 모던 JavaScript 생태계에 전문성을
          가지고 있으며, 기술적 탁월함과 창의적인 문제 해결 능력으로 혁신적인 웹 솔루션을 개발합니다.
        </p>
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors font-medium flex items-center mx-auto">
          <Code size={18} className="mr-2" /> 프로젝트 살펴보기
        </button>
      </div>
    </section>
  );
};

export default IntroSection;
