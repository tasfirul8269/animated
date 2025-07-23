import { Metadata } from 'next';
import ServiceHero from '@/components/ServiceHero';
import ServiceFeatures from '@/components/ServiceFeatures';

// Define metadata for the page
export const metadata: Metadata = {
  title: 'Motion Graphics Services',
  description: 'Professional motion graphics and animation services for engaging visual content',
};

// Features specific to Motion Graphics service
const features = [
  {
    title: '2D/3D Animation',
    description: 'Engaging animations that bring your ideas to life in both 2D and 3D',
    icon: '🎞️',
  },
  {
    title: 'Motion Graphics',
    description: 'Dynamic and eye-catching motion graphics for all your digital needs',
    icon: '✨',
  },
  {
    title: 'Visual Effects',
    description: 'Stunning visual effects that enhance your video content',
    icon: '🎭',
  },
  {
    title: 'Character Animation',
    description: 'Expressive character animations that tell your story',
    icon: '👤',
  },
];

export default function MotionGraphicsPage() {
  return (
    <>
      <ServiceHero 
        title="Motion Graphics & Animation"
        description="Bring your ideas to life with our professional motion graphics services. We create captivating animations that engage your audience and communicate your message effectively."
        imageSrc="/images/services/motion-graphics.jpg"
      />
      
      <ServiceFeatures 
        title="Our Motion Graphics Services"
        description="We offer a wide range of motion graphics services to meet your creative needs."
        features={features}
      />
    </>
  );
}
