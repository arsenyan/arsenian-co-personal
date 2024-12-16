import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

const bgColor = "#ff4d26";
const titleFontSize = "80px";
const titleTextTransform = "lowercase";
const titleLineHeight = "0.8";
const titleLetterSpacing = "normal";
const subtitleTextColor = "#ffffff";
const subtitleFontSize = "30px";

export async function GET(req: { url: string | URL; }) {
  try {
    const { searchParams } = new URL(req.url);

    const font1 = await fetch(
      new URL("../.././fonts/StratosLCRegular.woff", import.meta.url)
    );

    if (!font1.ok) {
      throw new Error("Failed to fetch the font file");
    }

    const fontData1 = await font1.arrayBuffer();

    // You can use another font if you subscribe to vercel Pro plan with code size limit of 2MB
    const font2 = await fetch(
       new URL("../.././fonts/KommunaRegular.woff", import.meta.url)
     );

     if (!font2.ok) {
       throw new Error("Failed to fetch the font file");
     }

     const fontData2 = await font2.arrayBuffer();

    // dynamic params| ?title=your%20title | %20 = space in url, %0D next line
    // Example: ?title=number%20one%20remote%0Djob%20app
    const title = searchParams.has("title")
      ? searchParams.get("title")?.toLowerCase()
      : "artem arsenian";

    const image = searchParams.has("image")
      ? searchParams.get("image")
      : "https://cdn.sanity.io/images/0q75z5ry/production/3036ec4727e75548afefa3506923be75e94da3ca-1200x700.png";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            backgroundColor: bgColor,
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundImage: `url(${image})`,
            backgroundSize: "fit",
            backgroundPosition: "center",
          }}
        >
          <div
            style={{
              textAlign: "center",
              width: "1200px",
              fontSize: subtitleFontSize,
              color: subtitleTextColor,
              fontFamily: "Inyer",
              marginBottom: "20px",
            }}
          >
            arsenian.co
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
            textAlign: "left",
            fontSize: titleFontSize,
            textTransform: titleTextTransform,
            color: subtitleTextColor,
            lineHeight: titleLineHeight,
            letterSpacing: titleLetterSpacing,
            fontFamily: "Regular",
              }}
            >
              {title}
            </div>
          </div>
            <div
              style={{
            textAlign: "center",
            fontSize: subtitleFontSize,
            textTransform: titleTextTransform,
            color: subtitleTextColor,
            lineHeight: titleLineHeight,
            letterSpacing: titleLetterSpacing,
            fontFamily: "Inyer",
              }}
            >
            </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        // Supported options: 'twemoji', 'blobmoji', 'noto', 'openmoji', 'fluent' and 'fluentFlat'
        emoji: "twemoji",
        fonts: [
          {
            name: "Stratos",
            data: fontData1,
            style: "normal",
          },
           {
             name: "Regular",
             data: fontData2,
             style: "normal",
           },
        ],
      }
    );
  } catch (e) {
    if (e instanceof Error) {
      console.log(`${e.message}`);
    } else {
      console.log('An unknown error occurred');
    }
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
