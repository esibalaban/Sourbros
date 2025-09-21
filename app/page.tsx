// app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center p-8"
      style={{ backgroundColor: "rgb(247, 235, 217)" }}
    >
      {/* Your looping MP4 video */}
      <video
        src="/sourbrostrut.mp4"
        autoPlay
        loop
        muted
        playsInline
        width={500}
        height={500}
        className="shadow-none rounded-lg"
      />

      {/* App name / heading */}
      <h1 className="text-4xl font-bold mt-6">sourbros</h1>
      <p className="text-lg text-gray-600 mt-2">
        Download our shitty app to join the sourbros community to roast your friend's scrans.
      </p>

      {/* iOS App Store button (official badge) */}
      <Link
        href="https://apps.apple.com/app/idXXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6"
      >
        <img
          src="/app-store-badge.svg"
          alt="Download on the App Store"
          width={200}
          height={60}
        />
      </Link>
    </main>
  );
}