"use client";

import { useState } from "react";

export default function ProjectCard({ project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article
      className="
        group
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
          PROJECT VISUAL
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
        {/* Technical Grid */}

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

        {/* Network Illustration */}

        <div
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
          "
        >
          <div className="relative h-20 w-56">
            {/* Main Line */}

            <div
              className="
                absolute
                left-3
                right-3
                top-1/2
                h-px
                bg-brand-surface/40
              "
            />

            {/* Supply */}

            <div
              className="
                absolute
                left-0
                top-1/2

                h-3
                w-3

                -translate-y-1/2

                rounded-full

                bg-brand-accent
              "
            />

            {/* Network Nodes */}

            <div
              className="
                absolute
                left-1/3
                top-1/2

                h-3
                w-3

                -translate-y-1/2

                rounded-full

                bg-brand-secondary-light
              "
            />

            <div
              className="
                absolute
                left-1/2
                top-1/2

                h-3
                w-3

                -translate-y-1/2

                rounded-full

                bg-brand-secondary-light
              "
            />

            <div
              className="
                absolute
                right-1/3
                top-1/2

                h-3
                w-3

                -translate-y-1/2

                rounded-full

                bg-brand-secondary-light
              "
            />

            {/* Customer */}

            <div
              className="
                absolute
                right-0
                top-1/2

                h-4
                w-4

                -translate-y-1/2

                rounded-full

                border-2
                border-brand-surface

                bg-brand-accent
              "
            />
          </div>
        </div>

        {/* Project Number */}

        <div className="relative z-10">
          <span
            className="
              text-xs
              font-bold
              tracking-[0.15em]

              text-brand-surface/70
            "
          >
            PROJECT {project.number}
          </span>
        </div>
      </div>

      {/* =====================================================
          BASIC INFORMATION
      ===================================================== */}

      <div className="p-6">
        {/* Category / Location */}

        <div
          className="
            flex
            items-center
            justify-between
            gap-3
          "
        >
          <span
            className="
              text-xs
              font-bold
              uppercase
              tracking-wider

              text-brand-secondary
            "
          >
            {project.category}
          </span>

          <span
            className="
              text-xs
              text-brand-muted
            "
          >
            {project.location}
          </span>
        </div>

        {/* Title */}

        <h3
          className="
            mt-4

            text-xl
            font-bold
            leading-snug

            text-brand-heading
          "
        >
          {project.title}
        </h3>

        {/* =================================================
            DETAILS TOGGLE
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
            {isExpanded ? "Hide Project Details" : "View Project Details"}
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

              transition-transform
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
            EXPANDABLE DETAILS
        ================================================= */}

        <div
          className={`
            grid
            transition-all
            duration-500
            ease-in-out

            ${
              isExpanded
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }
          `}
        >
          <div className="overflow-hidden">
            <div className="pt-6">
              {/* Project Description */}

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
                  Project Overview
                </p>

                <p
                  className="
                    mt-2

                    text-sm
                    leading-7

                    text-brand-text
                  "
                >
                  {project.description}
                </p>
              </div>

              {/* Technical Information */}

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
                    Network
                  </p>

                  <p
                    className="
                      mt-1

                      text-sm
                      font-semibold

                      text-brand-heading
                    "
                  >
                    {project.networkType}
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
                    Scope
                  </p>

                  <p
                    className="
                      mt-1

                      text-sm
                      font-semibold

                      text-brand-heading
                    "
                  >
                    {project.scope}
                  </p>
                </div>
              </div>

              {/* Tags */}

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="
                      rounded-full

                      bg-brand-background

                      px-3
                      py-1

                      text-[11px]
                      font-medium

                      text-brand-muted
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Accent */}

      <div
        className={`
          h-[3px]

          bg-brand-accent

          transition-all
          duration-500

          ${isExpanded ? "opacity-100" : "opacity-0"}
        `}
      />
    </article>
  );
}
