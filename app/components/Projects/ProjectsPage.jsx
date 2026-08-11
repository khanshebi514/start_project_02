import ProjectsHero from "./ProjectsHero";
import ProjectsGrid from "./ProjectsGrid";
import NetworkFlow from "./NetworkFlow";
import ProjectsCTA from "./ProjectsCTA";
import { projects } from "@/app/data/Projects";

export default function ProjectsPage() {
  return (
    <main className="bg-brand-background" id="projects">
      {/* ================================================
          HERO
      ================================================= */}

      <ProjectsHero />

      {/* ================================================
          PROJECTS
      ================================================= */}

      <section className="bg-brand-background py-20 lg:py-28">
        <div
          className="
            mx-auto
            max-w-7xl

            px-5

            sm:px-6

            lg:px-8
          "
        >
          {/* Section Heading */}

          <div
            className="
              flex
              flex-col
              gap-5

              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >
            <div>
              <span
                className="
                  text-sm
                  font-bold
                  uppercase
                  tracking-[0.18em]

                  text-brand-secondary
                "
              >
                Selected Work
              </span>

              <h2
                className="
                  mt-3

                  text-3xl
                  font-extrabold
                  tracking-tight

                  text-brand-heading

                  sm:text-4xl
                "
              >
                Projects across
                <span className="text-brand-secondary">
                  {" "}
                  electrical infrastructure.
                </span>
              </h2>
            </div>

            <p
              className="
                max-w-xl

                leading-7

                text-brand-muted

                lg:text-right
              "
            >
              Our work spans NSP overhead and underground networks, electrical
              distribution, residential developments and customer connections.
            </p>
          </div>

          {/* Project Grid */}

          <div className="mt-12">
            <ProjectsGrid projects={projects} />
          </div>
        </div>
      </section>

      {/* ================================================
          NETWORK FLOW
      ================================================= */}

      <NetworkFlow />

      {/* ================================================
          CTA
      ================================================= */}

      <ProjectsCTA />
    </main>
  );
}
