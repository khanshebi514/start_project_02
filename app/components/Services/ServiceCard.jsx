"use client";

import { useState } from "react";

export default function ServiceCard({ service }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article
      className="
        group
        self-start
        overflow-hidden
        rounded-brand-lg
        border
        border-brand-border
        bg-brand-surface
        shadow-brand-sm

        transition-all
        duration-300

        hover:border-brand-secondary
        hover:shadow-brand
      "
    >
      {/* =====================================================
          SERVICE VISUAL
      ===================================================== */}

      <div
        className="
          relative
          flex
          h-40
          items-end
          overflow-hidden
          bg-brand-gradient
          p-6
        "
      >
        {/* Engineering Grid */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-10

            bg-[linear-gradient(to_right,var(--color-brand-surface)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-brand-surface)_1px,transparent_1px)]
            bg-[size:28px_28px]
          "
        />

        {/* Decorative Rings */}

        <div
          className="
            absolute
            right-8
            top-8
            h-20
            w-20
            rounded-full
            border
            border-brand-surface/10
          "
        />

        <div
          className="
            absolute
            right-14
            top-14
            h-8
            w-8
            rounded-full
            border
            border-brand-accent/40
          "
        />

        {/* Icon */}

        <div
          className="
            relative
            z-10
            flex
            h-12
            w-12
            items-center
            justify-center

            rounded-brand

            border
            border-brand-surface/15

            bg-brand-surface/10

            text-xl
            text-brand-accent

            backdrop-blur-sm

            transition-transform
            duration-300

            group-hover:-translate-y-1
          "
        >
          {service.icon}
        </div>

        {/* Service Number */}

        <div
          className="
            absolute
            bottom-6
            right-6
            z-10

            text-xs
            font-bold
            tracking-[0.15em]

            text-brand-surface/60
          "
        >
          SERVICE {service.number}
        </div>
      </div>

      {/* =====================================================
          BASIC INFORMATION
      ===================================================== */}

      <div className="p-6">
        {/* Category */}

        <span
          className="
            text-xs
            font-bold
            uppercase
            tracking-[0.15em]

            text-brand-secondary
          "
        >
          {service.category}
        </span>

        {/* Title */}

        <h3
          className="
            mt-3

            text-xl
            font-bold
            leading-snug

            text-brand-heading
          "
        >
          {service.title}
        </h3>

        {/* Description */}

        <p
          className="
            mt-3
            line-clamp-2

            text-sm
            leading-7

            text-brand-muted
          "
        >
          {service.description}
        </p>

        {/* =================================================
            TOGGLE
        ================================================= */}

        <button
          type="button"
          onClick={() => setIsExpanded((current) => !current)}
          aria-expanded={isExpanded}
          className="
            mt-6

            flex
            w-full
            items-center
            justify-between

            border-t
            border-brand-border

            pt-5

            text-left

            text-sm
            font-bold

            text-brand-secondary

            transition-colors
            duration-300

            hover:text-brand-primary
          "
        >
          <span>
            {isExpanded ? "Hide Service Details" : "View Service Details"}
          </span>

          <span
            className="
              flex
              h-7
              w-7
              items-center
              justify-center

              rounded-full

              bg-brand-background

              transition-colors
              duration-300

              group-hover:bg-brand-border
            "
          >
            <span
              className={`
                transition-transform
                duration-300
                ${isExpanded ? "rotate-180" : ""}
              `}
            >
              ↓
            </span>
          </span>
        </button>

        {/* =================================================
            EXPANDABLE CONTENT
        ================================================= */}

        <div
          className={`
            overflow-hidden

            transition-all
            duration-500
            ease-in-out

            ${isExpanded ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <div className="pt-6">
            {/* Overview */}

            <div>
              <p
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.15em]

                  text-brand-muted
                "
              >
                Service Overview
              </p>

              <p
                className="
                  mt-2

                  text-sm
                  leading-7

                  text-brand-text
                "
              >
                {service.description}
              </p>
            </div>

            {/* What's Included */}

            <div className="mt-6">
              <p
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.15em]

                  text-brand-muted
                "
              >
                What's Included
              </p>

              <ul className="mt-3 space-y-2">
                {service.includes.map((item) => (
                  <li
                    key={item}
                    className="
                      flex
                      items-start
                      gap-3

                      text-sm
                      leading-6

                      text-brand-text
                    "
                  >
                    <span
                      className="
                        mt-2
                        h-1.5
                        w-1.5
                        shrink-0

                        rounded-full

                        bg-brand-accent
                      "
                    />

                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Meta */}

            <div
              className="
                mt-6

                grid
                grid-cols-2

                border-y
                border-brand-border
              "
            >
              <div
                className="
                  border-r
                  border-brand-border

                  py-4
                  pr-4
                "
              >
                <p
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-wider

                    text-brand-muted
                  "
                >
                  Category
                </p>

                <p
                  className="
                    mt-1
                    text-sm
                    font-semibold

                    text-brand-heading
                  "
                >
                  {service.category}
                </p>
              </div>

              <div className="py-4 pl-4">
                <p
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-wider

                    text-brand-muted
                  "
                >
                  Service
                </p>

                <p
                  className="
                    mt-1
                    text-sm
                    font-semibold

                    text-brand-heading
                  "
                >
                  {service.number}
                </p>
              </div>
            </div>

            {/* CTA */}

            <a
              href="contactus"
              className="
                mt-5

                inline-flex
                items-center
                gap-2

                text-sm
                font-bold

                text-brand-secondary

                transition-all
                duration-300

                hover:gap-3
                hover:text-brand-primary
              "
            >
              Discuss This Service
              <span>→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Accent */}

      <div
        className={`
          h-[3px]
          bg-brand-accent

          transition-opacity
          duration-500

          ${isExpanded ? "opacity-100" : "opacity-0"}
        `}
      />
    </article>
  );
}
