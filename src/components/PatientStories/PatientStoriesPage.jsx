import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play } from 'lucide-react';
import ParallaxGallery from '../ui/3d-parallax-unfurling-gallery';

// Placeholder array for the vertical gallery. Replace with your actual photos and videos.
const MEDIA_ITEMS = [
  {
    id: 1,
    type: 'video',
    title: 'Knee Replacement Recovery',
    thumbnail: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800',
    src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' // placeholder video
  },
  {
    id: 2,
    type: 'image',
    title: 'Post-Surgery Progress',
    thumbnail: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800',
    src: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1600'
  },
  {
    id: 3,
    type: 'image',
    title: 'Happy Patient',
    thumbnail: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
    src: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600'
  }
];

export function PatientStoriesPage() {
  const [selectedMedia, setSelectedMedia] = useState(null);

  // Helper to lock body scroll when modal is open
  React.useEffect(() => {
    if (selectedMedia) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; }
  }, [selectedMedia]);

  return (
    <div className="w-full bg-[#F7F5F0] min-h-screen">
      
      {/* 3D Parallax Hero Section */}
      <ParallaxGallery />

      {/* Vertical Media Gallery Section */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-24 md:py-32">


        {/* CSS Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {MEDIA_ITEMS.map((item) => (
            <div 
              key={item.id} 
              className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 aspect-square bg-[#071B2A]"
              onClick={() => setSelectedMedia(item)}
            >
              {/* Thumbnail */}
              <img 
                src={item.thumbnail} 
                alt={item.title} 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                loading="lazy"
              />
              
              {/* Play icon overlay for videos */}
              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:bg-[#E7C68E]/90 group-hover:scale-110 transition-all duration-300">
                    <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                  </div>
                </div>
              )}

              {/* Title overlay on hover */}
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-[#071B2A]/90 to-transparent translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-white font-sans font-bold text-lg">{item.title}</h3>
                <p className="text-[#E7C68E] text-xs font-bold uppercase tracking-wider mt-1">{item.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-[#071B2A]/95 backdrop-blur-sm p-4 md:p-10"
            onClick={() => setSelectedMedia(null)} // Close when clicking backdrop
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 md:top-10 md:right-10 text-white/50 hover:text-white hover:bg-white/10 p-3 rounded-full transition-colors z-[210]"
              onClick={() => setSelectedMedia(null)}
            >
              <X className="w-8 h-8" />
            </button>

            {/* Modal Content Wrapper (stops click propagation so clicking media doesn't close modal) */}
            <motion.div 
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl bg-black flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedMedia.type === 'video' ? (
                <video 
                  src={selectedMedia.url} 
                  controls 
                  autoPlay 
                  className="w-full h-full max-h-[85vh] object-contain outline-none"
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img 
                  src={selectedMedia.url} 
                  alt={selectedMedia.title} 
                  className="w-full h-full max-h-[85vh] object-contain"
                />
              )}
            </motion.div>

            {/* Modal Title */}
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-[210]">
              <h3 className="text-white font-serif text-2xl md:text-3xl font-bold">{selectedMedia.title}</h3>
            </div>
            
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
