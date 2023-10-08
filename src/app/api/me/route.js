import { ImageResponse } from "next/server";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "black",
        }}
      >
        <div tw="bg-gray-900 flex rounded">
          <div tw="flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-between p-8">
            <h2 tw="flex flex-col text-3xl sm:text-4xl font-bold tracking-tight text-gray-100 text-left">
              <span>OSCAR LEYVA SANCHEZ</span>
              <span tw="text-indigo-600 text-xl">Front-End Developer.</span>
            </h2>
            <div tw="mt-8 flex md:mt-0 items-center justify-center text-gray-100">
              <img
                src="https://avatars.githubusercontent.com/u/31624198?v=4"
                tw="rounded-full w-12 h-12"
              />
              <div tw="ml-3">https://github.com/oleyva93/</div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
