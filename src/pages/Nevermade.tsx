import { useState, useEffect } from "react";
import NevermadeHeader from "../components/NevermadeHeader";

const CompetitorCard = ({
  name,
  strengths,
  gaps,
  lesson,
  image,
}: {
  name: string;
  strengths: string;
  gaps: string;
  lesson: string;
  image: string;
}) => (
  <div className="flex flex-col h-full rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
    {/* Icon / logo */}
    <img
      src={`/nevermade/${image}`}
      alt={name}
      className="w-10 h-10 object-cover rounded-lg mb-2"
    />

    {/* Name */}
    <h4 className="mb-4 mt-1 text-2xl">
      {name}
    </h4>

    {/* Strengths */}
    <div className="mb-3 min-h-[72px]">
      <p className="mb-1 text-sm font-medium">
        Strengths
      </p>
      <p className="text-nevermade-text-secondary text-sm leading-relaxed">
        {strengths}
      </p>
    </div>

    {/* Gaps */}
    <div className="mb-3">
      <p className="mb-1 text-sm font-medium">
        Gaps
      </p>
      <p className="text-nevermade-text-secondary text-sm leading-relaxed">
        {gaps}
      </p>
    </div>

    {/* Push the lesson to the bottom for consistent alignment */}
    <div className="flex flex-col mt-4 bg-indigo-500/10 p-4 rounded-lg">
      <h4 className="mb-2 uppercase text-xs text-indigo-300">
        Takeaway
      </h4>
      <p className="text-sm italic text-indigo-600 dark:text-indigo-400">
        {lesson}
      </p>
    </div>
  </div>
);

