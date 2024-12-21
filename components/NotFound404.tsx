import Image from "next/image";
import Link from "next/link";

export default function NotFound404() {
  return (
    <div className="flex flex-auto justify-center items-center xl:px-12 font-[family-name:var(--font-geist-sans)]">
      <div className="container mx-auto flex flex-col justify-center items-center h-full w-full gap-8">
        <Image
          src="/images/404.png"
          alt="404 Not Found"
          width={600}
          height={600}
          priority={true}
          className="w-auto h-auto"
        />
        <h1 className="text-4xl font-semibold">
          Oops! Looks like you're too fast, but the page is already missing !
        </h1>
        <Link href="/"
        className="px-6 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
        >Back to Home</Link>
      </div>
    </div>
  );
}
