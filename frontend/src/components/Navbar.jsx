import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/client/Traveleyelogo.jpg'

const navItems = [
  {
    top: 'Travel',
    bottom: 'Collective',
    to: '/travel-collective',
    items: [
      { label: 'About Travel Collective', to: '/travel-collective' },
      { label: 'Traveleye Lanka Journeys', to: '/sri-lanka-journeys' },
      { label: 'Traveleye Travel Corridors', to: '/travel-corridors' },
      { label: 'Traveleye Bharat Lanka Journeys', to: '/bharat-lanka-journeys', indent: true, child: 'first' },
      { label: 'Traveleye Viet Lanka Journeys', to: '/viet-lanka-journeys', indent: true, child: 'middle' },
      { label: 'Traveleye Siam Lanka Journeys', to: '/siam-lanka-journeys', indent: true, child: 'last' },
      { label: 'Traveleye Celebrations & Events', to: '/celebrations-events' },
      { label: 'Traveleye Global Journeys', to: '/global-journeys' },
      { label: 'Traveleye Privé Collection', to: '/prive-collection' },
      { label: 'Traveleye Island Journeys', to: '/island-journeys' },
    ],
  },
  { top: 'Host', bottom: 'Experiences', to: '/experiences' },
  { top: 'Destination', bottom: 'Facilitation', to: '/destination-facilitation' },
  { top: 'Ecosystem', bottom: 'Support', to: '/support-services' },
  // { top: 'Privé', bottom: 'Collection', to: '/stays' },
]

