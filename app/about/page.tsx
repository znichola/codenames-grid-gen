import Link from "next/link";

export default function About() {
  return (
    <main className="container mx-auto p-6">
      <h1 className="text-2xl font-bold">About</h1>
      <p className="mt-4 text-gray-700">
        This is a weekend project done in collaboration with Lucas. Generate your codenames grid, vary the size, and switch up the styles for a customized experience.
      </p>
      <div className="pt-3">
        <Link href="/">Back</Link>
      </div>
    </main>
  );
}
