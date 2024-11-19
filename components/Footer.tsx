import Link from "next/link";

export function Footer() {
  return (
    <div className="py-8 font-[family-name:var(--font-geist-sans)]">
      <div className="container mx-auto">
        <p className="text-center">
          <Link href="/" className="hover:text-accent">
            Aphiwat
          </Link>{" "}
          © {new Date().getFullYear()} - All rights reserved
        </p>
      </div>
    </div>
  );
}
