import ContactForm from "./ContactForm";
import ContactHero from "./ContactHero";
import ContactInfo from "./ContactInformation";

export default function ContactPage() {
  return (
    <main className="bg-brand-background">
      {/* Hero */}

      <ContactHero />

      {/* Contact Section */}

      <section className="bg-brand-background py-20 lg:py-28">
        <div
          className="
            mx-auto
            grid
            max-w-7xl
            gap-14

            px-5

            sm:px-6

            lg:grid-cols-[0.8fr_1.2fr]
            lg:items-start
            lg:px-8
          "
        >
          {/* Information */}

          <ContactInfo />

          {/* Form */}

          <ContactForm />
        </div>
      </section>

      {/* Bottom CTA */}

      <section className="bg-brand-primary">
        <div
          className="
            mx-auto
            max-w-7xl

            px-5
            py-14

            text-center

            sm:px-6
            lg:px-8
          "
        >
          <p
            className="
              text-sm
              font-semibold
              text-brand-surface/70
            "
          >
            Electrical Engineering • NSP Networks • Project Management •
            Estimation
          </p>

          <h2
            className="
              mt-3
              text-2xl
              font-bold
              text-brand-surface
              sm:text-3xl
            "
          >
            Let's build the right solution for your project.
          </h2>
        </div>
      </section>
    </main>
  );
}
