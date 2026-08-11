import Link from "next/link";

const navigation = [
  {
    title: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Projects", href: "/projects" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Our Services",
    links: [
      {
        label: "Electrical Engineering",
        href: "/services#electrical-engineering",
      },
      {
        label: "NBN",
        href: "/services#nbn",
      },
      {
        label: "Project Management",
        href: "/services#project-management",
      },
      {
        label: "Cost Estimation",
        href: "/services#cost-estimation",
      },
      {
        label: "Quantity Takeoff",
        href: "/services#quantity-takeoff",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-brand-primary text-brand-surface">
      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <div
        className="
          mx-auto
          max-w-7xl
          px-5
          py-16

          sm:px-6
          lg:px-8
          lg:py-20
        "
      >
        <div
          className="
            grid
            gap-12

            lg:grid-cols-[1.3fr_0.8fr_1fr_1.2fr]
            lg:gap-10
          "
        >
          {/* =================================================
              BRAND
          ================================================= */}

          <div className="animate-fade-in">
            {/* Logo */}

            <Link
              href="/"
              className="
                inline-flex
                items-center
                gap-3
                group
              "
            >
              {/* Logo Mark */}

              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center

                  rounded-brand

                  border
                  border-brand-surface/10

                  bg-brand-secondary

                  shadow-brand-button

                  transition-transform
                  duration-300

                  group-hover:-translate-y-1
                "
              >
                <span
                  className="
                    text-lg
                    font-extrabold
                    text-brand-surface
                  "
                >
                  E
                </span>
              </div>

              {/* Brand Name */}

              <div>
                <span
                  className="
                    block
                    text-base
                    font-extrabold
                    tracking-wide
                  "
                >
                  Engineering
                </span>

                <span
                  className="
                    block
                    text-xs
                    font-medium
                    tracking-[0.18em]
                    text-brand-secondary-light
                  "
                >
                  SOLUTIONS
                </span>
              </div>
            </Link>

            {/* Description */}

            <p
              className="
                mt-6
                max-w-sm

                text-sm
                leading-7

                text-brand-surface/65
              "
            >
              Professional electrical engineering, network design, project
              management and technical consultancy supporting infrastructure and
              development projects across Australia.
            </p>

            {/* Accent Line */}

            <div className="mt-7 flex items-center gap-3">
              <span className="h-px w-10 bg-brand-accent" />

              <span
                className="
                  text-xs
                  font-semibold
                  tracking-wider
                  text-brand-surface/50
                "
              >
                ENGINEERED FOR PERFORMANCE
              </span>
            </div>
          </div>

          {/* =================================================
              COMPANY NAVIGATION
          ================================================= */}

          <div>
            <h3
              className="
                text-sm
                font-bold
                uppercase
                tracking-[0.15em]
                text-brand-accent
              "
            >
              Company
            </h3>

            <ul className="mt-6 space-y-3">
              {navigation[0].links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="
                      inline-flex
                      items-center
                      gap-2

                      text-sm
                      text-brand-surface/65

                      transition-all
                      duration-300

                      hover:translate-x-1
                      hover:text-brand-surface
                    "
                  >
                    <span
                      className="
                        h-px
                        w-0
                        bg-brand-accent

                        transition-all
                        duration-300

                        group-hover:w-3
                      "
                    />

                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* =================================================
              SERVICES
          ================================================= */}

          <div>
            <h3
              className="
                text-sm
                font-bold
                uppercase
                tracking-[0.15em]
                text-brand-accent
              "
            >
              Services
            </h3>

            <ul className="mt-6 space-y-3">
              {navigation[1].links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="
                      text-sm
                      leading-6
                      text-brand-surface/65

                      transition-colors
                      duration-300

                      hover:text-brand-secondary-light
                    "
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* =================================================
              CONTACT CTA
          ================================================= */}

          <div>
            <h3
              className="
                text-sm
                font-bold
                uppercase
                tracking-[0.15em]
                text-brand-accent
              "
            >
              Start a Project
            </h3>

            <p
              className="
                mt-6
                text-sm
                leading-7
                text-brand-surface/65
              "
            >
              Have an upcoming project or need engineering support? Tell us what
              you are working on.
            </p>

            {/* CTA */}

            <Link
              href="/contact"
              className="
                mt-6
                inline-flex
                items-center
                gap-3

                rounded-brand

                bg-brand-secondary

                px-5
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
              Contact Us
              <span
                className="
                  text-lg
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* =====================================================
          DIVIDER
      ===================================================== */}

      <div className="border-t border-brand-surface/10" />

      {/* =====================================================
          BOTTOM BAR
      ===================================================== */}

      <div
        className="
          mx-auto
          flex
          max-w-7xl

          flex-col
          gap-4

          px-5
          py-6

          sm:px-6

          md:flex-row
          md:items-center
          md:justify-between

          lg:px-8
        "
      >
        {/* Copyright */}

        <p
          className="
            text-xs
            text-brand-surface/45
          "
        >
          © {new Date().getFullYear()} Engineering Solutions. All rights
          reserved.
        </p>

        {/* Bottom Links */}

        <div
          className="
            flex
            items-center
            gap-5
          "
        >
          <Link
            href="/privacy-policy"
            className="
              text-xs
              text-brand-surface/45

              transition-colors
              duration-300

              hover:text-brand-surface
            "
          >
            Privacy Policy
          </Link>

          <span
            className="
              h-3
              w-px
              bg-brand-surface/15
            "
          />

          <Link
            href="/terms"
            className="
              text-xs
              text-brand-surface/45

              transition-colors
              duration-300

              hover:text-brand-surface
            "
          >
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
