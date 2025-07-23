import Image from 'next/image';

interface ServiceHeroProps {
  title: string;
  description: string;
  imageSrc: string;
}

export default function ServiceHero({ title, description, imageSrc }: ServiceHeroProps) {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-[#0a0613] to-[#0c0c7a]/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {title}
            </h1>
            <p className="text-xl text-[#b8c5ff] mb-8 leading-relaxed">
              {description}
            </p>
            <button className="bg-[#7784e4] hover:bg-[#5f6bc9] text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300">
              Get Started
            </button>
          </div>
          <div className="md:w-1/2">
            <div className="relative h-80 md:h-96 w-full rounded-2xl overflow-hidden">
              <Image
                src={imageSrc}
                alt={title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
