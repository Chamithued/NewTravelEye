import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/client/Traveleyelogo.jpg'

const navItems = [
  { top: 'Travel', bottom: 'Collective', to: '/travel-collective' },
  { top: 'Host', bottom: 'Experiences', to: '/experiences' },
  { top: 'Destination', bottom: 'Facilitation', to: '/travel' },
  { top: 'Ecosystem', bottom: 'Support', to: '/support-services' },
  { top: 'Privé', bottom: 'Collection', to: '/stays' },
]

const dropdownGroups = [
  {
    label: 'About Us',
    items: [
      { label: 'About Traveleye Alliance', to: '/about' },
      { label: 'Vision & Mission', to: '/about' },
      { label: 'Why Traveleye', to: '/about' },
      { label: 'Governance & Ethics', to: '/about' },
      { label: 'Media & Press', to: '/about' },
    ],
  },
  {
    label: 'Our Framework',
    items: [
      { label: 'People-Powered Tourism Framework', to: '/travel-collective' },
      { label: 'Explore the Ecosystem', to: '/travel-collective' },
      { label: 'Participation & Shared Stewardship', to: '/travel-collective' },
    ],
  },
  {
    label: 'Opportunities',
    items: [
      { label: 'Join the Ecosystem', to: '/contact' },
      { label: 'Start a Tourism Venture', to: '/contact' },
      { label: 'Partner With Us', to: '/contact' },
      { label: 'Investments & Joint Ventures', to: '/contact' },
    ],
  },
]

function ChevronDown() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5"
    >
      <path
        d="M5.5 7.5 10 12l4.5-4.5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [expandedGroups, setExpandedGroups] = useState({})

  const toggleGroup = (label) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [label]: !prev[label],
    }))
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90">
      <div className="flex w-full items-center py-3 sm:py-3 lg:py-3">
        <NavLink to="/" className="flex-shrink-0 px-4 sm:px-6 lg:px-8">
          <img
            src={logo}
            alt="Traveleye Alliance Sri Lanka"
            className="h-12 w-auto max-w-[220px] object-contain sm:h-16 sm:max-w-[260px] lg:h-20 lg:max-w-[300px]"
          />
        </NavLink>

        <div className="flex-1" />

        <button
          type="button"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((s) => !s)}
          className="mr-2 inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 focus:outline-none xl:hidden"
        >
          {mobileOpen ? (
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        <nav className="hidden items-center gap-1 xl:flex pr-4 sm:pr-6 lg:pr-8" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.top}
              to={item.to}
              className={({ isActive }) =>
                [
                  'inline-flex flex-col items-center rounded-md px-2 py-2 text-center text-[1rem] font-semibold leading-none tracking-[0.01em] transition-colors',
                  isActive ? 'text-[#0f3c68]' : 'text-[#174c84] hover:text-[#0f3c68]',
                ].join(' ')
              }
            >
              <span className="whitespace-nowrap">{item.top}</span>
              <span className="whitespace-nowrap">{item.bottom}</span>
            </NavLink>
          ))}

          {dropdownGroups.map((group) => (
            <div key={group.label} className="group relative">
              <button
                type="button"
                className={[
                  'inline-flex items-center gap-1 rounded-md px-2 py-2 text-[1rem] font-semibold tracking-[0.01em] transition-colors',
                  group.label === 'Our Framework'
                    ? 'text-[#1C4686] hover:text-[#1C4686]'
                    : 'text-[#174c84] hover:text-[#1C4686]',
                ].join(' ')}
              >
                <span className="whitespace-nowrap">{group.label}</span>
                <ChevronDown />
              </button>

              <div className="invisible absolute left-1/2 top-full z-50 mt-2 w-72 -translate-x-1/2 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-lg shadow-slate-200/60">
                  {group.items.map((item) => (
                    group.label === 'Our Framework' ? (
                      <Link
                        key={item.label}
                        to={item.to}
                        className="block rounded-xl px-4 py-3 text-[1rem] font-medium text-[#1C4686] transition-colors hover:bg-[#1C4686] hover:text-white"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <NavLink
                        key={item.label}
                        to={item.to}
                        className={({ isActive }) =>
                          [
                            'block rounded-xl px-4 py-3 text-[1rem] font-medium transition-colors',
                            isActive
                              ? 'bg-[#1C4686] text-white'
                              : 'text-slate-700 hover:bg-[#1C4686] hover:text-white',
                          ].join(' ')
                        }
                      >
                        {item.label}
                      </NavLink>
                    )
                  ))}
                </div>
              </div>
            </div>
          ))}

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              [
                'inline-flex items-center rounded-md px-2 py-2 text-[1rem] font-semibold tracking-[0.01em] transition-colors',
                isActive ? 'text-[#0f3c68]' : 'text-[#174c84] hover:text-[#0f3c68]',
              ].join(' ')
            }
          >
            <span className="whitespace-nowrap">Contact Us</span>
          </NavLink>
        </nav>
      </div>

      {mobileOpen && (
        <div className="xl:hidden absolute left-0 right-0 top-full z-40 max-h-[calc(100dvh-4.5rem)] overflow-y-auto overscroll-contain border-t border-slate-200 bg-white shadow-md sm:max-h-[calc(100dvh-5rem)]">
          <div className="flex flex-col gap-1 px-4 pb-6 pt-4">
            {navItems.map((item) => (
              <NavLink
                key={item.top}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  [
                    'block rounded-md px-3 py-2 text-[1rem] font-semibold transition-colors',
                    isActive ? 'text-[#0f3c68]' : 'text-slate-700 hover:text-[#0f3c68]'
                  ].join(' ')
                }
              >
                <span className="whitespace-nowrap">{item.top} {item.bottom}</span>
              </NavLink>
            ))}

            {dropdownGroups.map((group) => (
              <div key={group.label} className="mt-2">
                <button
                  type="button"
                  onClick={() => toggleGroup(group.label)}
                  className="w-full flex items-center justify-between px-2 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 rounded-md transition-colors"
                >
                  <span>{group.label}</span>
                  <svg
                    className={`h-4 w-4 transition-transform ${
                      expandedGroups[group.label] ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>
                {expandedGroups[group.label] && (
                  <div className="flex flex-col">
                    {group.items.map((it) => (
                      <Link key={it.label} to={it.to} onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-slate-600 hover:text-[#0f3c68]">
                        {it.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <NavLink to="/contact" onClick={() => setMobileOpen(false)} className="block rounded-md px-3 py-2 text-[1rem] font-semibold text-slate-700 hover:text-[#0f3c68]">
              Contact Us
            </NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
