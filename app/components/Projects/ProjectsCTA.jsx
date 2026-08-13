import Link from "next/link";

export default function ProjectsCTA() {
  return (
    <section className="bg-brand-primary">
      <div
        className="
          mx-auto
          max-w-7xl

          px-5
          py-16

          sm:px-6

          lg:flex
          lg:items-center
          lg:justify-between

          lg:px-8
          lg:py-20
        "
      >
        <div className="max-w-2xl">
          <span
            className="
              text-sm
              font-bold
              uppercase
              tracking-[0.18em]

              text-brand-accent
            "
          >
            Have a Project?
          </span>

          <h2
            className="
              mt-3

              text-3xl
              font-extrabold

              text-brand-surface

              sm:text-4xl
            "
          >
            Let's talk about your next electrical project.
          </h2>

          <p
            className="
              mt-4

              leading-7

              text-brand-surface/70
            "
          >
            From NSP network design to development connections, we're ready to
            discuss your project requirements.
          </p>
        </div>

        <div className="mt-8 lg:mt-0">
          <Link
            href="#contactus"
            className="
              inline-flex
              items-center
              gap-2

              rounded-brand

              bg-brand-accent

              px-7
              py-3.5

              text-sm
              font-bold

              text-brand-primary

              shadow-brand-button

              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:bg-brand-accent-dark
              hover:shadow-brand
            "
          >
            Discuss Your Project
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
