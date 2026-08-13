import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-brand-background text-brand-text" id="about">
      {/* =====================================================
          HERO / PAGE INTRO
      ===================================================== */}
      <section className="relative overflow-hidden bg-brand-primary">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-3xl animate-slide-right">
            <span
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-brand-secondary-light
                bg-brand-primary-light
                px-4
                py-2
                text-sm
                font-semibold
                text-brand-secondary-light
              "
            >
              About PigeonsPower
            </span>

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
              Building Strong Foundations.
              <span className="block text-brand-accent">
                Powering Better Futures.
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
              We deliver dependable construction and electrical solutions
              designed around quality, safety, efficiency, and long-term
              performance.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}
      <section className="bg-brand-surface py-20 lg:py-28">
        <div
          className="
            mx-auto
            grid
            max-w-7xl
            items-center
            gap-14
            px-5

            sm:px-6

            lg:grid-cols-2
            lg:px-8
          "
        >
          {/* LEFT CONTENT */}
          <div className="animate-fade-in">
            <span
              className="
                text-sm
                font-bold
                uppercase
                tracking-[0.18em]
                text-brand-secondary
              "
            >
              Who We Are
            </span>

            <h2
              className="
                mt-3
                text-3xl
                font-extrabold
                leading-tight
                text-brand-heading

                sm:text-4xl
              "
            >
              A team built around
              <span className="text-brand-secondary"> quality and trust.</span>
            </h2>

            <p className="mt-6 leading-8 text-brand-text">
              <span>PigeonsPower</span> is a professional construction and
              electrical solutions company focused on delivering reliable work
              for residential, commercial, and industrial projects.
            </p>

            <p className="mt-4 leading-8 text-brand-muted">
              From planning and construction to electrical installation and
              project completion, our approach combines skilled workmanship,
              modern practices, and careful attention to detail.
            </p>

            <div className="mt-8">
              <Link
                href="#contactus"
                className="
                  inline-flex
                  items-center
                  justify-center

                  rounded-brand

                  bg-brand-secondary

                  px-6
                  py-3

                  text-sm
                  font-bold
                  text-brand-surface

                  shadow-brand-button

                  transition-all
                  duration-300

                  hover:-translate-y-0.5
                  hover:bg-brand-secondary-light
                  hover:shadow-brand
                "
              >
                Talk To Our Team
              </Link>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div
            className="
              relative
              overflow-hidden
              rounded-brand-lg
              bg-brand-primary
              p-8
              shadow-brand-lg

              lg:p-10
            "
          >
            <div
              className="
                absolute
                -right-16
                -top-16
                h-40
                w-40
                rounded-full
                bg-brand-secondary
                opacity-20
              "
            />

            <div
              className="
                absolute
                -bottom-20
                -left-20
                h-48
                w-48
                rounded-full
                bg-brand-accent
                opacity-10
              "
            />

            <div className="relative">
              <span className="text-5xl text-brand-accent">⚡</span>

              <h3
                className="
                  mt-6
                  text-2xl
                  font-bold
                  text-brand-surface
                "
              >
                Electrical Consultancy and Design
              </h3>

              <p
                className="
                  mt-4
                  leading-7
                  text-brand-surface/70
                "
              >
                One reliable partner for Electrical consultancy, Design ,
                electrical installation, maintenance, and project support.
              </p>

              <div
                className="
                  mt-8
                  grid
                  grid-cols-2
                  gap-4
                "
              >
                <div
                  className="
                    rounded-brand
                    border
                    border-brand-surface/10
                    bg-brand-surface/5
                    p-5
                  "
                >
                  <p className="text-3xl font-extrabold text-brand-accent">
                    Trusted
                  </p>

                  <p className="mt-1 text-sm text-brand-surface/60"></p>
                </div>

                <div
                  className="
                    rounded-brand
                    border
                    border-brand-surface/10
                    bg-brand-surface/5
                    p-5
                  "
                >
                  <p className="text-3xl font-extrabold text-brand-accent">
                    Experinced
                  </p>

                  <p className="mt-1 text-sm text-brand-surface/60"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY CHOOSE US
      ===================================================== */}
      <section className="bg-brand-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span
              className="
                text-sm
                font-bold
                uppercase
                tracking-[0.18em]
                text-brand-secondary
              "
            >
              Why Choose Us
            </span>

            <h2
              className="
                mt-3
                text-3xl
                font-extrabold
                text-brand-heading

                sm:text-4xl
              "
            >
              Built on principles that matter.
            </h2>

            <p className="mt-5 leading-7 text-brand-muted">
              We believe successful projects are built through quality
              workmanship, clear communication, and responsible project
              management.
            </p>
          </div>

          {/* FEATURES */}
          <div
            className="
              mt-14
              grid
              gap-6

              md:grid-cols-2
              lg:grid-cols-4
            "
          >
            {[
              {
                icon: "✓",
                title: "Quality First",
                description:
                  "We focus on durable materials, precise workmanship, and dependable results.",
              },
              {
                icon: "⚡",
                title: "Technical Expertise",
                description:
                  "Our team combines construction knowledge with modern electrical solutions.",
              },
              {
                icon: "◷",
                title: "Reliable Delivery",
                description:
                  "We plan carefully and work efficiently to keep projects moving forward.",
              },
              {
                icon: "◆",
                title: "Safety Focused",
                description:
                  "Safety remains an essential part of every project from planning to completion.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="
                  group
                  rounded-brand-lg
                  border
                  border-brand-border
                  bg-brand-surface
                  p-7

                  shadow-brand-sm

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:shadow-brand
                "
              >
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center

                    rounded-brand

                    bg-brand-secondary

                    text-xl
                    font-bold
                    text-brand-surface

                    transition-all
                    duration-300

                    group-hover:bg-brand-accent
                    group-hover:text-brand-primary
                  "
                >
                  {item.icon}
                </div>

                <h3
                  className="
                    mt-6
                    text-lg
                    font-bold
                    text-brand-heading
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-7
                    text-brand-muted
                  "
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          OUR APPROACH
      ===================================================== */}
      <section className="bg-brand-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            {/* IMAGE / VISUAL AREA */}
            <div
              className="
                relative
                min-h-[420px]
                overflow-hidden
                rounded-brand-lg
                bg-brand-primary
                shadow-brand-lg
              "
            >
              <div
                className="
                  absolute
                  inset-0
                  bg-brand-gradient
                "
              />

              <div className="relative flex h-full min-h-[420px] items-center justify-center p-10">
                <div className="text-center">
                  <div
                    className="
                      mx-auto
                      flex
                      h-24
                      w-24
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-brand-accent/30
                      bg-brand-accent/10
                    "
                  >
                    <span className="text-4xl text-brand-accent">⚡</span>
                  </div>

                  <h3
                    className="
                      mt-7
                      text-2xl
                      font-bold
                      text-brand-surface
                    "
                  >
                    Built to Last
                  </h3>

                  <p
                    className="
                      mx-auto
                      mt-3
                      max-w-md
                      leading-7
                      text-brand-surface/70
                    "
                  >
                    Every project deserves thoughtful planning, skilled
                    execution, and solutions designed for long-term performance.
                  </p>
                </div>
              </div>
            </div>

            {/* APPROACH CONTENT */}
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
                Our Approach
              </span>

              <h2
                className="
                  mt-3
                  text-3xl
                  font-extrabold
                  leading-tight
                  text-brand-heading

                  sm:text-4xl
                "
              >
                From the first plan to the final detail.
              </h2>

              <p
                className="
                  mt-6
                  leading-8
                  text-brand-muted
                "
              >
                We take a structured approach to every project, ensuring that
                our clients understand the process and remain informed
                throughout the work.
              </p>

              {/* STEPS */}
              <div className="mt-8 space-y-6">
                {[
                  {
                    number: "01",
                    title: "Understand",
                    text: "We listen to your requirements and understand the project's goals.",
                  },
                  {
                    number: "02",
                    title: "Plan",
                    text: "We develop a practical approach focused on quality, safety, and efficiency.",
                  },
                  {
                    number: "03",
                    title: "Build",
                    text: "Our team executes the work with attention to detail and professional standards.",
                  },
                  {
                    number: "04",
                    title: "Deliver",
                    text: "We complete the project with a focus on reliability and client satisfaction.",
                  },
                ].map((step) => (
                  <div key={step.number} className="flex gap-5">
                    <div
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-brand
                        bg-brand-secondary
                        text-sm
                        font-bold
                        text-brand-surface
                      "
                    >
                      {step.number}
                    </div>

                    <div>
                      <h3
                        className="
                          font-bold
                          text-brand-heading
                        "
                      >
                        {step.title}
                      </h3>

                      <p
                        className="
                          mt-1
                          text-sm
                          leading-6
                          text-brand-muted
                        "
                      >
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="bg-brand-primary py-20">
        <div
          className="
            mx-auto
            max-w-4xl
            px-5
            text-center

            sm:px-6
            lg:px-8
          "
        >
          <span
            className="
              text-sm
              font-bold
              uppercase
              tracking-[0.18em]
              text-brand-accent
            "
          >
            Let's Build Together
          </span>

          <h2
            className="
              mt-4
              text-3xl
              font-extrabold
              text-brand-surface

              sm:text-4xl
              lg:text-5xl
            "
          >
            Have a project in mind?
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              leading-7
              text-brand-surface/70
            "
          >
            Tell us what you need and let's discuss how our construction and
            electrical expertise can help bring your project to life.
          </p>

          <div className="mt-8">
            <Link
              href="contactus"
              className="
                inline-flex
                items-center
                justify-center

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
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
