import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
  const avatarPath = path.join(process.cwd(), "public", "avatar.png");
  const avatarBuffer = fs.readFileSync(avatarPath);
  const avatarBase64 = `data:image/png;base64,${avatarBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          overflow: "hidden",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={avatarBase64}
          alt="Favicon"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "50%",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
