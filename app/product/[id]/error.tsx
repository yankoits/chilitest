"use client"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h2 className="text-center p-2">Something went wrong! {error.message}</h2>
      <button
        className="btn-blue"
        onClick={reset}
      >
        Try again
      </button>
    </main>
  )
}
