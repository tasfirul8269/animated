import { Metadata } from 'next';
import ServiceHero from '@/components/ServiceHero';
import ServiceFeatures from '@/components/ServiceFeatures';

// Define metadata for the page
export const metadata: Metadata = {
  title: 'Graphics Design Services',
  description: 'Professional graphics design services including logo design, branding, and digital graphics',
};

// Features specific to Graphics Design service
const features = [
  {
    title: 'Logo Design',
    description: 'Unique and memorable logos that represent your brand identity',
    icon: '🎨',
  },
  {
    title: 'Branding',
    description: 'Complete brand identity development including color schemes and typography',
    icon: '✨',
  },
  {
    title: 'Print Design',
    description: 'Visually appealing business cards, flyers, and promotional materials',
    icon: '📝',
  },
  {
    title: 'Digital Graphics',
    description: 'Engaging social media graphics and digital marketing materials',
    icon: '💻',
  },
];

export default function GraphicsDesignPage() {
  return (
    <>
      <ServiceHero 
        title="Graphics Design"
        description="Transform your brand with our professional graphics design services. We create visually compelling designs that effectively communicate your brand's message and values."
        imageSrc="/images/services/graphics-design.jpg"
      />
      
      <ServiceFeatures 
        title="Our Graphics Design Services"
        description="We offer a comprehensive range of graphics design services to meet all your branding and marketing needs."
        features={features}
      />
    </>
  );
}
