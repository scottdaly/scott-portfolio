export default function PreproPage() {
  document.body.style.backgroundColor = "#1c1c1c";

  return (
    <div className="flex flex-col w-full items-center bg-hallpass-bg text-hallpass-text font-sans overflow-hidden">
      <div className="flex justify-center w-full h-[520px] 3xl:h-[640px] mb-12">
        <img
          src="/hallpass/header-image.jpg"
          width="1200"
          height="1200"
          alt="Prepro header phone"
          className="h-auto w-full object-cover"
        />
      </div>
      <div className="flex flex-col md:w-[70%] gap-12 overflow-hidden">
        <div className="flex flex-col gap-8 md:w-9/12 justify-center mx-auto px-12 mt-2">
          <h1 className="text-white/80 font-semibold text-2xl">HallPass</h1>
          <h1 className="text-3xl md:text-4xl font-semibold text-white/90">
            Social Audio apps are really interesting, but also… kind of
            confusing.
          </h1>
          <h3 className="text-xl leading-relaxed font-light">
            Since the rise of Clubhouse, seemingly everyone has been trying to
            get in on that sweet, sweet audio-only socialization train.
          </h3>
          <h3 className="text-xl leading-relaxed font-light">
            Our goal was to identify what the future of social audio looks like,
            what problems exist now, and how we can solve them with an elegant,
            intuitive design solution
          </h3>
        </div>
        <div className="flex flex-col gap-12 md:w-9/12 lg:flex-row px-12 md:mx-auto">
          <div className="flex flex-col gap-2">
            <p className="font-bold text-xl text-white/80">Tools</p>
            <p>
              • <span className="ml-4">Figma</span>
            </p>
            <p>
              • <span className="ml-4">Miro</span>
            </p>
            <p>
              • <span className="ml-4">Adobe Creative Cloud</span>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold text-white/80 text-xl">Roles</p>
            <p>
              • <span className="ml-4">UX Design</span>
            </p>
            <p>
              • <span className="ml-4">Visual Design</span>
            </p>
            <p>
              • <span className="ml-4">Brand Strategy</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col md:w-9/12 md:mx-auto py-8 mt-8 gap-8 px-12">
          <h3 className="text-5xl font-semibold">Research</h3>
          <p className="text-white/70 leading-loose text-lg">
            Since there are several other big social audio apps in the market,
            we wanted to talk to people about their experiences with the
            offerings that are currently available so that we can understand the
            challenges users face. Several problems became apparent as we
            started talking to people who had used other social audio platforms.
          </p>
          <p className="text-white/75 leading-loose text-lg">
            There seemed to be a lot of excitement at the idea of the app, but a
            lot of confusion emerged as users actually engaged with the
            platforms. It became evident that users were unclear about how the
            product actually fit into their lives, and that they didn’t fully
            understand the ideal use case or user for these apps.
          </p>
        </div>
        <div className="flex flex-col md:w-9/12 md:mx-auto py-8 gap-8 px-12">
          <h3 className="text-5xl font-semibold">Discovery</h3>
          <h4 className="text-xl font-semibold">Competitive Analysis</h4>
          <p className="text-white/70 leading-loose text-lg">
            A lot of the people we spoke with expressed confusion about what
            they might like to use the app for from the very beginning of using
            it. They had a general idea of how to use this sort of app (audio
            only rooms), but they weren’t sure how it might apply to them.
          </p>
          <p className="text-white/70 leading-loose text-lg">
            Other social audio apps started by giving first-time users an
            immense number of choices (147 for Clubhouse and 218 for Greenroom)
            that caused them to feel overwhelmed and intimidated.
          </p>
          <img
            src="/hallpass/interests-cropped.png"
            width="600"
            height="600"
            alt="Interests"
          />
        </div>
        <div className="flex flex-col py-8 md:w-9/12 md:mx-auto gap-8 px-12">
          <h4 className="text-xl font-semibold">Insights</h4>
          <div className="flex flex-col md:flex-row gap-8">
            <img
              src="/hallpass/challenges-1.png"
              width="300"
              height="300"
              alt="Challenge 1"
              className="h-auto object-fill"
            />
            <img
              src="/hallpass/challenges-2.png"
              width="300"
              height="300"
              alt="Challenge 1"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <img
              src="/hallpass/challenges-3.png"
              width="300"
              height="300"
              alt="Challenge 1"
              className="h-auto object-fill"
            />
            <img
              src="/hallpass/challenges-4.png"
              width="300"
              height="300"
              alt="Challenge 1"
            />
          </div>
        </div>
        <div className="flex flex-col py-12 gap-8 md:w-9/12 md:mx-auto px-12">
          <h3 className="text-5xl font-semibold">Design Requirements</h3>
          <h4 className="text-xl font-semibold">Keep It Simple</h4>
          <p className="text-white/70 leading-loose text-lg">
            Complexity dampened the experience for many users, so we need it to
            be simple and intuitive.
          </p>
          <h4 className="text-xl font-semibold">
            Clarify Audience Participation
          </h4>
          <p className="text-white/70 leading-loose text-lg">
            Audience participation can vary depending on the room, so we need a
            way to set expectations for creators and users alike.
          </p>
          <h4 className="text-xl font-semibold">Make It Easy to Create</h4>
          <p className="text-white/70 leading-loose text-lg">
            The app needs to let creators communicate expectations for their
            room to users so everyone’s on the same page.
          </p>
          <h4 className="text-xl font-semibold">Keep It Multifaceted</h4>
          <p className="text-white/70 leading-loose text-lg">
            Some users want to be able to socialize, while others primarily want
            a passive listening experience. We need to be able to facilitate
            both.
          </p>
        </div>
        <div className="flex flex-col py-12 gap-8 md:w-9/12 md:mx-auto px-12">
          <h3 className="text-5xl font-semibold">Ideation</h3>
          <h4 className="text-xl font-semibold">The Challenge</h4>
          <p className="text-white/80 text-2xl md:text-3xl leading-normal md:leading-loose">
            How do we create a simple audio experience that facilitates
            different use cases and creators?
          </p>
          <p className="text-white/70 leading-loose text-lg">
            Using quick hand drawn wireframes, I explored a variety of design
            solutions and features, informed by the research we had conducted,
            especially on our competitors and user’s experiences with them.
          </p>
          <img
            src="/hallpass/wireframe.png"
            width="800"
            height="800"
            alt="Challenge 1"
            className="rounded-lg md:w-10/12 mx-auto"
          />
          <p className="text-white/70 leading-loose text-lg">
            We then created low-fidelity prototypes to figure out the flow and
            features that made sense, as well as simplified the design. This
            gave us a lot of clarity in figuring out what to include and what
            not to, as we followed the flow of potential users to weed out
            unnecessary features, simplify the app, and provide utility.
          </p>
          <img
            src="/hallpass/hallpass-prototype.png"
            width="1000"
            height="1000"
            alt="Prototype"
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col py-12 gap-12 px-12 md:w-9/12 md:mx-auto">
          <h3 className="text-5xl font-semibold">Solution</h3>
          <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-16">
            <div className="flex flex-col gap-8 md:w-2/3">
              <h4 className="text-xl font-semibold">
                Curation - Featured Events
              </h4>
              <p className="text-white/70 text-xl leading-relaxed md:leading-loose">
                Since finding quality content was a problem, one way to fix this
                is to address it head on - with HallPass sourced featured
                events.
              </p>
              <p className="text-white/70 text-xl leading-relaxed md:leading-loose">
                This not only allows us to insure that interesting content is
                the first thing our users see when logging in, but also lets us
                curate interesting content from the outset, combating potential
                network effects from competitors.
              </p>
            </div>
            <div className="flex justify-end md:w-1/3">
              <img
                src="/hallpass/featured-events-transparent.png"
                width="800"
                height="800"
                alt="Featured Events"
                className=""
              />
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-16">
            <div className="flex flex-col gap-8 md:w-2/3">
              <h4 className="text-xl font-semibold">Content Tags</h4>
              <p className="text-white/70 text-xl leading-relaxed md:leading-loose">
                A lot of the people we spoke with expressed confusion about what
                they might like to use the app for from the very beginning of
                using it.
              </p>
              <p className="text-white/70 text-xl leading-relaxed md:leading-loose">
                They had a general idea of how to use this sort of app (audio
                only rooms), but they weren’t sure how it might apply to them.
              </p>
            </div>
            <div className="flex justify-end md:w-1/3">
              <img
                src="/hallpass/content-tags.png"
                width="800"
                height="800"
                alt="Content Tags"
                className=""
              />
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row mt-12 md:mt-2 gap-8">
            <div className="flex flex-1 flex-col gap-8">
              <h4 className="text-xl font-semibold">Room Creation</h4>
              <p className="text-white/70 text-xl leading-relaxed md:leading-loose">
                A lot of the people we spoke with expressed confusion about what
                they might like to use the app for from the very beginning of
                using it.
              </p>
              <p className="text-white/70 text-xl leading-relaxed md:leading-loose">
                They had a general idea of how to use this sort of app (audio
                only rooms), but they weren’t sure how it might apply to them.
              </p>
            </div>
            <img
              src="/hallpass/create-room.png"
              width="400"
              height="400"
              alt="Room Type Selector"
              className="rounded-xl md:w-1/3 h-auto"
            />
          </div>
          <div className="flex flex-col gap-12 w-full items-center mx-auto mt-16">
            <img
              src="/hallpass/screens.png"
              width="1200"
              height="1200"
              alt="Screen designs"
              className="rounded-xl"
            />
            <img
              src="/hallpass/screens-2.jpg"
              width="1200"
              height="1200"
              alt="Screen phone mockups"
              className="rounded-xl"
            />
          </div>
        </div>

        {/* <div className="flex flex-col gap-8 py-16 md:w-9/12 md:mx-auto">
          <h3 className="text-5xl font-semibold">Style Guide</h3>
          <p className="text-lg font-normal text-gray-300 leading-normal">
            We wanted a bold yet clean look that could represent the power of
            audio, so we went with an immersive dark palette with splashes of
            light and bold red. We used Inter to keep the text clean and orderly
            so the app would be easy to navigate, yet bold in headings when that
            was needed. Spacing also played a big role in keeping the app
            legible and organized.
          </p>
          <p className="text-lg font-normal text-gray-300 leading-normal">
            image - HallPass-Design-System.png
          </p>
          <div className="flex justify-center">
            <Image
              src="/prepro/style-guide.png"
              width="1000"
              height="1000"
              alt="Prepro style guide"
            />
          </div>
        </div> */}
        <div className="flex flex-col gap-8 px-12 md:w-9/12 md:mx-auto mb-32">
          <p className="text-lg font-normal text-gray-300 leading-normal">
            Hallpass was a huge learning experience for me in product strategy
            and overcoming user problems through design. It really illustrates
            how much a user’s experience is affected by the various stages of
            design and how critical that process can be to the success and
            utility of a product.
          </p>
          <p className="text-lg font-normal text-gray-300 leading-normal">
            It was extremely insightful to be able to hear the challenges
            current users had and explore ways to address their concerns. There
            were plenty of bad ideas, but it took exploring many options to get
            to a good result that resonated with people, but the exploration
            along the way was a fun and informative journey.
          </p>
        </div>
      </div>
    </div>
  );
}
