/**
 * v0 by Vercel.
 * @see https://v0.dev/t/WMmTZRjTNH1
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import Image from "next/image"
export default function Component() {
  return (
    <section className=" ">
      <Image
        alt="Hero Background"
        className="absolute mt-6 inset-0 w-full  h-full object-cover"
        height={1080}
        src="/hero.png"
        style={{
          aspectRatio: "1920/1080",
          objectFit: "cover",
        }}
        width={1920}
      />
      <div className="relative z-10 container py-32 px-4 md:px-6 flex flex-col items-start text-left">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">Best Dog Walker in Boston</h1>
        <p className="text-lg md:text-xl text-gray-800 mb-8 max-w-2xl">
          Professional Dog Walker and Sitter
        </p>
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          href="https://www.rover.com/members/william-e-big-dog-energy/?utm_source=sitter_profile_share&utm_medium=android&utm_campaign=852584338&utm_nooverride=1&_branch_match_id=1151226046273528170&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL9Iryi9LLdJLzs%2FVt%2FT2diu3AABNZ%2F1aGgAAAA%3D%3D"
        >
          Book me on Rover
        </Link>
      </div>
    </section>
  )
}