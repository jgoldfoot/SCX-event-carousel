# Event Carousel Component

A modern, responsive event carousel built with React, TypeScript, and Tailwind CSS. This component provides a beautiful way to showcase events, featuring rich media support, interactive cards, and a smooth scrolling experience.

![Event Carousel Preview](https://synthesiscx.com/images/carousel-preview.png)

## Features

- 🎯 Responsive design that works on all screen sizes
- 🖼️ Support for both images and YouTube video thumbnails
- 🔄 Smooth scrolling carousel navigation
- 📱 Touch-friendly interface
- 🎨 Beautiful transitions and animations
- 🔗 Multiple link types support (Registration, Facebook, YouTube, etc.)
- 📅 Date and time display with custom styling
- 📝 Expandable descriptions
- 🎵 Alternative platform links (e.g., Spotify, Apple Podcasts)

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm 7.x or higher

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Usage

### Basic Implementation

```tsx
import { EventCarousel } from './components/EventCarousel';

const events = [
  {
    id: '1',
    title: 'Event Title',
    date: 'January 1, 2025',
    time: '10:00 AM',
    description: 'Event description',
    image: 'https://example.com/image.jpg',
    link: 'https://example.com'
  }
];

function App() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <EventCarousel events={events} />
    </div>
  );
}
```

### Event Object Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| id | string | Yes | Unique identifier for the event |
| title | string | Yes | Event title |
| date | string | No | Event date |
| time | string | No | Event time |
| description | string | Yes | Event description |
| image | string | Yes | URL to event image |
| link | string | Yes | Primary event link |
| videoId | string | No | YouTube video ID |
| alternativeLinks | AlternativeLink[] | No | Additional platform links |

### AlternativeLink Object Properties

| Property | Type | Description |
|----------|------|-------------|
| platform | string | Platform name (e.g., "Spotify") |
| url | string | Platform-specific URL |

## Components

### EventCarousel

The main container component that handles the carousel functionality and renders event cards.

**Props:**
- `events`: Array of event objects

### EventCard

Individual card component that displays event information with expandable details.

**Features:**
- Expandable description
- Video thumbnail with play button
- Alternative platform links
- Custom link text based on URL
- Date and time display with themed icons

## Styling

The project uses Tailwind CSS for styling with custom configurations:

- Custom color scheme
- Roboto font integration
- Smooth transitions
- Custom scrollbar hiding
- Responsive design breakpoints

## Development

### Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run lint`: Run ESLint

### Project Structure

```
src/
├── components/
│   ├── EventCarousel.tsx
│   ├── EventCard.tsx
│   └── Modal.tsx
├── App.tsx
├── main.tsx
└── index.css
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.