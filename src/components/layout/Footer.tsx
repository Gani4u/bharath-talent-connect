import Container from './Container'
import { site } from '@/constants/site'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <Container className="py-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-lg font-semibold">{site.name}</div>
            <div className="text-sm text-muted-foreground">
              {site.tagline}
            </div>
          </div>

          <div className="text-sm text-muted-foreground">
            <div>📍 Rajasthan, India</div>
            <div>📧 {site.email}</div>
            <div>📱 +91 70992 14505</div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          {site.copyright}
        </div>
      </Container>
    </footer>
  )
}