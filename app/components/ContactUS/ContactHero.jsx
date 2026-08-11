export default function ContactHero() {
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
          lg:py-24
        "
      >
        <div className="max-w-3xl animate-slide-right">

          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-brand-accent" />

            <span
              className="
                text-sm
                font-bold
                uppercase
                tracking-[0.18em]
                text-brand-accent
              "
            >
              Contact Us
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
            Let's talk about
            <span className="block text-brand-secondary-light">
              your next project.
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
            Whether you need electrical engineering, NSP network
            design, quantity takeoff, cost estimation or project
            support, tell us what you're working on and we'll
            get back to you.
          </p>

        </div>
      </div>
    </section>
  );
}