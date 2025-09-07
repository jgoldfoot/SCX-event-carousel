import React from 'react';
import { EventCarousel } from './components/EventCarousel';

const events = [
  {
    id: '1a',
    title: 'Online Esthetic Summit \'25',
    date: 'Oct 27, 2025',
    time: '1:00 PM - PST',
    description: "Join me & 15 other industry experts for a month-long educational event!\n\nMondays in October, join us for connection, education, & inspiration.\n\nI'll be tackling \"The Big 3\" client management challenges for service-based practitioners.\n\nYou'll walk away with tips and scripts you can use when you go back to work on Tuesday!",
    image: 'https://goldfoot.com/images/EstysThrive2025-web.png',
    link: 'https://estheticianwebsites.com/esthetic-virtual-summit-2025/'
  },
  {
    id: '2b',
    title: 'Esthetics Retreat 2025',
    date: 'May 2-5, 2025',
    time: 'Marshall, NC',
    description: "Join me at the Esthetics Retreat 2025 in the beautiful Blue Ridge Mountains of North Carolina! I'll be hosting a breakout session on reducing stress in your practice and enjoying time to reset with all of you!",
    image: 'https://goldfoot.com/images/restore2025.png',
    link: 'https://estheticianwebsites.com/esthetician-retreat-2025/'
  },
  {
    id: '2c',
    title: 'Surviving Esthetics in 2025',
    description: "Excited to be back on the iwish podcast with the lovely co-founder of Wish Skin Health, David Valenzuela. We're chatting about my favorite topic - Client Experience!\n\n" +
      "The iwish Podcast highlights success and confidence in the esthetic industry through exclusive interviews with leaders and the latest industry insights.",
    videoId: 'sBDraF2Bzws',
    image: 'https://goldfoot.com/images/podcast2025.jpg',
    link: 'https://www.youtube.com/watch?v=sBDraF2Bzws'
  },
  {
    id: '1',
    title: 'Cut the Chaos: Effective Solutions to Prevent & Manage Problem Client Behavior',
    date: 'March 31, 2025',
    time: '09:00 AM - PDT',
    description: "This session provides a structured, professional approach to address the most frustrating hurdles for any service-based practice. You'll walk away with actionable strategies and the tools needed to protect your time, reduce stress, and enhance the overall client experience.",
    image: 'https://synthesiscx.com/images/cutchaos.png',
    link: 'https://live.zoho.com/UfWGc9tQ2m'
  },
  {
    id: '2',
    title: 'Standing Out from the Competition on Day 1',
    date: 'March 31, 2025',
    time: '10:30 AM - PDT',
    description: "A presentation designed to equip esthetic students & newly licensed pros with the critical skills that go beyond what's taught in the classroom. Drawing from over 26 years of industry experience, Jill shares practical strategies to help new estheticians deliver an exceptional client experience, even if you're fresh out of school.",
    image: 'https://synthesiscx.com/images/standout.png',
    link: 'https://live.zoho.com/8B4a76OYq4'
  },
  {
    id: '3',
    title: 'Now a Recommended Resource on The Solo Esthetician!',
    description: "I'm so excited to be a Recommended Resource/Group Expert for The Solo Esthetician! Starting in December, I'll be hosting some informative and fun events, announcements and promotions. If you aren't yet a member of The Solo Esthetician group, join in now!",
    image: 'https://synthesiscx.com/images/solorr.png',
    link: 'https://www.facebook.com/groups/thesoloesthetician'
  },
  {
    id: '4',
    title: 'iwish Podcast Interview Hosted by David Valenzuela',
    description: "I had a fantastic time speaking with David Valenzuela on the iwish Podcast, where we discussed my journey in esthetics and my book, Skinthesis. Hosted by David—founder of WISH Skin Health—the iwish Podcast highlights success and confidence in the esthetic industry through exclusive interviews with leaders and the latest industry insights. It was an honor to be part of such an inspiring conversation!",
    videoId: 'EJ1YjqnH6hk',
    image: 'https://synthesiscx.com/images/wishpodcast01.png',
    link: 'https://www.youtube.com/watch?v=EJ1YjqnH6hk',
    alternativeLinks: [
      {
        platform: 'Apple Podcasts',
        url: 'https://podcasts.apple.com/us/podcast/master-the-client-experience/id1715388508?i=1000653671964'
      },
      {
        platform: 'Spotify',
        url: 'https://open.spotify.com/episode/7dVn6p3OgC8xBzHp28nYvq'
      }
    ]
  }
];

function App() {
  return (
    <div className="min-h-screen bg-transparent">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <EventCarousel events={events} />
      </div>
    </div>
  );
}

export default App;