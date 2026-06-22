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
    title: 'EXPERIENCE SRI LANKA & BEYOND',
    sections: [
      {
        heading: 'Explore Our Platforms',
        items: [
          'Explore Meaningful Journeys Across Sri Lanka Curated Through People and Place',
          'Discover Authentic Stays in Sri Lanka Inspired by People and Place',
          'Discover Authentic Experiences in Sri Lanka Shaped by People and Place',
          'Discover Sri Lanka in Ultimate Luxury Inspired by People and Place',
          "Celebrate Life's Special Moments in Sri Lanka Through People and Place",
          'Discover Sri Lanka and the World with Traveleye (For Sri Lankan Residents)',
        ],
      },
    ],
  },
  {
    title: 'TRAVELEYE MOVEMENT',
    sections: [
      {
        heading: 'About Traveleye',
        items: [
          'About Traveleye',
          'About Traveleye Alliance',
          'Vision & Mission',
          'Our Ecosystem Approach',
          'Why Traveleye',
          'Governance & Ethics',
          'Media & Press',
        ],
      },
      {
        heading: 'Get Involved',
        items: [
          'How You Can Get Involved',
          'Become a Travel Venture Partner',
          'Develop a Place-Inspired Stay',
          'Develop a People & Place-Inspired Experience',
          'Develop an Ecosystem Support Venture',
          'Partner in Destination Development',
          'Joint Ventures & Strategic Investments',
          'Collaborate With Us',
          'Travel With Purpose',
          'Support People-Powered Tourism',
        ],
      },
    ],
  },
  {
    title: 'MODELS & TRUST',
    sections: [
      {
        heading: 'Our Framework & Pillars',
        items: [
          'Traveleye People-Powered Tourism Framework',
          'Explore the Traveleye Ecosystem',
          'People-Powered Participation & Shared Stewardship',
          'People-Powered Travel Collective (PPTC)',
          'People-Powered Host Experiences (PPHE)',
          'People-Powered Ecosystem Support (PPES)',
          'People-Powered Destination Facilitation (PPDF)',
        ],
      },
      {
        heading: 'Legal',
        items: ['Privacy Policy', 'Terms & Conditions', 'Cookie Policy', 'Disclaimer'],
      },
    ],
  },
]

const socialLinks = [
  { label: 'Facebook (International)', icon: FaFacebook },
  { label: 'Facebook (Sri Lanka)', icon: FaFacebook },
  { label: 'Instagram', icon: FaInstagram },
  { label: 'YouTube', icon: FaYoutube },
  { label: 'TikTok', icon: FaTiktok },
  { label: 'LinkedIn', icon: FaLinkedin },
  { label: 'Pinterest', icon: FaPinterest },
  { label: 'X', icon: FaX },
]

const contactItems = [
  { label: 'Colombo, Sri Lanka', icon: MapPin },
  { label: 'info@traveleye.lk', icon: Mail },
  { label: 'www.traveleye.lk', icon: Globe2 },
  { label: 'WhatsApp: +94 777 406 887', icon: Phone },
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
            </div>
          ))}

          <div>
            <h4 className="mb-4 text-[1.05rem] font-semibold text-white">FOLLOW US</h4>

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
                  STAY CONNECTED
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
          <div className="mx-auto flex w-full flex-col items-center gap-6 text-center">
            <div className="w-full space-y-2 text-sm leading-6 text-white/90">
              <p className="font-semibold text-white">Traveleye Alliance Sri Lanka</p>
              <p>A People-Powered Tourism Ecosystem Builder</p>
              <p className="mx-auto max-w-5xl">
                Guided by the Traveleye People-Powered Tourism (PPT) Framework, Traveleye Alliance strengthens tourism through participation, stewardship, collaboration, innovation, and shared value creation, helping build stronger tourism ecosystems for people, place, and future generations.
              </p>
            </div>

            <div className="text-center text-sm leading-6 text-white/90">
              <p className="inline-flex items-center justify-center gap-2 font-semibold text-[#ff3f49]">
                <Sprout className="h-4 w-4 text-[#5cc65c]" />
                <span>Tourism for People, Planet, and Prosperity</span>
              </p>
              <p>&copy; 2006&ndash;Present Traveleye Alliance Sri Lanka. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
