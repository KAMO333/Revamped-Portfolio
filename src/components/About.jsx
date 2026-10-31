export const About = () => {
  return (
    <section
      id="about"
      className="py-12 md:py-16 bg-white dark:bg-[#030712] px-6 lg:px-24"
    >
      <div className="w-full max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <h2 className="text-slate-900 dark:text-white font-black text-2xl md:text-3xl uppercase tracking-tighter">
              About
            </h2>
          </div>
          <div className="h-[1px] w-full bg-gradient-to-r from-sky-500/50 to-transparent" />
        </div>

        {/* Narrative Block */}
        <div className="space-y-6 max-w-3xl mx-auto text-left">
          <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed font-light text-pretty">
            I’m a Full Stack Developer specialising in React, Node.js, and
            TypeScript, with core expertise in Next.js, Jest and Vitest, CI/CD
            pipelines, and Microsoft Azure. I take full ownership of the
            end-to-end pipeline, from architecting secure RESTful APIs with
            Express.js and managing PostgreSQL databases, to containerising with
            Docker.
          </p>

          <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed font-light text-pretty">
            On the backend, I ensure reliable data flow using Supabase and
            Prisma ORM, alongside NoSQL solutions with MongoDB and Mongoose, and
            optimize performance with Redis caching.
          </p>

          <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed font-light text-pretty">
            On the client side, I craft responsive, modern frontends that
            prioritize a seamless user experience. Using Redux, JavaScript, and
            Tailwind CSS, I build clean, component-driven interfaces that are
            intuitive and fast.
          </p>

          <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed font-light text-pretty">
            I believe in shipping stable code with absolute confidence. To
            maintain high engineering standards, I enforce rigorous testing
            protocols and automate delivery to guarantee seamless deployments.
          </p>

          <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed font-light text-pretty">
            Currently expanding my cloud architecture capabilities, I have spent
            the last 2 years building and shipping functional web software and
            internal tools that solve real business problems for tech start-ups.
          </p>
        </div>
      </div>
    </section>
  );
};
