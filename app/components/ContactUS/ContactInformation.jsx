const contactPoints = [
  {
    number: "01",
    title: "Tell us what you need",
    description:
      "Share your project scope, location, drawings or the engineering support you require.",
  },
  {
    number: "02",
    title: "We review your requirements",
    description:
      "We'll understand the technical and project requirements before discussing the next steps.",
  },
  {
    number: "03",
    title: "Let's plan the next step",
    description:
      "We'll discuss the appropriate service and a practical way forward for your project.",
  },
];

export default function ContactInfo() {
  return (
    <div className="lg:pr-10">
      <span
        className="
          text-sm
          font-bold
          uppercase
          tracking-[0.15em]
          text-brand-secondary
        "
      >
        Start a Conversation
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
        Engineering support
        <span className="block text-brand-secondary">
          starts with a conversation.
        </span>
      </h2>

      <p
        className="
          mt-5
          leading-8
          text-brand-muted
        "
      >
        Whether you're planning a new development, upgrading electrical
        infrastructure or need support with estimating and quantity takeoffs,
        we'd like to understand what you're working on.
      </p>

      {/* Process */}

      <div className="mt-10 space-y-7">
        {contactPoints.map((point) => (
          <div
            key={point.number}
            className="
              flex
              gap-5
            "
          >
            <div
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center

                rounded-full

                bg-brand-primary

                text-xs
                font-bold

                text-brand-accent
              "
            >
              {point.number}
            </div>

            <div>
              <h3
                className="
                  font-bold
                  text-brand-heading
                "
              >
                {point.title}
              </h3>

              <p
                className="
                  mt-1
                  text-sm
                  leading-6
                  text-brand-muted
                "
              >
                {point.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Detail */}

      <div
        className="
          mt-10

          rounded-brand-lg

          border
          border-brand-border

          bg-brand-background

          p-6
        "
      >
        <p
          className="
            text-xs
            font-bold
            uppercase
            tracking-[0.15em]
            text-brand-secondary
          "
        >
          Project Enquiries
        </p>

        <p
          className="
            mt-2
            text-sm
            leading-7
            text-brand-muted
          "
        >
          For project enquiries, technical discussions and service requests, use
          the form and provide as much project information as possible.
        </p>
      </div>
    </div>
  );
}
