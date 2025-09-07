import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { EventCard } from './EventCard';

const SCROLL_AMOUNT = 300;

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  image: string;
}

interface EventCarouselProps {
  events: Event[];
}

export function EventCarousel({ events }: EventCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    
    const scrollAmount = direction === 'left' ? -SCROLL_AMOUNT : SCROLL_AMOUNT;
    scrollContainerRef.current.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative w-full py-8 overflow-hidden">
      {/* Navigation Buttons */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 rounded-full p-2 shadow-lg hover:bg-white transition-colors"
        aria-label="Scroll left"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={() => scroll('right')}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 rounded-full p-2 shadow-lg hover:bg-white transition-colors"
        aria-label="Scroll right"
      >
        <ChevronRight size={24} />
      </button>

      {/* Events Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {events.map(event => (
          <div key={event.id} className="snap-center">
            <EventCard {...event} />
          </div>
        ))}
      </div>
    </div>
  );
}