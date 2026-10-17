"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const HomeIcon = () => (
  <svg
    aria-hidden="true"
    className="h-5 w-5 shrink-0"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.75}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9.5Z"
    />
  </svg>
)

const BrandMark = () => (
  <svg
    aria-hidden="true"
    className="h-7 w-7 shrink-0 text-white"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2.2 13.8 9.2 20.8 11 13.8 12.8 12 19.8 10.2 12.8 3.2 11 10.2 9.2 12 2.2Z" />
  </svg>
)

const Sidebar = () => {
  const pathname = usePathname()
  const isHome = pathname === "/"

  return (
    <aside
      className="flex w-64 shrink-0 flex-col bg-gradient-to-b from-[#5B2C8A] via-[#7D3C98] to-[#A569BD] px-5 py-8 font-sans text-white"
      aria-label="Main navigation"
    >
      <div className="mb-10 flex items-center gap-3">
        <BrandMark />
        <span className="text-lg font-bold tracking-[0.12em] uppercase">
          ELI
        </span>
      </div>

      <nav>
        <ul className="flex flex-col gap-1">
          <li>
            <Link
              href="/"
              aria-label="Go to main screen"
              aria-current={isHome ? "page" : undefined}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                isHome
                  ? "bg-white/20 text-white"
                  : "text-white/90 hover:bg-white/10"
              }`}
            >
              <HomeIcon />
              Main
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
