// app/page.tsx
import Link from "next/link";
import AndroidWaitlistForm from "./components/AndroidWaitlistForm";

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
        Cook more, eat better. Connect with friends of friends, get inspiration for your meals and share your successes and failures.
      </p>

      {/* iOS App Store + Android waitlist side by side */}
      <div className="mt-8 w-full max-w-2xl flex items-center justify-center">
        <Link
          href="https://testflight.apple.com/join/qF5JPd1S"
          target="_blank"
          rel="noopener noreferrer"
          className="h-full"
        >
          <img
            src="/app-store-badge.svg"
            alt="Download on the App Store"
            width={200}
            height={100}
          />
        </Link>
      </div>
        <div className="mt-8 w-full flex items-center justify-center">
          <AndroidWaitlistForm />
        </div>
    </main>
  );
}