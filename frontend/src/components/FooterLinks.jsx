import {
  Clock3,
  Globe,
  Globe2,
  House,
  Mail,
  MapPin,
  Music2,
  Phone,
  Sprout,
  ChevronRight,
  CircleDot,
  X,
} from 'lucide-react'
import { FaFacebook, FaYoutube, FaTiktok, FaInstagram, FaLinkedin, FaPinterest, FaX } from 'react-icons/fa6'

const menuColumns = [
  {
    title: 'Experience Sri Lanka & Beyond',
    sections: [
      {
        heading: 'Explore & Travel',
        items: [
          'Explore People-Powered Stays',
          'Explore People-Powered Travel Experiences',
          'Plan Your Sri Lanka Journey (Inbound)',
          'Discover Sri Lanka in Ultimate Luxury (Inbound)',
          'Plan Your Corporate Event in Sri Lanka (MICE)',
          'Explore the World with Traveleye (Outbound – Sri Lankans)',
          'Discover Sri Lanka Your Way (Domestic – Sri Lankans)',
          'Access People-Powered Support Services',
        ],
      },
    ],
  },
  {
    title: 'Traveleye Movement',
    sections: [
      {
        heading: 'About Traveleye',
        items: [
          'About Traveleye Alliance',
          'Our Vision & Mission',
          'People-Powered Tourism Framework',
          'Our Ecosystem Approach',
          'How Our Facilitation Centers Work',
          'The Traveleye Maestro Council',
          'The Traveleye Experience Circles',
          'Why Traveleye',
        ],
      },
      {
        heading: 'Work With Us',
        items: [
          'Join Us as a Co-Owner',
          'Become an Experience Creator',
          'Partner With Us (Inbound Journeys)',
          'Collaborate With Us',
          'Join the Movement',
          'Travel With Purpose',
          'Support Local People & Communities',
        ],
      },
      {
        heading: 'Other',
        items: ['Governance & Ethics', 'Media & Press'],
      },
    ],
  },
  {
    title: 'Models, Contact & Trust',
    sections: [
      {
        heading: 'Our Framework',
        items: ['People-Powered Tourism (PPT) Framework'],
      },
      {
        heading: 'Our Pillars',
        items: [
          'PPS – People-Powered Stays',
          'PPET – People-Powered Experiential Tourism',
          'PPTO – People-Powered Tour Operations',
          'PPSS – People-Powered Support Services',
          'PPFC – People-Powered Facilitation Centers',
        ],
      },
      {
        heading: 'Legal',
        items: ['Privacy Policy', 'Terms & Conditions'],
      },
    ],
  },
]

const socialGroups = [
  {
    heading: 'For International Visitors',
    headingIcon: Globe,
    items: [
      { label: 'Facebook', icon: FaFacebook },
      { label: 'YouTube', icon: FaYoutube },
      { label: 'TikTok', icon: FaTiktok },
    ],
  },
  {
    heading: 'For Sri Lankans',
    headingIcon: House,
    items: [
      { label: 'Facebook', icon: FaFacebook },
      { label: 'YouTube', icon: FaYoutube },
      { label: 'TikTok', icon: FaTiktok },
    ],
  },
  {
    heading: 'Traveleye Alliance',
    headingIcon: Clock3,
    items: [
      { label: 'Instagram', icon: FaInstagram },
      { label: 'LinkedIn', icon: FaLinkedin },
      { label: 'Pinterest', icon: FaPinterest },
      { label: 'X', icon: FaX },
    ],
  },
]

const contactItems = [
  { label: 'Colombo, Sri Lanka', icon: MapPin },
  { label: 'hello@traveleyealliance.com', icon: Mail },
  { label: 'www.traveleyealliance.com', icon: Globe2 || Globe },
  { label: '+94 0777 123 456', icon: Phone },
]

function ChevronItem({ children, href = '#' }) {
  return (
    <li className="flex items-start gap-2 text-sm leading-6 text-white/85">
      <ChevronRight className="mt-1 h-3.5 w-3.5 shrink-0 text-white/45" />
      <a href={href} className="hover:text-[#C4761A] transition-colors">
        {children}
      </a>
    </li>
  )
}

function SocialIcon({ icon: Icon }) {
  if (!Icon) return null

  return <Icon className="h-5 w-5 shrink-0 text-white" />
}

function SmallIcon({ icon: Icon }) {
  if (!Icon) return null

  return <Icon className="h-4 w-4 shrink-0 text-white/95" />
}

export default function FooterLinks() {
  return (
    <footer className="w-full bg-[#1c2334] text-white">
      <div className="w-full px-8 py-16 lg:px-16 xl:px-28">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr_1.05fr_0.95fr]">
          {menuColumns.map((column) => (
            <div key={column.title}>
              <h4 className="mb-4 text-[1.05rem] font-semibold text-white">{column.title}</h4>

              {'items' in column ? (
                <ul className="space-y-2.5">
                  {column.items.map((item) => (
                    <ChevronItem key={item}>{item}</ChevronItem>
                  ))}
                </ul>
              ) : null}

              {'sections' in column ? (
                <div className="space-y-5">
                  {column.sections.map((section) => (
                    <div key={section.heading}>
                      <h5 className="mb-2 text-sm font-semibold text-white underline decoration-white/70 underline-offset-4">
                        {section.heading}
                      </h5>
                      <ul className="space-y-2.5">
                        {section.items.map((item) => (
                          <ChevronItem key={item}>{item}</ChevronItem>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          ))}

          <div>
            <h4 className="mb-4 text-[1.05rem] font-semibold text-white">Connect With Us</h4>
            <p className="mb-5 text-sm font-medium text-white/85 underline decoration-white/70 underline-offset-4">
              Follow Us On Social Media
            </p>

            <div className="space-y-5">
              {socialGroups.map((group) => (
                <div key={group.heading}>
                  <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-white/95">
                    {group.headingIcon ? (
                      <group.headingIcon className="h-4 w-4 text-white/90" />
                    ) : (
                      <CircleDot className="h-4 w-4 text-white/75" />
                    )}
                    <span>{group.heading}</span>
                  </div>
                  <ul className="space-y-3 pl-6">
                    {group.items.map((item) => (
                      <li key={item.label} className="flex items-center gap-4 text-[0.98rem] font-medium text-white/92">
                        <SocialIcon icon={item.icon} />
                        <a href="#" className="hover:text-[#C4761A] transition-colors">
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div>
                <h5 className="mb-3 text-sm font-semibold text-white underline decoration-white/70 underline-offset-4">
                  Stay Connected
                </h5>
                <ul className="space-y-3">
                  {contactItems.map((item) => {
                    const href = item.label.includes('@')
                      ? `mailto:${item.label}`
                      : item.label.startsWith('+')
                      ? `tel:${item.label.replace(/\s+/g, '')}`
                      : item.label.startsWith('www')
                      ? `https://${item.label}`
                      : '#'

                    return (
                      <li key={item.label} className="flex items-center gap-3 text-sm font-medium text-white/90">
                        <SmallIcon icon={item.icon} />
                        <a href={href} className="hover:text-[#C4761A] transition-colors">
                          {item.label}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-end">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#ff3f49]">
              <Sprout className="h-4 w-4 text-[#5cc65c]" />
              <span>Tourism for People, Planet, and Prosperity</span>
            </div>

            <div className="text-center text-sm leading-6 text-white/90">
              <p>© 2025 Traveleye Alliance. All Rights Reserved.</p>
              <p>Sri Lanka&apos;s First People-Powered Tourism Ecosystem.</p>
            </div>

            <div />
          </div>
        </div>
      </div>
    </footer>
  )
}
