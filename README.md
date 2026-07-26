# LifeFix AI - Premium AI Platform

A production-ready AI platform built with React 19, Vite, and modern web technologies. LifeFix AI helps users solve everyday problems using powerful artificial intelligence.

## Features

### Core Features
- 🤖 **AI Chat** - ChatGPT-style interface with Gemini API integration
- 🖼️ **Image Generator** - Generate images with AI
- 📄 **Resume Builder** - Create professional resumes
- 📚 **Study Assistant** - AI-powered learning companion
- 💻 **Code Assistant** - Programming help and code review
- 🏥 **Health Assistant** - Health and wellness support
- 🌐 **Translator** - Multi-language translation
- ✍️ **Grammar Checker** - Writing improvement tool
- 🔢 **Math Solver** - Mathematical problem solving
- 📧 **Email Writer** - Email composition assistance
- 💼 **Business Assistant** - Business solutions
- 🎙️ **Voice AI** - Speech-to-text and text-to-speech

### Platform Features
- 🔐 Firebase Authentication (Email, Google)
- 💾 Supabase Database for data persistence
- 🌙 Dark/Light mode support
- 📱 Fully responsive design
- 🎨 Beautiful glassmorphism UI
- ⚡ Smooth animations with Framer Motion
- 🎭 Interactive 3D effects with Three.js
- 📊 Usage statistics and analytics
- 🔔 Real-time notifications
- 💬 Chat history management
- 📥 File upload support
- 🎯 Bookmark functionality

## Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js
- **Routing**: React Router v6
- **Authentication**: Firebase Auth
- **Database**: Supabase
- **Backend**: Netlify Functions
- **AI**: Google Gemini API
- **State Management**: Zustand
- **Type Safety**: TypeScript
- **Code Quality**: ESLint

## Project Structure

```
lifefix-ai/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── common/          # Common components
│   │   ├── chat/            # Chat interface components
│   │   ├── tools/           # AI tools components
│   │   ├── dashboard/       # Dashboard components
│   │   └── 3d/              # 3D components
│   ├── pages/               # Page components
│   ├── hooks/               # Custom React hooks
│   ├── context/             # React Context providers
│   ├── services/            # External API services
│   ├── utils/               # Utility functions
│   ├── types/               # TypeScript types
│   ├── styles/              # Global styles
│   ├── assets/              # Images, icons, fonts
│   ├── App.tsx              # Root component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── netlify/functions/       # Serverless functions
├── public/                  # Static assets
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
├── netlify.toml
└── README.md
```

## Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn
- Firebase account
- Supabase account
- Google Gemini API key

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd lifefix-ai
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file:
```bash
cp .env.example .env.local
```

4. Fill in your environment variables in `.env.local`

### Development

```bash
npm run dev
```

The application will open at `http://localhost:3000`

### Build

```bash
npm run build
```

### Type Checking

```bash
npm run type-check
```

### Linting

```bash
npm run lint
```

## API Endpoints

### Authentication
- `POST /auth/login` - User login
- `POST /auth/register` - User registration
- `POST /auth/refresh` - Refresh token

### Chat
- `POST /chat` - Send chat message
- `GET /chat/history` - Get chat history
- `DELETE /chat/:id` - Delete chat

### Tools
- `POST /image/generate` - Generate image
- `POST /upload` - Upload file
- `GET /tools` - Get all tools

### Data
- `GET /weather` - Weather information
- `GET /news` - News articles
- `GET /currency` - Currency rates

## Database Schema

### Users Table
- id (UUID)
- email (String)
- display_name (String)
- avatar_url (String)
- theme (String)
- created_at (Timestamp)
- updated_at (Timestamp)

### Chats Table
- id (UUID)
- user_id (UUID)
- title (String)
- messages (JSON)
- created_at (Timestamp)
- updated_at (Timestamp)

### Messages Table
- id (UUID)
- chat_id (UUID)
- role (String)
- content (String)
- created_at (Timestamp)

### Subscriptions Table
- id (UUID)
- user_id (UUID)
- plan (String)
- status (String)
- current_period_start (Timestamp)
- current_period_end (Timestamp)

## Security

- All API keys are stored securely in environment variables
- CORS is properly configured
- User authentication is required for protected routes
- Database has row-level security policies
- Input validation on all endpoints
- Rate limiting on API routes

## Performance

- Lazy loading for routes and components
- Image optimization
- Code splitting
- Minification and compression
- CDN-ready build
- Lighthouse score optimization

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - see LICENSE file for details

## Support

For support, email support@lifefix-ai.com or open an issue on GitHub.

## Roadmap

- [ ] Mobile app (React Native)
- [ ] Advanced analytics
- [ ] Team collaboration features
- [ ] Custom AI models
- [ ] API marketplace
- [ ] Enterprise solutions

## Authors

- **LifeFix AI Team** - Initial work and maintenance

## Acknowledgments

- React and Vite communities
- Firebase and Supabase teams
- Google Gemini API documentation
- Tailwind CSS for styling utilities
