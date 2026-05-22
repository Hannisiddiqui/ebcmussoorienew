import { SectionWithContainer } from '@/components/sectionComponants'
import SectionHeading from '@/components/typography/SectionHeading'
import Image from 'next/image';
import React from 'react'


interface ExperienceProps {
    title: string;
    description?: string;
    card?: [{
        title: string;
        description: string[];
        image: string;
    }];

}
const Experience: React.FC<ExperienceProps> = ({ card }) => {
    return (
        <SectionWithContainer sectionClassName="bg-ternary">
            <SectionHeading titleClassName='text-center' title={'Panoramic glass walls, private screening, 360° surround sound, and a private bar.'} />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
                {card?.map((item: any, index: number) => (
                    <div key={index} className="w-full md:aspect-4/3 aspect-4/3 relative overflow-hidden">

                        <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            sizes="100vw"
                            className="object-cover"
                        />
                        <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4'>
                            <h3 className='text-lg font-semibold'>{item.title}</h3>
                            {item.description.map((desc: string, idx: number) => (  
                                <p key={idx} className='text-sm'>{desc}</p>
                            ))}
                        </div>

                    </div>

                ))
                }
            </div>
        </SectionWithContainer>
    )
}

export default Experience