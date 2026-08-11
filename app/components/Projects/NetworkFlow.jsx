const networkSteps = [
  {
    number: "01",
    title: "Main Supply",
    description:
      "Connection to the existing network or designated supply point.",
  },
  {
    number: "02",
    title: "Pit / Network",
    description:
      "Electrical infrastructure routes power through the planned network.",
  },
  {
    number: "03",
    title: "Distribution",
    description:
      "Power is distributed through the designed overhead or underground system.",
  },
  {
    number: "04",
    title: "Property Connection",
    description:
      "The network extends toward the individual development or property connection.",
  },
  {
    number: "05",
    title: "Home Board",
    description:
      "The customer supply reaches the main switchboard and property electrical system.",
  },
];

export default function NetworkFlow() {
  return (
    <section className="bg-brand-surface py-20 lg:py-28">
      <div
        className="
          mx-auto
          max-w-7xl

          px-5

          sm:px-6

          lg:px-8
        "
      >
        {/* Heading */}

        <div
          className="
            max-w-3xl
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

                text-brand-secondary
              "
            >
              Network Delivery
            </span>
          </div>

          <h2
            className="
              mt-4

              text-3xl
              font-extrabold
              leading-tight

              text-brand-heading

              sm:text-4xl
            "
          >
            From the supply point
            <span className="text-brand-secondary"> to the customer.</span>
          </h2>

          <p
            className="
              mt-5

              leading-8

              text-brand-muted
            "
          >
            Our network design work considers the complete electrical
            distribution journey, helping coordinate infrastructure from the
            main supply area through the network and ultimately to the customer
            connection.
          </p>
        </div>

        {/* =================================================
            FLOW DIAGRAM
        ================================================= */}

        <div
          className="
            mt-14

            overflow-hidden

            rounded-brand-lg

            border
            border-brand-border

            bg-brand-background

            p-6

            shadow-brand-sm

            lg:p-10
          "
        >
          {/* Desktop Flow */}

          <div
            className="
              hidden

              lg:grid
              lg:grid-cols-5
              lg:items-start
            "
          >
            {networkSteps.map((step, index) => (
              <div
                key={step.number}
                className="
                  relative
                  px-4
                  text-center
                "
              >
                {/* Connector */}

                {index < networkSteps.length - 1 && (
                  <div
                    className="
                      absolute

                      left-[calc(50%+28px)]
                      right-[calc(-50%+28px)]

                      top-7

                      h-px

                      bg-brand-border
                    "
                  />
                )}

                {/* Number */}

                <div
                  className="
                    relative
                    z-10
                    mx-auto

                    flex
                    h-14
                    w-14
                    items-center
                    justify-center

                    rounded-full

                    bg-brand-primary

                    text-sm
                    font-bold

                    text-brand-accent

                    shadow-brand-sm
                  "
                >
                  {step.number}
                </div>

                <h3
                  className="
                    mt-6

                    text-base
                    font-bold

                    text-brand-heading
                  "
                >
                  {step.title}
                </h3>

                <p
                  className="
                    mt-2

                    text-xs
                    leading-6

                    text-brand-muted
                  "
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile / Tablet Flow */}

          <div className="lg:hidden">
            {networkSteps.map((step, index) => (
              <div
                key={step.number}
                className="
                  relative
                  flex
                  gap-5
                "
              >
                {/* Vertical connector */}

                {index < networkSteps.length - 1 && (
                  <div
                    className="
                      absolute
                      left-7
                      top-14
                      bottom-0
                      w-px

                      translate-x-[-50%]

                      bg-brand-border
                    "
                  />
                )}

                {/* Number */}

                <div
                  className="
                    relative
                    z-10
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center

                    rounded-full

                    bg-brand-primary

                    text-sm
                    font-bold

                    text-brand-accent
                  "
                >
                  {step.number}
                </div>

                {/* Content */}

                <div className="pb-10">
                  <h3
                    className="
                      pt-2

                      font-bold

                      text-brand-heading
                    "
                  >
                    {step.title}
                  </h3>

                  <p
                    className="
                      mt-2

                      text-sm
                      leading-7

                      text-brand-muted
                    "
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* OH / UG */}

        <div
          className="
            mt-6

            grid
            gap-6

            md:grid-cols-2
          "
        >
          <div
            className="
              rounded-brand-lg

              border
              border-brand-border

              bg-brand-background

              p-6
            "
          >
            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.15em]

                text-brand-secondary
              "
            >
              OH
            </span>

            <h3
              className="
                mt-2

                text-xl
                font-bold

                text-brand-heading
              "
            >
              Overhead Networks
            </h3>

            <p
              className="
                mt-3

                text-sm
                leading-7

                text-brand-muted
              "
            >
              Design and coordination of overhead electrical distribution
              infrastructure connecting existing network assets with development
              and customer requirements.
            </p>
          </div>

          <div
            className="
              rounded-brand-lg

              border
              border-brand-border

              bg-brand-background

              p-6
            "
          >
            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.15em]

                text-brand-secondary
              "
            >
              UG
            </span>

            <h3
              className="
                mt-2

                text-xl
                font-bold

                text-brand-heading
              "
            >
              Underground Networks
            </h3>

            <p
              className="
                mt-3

                text-sm
                leading-7

                text-brand-muted
              "
            >
              Underground network planning incorporating pits, conduits, cable
              routes and customer connections throughout new developments and
              infrastructure upgrades.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