const dropdownGroups = [
  {
    label: 'About Us',
    items: [
      { label: 'About Traveleye Alliance', to: '/about' },
      { label: 'Traveleye Ecosystem Approach', to: '/our-ecosystem-approach' },
      { label: 'Vision & Mission', to: '/vision-mission' },
      { label: 'Why Traveleye', to: '/why-traveleye' },
      { label: 'Governance & Ethics', to: '/governance-ethics' },
      { label: 'Media & Press', to: '/media-press' },
    ],
  },
  {
    label: 'Our Framework, Pillars & Models',
    top: 'Our Framework,',
    bottom: 'Pillars & Models',
    items: [
      { label: 'People-Powered Tourism Framework', to: '/people-powered-tourism-framework' },
      { label: 'Explore the Ecosystem', to: '/explore-ecosystem' },
      { label: 'Participation & Shared Stewardship', to: '/participation-shared-stewardship' },
      { label: 'PPTC – People-Powered Travel Collective Pillar', to: '/people-powered-travel-collective' },
      { label: 'PPHE – People-Powered Host Experiences Pillar', to: '/people-powered-host-experiences' },
      { label: 'PPES – People-Powered Ecosystem Support Pillar', to: '/people-powered-ecosystem-support' },
      { label: 'PPDF – People-Powered Destination Facilitation Pillar', to: '/people-powered-destination-facilitation' },
      { label: 'Travel Corridor Development Model', to: '/travel-corridor-development-model' },
      { label: 'Destination Stewardship Model', to: '/destination-stewardship-model' },
    ],
  },
  {
    label: 'Get Involved',
    items: [
      { label: 'How You Can Get Involved', to: '/how-you-can-get-involved' },
      { label: 'Become a Travel Venture Partner', to: '/become-a-travel-venture-partner' },
      { label: 'Become a Travel Corridor Partner', to: '/become-a-travel-corridor-partner' },
      { label: 'Develop an Ecosystem Support Venture', to: '/develop-an-ecosystem-support-venture' },
      { label: 'Partner in Destination Development', to: '/partner-in-destination-development' },
      { label: 'Joint Ventures & Strategic Investments', to: '/joint-ventures-strategic-investments' },
      { label: 'Collaborate With Us', to: '/collaborate-with-us' },
      { label: 'Travel With Purpose', to: '/travel-with-purpose' },
      { label: 'Support People-Powered Tourism', to: '/support-people-powered-tourism' },
      { label: 'Develop a Place-Inspired Stay', to: '/stays' },
      { label: 'Develop a People & Place-Inspired Experience', to: '/experiences' },
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
  const location = useLocation()

  const isCurrentPath = (to) => location.pathname === to
  const isItemActive = (item) => isCurrentPath(item.to) || item.items?.some((child) => isCurrentPath(child.to))
  const isGroupActive = (group) => group.items.some((item) => isCurrentPath(item.to))

  const toggleGroup = (label) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [label]: !prev[label],
    }))
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90">
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

        <nav className="hidden items-center gap-1 pr-4 sm:pr-6 lg:pr-8 xl:flex" aria-label="Primary">
          {navItems.map((item) => (
            item.items ? (
              <div key={item.top} className="group relative">
                <button
                  type="button"
                  className={[
                    'inline-flex items-center gap-1 rounded-md px-2 py-2 text-center text-[1rem] font-semibold leading-none tracking-[0.01em] transition-colors',
                    isItemActive(item)
                      ? 'text-[#0f3c68]'
                      : 'text-[#174c84] hover:text-[#0f3c68]',
                  ].join(' ')}
                >
                  <span className="inline-flex flex-col items-center">
                    <span className="whitespace-nowrap">{item.top}</span>
                    <span className="whitespace-nowrap">{item.bottom}</span>
                  </span>
                  <ChevronDown />
                </button>

                <div className="invisible absolute left-1/2 top-full z-50 mt-2 w-80 max-w-[calc(100vw-2rem)] -translate-x-1/2 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
                  <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-lg shadow-slate-200/60">
                    {item.items.map((dropdownItem) => (
                      <NavLink
                        key={dropdownItem.label}
                        to={dropdownItem.to}
                        className={({ isActive }) =>
                          [
                            'block rounded-xl px-4 py-3 text-[1rem] font-medium leading-snug transition-colors',
                            dropdownItem.indent ? 'relative ml-4 pl-10 text-[0.95rem]' : '',
                            isActive
                              ? 'bg-[#1C4686] text-white'
                              : 'text-slate-700 hover:bg-[#1C4686] hover:text-white',
                          ].join(' ')
                        }
                      >
                        {dropdownItem.child ? (
                          <span className="inline-flex items-center gap-2">
                            <span
                              aria-hidden="true"
                              className={[
                                'pointer-events-none absolute left-5 w-px bg-[#1C4686]',
                                dropdownItem.child === 'first'
                                  ? '-top-3 bottom-0'
                                  : dropdownItem.child === 'middle'
                                    ? 'top-0 bottom-0'
                                    : 'top-0 bottom-1/2',
                              ].join(' ')}
                            />
                            <span aria-hidden="true" className="pointer-events-none absolute left-5 top-1/2 h-px w-4 -translate-y-1/2 bg-[#1C4686]" />
                            {/* <span aria-hidden="true" className="relative text-current">↳</span> */}
                            <span>{dropdownItem.label}</span>
                          </span>
                        ) : (
                          dropdownItem.label
                        )}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
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
            )
          ))}

          {dropdownGroups.map((group) => (
            <div key={group.label} className="group relative">
              <button
                type="button"
                className={[
                  'inline-flex items-center gap-1 rounded-md px-2 py-2 text-[1rem] font-semibold tracking-[0.01em] transition-colors',
                  isGroupActive(group)
                    ? 'text-[#0f3c68]'
                    : 'text-[#174c84] hover:text-[#1C4686]',
                ].join(' ')}
              >
                {group.top && group.bottom ? (
                  <span className="inline-flex flex-col items-center leading-none">
                    <span className="whitespace-nowrap">{group.top}</span>
                    <span className="whitespace-nowrap">{group.bottom}</span>
                  </span>
                ) : (
                  <span className="whitespace-nowrap">{group.label}</span>
                )}
                <ChevronDown />
              </button>

              <div className="invisible absolute left-1/2 top-full z-50 mt-2 w-80 max-w-[calc(100vw-2rem)] -translate-x-1/2 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-lg shadow-slate-200/60">
                  {group.items.map((item) => (
                    <NavLink
                      key={item.label}
                      to={item.to}
                      className={({ isActive }) =>
                        [
                          'block rounded-xl px-4 py-3 text-[1rem] font-medium leading-snug transition-colors',
                          isActive
                            ? 'bg-[#1C4686] text-white'
                            : 'text-slate-700 hover:bg-[#1C4686] hover:text-white',
                        ].join(' ')
                      }
                    >
                      {item.label}
                    </NavLink>
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
        <div className="absolute left-0 right-0 top-full z-40 max-h-[calc(100dvh-4.5rem)] overflow-y-auto overscroll-contain border-t border-slate-200 bg-white shadow-md sm:max-h-[calc(100dvh-5.5rem)] lg:max-h-[calc(100dvh-6.5rem)] xl:hidden">
          <div className="flex flex-col gap-1 px-3 pb-6 pt-3">
            {navItems.map((item) => (
              item.items ? (
                <div key={item.top} className="mt-2">
                  <button
                    type="button"
                    onClick={() => toggleGroup(`${item.top} ${item.bottom}`)}
                    className={[
                      'flex w-full items-center justify-between rounded-md px-2 py-2 text-[0.9rem] font-semibold transition-colors',
                      isItemActive(item)
                        ? 'text-[#0f3c68]'
                        : 'text-slate-700 hover:bg-slate-100 hover:text-[#0f3c68]',
                    ].join(' ')}
                  >
                    <span>{item.top} {item.bottom}</span>
                    <svg
                      className={`h-4 w-4 transition-transform ${
                        expandedGroups[`${item.top} ${item.bottom}`] ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </button>
                  {expandedGroups[`${item.top} ${item.bottom}`] && (
                    <div className="flex flex-col">
                      {item.items.map((dropdownItem) => (
                        <NavLink
                          key={dropdownItem.label}
                          to={dropdownItem.to}
                          onClick={() => setMobileOpen(false)}
                          className={({ isActive }) =>
                            [
                              'block rounded-md px-3 py-2 transition-colors',
                              dropdownItem.indent ? 'relative ml-4 pl-9 text-sm' : '',
                              isActive
                                ? 'bg-[#1C4686] font-semibold text-white'
                                : 'text-slate-600 hover:bg-[#1C4686] hover:text-white',
                            ].join(' ')
                          }
                        >
                          {dropdownItem.child ? (
                            <span className="inline-flex items-center gap-2">
                              <span
                                aria-hidden="true"
                                className={[
                                  'pointer-events-none absolute left-4 w-px bg-[#1C4686]',
                                  dropdownItem.child === 'first'
                                    ? '-top-2 bottom-0'
                                    : dropdownItem.child === 'middle'
                                      ? 'top-0 bottom-0'
                                      : 'top-0 bottom-1/2',
                                ].join(' ')}
                              />
                              <span aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 h-px w-4 -translate-y-1/2 bg-[#1C4686]" />
                              <span aria-hidden="true" className="relative text-current">↳</span>
                              <span>{dropdownItem.label}</span>
                            </span>
                          ) : (
                            dropdownItem.label
                          )}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={item.top}
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    [
                      'block rounded-md px-2 py-2 text-[0.9rem] font-semibold transition-colors',
                      isActive ? 'text-[#0f3c68]' : 'text-slate-700 hover:text-[#0f3c68]'
                    ].join(' ')
                  }
                >
                  <span>{item.top} {item.bottom}</span>
                </NavLink>
              )
            ))}

            {dropdownGroups.map((group) => (
              <div key={group.label} className="mt-2">
                <button
                  type="button"
                  onClick={() => toggleGroup(group.label)}
                  className={[
                    'flex w-full items-center justify-between rounded-md px-2 py-2 text-xs font-semibold transition-colors',
                    isGroupActive(group)
                      ? 'text-[#0f3c68]'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-[#0f3c68]',
                  ].join(' ')}
                >
                  {group.top && group.bottom ? (
                    <span className="inline-flex flex-col items-start leading-tight">
                      <span>{group.top}</span>
                      <span>{group.bottom}</span>
                    </span>
                  ) : (
                    <span>{group.label}</span>
                  )}
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
                      <NavLink
                        key={it.label}
                        to={it.to}
                        onClick={() => setMobileOpen(false)}
                        className={({ isActive }) =>
                          [
                            'block rounded-md px-2 py-2 text-xs transition-colors',
                            isActive
                              ? 'bg-[#1C4686] font-semibold text-white'
                              : 'text-slate-600 hover:bg-[#1C4686] hover:text-white',
                          ].join(' ')
                        }
                      >
                        {it.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <NavLink
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                [
                  'block rounded-md px-2 py-2 text-[0.9rem] font-semibold transition-colors',
                  isActive ? 'text-[#0f3c68]' : 'text-slate-700 hover:text-[#0f3c68]',
                ].join(' ')
              }
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
