import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";
import { source } from "../../lib/source";

const loadGoogleFont = async (font: string, text: string, weights: string) => {
  const url = `https://fonts.googleapis.com/css2?family=${font}:wght@${weights}&text=${encodeURIComponent(
    text
  )}`;
  const css = await (await fetch(url)).text();
  const resource = css.match(
    /src: url\((.+)\) format\('(opentype|truetype)'\)/
  );

  if (resource) {
    const response = await fetch(resource[1]);
    if (response.status === 200) {
      return await response.arrayBuffer();
    }
  }

  throw new Error("failed to load font data");
};

export const GET = async (request: NextRequest) => {
  const slug = request.nextUrl.searchParams.get("slug");
  const page = await source.getPage(slug ? slug.split("/") : []);

  if (!page) {
    return new Response("Not found", { status: 404 });
  }

  const { title, description } = page.data;
  const text = `Pal UI ${title} ${description}`;

  return new ImageResponse(
    (
      <div tw="bg-[#1D4ED8] relative flex flex-col justify-between w-full h-full">
        <div
          style={{
            backgroundSize: "48px 48px",
            backgroundImage:
              "linear-gradient(to right, #FFF 1px, transparent 1px), linear-gradient(to bottom, #FFF 1px, transparent 1px)",
          }}
          tw="flex absolute left-0 top-0 w-full h-full opacity-10"
        />
        <div tw="absolute left-36 top-12 z-10 w-12 h-12 bg-white opacity-10" />
        <div tw="absolute left-96 top-24 z-10 w-12 h-12 bg-white opacity-10" />
        <div tw="absolute left-144 top-36 z-10 w-12 h-12 bg-white opacity-10" />
        <div tw="absolute left-192 top-48 z-10 w-12 h-12 bg-white opacity-10" />
        <div tw="absolute left-240 top-24 z-10 w-12 h-12 bg-white opacity-10" />
        <div tw="absolute left-288 top-72 z-10 w-12 h-12 bg-white opacity-10" />
        <div tw="absolute left-48 top-60 z-10 w-12 h-12 bg-white opacity-10" />

        <div tw="flex absolute top-12 left-12 z-10">
          {/* biome-ignore lint/a11y/noSvgWithoutTitle: "satori" */}
          <svg
            fill="none"
            height={48}
            viewBox="0 0 117 116"
            width={48}
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="#FFFFFF">
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
        </div>
        <div
          style={{ fontFamily: "Geist" }}
          tw="flex flex-col absolute bottom-0 left-0 right-0 z-10 p-12"
        >
          <p tw="text-lg m-0 text-white/80 font-semibold">Pal UI</p>
          <h1
            style={{ fontFamily: "Geist Semibold" }}
            tw="my-4 text-6xl font-bold text-white"
          >
            {page.data.title}
          </h1>
          <p tw="text-xl m-0 text-white/80 w-[70%]">{page.data.description}</p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Geist Semibold",
          data: await loadGoogleFont("Geist", text, "600"),
          style: "normal",
        },
        {
          name: "Geist",
          data: await loadGoogleFont("Geist", text, "400"),
          style: "normal",
        },
      ],
    }
  );
};
