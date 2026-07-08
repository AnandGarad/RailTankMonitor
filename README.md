# Rail Tank Monitor

## Enterprise Water Management System for Railway Tankers

A modern, real-time monitoring dashboard for managing water tankers on railway trains with live GPS tracking, sensor monitoring, and analytics.

### 🎯 Features

- **Live Train Tracking**: Real-time GPS positioning and route monitoring
- **Tanker Management**: Monitor 100+ water tankers with detailed metrics
- **Sensor Monitoring**: IoT sensor status and health tracking
- **Analytics Dashboard**: Water consumption trends and system performance
- **Alert System**: Real-time alerts for critical issues
- **Reports**: Generate and download system reports
- **Dark Mode Interface**: Modern, easy-on-the-eyes UI
- **Responsive Design**: Works on desktop and tablet devices

### 🚀 Quick Start

#### Prerequisites
- Node.js 16.x or higher
- npm or yarn

#### Installation

```bash
# Clone the repository
git clone https://github.com/AnandGarad/RailTankMonitor.git
cd RailTankMonitor

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Sidebar.jsx
│   ├── Navbar.jsx
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── Alert.jsx
│   ├── Modal.jsx
│   ├── Chart.jsx
│   └── ...
├── pages/               # Page components
│   ├── LoginPage.jsx
│   ├── Dashboard.jsx
│   ├── LiveTrain.jsx
│   ├── Tankers.jsx
│   ├── Analytics.jsx
│   └── ...
├── hooks/               # Custom React hooks
│   ├── useAuth.js
│   ├── useTrain.js
│   ├── useTankers.js
│   └── ...
├── stores/              # Zustand state management
│   ├── authStore.js
│   ├── trainStore.js
│   ├── tankerStore.js
│   └── ...
├── services/            # API and business logic
│   └── apiService.js
├── utils/               # Utility functions
│   ├── constants.js
│   └── helpers.js
├── layouts/             # Layout components
│   └── DashboardLayout.jsx
├── App.jsx              # Main app component
└── main.jsx             # Entry point
```

### 🔑 Demo Credentials

```
Email: admin@railtank.com
Password: Admin@123
```

### 🛠 Technology Stack

- **Frontend Framework**: React 18
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Routing**: React Router v6
- **Charts**: Recharts
- **Maps**: Leaflet + React Leaflet
- **Build Tool**: Vite
- **Icons**: Lucide React

### 📊 Key Pages

1. **Dashboard**: System overview with real-time metrics
2. **Live Train**: GPS tracking and train status monitoring
3. **Tankers**: View and manage all water tankers
4. **Tanker Details**: Detailed information for individual tankers
5. **Analytics**: Water consumption trends and performance metrics
6. **Reports**: Generate and download system reports
7. **Alerts**: System alerts and notifications
8. **Sensors**: IoT sensor status and health
9. **Settings**: User preferences and system configuration

### 🎨 UI Components

- Responsive sidebar navigation
- Modern dark theme interface
- Real-time data visualization
- Interactive charts and graphs
- Toast notifications
- Modal dialogs
- Status badges and indicators
- Progress bars and gauges

### 🔐 Authentication

- Secure login system
- Session management
- Protected routes
- User profile management

### 📡 Real-time Updates

- GPS position updates (5 seconds)
- Water level updates (10 seconds)
- Temperature monitoring (15 seconds)
- Pressure monitoring (15 seconds)
- Alert notifications (10 seconds)

### ⚡ Performance Features

- Optimized re-renders with Zustand
- Lazy loading for components
- Debounced search and filters
- Efficient data management

### 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

### 👨‍💻 Author

**Anand Garad**
- GitHub: [@AnandGarad](https://github.com/AnandGarad)

### 🙏 Acknowledgments

Thank you for using Rail Tank Monitor! If you find this project helpful, please consider giving it a star ⭐

---

**Built with ❤️ for efficient water management**
