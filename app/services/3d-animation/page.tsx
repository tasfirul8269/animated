import { Metadata } from 'next';
import ServiceHero from '@/components/ServiceHero';
import ServiceFeatures from '@/components/ServiceFeatures';

// Define metadata for the page
export const metadata: Metadata = {
  title: '3D Animation Services',
  description: 'Professional 3D animation and modeling services for immersive visual experiences',
};

// Features specific to 3D Animation service
const features = [
  {
    title: '3D Modeling',
    description: 'High-quality 3D models created with attention to detail and realism',
    icon: '🔹',
  },
  {
    title: 'Texturing & Materials',
    description: 'Realistic textures and materials that bring your 3D models to life',
    icon: '🎨',
  },
  {
    title: 'Animation',
    description: 'Smooth and realistic animations for characters and objects',
    icon: '🎬',
  },
  {
    title: 'Rendering',
    description: 'High-quality rendering with realistic lighting and shadows',
    icon: '✨',
  },
];

export default function ThreeDAnimationPage() {
  return (
    <>
      <ServiceHero 
        title="3D Animation"
        description="Create immersive 3D experiences with our professional animation services. From concept to final render, we bring your ideas to life with stunning visual effects and realistic animations."
        imageSrc="/images/services/3d-animation.jpg"
      />
      
      <ServiceFeatures 
        title="Our 3D Animation Services"
        description="We offer comprehensive 3D animation services to meet all your visualization needs."
        features={features}
      />
    </>
  );
}
