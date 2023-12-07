"use client"
import { useRouter } from "next/navigation"

export default function LinkBack() {
  const router = useRouter()
  return (
    <button
      onClick={() => router.back()}
      className="btn-blue self-start"
    >
      &lt; Back
    </button>
  )
}
