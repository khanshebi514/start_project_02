export default function ProjectsHero() {
  return (
    <section className="bg-brand-primary">
      <div
        className="
          mx-auto
          max-w-7xl

          px-5
          py-20

          sm:px-6

          lg:px-8
          lg:py-28
        "
      >
        <div
          className="
            max-w-3xl
            animate-slide-right
          "
        >
          <div className="flex items-center gap-3">
            <span
              className="
                h-px
                w-10
                bg-brand-accent
              "
            />

            <span
              className="
                text-sm
                font-bold
                uppercase
                tracking-[0.18em]

                text-brand-accent
              "
            >
              Our Projects
            </span>
          </div>

          <h1
            className="
              mt-6

              text-4xl
              font-extrabold
              leading-tight
              tracking-tight

              text-brand-surface

              sm:text-5xl
              lg:text-6xl
            "
          >
            Electrical networks
            <span className="block text-brand-secondary-light">
              designed for reliable delivery.
            </span>
          </h1>

          <p
            className="
              mt-6
              max-w-2xl

              text-base
              leading-8

              text-brand-surface/75

              sm:text-lg
            "
          >
            We support electrical infrastructure projects across Australia, with
            experience in NSP overhead and underground network design,
            distribution systems, customer connections and development
            infrastructure.
          </p>
        </div>
      </div>
    </section>
  );
}
