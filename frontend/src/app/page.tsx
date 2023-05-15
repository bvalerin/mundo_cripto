import Image from 'next/image'
import Link from 'next/link'
import Hero from '../../components/landing/Hero'
import Navbar from '../../components/landing/Navbar'


export default function Home() {
  return (
    <div className='w-full overflow-hidden'>
        <div className="sm:px-16 px-6 flex justify-center items-center">
            <div className='xl:max-w-[1280px] w-full'>
                <Navbar />
            </div>
        </div>

        <div className='bg-primary flex justify-center items-start'> 
            <div className='xl:max-w-[1280px] w-full'>
                <Hero />
            </div>
        </div>

        <div className='bg-primary sm:px-16 px-6 flex justify-center items-start'> 
            <div className='xl:max-w-[1280px] w-full'>
                Stats
                Business
                CardDeal
                Testimonials
                Clients
                CTA
                Footer
            </div>
        </div>

    </div>
  )
}
