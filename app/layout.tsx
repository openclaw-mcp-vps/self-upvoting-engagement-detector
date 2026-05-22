import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Engagement Detector — Spot Artificial Voting Patterns",
  description: "Detect artificial engagement patterns on social platforms. Real-time monitoring dashboards and automated alerts for suspicious engagement spikes."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e0b58d94-569c-421d-a7a6-afef84b15fbe"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
