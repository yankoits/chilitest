import Link from "next/link"

export default function NotFound() {
  return (
    <main className="main-container items-center justify-center">
      <p className="p-4 text-lg">Something went wrong! Product not found.</p>
      <Link
        href="/"
        className="btn-blue"
      >
        Back to product list
      </Link>
    </main>
  )
}
