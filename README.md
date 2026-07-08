# Rail Tank Monitor 🚂💧

## Railway Water Tank Monitoring System

A modern, production-ready enterprise dashboard for monitoring a railway freight train carrying 100 water tankers. Built with React 19, Vite, and Tailwind CSS.

### 🎯 Features

#### 1. **Authentication**
- Modern glassmorphism login page
- Email & password authentication
- Remember me functionality
- Forgot password support
- Dark theme

#### 2. **Dashboard**
- Professional enterprise layout
- Real-time monitoring cards
- Key metrics display (water level, capacity, speed, ETA, etc.)
- Responsive grid system

#### 3. **Live Train Tracking**
- Google Maps integration
- Live train marker with animation
- Mumbai to Pune railway route visualization
- Real-time coordinates and speed display
- Direction indicator
- Zoom controls
- Dark map style

#### 4. **Tanker Management**
- Display 100 tankers with real-time data
- Water percentage with progress bars
- Temperature and pressure monitoring
- Valve and sensor status
- Tank health indicators
- Color-coded status (Green/Yellow/Red)
- Search, filter, and sort capabilities
- Detailed tanker view

#### 5. **Analytics & Reports**
- Water usage charts
- Temperature trends
- Pressure trends
- Daily/Monthly consumption
- PDF/Excel export functionality
- Date range filtering

#### 6. **Alerts System**
- Low water alerts
- Sensor offline notifications
- GPS offline alerts
- High temperature warnings
- Pressure warnings
- Alert severity levels
- Real-time updates

#### 7. **Settings**
- User profile management
- Company settings
- API configuration
- Notification preferences
- Theme customization

### 🛠 Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **State Management**: Zustand
- **Animations**: Framer Motion
- **Charts**: ApexCharts & Recharts
- **Maps**: Google Maps API
- **Export**: jsPDF & XLSX
- **Icons**: Lucide React

### 📦 Installation

#### Prerequisites
- Node.js 18+
- npm or yarn

#### Steps

1. **Clone the repository**
```bash
git clone https://github.com/AnandGarad/RailTankMonitor.git
cd RailTankMonitor
```

2. **Install dependencies**
```bash
npm install
```

3. **Create environment file**
```bash
cp .env.example .env.local
```

4. **Update environment variables**
Edit `.env.local` and add your Google Maps API key:
```
VITE_GOOGLE_MAPS_API_KEY=your_api_key_here
```

5. **Run development server**
```bash
npm run dev
```

6. **Build for production**
```bash
npm run build
```

### 🎨 Project Structure

```
src/
├── assets/              # Images, logos, fonts
├── components/          # Reusable UI components
│   ├── common/
│   ├── dashboard/
│   ├── tankers/
│   ├── charts/
│   └── layout/
├── pages/               # Page components
├── hooks/               # Custom React hooks
├── context/             # Context API setup
├── services/            # API & data services
├── stores/              # Zustand stores
├── utils/               # Utility functions
├── styles/              # Global styles
├── data/                # Mock/dummy data
├── App.jsx              # Main app component
└── main.jsx             # Entry point
```

### 🚀 Quick Start

```bash
# Development
npm run dev

# Build
npm run build

# Preview production build
npm run preview

# Lint
npm run lint
```

### 🎨 Theme Colors

- **Background**: `#0F172A`
- **Cards**: `#1E293B`
- **Primary**: `#06B6D4` (Cyan)
- **Success**: `#22C55E` (Green)
- **Warning**: `#F59E0B` (Amber)
- **Danger**: `#EF4444` (Red)

### 📱 Responsive Design

- ✅ Desktop (1920px+)
- ✅ Tablet (768px - 1024px)
- ✅ Mobile (320px - 767px)

### 🔐 Default Credentials

**For Testing**
- Email: `admin@railtank.com`
- Password: `Admin@123`

### 📊 Real-time Data Updates

- GPS Coordinates: Every 5 seconds
- Water Level: Every 10 seconds
- Train Speed: Every 5 seconds
- Temperature: Every 15 seconds
- Pressure: Every 15 seconds

### 🗺 Google Maps Setup

1. Create a Google Cloud project
2. Enable Maps JavaScript API
3. Create an API key
4. Add it to `.env.local` as `VITE_GOOGLE_MAPS_API_KEY`
5. Restrict API key to your domain

### 📖 Component Documentation

#### Key Components

- **Sidebar**: Navigation menu with collapsible state
- **Navbar**: Top navigation with search, notifications, profile
- **DashboardCards**: Key metrics display
- **GoogleMap**: Live train tracking map
- **TankerCard**: Individual tanker information
- **WaterGauge**: Circular water level indicator
- **ChartCard**: Reusable chart wrapper
- **AlertCard**: Alert notification display

### 🔄 State Management

Using Zustand for:
- Train data state
- Tanker data state
- Alert state
- User preferences
- Authentication state

### 📤 Export Functionality

- **PDF Export**: Using jsPDF
- **Excel Export**: Using XLSX
- **Date Range Filtering**: For reports

### 🐛 Common Issues

1. **Maps not loading**: Check Google Maps API key in `.env.local`
2. **Styling issues**: Clear node_modules and reinstall
3. **Port already in use**: Change port in vite.config.js

### 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

### 📝 License

MIT License - feel free to use this project

### 📞 Support

For issues and questions, please create an issue in the repository.

---

**Built with ❤️ for railway monitoring**
