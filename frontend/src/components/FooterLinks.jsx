import {
  Globe2,
  Mail,
  MapPin,
  Phone,
  Sprout,
  ChevronRight,
} from 'lucide-react'
import { FaFacebook, FaYoutube, FaTiktok, FaInstagram, FaLinkedin, FaPinterest, FaX } from 'react-icons/fa6'

const menuColumns = [
  {
    title: 'Experience Sri Lanka & Beyond',
    sections: [
      {
        heading: 'Explore & Travel',
        items: [
          'Plan Your Sri Lanka Journey (Inbound)',
          'Discover Sri Lanka in Ultimate Luxury (Inbound)',
          'Plan Your Celebration of Event in Sri Lanka',
          'Explore People-Powered Travel Experiences',
          'Explore the World with Traveleye (Outbound For Sri Lankans)',
          'Discover Sri Lanka Your Way (Domestic For Sri Lankans)',
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
          'About Traveleye',
          'About Traveleye Alliance',
          'Our Vision & Mission',
          'Our Ecosystem Approach',
          'Why Traveleye',
          'Governance & Ethics',
          'Media & Press',
        ],
      },
      {
        heading: 'Work With Us',
        items: [
          'Join Us as a Co-Owner',
          'Become an Experience Creator',
          'Partner With Us',
          'Collaborate With Us',
          'Join the Movement',
          'Travel With Purpose',
          'Support Local People & Communities',
        ],
      },
    ],
  },
  {
    title: 'Models, Contact & Trust',
    sections: [
      {
        heading: 'Our Framework',
        items: [
          'People-Powered Tourism (PPT) Framework',
          'Explore the Ecosystem',
          'Participation & Shared Stewardship',
        ],
      },
      {
        heading: 'Our Pillars',
        items: [
          'PPTC – People-Powered Travel Collective',
          'PPHE – People-Powered Host Experiences',
          'PPES – People-Powered Ecosystem Support',
          'PPDF – People-Powered Destination Facilitation',
        ],
      },
      {
        heading: 'Opportunities',
        items: [
          'Join the Ecosystem',
          'Start a Tourism Venture',
          'Partner With Us',
          'Investments & Joint Ventures',
        ],
      },
      {
        heading: 'Legal',
        items: ['Privacy Policy', 'Terms & Conditions'],
      },
    ],
  },
]

const socialLinks = [
  { label: 'Facebook For International Visitors', icon: FaFacebook },
  { label: 'Facebook For Sri Lankans', icon: FaFacebook },
  { label: 'YouTube', icon: FaYoutube },
  { label: 'TikTok', icon: FaTiktok },
  { label: 'Instagram', icon: FaInstagram },
  { label: 'LinkedIn', icon: FaLinkedin },
  { label: 'Pinterest', icon: FaPinterest },
  { label: 'X', icon: FaX },
]

const contactItems = [
  { label: 'Colombo, Sri Lanka', icon: MapPin },
  { label: 'info@traveleye.lk', icon: Mail },
  { label: 'www.traveleye.lk', icon: Globe2 },
  { label: 'WhatsApp: +94 0777 406887', icon: Phone },
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
              <ul className="space-y-3">
                {socialLinks.map((item) => (
                  <li key={item.label} className="flex items-center gap-4 text-[0.98rem] font-medium text-white/92">
                    <SocialIcon icon={item.icon} />
                    <a href="#" className="hover:text-[#C4761A] transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div>
                <h5 className="mb-3 text-sm font-semibold text-white underline decoration-white/70 underline-offset-4">
                  Stay Connected
                </h5>
                <ul className="space-y-3">
                  {contactItems.map((item) => {
                    const href = item.label.includes('@')
                      ? `mailto:${item.label}`
                      : item.label.startsWith('WhatsApp:')
                      ? `https://wa.me/${item.label.replace('WhatsApp:', '').replace(/\s|\+/g, '')}`
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
