export default function Playground() {
  const projects = [
    {
      title: "Project 1",
      description: "This is the first project I worked on.",
      url: "/project1",
    },
    {
      title: "Project 2",
      description: "This is the second project I worked on.",
      url: "/project2",
    },
    {
      title: "Project 3",
      description: "This is the third project I worked on.",
      url: "/project3",
    },
  ];

  return (
    <main className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Playground</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
