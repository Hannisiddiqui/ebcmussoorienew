import { SectionWithContainer } from '@/components/sectionComponants'
import SectionHeading from '@/components/typography/SectionHeading'
import Image from 'next/image'
import React from 'react'



interface DenHeroProps {
    images: string[];
}

const PriavteBar: React.FC<DenHeroProps> = ({ images }) => {
    return (
        <SectionWithContainer sectionClassName="bg-ternary">
            <SectionHeading titleClassName='text-center' title={'Panoramic glass walls, private screening, 360° surround sound, and a private bar.'} />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
                {images.map((image, index) => (
                    <div key={index} className="w-full md:aspect-4/3 aspect-4/3 relative overflow-hidden">
                        <Image
                            src={image}
                            alt="The Den hero"
                            fill
                            sizes="100vw"
                            className="object-cover"
                        />
                    </div>
                ))
                }
            </div>
        </SectionWithContainer>
    )
}

export default PriavteBar   
