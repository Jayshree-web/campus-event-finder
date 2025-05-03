
# Campus Event Finder

A modern web platform that aggregates tech events from college campuses nationwide. Find hackathons, tech talks, workshops, and other tech-related events happening at universities across the country.

## Features

- **Event Dashboard**: Browse upcoming tech events from multiple colleges
- **Event Details**: View comprehensive information about each event
- **Event Submission**: Submit new events to the platform
- **Advanced Filtering**: Filter events by date, event type, college, and more
- **Responsive Design**: Optimized for both desktop and mobile devices

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui
- **Form Handling**: React Hook Form with Zod validation
- **Routing**: React Router
- **Date Handling**: date-fns

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/campus-event-finder.git
   cd campus-event-finder
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:8080](http://localhost:8080) in your browser to see the application.

## Project Structure

```
src/
├── components/         # UI components
├── data/              # Mock data for events
├── layouts/           # Page layout components
├── lib/               # Utility functions
├── pages/             # Main page components
│   ├── Index.tsx      # Home page with event listings
│   ├── EventDetail.tsx # Event details page
│   ├── SubmitEvent.tsx # Event submission page
│   └── NotFound.tsx   # 404 page
└── App.tsx            # Main application component with routing
```

## Features Explained

### Event Dashboard
The home page displays a curated list of tech events from various colleges. Featured events are highlighted at the top, with all events listed below. Users can filter events by various criteria.

### Event Filtering
Users can search events by:
- Keyword search
- Event type (hackathon, tech talk, workshop)
- College/university
- Date range

### Event Submission
Anyone can submit an event through the submission form. The form includes validation to ensure all required information is provided.

### Event Details
Each event has a dedicated page showing:
- Event title and description
- Date, time, and location
- Hosting college/university
- Link to the event website (if available)
- Sharing capabilities

## Future Enhancements

- User authentication for event organizers
- Event registration functionality
- Email notifications for upcoming events
- Calendar integration
- Event recommendations based on user preferences
- Integration with college websites to automatically scrape events

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
