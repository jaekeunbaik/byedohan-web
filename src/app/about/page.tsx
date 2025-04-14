export default function AboutPage() {
  return (
    <main className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-xl w-full">
        <div className="flex items-center mb-6">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="rounded-full mr-4"
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-800">John Doe</h1>
            <p className="text-gray-600">Full-Stack Developer</p>
          </div>
        </div>
        <p className="text-gray-600 leading-relaxed mb-6">
          안녕하세요. 저는 풀스택 개발자 John Doe입니다. 이 포트폴리오
          웹사이트에서 제 경험과 작업물을 소개드리고자 합니다. 다양한 프로젝트를
          통해 개발 능력을 발전시켜 왔으며, 새로운 기술을 배우는 것을 즐깁니다.
        </p>
        <div className="flex justify-between">
          <a
            href="#"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            프로젝트 보기
          </a>
          <a
            href="#"
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md"
          >
            연락하기
          </a>
        </div>
      </div>
    </main>
  );
}