const Nevermade = () => {
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
  document.body.style.backgroundColor = "#09090B";

  return (
    <div className="flex flex-col w-full items-center bg-nevermade-bg text-nevermade-text inter">
      <div className="relative border-b-1 border-zinc-800">
        <NevermadeHeader />
        {windowSize.width < 800 ? (
          <img
            src="/nevermade/cover-mobile.jpg"
            alt="Nevermade"
            className="w-screen h-[500px] object-cover"
          />
        ) : (
          <img
            src="/nevermade/cover.png"
            alt="Nevermade"
            className="w-screen h-[500px] object-cover"
          />
        )}
      </div>
      <div className="flex flex-col gap-4 overflow-hidden my-12">
        <section className="flex flex-col md:flex-row mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col gap-2 mb-8 md:pr-16 w-full md:w-2/3">
            <p className="text-sm uppercase text-nevermade-text-secondary mb-1 md:mb-2">Overview</p>
            <p className="text-2xl leading-[2.25rem] text-white/95 mb-6 md:mb-8">
              Nevermade AI is a platform that allows you to chat with AI Characters to help you in your everyday life, whether it be exploring philosophy with Plato or getting advice on how to start your Marketing Agency.
            </p>
            <button className="bg-blue-600/80 text-white/90 md:mr-4 py-3 rounded-md flex tracking-wider items-center justify-center gap-2 text-xl uppercase cursor-pointer" onClick={() => window.open('https://nevermade.co', '_blank')}>
              Visit Site 
              <div className="bg-white/70 p-[0.3rem] rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="black" className="size-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
              </div>

            </button>
          </div>
          <div className="flex flex-col gap-16 mt-4 md:mt-0">
            <div className="flex flex-col">
              <p className="text-sm uppercase text-nevermade-text-secondary">My Role</p>
              <ul className="profile-list ml-4 mt-3 md:mt-4 space-y-1 text-lg">
                <li><p className="text-lg text-nevermade-text">Lead Product Design</p></li>
                <li><p className="text-lg text-nevermade-text">Product Strategy</p></li>
                <li><p className="text-lg text-nevermade-text">Frontend Engineering</p></li>
                <li><p className="text-lg text-nevermade-text">User Research</p></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-8 px-4 md:px-6 lg:px-8">
          {/* Heading */}
          <div className="flex flex-col gap-4 max-w-7xl mx-auto px-4 md:mb-8">
            <h2 className="text-5xl md:text-7xl font-medium tracking-tight md:mb-2">
              Designing & Branding for Scale
            </h2>
            <p className="mb-6 leading-relaxed text-nevermade-text-secondary text-lg md:w-2/3">
              I started by create a curated selection of typefaces, colors, spacing variables, and components that would be used across the product. This would allow us to easily build new pages and features while expressing the unique Nevermade brand.
            </p>
          </div>

          <img src="/nevermade/nevermade-design-system.png" alt="Nevermade" className="w-full object-cover rounded-xl md:mb-2" />
          
        </section>

        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          {/* Heading */}
          <h2 className="mb-4 text-5xl md:text-7xl font-medium tracking-tight">
            User Research
          </h2>

          <blockquote className="flex flex-row justify-center my-8">
            <div className="h-38 md:h-18 w-2 bg-zinc-700 rounded mr-6"></div>
            <p className="text-lg md:text-xl italic leading-relaxed text-[#c3cob5]">
              “Users loved chatting with AI characters but hated re-explaining
              themselves. We needed a way to let the AI ‘remember’ without
              creeping them out or blowing up token costs.”
            </p>
          </blockquote>

          {/* Intro */}
          <p className="mb-6 leading-relaxed text-nevermade-text-secondary">
            Our team set out to understand two uncertainties: why users were
            leaving conversations after just a few sessions, and how much
            personal information they would willingly share if it truly improved
            their experience. A focused research sprint answered those questions
            and guided every design decision that followed.
          </p>

          {/* Observing the real-world workflow */}
          <h3 className="mb-4 mt-12 text-2xl">
            Observing the real-world workflow
          </h3>
          <p className="mb-6 text-nevermade-text-secondary">
            Four contextual-inquiry sessions with power users revealed a
            repeating pattern: people pasted the same biographical details—job
            titles, relationship status, favorite hobbies—into every new chat.
            One participant remarked, “Every character starts at zero; it gets
            repetitive.” I defined this pain point as{" "}
            <em>re-explanation fatigue</em>.
          </p>

          {/* Logging comfort levels */}
          <h3 className="mb-4 mt-12 text-2xl">
            Logging comfort levels with shared data
          </h3>
          <p className="mb-6 text-nevermade-text-secondary">
            A week-long diary study captured when the AI felt helpful versus
            intrusive. Participants gladly provided professional history but
            hesitated to share sensitive personal details unless they could
            review and edit what was stored. The finding was clear:{" "}
            <strong className="text-nevermade-text">
              transparency and user control are prerequisites for trust
            </strong>
            .
          </p>

          {/* Design impact */}
          <h3 className="mb-4 mt-12 text-2xl">
            How findings shaped the product
          </h3>
          <ul className="mb-8 ml-8 list-disc space-y-3 text-nevermade-text-secondary">
            <li>
              Introduced a concise, five-question onboarding wizard to capture
              essential background information.
            </li>
            <li>
              Added a <strong className="text-nevermade-text">Memory Dashboard</strong> where users can view,
              edit, or delete stored data.
            </li>
            <li>
              Implemented per-category permission toggles, allowing users to
              share professional data while withholding personal details.
            </li>
            <li>
              Kept onboarding within a five-minute threshold to minimize
              friction.
            </li>
            <li>
              Replaced technical labels with plain language throughout the
              interface.
            </li>
          </ul>
        </section>
        <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-5xl md:text-7xl font-medium tracking-tight">
            Competitive Analysis
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-nevermade-text-secondary">
            I reviewed four products that combine conversational AI with
            user-specific data—Character.AI, Replika, NotionAI, and Perplexity
            Pro—evaluating each on depth of memory, transparency, user control,
            onboarding friction, and audience focus.
          </p>

          {/* Grid of competitor cards */}
          <div className="grid gap-6 sm:grid-cols-2">
            <CompetitorCard
              name="Character.AI"
              strengths="Rich, long-running chat history yields highly personalised responses."
              gaps="Memory exists as a single timeline, so users cannot view or edit specific facts."
              lesson={`Expose an organised "memory ledger" and pivot from entertainment to productivity.`}
              image="characterAI.png"
            />
            <CompetitorCard
              name="Replika"
              strengths="Gamified relationship mechanics drive daily engagement."
              gaps="Minimal transparency; users cannot see or export what is stored, which discourages privacy-sensitive users."
              lesson="Pair emotional design with explicit data controls that support personal growth."
              image="replika.png"
            />
            <CompetitorCard
              name="Notion AI"
              strengths="Tight integration with workspace documents removes copy‑paste friction."
              gaps="Lacks understanding of the user as a person, so advice feels generic beyond the current page."
              lesson="Blend project context and personal biography for deeper insight."
              image="notion.png"
            />
            <CompetitorCard
              name="Perplexity Pro"
              strengths="Instant web citations and temporary research collections."
              gaps="Context expires with the session unless saved manually / no structured memory."
              lesson="Introduce lightweight persistent structures so users aren't starting from scratch each day."
              image="perplexity.png"
            />
          </div>

          {/* Insights */}
          <h3 className="mt-10 mb-4 text-2xl">
            Insights
          </h3>
          <ul className="space-y-2 text-nevermade-text-secondary">
            <li>
              •{" "}
              <strong className="text-nevermade-text">
                Audience focus diverges:
              </strong>{" "}
              Competitors skew toward entertainment or relationship-based
              engagement, so we can focus on personal and professional
              productivity.
            </li>
            <li>
              •{" "}
              <strong className="text-nevermade-text">
                Structured visibility is missing:
              </strong>{" "}
              None of the reviewed tools offer a true dashboard of memories
              grouped by category and project.
            </li>
            <li>
              •{" "}
              <strong className="text-nevermade-text">
                Granular permission toggles are rare:
              </strong>{" "}
              Users either share everything or only the active document. Our
              per‑category / per‑project model fills that gap.
            </li>
            <li>
              •{" "}
              <strong className="text-nevermade-text">
                Balanced onboarding matters:
              </strong>{" "}
              We differentiate with a concise, five‑question interview that
              front‑loads value.
            </li>
            <li>
              •{" "}
              <strong className="text-zinc-100">
                Creator ecosystem as moat:
              </strong>{" "}
              Our no‑code builder lets creators tap into structured memory,
              extending the platform's reach.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Nevermade;
