# Jake Hyunoh Kwon - Personal Portfolio

A full-stack personal portfolio website showcasing Jake Hyunoh Kwon's professional experience, education, projects, and achievements. This project combines a React frontend with a Spring Boot backend to create a comprehensive portfolio platform.

## 🚀 Project Overview

This portfolio website serves as a professional showcase for Jake Hyunoh Kwon, a versatile Software Engineer with expertise in Full Stack development, including Frontend, Backend, DevOps, Data, and AI. The application is currently deployed and accessible at [https://kwohyuno.github.io/my-react-app](https://kwohyuno.github.io/my-react-app).

## 🛠️ Technology Stack

### Frontend
- **React 18.3.1** - Modern JavaScript library for building user interfaces
- **React Router DOM 7.0.2** - Client-side routing for single-page applications
- **React Icons 5.4.0** - Icon library for React applications
- **CSS3** - Styling and responsive design

### Backend
- **Spring Boot 3.4.0** - Java-based framework for building web applications
- **Java 17** - Programming language
- **Gradle** - Build automation tool
- **Lombok** - Java annotation processor for reducing boilerplate code

### Development Tools
- **Create React App** - React development environment
- **GitHub Pages** - Static site hosting
- **ESLint** - Code linting and formatting

## 📁 Project Structure

```
profile/
├── src/
│   ├── main/
│   │   ├── java/com/example/kwohyuno/
│   │   │   ├── KwohyunoApplication.java    # Spring Boot main application
│   │   │   └── MainController.java         # REST controller for proxy routing
│   │   └── frontend/                       # React application
│   │       ├── src/
│   │       │   ├── pages/                  # Page components
│   │       │   │   ├── mainpage/           # Home page
│   │       │   │   ├── career/             # Career experience
│   │       │   │   ├── education/          # Educational background
│   │       │   │   ├── project/            # Project showcase
│   │       │   │   ├── study/              # Study materials
│   │       │   │   ├── certificate/        # Certifications
│   │       │   │   └── components/         # Reusable components
│   │       │   │       └── Header.js       # Navigation header
│   │       │   └── router/
│   │       │       └── RouteMain.js        # Application routing
│   │       └── public/                     # Static assets
│   └── resources/                          # Static resources
├── build.gradle                           # Gradle build configuration
├── package.json                           # Node.js dependencies
└── README.md                             # This file
```

## 🎯 Features

### Core Sections
1. **Home Page** - Personal introduction and overview
2. **Career** - Professional work experience and achievements
3. **Education** - Academic background and qualifications
4. **Projects** - Portfolio of technical projects
5. **Study** - Learning materials and resources
6. **Certificates** - Professional certifications and achievements

### Key Features
- **Responsive Design** - Optimized for desktop and mobile devices
- **Modern UI/UX** - Clean, professional interface with smooth navigation
- **Social Media Integration** - Links to GitHub, LinkedIn, and personal blog
- **Modal Interactions** - Interactive elements for detailed information display
- **Proxy Routing** - Spring Boot backend serves React frontend seamlessly

## 🚀 Getting Started

### Prerequisites
- **Java 17** or higher
- **Node.js** (for React development)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kwohyuno/profile.git
   cd profile
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Start the development servers**

   **Frontend (React)**
   ```bash
   npm start
   ```
   The React app will run on [http://localhost:3000](http://localhost:3000)

   **Backend (Spring Boot)**
   ```bash
   ./gradlew bootRun
   ```
   The Spring Boot app will run on [http://localhost:8080](http://localhost:8080)

### Development Scripts

- `npm start` - Start React development server
- `npm run build` - Build React app for production
- `npm test` - Run React tests
- `./gradlew bootRun` - Start Spring Boot application
- `./gradlew build` - Build Spring Boot application
- `npm run deploy` - Deploy to GitHub Pages

## 🏗️ Architecture

### Frontend Architecture
The React application follows a component-based architecture with:
- **Page Components** - Main sections of the portfolio
- **Reusable Components** - Shared UI elements like Header
- **Router Configuration** - Client-side routing with React Router
- **CSS Modules** - Scoped styling for each component

### Backend Architecture
The Spring Boot application provides:
- **Proxy Controller** - Routes all requests to the React frontend
- **REST API** - Backend services (currently minimal)
- **Static Resource Serving** - Serves the built React application

## 🎨 Design & Styling

The portfolio features a modern, professional design with:
- **Clean Typography** - Professional font choices and hierarchy
- **Responsive Layout** - Mobile-first design approach
- **Interactive Elements** - Hover effects and smooth transitions
- **Social Media Integration** - Prominent links to professional profiles
- **Modal Dialogs** - Detailed information display without page navigation

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop** - Full-featured experience with detailed layouts
- **Tablet** - Adapted layouts for medium screens
- **Mobile** - Touch-friendly interface with simplified navigation

## 🚀 Deployment

The application is deployed using GitHub Pages:
- **Production Build** - Optimized React build served by GitHub Pages
- **Custom Domain** - Professional domain configuration
- **HTTPS** - Secure connection with SSL certificate

## 🤝 Contributing

This is a personal portfolio project. For questions or suggestions, please contact Jake Hyunoh Kwon through the social media links provided in the application.

## 📄 License

This project is for personal use and portfolio demonstration purposes.

## 👤 About the Developer

**Jake Hyunoh Kwon** is a versatile Software Engineer with expertise in:
- Full Stack Development (Frontend, Backend, DevOps)
- Data Engineering and AI/ML
- Cloud Computing (AWS)
- Software Engineering and Computer Science

Currently studying at the University of San Francisco, focusing on AI and Computer Science.

---

*"Let's Work Hard, Have Fun, and Make History!"* - Jake Hyunoh Kwon
