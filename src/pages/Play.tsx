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
  <div className="flex flex-col md:flex-row items-center w-fit md:w-full overflow-hidden bg-zinc-400/10 rounded-lg">
    <img src={image} alt={title} className="w-full h-auto md:w-60 md:h-60 object-cover rounded-md" />
    <div className="flex flex-col px-4 md:px-8 py-4 flex-1">
      <h3 className="mb-2 md:mb-1 text-3xl font-semibold text-zinc-900">
        {title}
      </h3>
      <p className="mb-4 text-zinc-600 md:leading-relaxed">
        {description}
      </p>
      {link && (
        <button
          onClick={() => window.open(link, "_blank")}
          className="border-zinc-800/20 border text-zinc-900 hover:text-white hover:border-zinc-800 hover:bg-zinc-800 text-sm px-4 py-2 rounded-md flex items-center gap-2 w-fit hover:bg-zinc-800 hover:cursor-pointer transition-colors duration-400"
        >
          View project
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

        </button>
      )}
    </div>
  </div>
);

const PlayPage = () => {


  document.body.style.backgroundColor = "#ededeb";

  const experiments = [

    {
      title: "Lifelines",
      description:
        "A text-based, AI-powered life simulation game where you can explore the lives of others and make choices that affect their futures.",
      image: "/play/lifelines.png",
      link: "https://lifelines.rsdaly.com",
    },
    {
      title: "Suno Genre Tag Explorer",
      description:
        "Genre knowledge is critical for successful AI music generation. I created an ever-updating genre database of the sound tags that I encounter on Suno's website, allowing searching and sorting to find the perfect sound descriptors.",
      image: "/play/suno-tag.png",
      link: "https://suno.rsdaly.com",
    },
    {
      title: "Super React",
      description:
        "I created a command line tool that allows you to create a new project with one quick command, complete with frontend, backend, database, and user accounts. This is typically what I use to build my websites.",
      image: "/play/super-react.png",
      link: "https://www.super-react.com",
    },
  ];

  return (
    <div className="flex flex-col w-full items-center font-sans min-h-[calc(100vh-4rem)] text-zinc-900 dark:text-zinc-100">
      
      <main className="w-full max-w-6xl px-4 md:px-8 pb-16 pb-16 pt-24">
        <section className="flex flex-col gap-4">
          {experiments.map((exp) => (
            <ExperimentCard key={exp.title} {...exp} />
          ))}
        </section>
        
      </main>
    </div>
  );
};

export default PlayPage;
