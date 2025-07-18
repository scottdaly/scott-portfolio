export default function PreproPage() {
  document.body.style.backgroundColor = "#253157";
  return (
    <div className="flex flex-col w-full items-center bg-prepro-bg text-prepro-text font-sans pt-16 md:pt-0">
      <div className="flex justify-center w-full h-[640px] md:h-[780px] mx-auto">
        <img
          src="/prepro/header.png"
          width="512"
          height="512"
          alt="Prepro header"
          className="absolute mx-auto"
        />
        <img
          src="/prepro/header-phone.png"
          width="220"
          height="220"
          alt="Prepro header phone"
          className="absolute mx-auto mt-[14rem] md:mt-[18rem] w-[200px] h-auto md:w-[220px]"
        />
      </div>
      <div className="flex flex-col w-full md:w-[70%] mx-auto overflow-hidden">
        <div className="flex flex-col gap-12 lg:flex-row py-8 px-8 justify-center mx-auto">
          <div className="flex flex-col gap-2 md:gap-8 md:w-9/12">
            <h3 className="text-lg md:text-xl font-semibold text-white/80">
              The Challenge
            </h3>
            <h1 className="text-2xl md:text-4xl font-semibold">
              Pearson asked us to identify a problem that education will face in
              the next fifteen years – and solve it.
            </h1>
          </div>
          <div className="flex flex-col gap-8 md:w-3/12">
            <div className="flex flex-col gap-2 w-fit">
              <p className="font-bold text-white/80">Award</p>
              <p>D&AD Youngblood</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold text-white/80">Roles</p>
              <p>
                • <span className="ml-4">Product Design</span>
              </p>
              <p>
                • <span className="ml-4">Interaction Design</span>
              </p>
              <p>
                • <span className="ml-4">Brand Strategy</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col py-16 md:mt-8 gap-4 md:gap-8 px-8">
          <h3 className="text-4xl md:text-5xl font-semibold">Project Vision</h3>
          <p className="text-white/70  md:text-lg">
            We saw the disconnect between students and the availability of
            practical experience available to them when exploring future
            careers. With the professional world changing at such a rapid pace,
            it would be a huge help for students to be able to connect with
            real-world professionals in a variety of fields. Conversely, all
            companies need to hire up-and-coming talent, and that process can be
            difficult and expensive.
          </p>
          <p className="text-white/75  md:text-lg italic">
            So we set out to build a software application that could help
            connect students with professionals for individualized mentorship
            opportunities that would benefit them both.
          </p>
        </div>
        <div className="flex flex-col py-12 md:py-16 gap-4 md:gap-8 px-8">
          <h3 className="text-4xl md:text-5xl font-semibold">The Kickoff</h3>
          <p className="text-white/70  md:text-lg">
            To begin, we had to determine the use cases for both our potential
            students and mentors, and what alternatives exist currently.
          </p>
          <div className="container grid md:grid-cols-3 grid-cols-2 text-center md:text-start gap-12">
            <p className="text-gray-100  md:text-xl">
              “How can we best facilitate mentor + student connections?”
            </p>
            <p className="text-gray-100  md:text-xl">
              “What needs to change within different professional fields?”
            </p>
            <p className="text-gray-100  md:text-xl">
              “What are the challenges we will face moving forward?”
            </p>
            <p className="text-gray-100  md:text-xl">
              “What would inspire professionals to use a product like this?”
            </p>
            <p className="text-gray-100  md:text-xl">
              “What needs change with in different professional fields?”
            </p>
            <p className="text-gray-100  md:text-xl">
              “Which users are most important?“
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-12 py-12 md:py-16 px-8">
          <h3 className="text-5xl font-semibold">Meet the Users</h3>
          <div className="flex flex-col md:flex-row justify-center md:justify-between gap-16">
            <div className="flex flex-col gap-12">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <img
                  src="/prepro/sarah.png"
                  width="200"
                  height="200"
                  alt="Picture of student"
                />
                <div className="flex flex-col gap-4 w-full ">
                  <h4 className="text-3xl font-semibold">Sarah Anderson</h4>
                  <p className="text-xl">High School Senior</p>
                  <ul className="list-inside list-disc text-gray-200 text-lg">
                    <li>Bright</li>
                    <li>Hard Working</li>
                    <li>Curious</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-4xl font-semibold">Narrative</h4>
                <p className="text-lg text-gray-300 font-normal">
                  Sarah is a high school student who isn’t sure what career she
                  wants to pursue.
                </p>
                <p className="text-lg text-gray-300 font-normal">
                  She cares about people and has an interest in technology, and
                  wants to learn more about what jobs are available in tech that
                  would also let her focus on her passion for helping others.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-12">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <img
                  src="/prepro/leah.png"
                  width="200"
                  height="200"
                  alt="Picture of student"
                />
                <div className="flex flex-col gap-4 w-full">
                  <h4 className="text-3xl font-semibold">Leah Smith</h4>
                  <p className="text-xl">Product Manager @ Google</p>
                  <ul className="list-inside list-disc text-gray-200 text-lg">
                    <li>Driven</li>
                    <li>Compassionate</li>
                    <li>Leader</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-4xl font-semibold">Narrative</h4>
                <p className="text-lg font-normal text-gray-300">
                  Leah is a Product Manager at Google who has an unconventional
                  professional background, but whose intelligence and drive has
                  helped her find success is whatever capacity she has worked.
                </p>
                <p className="text-lg font-normal text-gray-300">
                  She has a strong desire to give back and help the next
                  generation find their way to find the success she has found
                  for herself.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:gap-8 my-16 px-8">
          <h3 className="text-5xl font-semibold">Key Path Scenarios</h3>
          <p className="text-lg font-normal text-gray-300">
            Often, products tend to have just one primary key path scenario.
            However, with PrePro, there are two key paths for each of our
            distinct users: One for the mentor, and one for the student. It is
            key to the product’s success that we refine both paths, because we
            need both Mentors and Students to have a positive experience on the
            app.
          </p>
          <div className="flex w-full justify-center pt-8">
            <img
              src="/prepro/key-path-scenarios.png"
              width="1000"
              height="1000"
              alt="Key path scenarios"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-12 py-12 md:py-16 px-8">
          <div className="flex flex-1 flex-col gap-4 md:gap-8">
            <h3 className="text-5xl font-semibold">Lo-fi Ideation</h3>
            <p className="text-lg font-normal text-gray-300">
              By iterating on some very rough sketches, we realized some of the
              ideas and layouts we had in mind weren’t going to work.
            </p>
            <p className="text-lg font-normal text-gray-300">
              However, the process of sketching them out let us iterate quickly
              and communicate more efficiently than if we had just used words,
              and allowed us to draw inspiration from each other to find a
              design solution that would deliver the most value relatively
              quickly.
            </p>
          </div>
          <div className="flex flex-1 justify-end">
            <img
              src="/prepro/lofi-ideation.png"
              width="400"
              height="400"
              alt="Lo-fi ideation"
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-12 py-12 md:py-16 px-8">
          <div className="flex flex-1">
            <img
              src="/prepro/wireframes.png"
              width="500"
              height="500"
              alt="Prepro wireframes"
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-1 flex-col gap-4 md:gap-8">
            <h3 className="text-5xl font-semibold">Wireframes</h3>
            <p className="text-lg font-normal text-gray-300">
              Creating low fidelity wireframes, we were able to simplify the
              design and get into the details of user flow and what was working
              in our designs and what wasn’t.
            </p>
            <p className="text-lg font-normal text-gray-300">
              As we explored the key path scenarios for both the mentors and the
              students, the designs became refined and the user flows became
              more clear and usable.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-col gap-4 md:gap-8 py-12 md:py-16 mb-16">
          <div className="flex flex-col gap-4 md:gap-8 px-8">
            <h3 className="text-5xl font-semibold">Style Guide</h3>
            <p className="text-lg font-normal text-gray-300">
              We knew we wanted a gradient to play a key role in the branding,
              as it visually represented the transformative nature of a mentor
              ship relationship, and thus you can see it sparingly but
              prominently through out the app, including being featured in the
              logo.
            </p>
            <p className="text-lg font-normal text-gray-300">
              We also heard from mentors that they valued simplicity, so we kept
              the color palette simple and ground and prioritized legibility and
              a professional feel with primarily white on a deep blue-ish purple
              and the striking yet classic look of Avenir Next.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/prepro/style-guide.png"
              width="1000"
              height="1000"
              alt="Prepro style guide"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
