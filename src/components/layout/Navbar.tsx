import { Menu } from 'lucide-react'
import { navigation } from '@/data/navigation'
import { site } from '@/constants/site'
import { Button } from '@/components/ui/button'
import { Link } from 'react-scroll'
import logo from "@/assets/logos/btc-logo.png";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <img
            src={logo}
            alt="Bharath Talent Connect"
            className="h-12 w-12 object-contain"
            />
            <div className="hidden sm:block">
              <div className="text-sm font-semibold leading-tight">
                {site.name}
              </div>
              <div className="text-xs text-muted-foreground leading-tight">
                Global Recruitment
              </div>
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              to={item.href.replace('#', '')}
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="https://wa.me/917099214505"
            target="_blank"
            rel="noreferrer"
          >
            <Button className="rounded-full px-5">
              Contact Us
            </Button>
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  )
}