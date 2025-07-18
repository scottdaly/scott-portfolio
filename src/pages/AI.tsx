import { useState, useEffect } from "react";

const ExperimentCard = ({
  title,
  description,
  image,
  link,
}: {
  title: string;
  description: string;
  image: string;
  link?: string;
}) => (
  <div className="flex flex-col rounded-lg border border-zinc-200 bg-white shadow-sm overflow-hidden dark:border-zinc-800 dark:bg-zinc-900">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="flex flex-col p-6 flex-1">
      <h3 className="mb-2 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
        {title}
      </h3>
      <p className="mb-4 text-zinc-600 dark:text-zinc-300 flex-1 leading-relaxed">
        {description}
      </p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center text-primary hover:underline"
        >
          View project
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-1 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      )}
    </div>
  </div>
);

const AIPage = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  document.body.style.backgroundColor = "#e0e0dc";

  const experiments = [
    {
      title: "Character AI Personas",
      description:
        "Built a framework for multi-character role-play with shared memory, enabling richer story progression and more nuanced conversations.",
      image: "/nevermade/characterAI.png",
    },
    {
      title: "Perplexity Pro Context Packs",
      description:
        "Prototyped a toggleable context system that lets users quickly switch between domain-specific knowledge packs while querying the web.",
      image: "/nevermade/perplexity.png",
    },
    {
      title: "Notion AI Writer 2.0",
      description:
        "Explored inline AI suggestions that adapt to a document’s style guide in real-time, reducing editing time by 40% in tests.",
      image: "/nevermade/notion.png",
    },
    {
      title: "Replika Memory Dashboard",
      description:
        "Designed a transparent memory dashboard allowing users to inspect, edit, or remove personal data the AI stores about them.",
      image: "/nevermade/replika.png",
    },
  ];

  return (
    <div className="flex flex-col w-full items-center font-sans bg-[#e0e0dc] text-zinc-900 dark:text-zinc-100">
      <header className="w-full bg-[#111111] flex items-center justify-center h-[300px] md:h-[400px] overflow-hidden relative mb-12">
        <img
          src="/old-computer-face.png"
          alt="AI Experiments Cover"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <h1 className="relative z-10 text-5xl md:text-7xl big-shoulders-black text-white tracking-tight">
          AI Experiments
        </h1>
      </header>
      <main className="w-full max-w-6xl px-4 md:px-8 pb-16">
        <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {experiments.map((exp) => (
            <ExperimentCard key={exp.title} {...exp} />
          ))}
        </section>
        {windowSize.width > 768 && (
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-medium">
              This only shows on Desktop
            </h2>
          </div>
        )}
      </main>
    </div>
  );
};

export default AIPage;
