import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Link as LinkIcon, ChevronDown, Play } from 'lucide-react';

interface AlternativeLink {
  platform: string;
  url: string;
}

interface EventCardProps {
  id: string;
  title: string;
  date?: string;
  time?: string;
  description: string;
  image: string;
  link: string;
  videoId?: string;
  alternativeLinks?: AlternativeLink[];
}

export function EventCard({ 
  id, 
  title, 
  date, 
  time, 
  description, 
  image, 
  link, 
  videoId,
  alternativeLinks 
}: EventCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleLinkClick = (e: React.MouseEvent, url: string) => {
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleVideoClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoId) {
      window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank', 'noopener,noreferrer');
    }
  };

  const hasDateTime = date || time;

  const getLinkText = () => {
    if (link.includes('esthetic-virtual-summit-2025')) return 'Register Here';
    if (link.includes('zoho.com')) return 'Register Here';
    if (link.includes('facebook.com')) return 'View on Facebook';
    if (link.includes('youtube.com') || link.includes('youtu.be')) return 'Watch on YouTube';
    if (link.includes('estheticianwebsites.com')) return 'More Info';
    return 'Learn More';
  };

  return (
    <div className="p-1">
      <div 
        className="relative flex-shrink-0 w-[290px] h-[500px] bg-white rounded-lg shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer overflow-hidden"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Background Image or Video */}
        <div className="absolute inset-0">
          <div className="h-[300px] overflow-hidden relative bg-gray-100">
            {videoId ? (
              <div 
                className="relative w-full h-full group cursor-pointer" 
                onClick={handleVideoClick}
              >
                <div className="absolute inset-0">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-contain object-center"
                  />
                </div>
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play size={32} className="text-red-600 ml-1" />
                  </div>
                </div>
              </div>
            ) : (
              <img
                src={image}
                alt={title}
                className="w-full h-full object-contain"
              />
            )}
          </div>
        </div>

        {/* Sliding Content Panel */}
        <div 
          className={`absolute inset-x-0 bg-white transition-all duration-500 ease-in-out
            ${isExpanded ? 'top-0 bottom-0' : 'top-[300px] bottom-0'}`}
        >
          <div className="p-4 h-full flex flex-col">
            <h3 className="text-xl font-semibold mb-2 line-clamp-2">{title}</h3>
            
            {hasDateTime && (
              <div className="flex items-center gap-4 text-gray-600 mb-3">
                {date && (
                  <div className="flex items-center gap-1">
                    <Calendar size={16} className="text-[#F36D20]" />
                    <span className="text-sm">{date}</span>
                  </div>
                )}
                {time && (
                  <div className="flex items-center gap-1">
                    {time.includes('NC') ? (
                      <MapPin size={16} className="text-[#F36D20]" />
                    ) : (
                      <Clock size={16} className="text-[#F36D20]" />
                    )}
                    <span className="text-sm">{time}</span>
                  </div>
                )}
              </div>
            )}

            <div className="flex-1 overflow-hidden">
              <div 
                className={`text-sm transition-opacity duration-300
                  ${isExpanded ? 'opacity-100' : 'opacity-70 line-clamp-3'}`}
              >
                {description.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-600 mb-3 last:mb-0">{paragraph}</p>
                ))}
                
                {isExpanded && alternativeLinks && alternativeLinks.length > 0 && (
                  <div className="mt-4 space-y-2">
                    <p className="text-sm font-medium text-gray-700">Also available on:</p>
                    {alternativeLinks.map((altLink, index) => (
                      <button
                        key={index}
                        onClick={(e) => handleLinkClick(e, altLink.url)}
                        className="flex items-center gap-2 text-[#F36D20] hover:text-[#d85d15] transition-colors w-full"
                      >
                        <LinkIcon size={16} />
                        <span className="text-sm">{altLink.platform}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            <div className="pt-2 flex justify-between items-center">
              <ChevronDown 
                size={20} 
                className={`text-gray-400 transition-transform duration-300
                  ${isExpanded ? 'rotate-180' : ''}`}
              />
              <button
                onClick={(e) => handleLinkClick(e, link)}
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                aria-label={getLinkText()}
              >
                <LinkIcon size={16} />
                <span className="text-sm">{getLinkText()}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}