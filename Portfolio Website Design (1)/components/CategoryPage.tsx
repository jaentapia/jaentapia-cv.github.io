import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Masonry from 'react-responsive-masonry';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Mock data para las diferentes categorías
const categoryData = {
  '3d-design': [
    { id: 1, type: 'image', src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600', title: '3D Abstract Sculpture', description: 'Modern 3D sculpture with geometric forms and dynamic lighting.' },
    { id: 2, type: 'image', src: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600', title: '3D Character Design', description: 'Stylized character model with advanced texturing and materials.' },
    { id: 3, type: 'image', src: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=600', title: '3D Environment', description: 'Architectural visualization with photorealistic rendering.' },
    { id: 4, type: 'image', src: 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=600', title: '3D Product Visualization', description: 'Commercial product render with studio lighting setup.' }
  ],
  'jewelry-design': [
    { id: 1, type: 'image', src: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600', title: 'Diamond Ring Collection', description: 'Elegant diamond rings with contemporary settings.' },
    { id: 2, type: 'image', src: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600', title: 'Gold Necklace Design', description: 'Handcrafted gold necklace with intricate details.' },
    { id: 3, type: 'image', src: 'https://images.unsplash.com/photo-1611652022721-70874e323d76?w=600', title: 'Custom Earrings', description: 'Bespoke earring design with precious stones.' }
  ],
  'video-editing': [
    { id: 1, type: 'image', src: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600', title: 'Commercial Edit', description: 'High-end commercial video with dynamic transitions.' },
    { id: 2, type: 'image', src: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600', title: 'Music Video Production', description: 'Creative music video with advanced color grading.' },
    { id: 3, type: 'image', src: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=600', title: 'Documentary Edit', description: 'Narrative documentary with seamless storytelling.' }
  ],
  'photography': [
    { id: 1, type: 'image', src: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600', title: 'Portrait Photography', description: 'Professional portrait session with natural lighting.' },
    { id: 2, type: 'image', src: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600', title: 'Landscape Photography', description: 'Breathtaking landscape captured at golden hour.' },
    { id: 3, type: 'image', src: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=600', title: 'Product Photography', description: 'Commercial product shots with professional lighting.' },
    { id: 4, type: 'image', src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600', title: 'Fashion Photography', description: 'Editorial fashion shoot with creative styling.' }
  ],
  'interior-product-design': [
    { id: 1, type: 'image', src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600', title: 'Modern Living Room', description: 'Contemporary interior design with minimalist aesthetics.' },
    { id: 2, type: 'image', src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600', title: 'Kitchen Design', description: 'Functional kitchen layout with premium materials.' },
    { id: 3, type: 'image', src: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600', title: 'Product Design', description: 'Innovative product concept with user-centered approach.' }
  ],
  '360-models': [
    { id: 1, type: 'image', src: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=600', title: '360° Product View', description: 'Interactive 360-degree product visualization.' },
    { id: 2, type: 'image', src: 'https://images.unsplash.com/photo-1635776062043-223faf322554?w=600', title: 'Virtual Reality Experience', description: 'Immersive VR environment with 360-degree interaction.' }
  ]
};

export function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  
  const items = categoryData[slug as keyof typeof categoryData] || [];
  const categoryName = slug?.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ') || '';

  return (
    <div className="min-h-screen bg-white p-6 md:p-12">
      {/* Back Navigation */}
      <Link 
        to="/"
        className="inline-flex items-center mb-8 transition-colors duration-200 hover:text-gray-600"
        style={{ 
          fontFamily: 'Oswald, sans-serif', 
          fontWeight: '200',
          fontSize: '1rem'
        }}
      >
        ← Back to Portfolio
      </Link>

      {/* Masonry Grid */}
      <Masonry 
        columnsCount={window.innerWidth < 768 ? 2 : 3} 
        gutter="20px"
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="relative group cursor-pointer rounded-lg overflow-hidden"
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <Link to={`/detail/${slug}/${item.id}`}>
              <ImageWithFallback
                src={item.src}
                alt={item.title}
                className="w-full h-auto block transition-transform duration-300 group-hover:scale-105"
              />
              
              {/* Hover Overlay */}
              <div className={`absolute inset-0 bg-black transition-opacity duration-300 flex items-center justify-center ${
                hoveredItem === item.id ? 'opacity-15' : 'opacity-0'
              }`}>
                <div className="text-white text-center p-4">
                  <h3 
                    className="mb-2"
                    style={{ 
                      fontFamily: 'Oswald, sans-serif', 
                      fontWeight: '500',
                      fontSize: '1.25rem'
                    }}
                  >
                    {item.title}
                  </h3>
                  <p 
                    style={{ 
                      fontFamily: 'Oswald, sans-serif', 
                      fontWeight: '200',
                      fontSize: '0.9rem'
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Masonry>
    </div>
  );
}