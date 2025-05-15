import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900">
        <nav className="p-4 shadow-md flex justify-between">
          <div className="text-xl font-bold">Ayan Bhatia</div>
          <div className="space-x-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/projects" className="hover:underline">Projects</Link>
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </div>
        </nav>

        <main className="p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

// pages/Home.jsx
export function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="text-lg">Hi, I'm Ayan Bhatia. I'm passionate about robotics, embedded systems, and product design. Explore my projects to learn more.</p>
    </div>
  );
}

// pages/Projects.jsx
export function Projects() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <ul className="list-disc ml-6 space-y-2">
        <li>Penn Aerial Robotics - 2025 Design Report</li>
        <li>TOM Projects: LED Toy, Mobility Trainer, T-Ball Set</li>
        <li>Embedded Systems Lab - Morse Code, Theremin, Pong</li>
        <li>RISC-V Processor Design (GitHub)</li>
        <li>Signal Processing - Face Recognition, JPEG, Voice Recognition</li>
        <li>Design Projects - Drag Simulation, Theremin</li>
      </ul>
    </div>
  );
}

// pages/About.jsx
export function About() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="text-lg mb-2">I'm currently pursuing a BSE in Electrical Engineering and an MSE in Robotics at the University of Pennsylvania.</p>
      <p className="text-lg">My work spans robotics, embedded systems, digital design, and ethical technology development. I enjoy building systems that are both functional and meaningful.</p>
    </div>
  );
}

// pages/Contact.jsx
export function Contact() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <p className="text-lg">Feel free to reach out to me at:</p>
      <ul className="mt-4 space-y-2">
        <li>Email: ayan@example.com</li>
        <li>LinkedIn: <a href="https://linkedin.com/in/ayanbhatia" className="text-blue-600 underline">linkedin.com/in/ayanbhatia</a></li>
        <li>GitHub: <a href="https://github.com/ayanbhatia" className="text-blue-600 underline">github.com/ayanbhatia</a></li>
      </ul>
    </div>
  );
}
