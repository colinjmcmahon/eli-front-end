"use client"

import { useRouter } from "next/navigation"

const buttonClassName =
  "w-56 rounded-xl bg-[#C4B5FD] px-5 py-2.5 text-center text-sm font-semibold text-[#5B2C8A] transition-colors hover:bg-[#B794F4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C4B5FD]"

const Home = () => {
  const router = useRouter()

  const handleCreateScript = () => {
    router.push("/create-script")
  }

  const handleOpenScript = () => {}

  const handleMaintainObjects = () => {}

  return (
    <div className="flex min-h-full flex-1 flex-col items-center justify-center bg-[#F5F6FA] px-4 font-sans">
      <main className="flex flex-col items-center gap-8">
        <h1 className="text-center text-2xl font-bold text-zinc-900">
          What do you want to do?
        </h1>
        <div className="flex flex-col items-center gap-3">
          <button
            type="button"
            className={buttonClassName}
            aria-label="Create Script"
            onClick={handleCreateScript}
          >
            Create Script
          </button>
          <button
            type="button"
            className={buttonClassName}
            aria-label="Open Script"
            onClick={handleOpenScript}
          >
            Open Script
          </button>
          <button
            type="button"
            className={buttonClassName}
            aria-label="Maintain Objects"
            onClick={handleMaintainObjects}
          >
            Maintain Objects
          </button>
        </div>
      </main>
    </div>
  )
}

export default Home
