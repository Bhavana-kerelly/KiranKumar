import { ReactLenis } from 'lenis/react';
import React, { forwardRef } from 'react';

const StickyScroll = forwardRef((props, ref) => {
  return (
    <ReactLenis root>
      <main className='bg-[#F4F7F9]' ref={ref}>
        <section className='text-[#0B1E2D] w-full bg-[#F4F7F9] pb-32 pt-24 relative'>
          
          <div className='relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 mb-16'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-serif font-black text-center tracking-tight leading-[1.1] text-[#10283B]'>
              <span className="text-[#C9A45C] block mb-2">SURGICAL EXCELLENCE</span>
              A Visual Journey
            </h1>
          </div>

          <div className='grid grid-cols-12 gap-4 px-6 md:px-12 max-w-[1600px] mx-auto relative z-10'>
            {/* Left Column */}
            <div className='grid gap-4 col-span-12 md:col-span-4'>
              <figure className='w-full'>
                <img
                  src='https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1600'
                  alt='Robotic Surgery'
                  className='transition-all duration-500 w-full h-[300px] md:h-96 align-bottom object-cover rounded-xl shadow-2xl filter contrast-[1.05]'
                />
              </figure>
              <figure className='w-full'>
                <img
                  src='https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=1600'
                  alt='Medical Team'
                  className='transition-all duration-500 w-full h-[300px] md:h-96 align-bottom object-cover rounded-xl shadow-2xl filter contrast-[1.05]'
                />
              </figure>
              <figure className='w-full'>
                <img
                  src='https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1600'
                  alt='Clinical Care'
                  className='transition-all duration-500 w-full h-[300px] md:h-96 align-bottom object-cover rounded-xl shadow-2xl filter contrast-[1.05]'
                />
              </figure>
              <figure className='w-full'>
                <img
                  src='https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=1600'
                  alt='Operating Room'
                  className='transition-all duration-500 w-full h-[300px] md:h-96 align-bottom object-cover rounded-xl shadow-2xl filter contrast-[1.05]'
                />
              </figure>
            </div>
            
            {/* Center Sticky Column */}
            <div className='hidden md:grid sticky top-24 h-[calc(100vh-6rem)] w-full col-span-4 gap-4 grid-rows-3'>
              <figure className='w-full h-full'>
                <img
                  src='https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600'
                  alt='Precision Care'
                  className='transition-all duration-500 h-full w-full align-bottom object-cover rounded-xl shadow-2xl filter contrast-[1.05]'
                />
              </figure>
              <figure className='w-full h-full'>
                <img
                  src='https://images.unsplash.com/photo-1576091160550-2173ff9e5eb3?auto=format&fit=crop&q=80&w=1600'
                  alt='Consultation'
                  className='transition-all duration-500 h-full w-full align-bottom object-cover rounded-xl shadow-2xl filter contrast-[1.05]'
                />
              </figure>
              <figure className='w-full h-full'>
                <img
                  src='https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1600'
                  alt='Medical Research'
                  className='transition-all duration-500 h-full w-full align-bottom object-cover rounded-xl shadow-2xl filter contrast-[1.05]'
                />
              </figure>
            </div>
            
            {/* Right Column */}
            <div className='grid gap-4 col-span-12 md:col-span-4'>
              <figure className='w-full'>
                <img
                  src='https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=1600'
                  alt='Advanced Tech'
                  className='transition-all duration-500 w-full h-[300px] md:h-96 align-bottom object-cover rounded-xl shadow-2xl filter contrast-[1.05]'
                />
              </figure>
              <figure className='w-full'>
                <img
                  src='https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1600'
                  alt='Modern Facility'
                  className='transition-all duration-500 w-full h-[300px] md:h-96 align-bottom object-cover rounded-xl shadow-2xl filter contrast-[1.05]'
                />
              </figure>
              <figure className='w-full'>
                <img
                  src='https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&fit=crop&q=80&w=1600'
                  alt='Orthopaedic Analysis'
                  className='transition-all duration-500 w-full h-[300px] md:h-96 align-bottom object-cover rounded-xl shadow-2xl filter contrast-[1.05]'
                />
              </figure>
              <figure className='w-full'>
                <img
                  src='https://images.unsplash.com/photo-1584982751601-97d883f510fb?auto=format&fit=crop&q=80&w=1600'
                  alt='Patient Recovery'
                  className='transition-all duration-500 w-full h-[300px] md:h-96 align-bottom object-cover rounded-xl shadow-2xl filter contrast-[1.05]'
                />
              </figure>
            </div>
          </div>
        </section>
      </main>
    </ReactLenis>
  );
});

StickyScroll.displayName = 'StickyScroll';

export default StickyScroll;
