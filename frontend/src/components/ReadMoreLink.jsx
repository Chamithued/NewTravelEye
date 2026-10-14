import { ChevronsRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ReadMoreLink({ to }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#172544] px-5 py-2 text-sm font-semibold uppercase tracking-wide text-[#172544] transition-colors duration-200 hover:bg-[#172544] hover:text-white focus-visible:bg-[#172544] focus-visible:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#172544]"
    >
      Read More
      <ChevronsRight className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
    </Link>
  )
}
