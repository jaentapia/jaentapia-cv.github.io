import { ImageWithFallback } from './figma/ImageWithFallback';
import { Link } from 'react-router-dom';

const categories = [
  { name: '3D Design', slug: '3d-design' },
  { name: 'Jewelry Design', slug: 'jewelry-design' },
  { name: 'Video Editing', slug: 'video-editing' },
  { name: 'Photography', slug: 'photography' },
  { name: 'Interior and Product Design', slug: 'interior-product-design' },
  { name: '360° Models', slug: '360-models' }
];

const contacts = [
  { label: 'Jaen Tapia Ortiz', value: 'Instagram', href: 'https://instagram.com' },
  { label: 'Correo', value: 'ibream96@gmail.com', href: 'mailto:ibream96@gmail.com' },
  { label: 'Teléfono', value: '+51 7712196706', href: 'tel:+517712196706' }
];

export function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1688516353448-2351953b4b76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwbW9kZXJuJTIwYWJzdHJhY3QlMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc1NTMxNTExMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Categories Menu */}
        <div className="flex-1 flex items-center">
          <nav className="pl-8 md:pl-16">
            <ul className="space-y-4">
              {categories.map((category) => (
                <li key={category.slug}>
                  <Link
                    to={`/category/${category.slug}`}
                    className="inline-block transition-transform duration-300 ease-out hover:scale-110 text-white drop-shadow-lg"
                    style={{ 
                      fontFamily: 'Oswald, sans-serif', 
                      fontWeight: '500',
                      fontSize: 'clamp(1.5rem, 4vw, 3rem)',
                      lineHeight: '1.2'
                    }}
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Footer */}
        <footer className="pb-6">
          <div className="text-center space-y-2">
            {contacts.map((contact, index) => (
              <div key={index}>
                <a
                  href={contact.href}
                  className="text-white/90 hover:text-white transition-colors duration-200"
                  style={{ 
                    fontFamily: 'Oswald, sans-serif', 
                    fontWeight: '200',
                    fontSize: '0.9rem'
                  }}
                >
                  {contact.label} → {contact.value}
                </a>
              </div>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}