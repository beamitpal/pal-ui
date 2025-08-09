import { Button } from "@repo/shadcn-ui/components/ui/button";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export const baseOptions: BaseLayoutProps = {
  links: [
    {
      text: "Docs",
      url: "/docs",
      active: "nested-url",
    },
    {
      text: "Components",
      url: "/components",
      active: "nested-url",
    },
    {
      text: "Blocks",
      url: "/blocks",
      active: "nested-url",
    },
  ],
  githubUrl: "https://github.com/beamitpal/pal-ui",
  nav: {
    title: (
      <div className="flex items-center gap-2">
        <svg
          className="h-[18px] w-auto"
          width="117"
          height="116"
          viewBox="0 0 117 116"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Pal UI</title>
          <g fill="currentColor">
            <circle cx="14.1413" cy="13.0193" r="7" />
            <circle cx="37.1413" cy="13.0193" r="7" />
            <circle cx="80.1413" cy="13.0193" r="7" />
            <circle cx="59.1413" cy="13.0193" r="7" />
            <circle
              cx="104.07"
              cy="13.0703"
              r="7"
              transform="rotate(89.4217 104.07 13.0703)"
            />
            <circle
              cx="16.8386"
              cy="97.8387"
              r="7"
              transform="rotate(-38.6447 16.8386 97.8387)"
            />
            <circle
              cx="33.8387"
              cy="81.8387"
              r="7"
              transform="rotate(-38.6447 33.8387 81.8387)"
            />
            <circle
              cx="71.8387"
              cy="44.8387"
              r="7"
              transform="rotate(-38.6447 71.8387 44.8387)"
            />
            <circle
              cx="53.8387"
              cy="62.8387"
              r="7"
              transform="rotate(-38.6447 53.8387 62.8387)"
            />
            <circle
              cx="87.8492"
              cy="29.8492"
              r="7"
              transform="rotate(50.777 87.8492 29.8492)"
            />
            <circle
              cx="104.302"
              cy="40.0691"
              r="7"
              transform="rotate(89.4217 104.302 40.0691)"
            />
            <circle
              cx="104.736"
              cy="83.0669"
              r="7"
              transform="rotate(89.4217 104.736 83.0669)"
            />
            <circle
              cx="104.948"
              cy="104.066"
              r="7"
              transform="rotate(89.4217 104.948 104.066)"
            />
            <circle
              cx="104.525"
              cy="62.068"
              r="7"
              transform="rotate(89.4217 104.525 62.068)"
            />
          </g>
        </svg>
        <span className="font-semibold text-lg">Pal UI</span>
      </div>
    ),
  },
};
