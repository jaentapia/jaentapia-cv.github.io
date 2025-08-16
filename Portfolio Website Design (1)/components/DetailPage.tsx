import { useParams, Link } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';

// La misma data que en CategoryPage (en una aplicación real estaría en un contexto o store)
const categoryData = {
  '3d-design': [
    { id: 1, type: 'image', src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800', title: '3D Abstract Sculpture', description: 'Modern 3D sculpture with geometric forms and dynamic lighting. This piece explores the intersection of mathematics and art, using parametric design to create flowing organic shapes that seem to defy gravity. The rendering showcases advanced material properties including subsurface scattering and procedural textures.' },
    { id: 2, type: 'image', src: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800', title: '3D Character Design', description: 'Stylized character model with advanced texturing and materials. The character design process involved extensive research into anatomy and proportion, followed by detailed sculpting and retopology for animation-ready geometry. The final result features hand-painted textures and carefully crafted materials that bring the character to life.' },
    { id: 3, type: 'image', src: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800', title: '3D Environment', description: 'Architectural visualization with photorealistic rendering. This environment showcases a contemporary residential space with careful attention to lighting, materials, and atmospheric effects. The rendering pipeline utilized physically-based materials and global illumination to achieve photorealistic results.' },
    { id: 4, type: 'image', src: 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=800', title: '3D Product Visualization', description: 'Commercial product render with studio lighting setup. This visualization demonstrates professional product presentation techniques, including HDRI lighting, material accuracy, and composition. The final render is optimized for marketing and e-commerce applications.' }
  ],
  'jewelry-design': [
    { id: 1, type: 'image', src: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800', title: 'Diamond Ring Collection', description: 'Elegant diamond rings with contemporary settings. Each piece in this collection represents a unique approach to traditional jewelry design, incorporating modern aesthetic principles while honoring classic craftsmanship techniques. The diamonds are carefully selected for their exceptional clarity and brilliance.' },
    { id: 2, type: 'image', src: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800', title: 'Gold Necklace Design', description: 'Handcrafted gold necklace with intricate details. This piece showcases traditional goldsmithing techniques combined with contemporary design sensibilities. The intricate chain work and pendant design reflect hours of meticulous craftsmanship and attention to detail.' },
    { id: 3, type: 'image', src: 'https://images.unsplash.com/photo-1611652022721-70874e323d76?w=800', title: 'Custom Earrings', description: 'Bespoke earring design with precious stones. These custom earrings were created for a special commission, featuring carefully selected gemstones set in a contemporary design. The balance and proportions were meticulously calculated to ensure both beauty and comfort.' }
  ],
  'video-editing': [
    { id: 1, type: 'image', src: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800', title: 'Commercial Edit', description: 'High-end commercial video with dynamic transitions. This commercial project required precise timing and seamless integration of multiple visual elements. The editing process involved advanced color grading, motion graphics, and sound design to create a compelling narrative that drives brand engagement.' },
    { id: 2, type: 'image', src: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800', title: 'Music Video Production', description: 'Creative music video with advanced color grading. The post-production workflow for this music video included extensive color correction, visual effects, and rhythmic editing synchronized to the musical beats. The final result showcases a unique visual style that complements the artistic vision of the musical piece.' },
    { id: 3, type: 'image', src: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800', title: 'Documentary Edit', description: 'Narrative documentary with seamless storytelling. This documentary editing project required careful organization of extensive footage, creating a compelling narrative structure while maintaining authenticity. The editing approach emphasizes emotional connection and factual accuracy.' }
  ],
  'photography': [
    { id: 1, type: 'image', src: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800', title: 'Portrait Photography', description: 'Professional portrait session with natural lighting. This portrait session utilized available light techniques to create authentic and engaging portraits. The approach focuses on capturing genuine expressions and personality, using minimal equipment to maintain an intimate and comfortable atmosphere.' },
    { id: 2, type: 'image', src: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800', title: 'Landscape Photography', description: 'Breathtaking landscape captured at golden hour. This landscape photograph showcases the beauty of natural light during the magical golden hour. The composition emphasizes the dramatic interplay between light and shadow, creating a sense of depth and atmospheric perspective.' },
    { id: 3, type: 'image', src: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=800', title: 'Product Photography', description: 'Commercial product shots with professional lighting. This product photography session utilized professional studio lighting to highlight the product\'s key features and materials. The lighting setup was carefully designed to eliminate unwanted reflections while emphasizing texture and form.' },
    { id: 4, type: 'image', src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800', title: 'Fashion Photography', description: 'Editorial fashion shoot with creative styling. This fashion editorial combines creative styling with dynamic posing and lighting to create striking images. The shoot concept emphasizes bold compositions and contemporary fashion trends, resulting in visually impactful editorial content.' }
  ],
  'interior-product-design': [
    { id: 1, type: 'image', src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800', title: 'Modern Living Room', description: 'Contemporary interior design with minimalist aesthetics. This living space design emphasizes clean lines, natural materials, and functional elegance. The color palette and furniture selection create a harmonious environment that balances comfort with sophisticated design principles.' },
    { id: 2, type: 'image', src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800', title: 'Kitchen Design', description: 'Functional kitchen layout with premium materials. This kitchen design project focused on optimizing workflow while incorporating high-quality materials and finishes. The layout maximizes efficiency while creating an inviting space for both cooking and entertaining.' },
    { id: 3, type: 'image', src: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800', title: 'Product Design', description: 'Innovative product concept with user-centered approach. This product design project involved extensive user research and iterative prototyping to create a solution that addresses real user needs. The final design balances functionality, aesthetics, and manufacturability.' }
  ],
  '360-models': [
    { id: 1, type: 'image', src: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800', title: '360° Product View', description: 'Interactive 360-degree product visualization. This project involved creating a comprehensive 360-degree view system that allows users to interact with products in a virtual environment. The technical implementation includes optimized 3D models and smooth interaction controls for an engaging user experience.' },
    { id: 2, type: 'image', src: 'https://images.unsplash.com/photo-1635776062043-223faf322554?w=800', title: 'Virtual Reality Experience', description: 'Immersive VR environment with 360-degree interaction. This virtual reality project creates an immersive experience that transports users to a completely digital environment. The development process involved careful optimization for VR hardware and intuitive interaction design principles.' }
  ]
};

export function DetailPage() {
  const { slug, id } = useParams<{ slug: string; id: string }>();
  
  const items = categoryData[slug as keyof typeof categoryData] || [];
  const item = items.find(item => item.id === parseInt(id || '0'));
  
  if (!item) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: '500' }}>
            Item not found
          </h1>
          <Link 
            to="/"
            className="mt-4 inline-block"
            style={{ fontFamily: 'Oswald, sans-serif', fontWeight: '200' }}
          >
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Back Navigation */}
      <div className="p-6 md:p-12">
        <Link 
          to={`/category/${slug}`}
          className="inline-flex items-center transition-colors duration-200 hover:text-gray-600"
          style={{ 
            fontFamily: 'Oswald, sans-serif', 
            fontWeight: '200',
            fontSize: '1rem'
          }}
        >
          ← Back to Portfolio
        </Link>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 px-6 md:px-12 pb-12">
        {/* Image */}
        <div className="order-2 lg:order-1">
          <ImageWithFallback
            src={item.src}
            alt={item.title}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div className="order-1 lg:order-2 flex flex-col justify-center">
          <h1 
            className="mb-6"
            style={{ 
              fontFamily: 'Oswald, sans-serif', 
              fontWeight: '500',
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              lineHeight: '1.2'
            }}
          >
            {item.title}
          </h1>
          
          <p 
            className="leading-relaxed"
            style={{ 
              fontFamily: 'Oswald, sans-serif', 
              fontWeight: '200',
              fontSize: '1.1rem',
              lineHeight: '1.7'
            }}
          >
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}