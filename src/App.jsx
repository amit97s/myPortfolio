import React, { useState } from 'react';
import emailjs from 'emailjs-com';
// import img1 from '../src/assets/img1.jpg'
import image1 from '../src/assets/img1.jpg'
import img2 from '../src/assets/img2.jpeg'

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const skills = {
    // 'UI/UX': ['Figma', 'Adobe XD', 'Wireframing', 'Prototyping', 'User Research'],
    'Frontend': ['React', 'Next.js', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Material-UI'],
    'Backend': ['Node.js', 'Express.js', 'MongoDB', 'RESTful APIs'],
    'Tools': ['Git', 'VS Code', 'npm', 'Webpack', 'Chrome DevTools']
  };

  const projects = [
    {
      title: 'The Designer Class',
      description: 'An online learning platform for aspiring designers with interactive courses and real-time feedback.',
      role: 'Designed the user interface and developed key frontend components for the learning dashboard.',
      technologies: ['Next.js', 'Material-UI', 'Express.js', 'MongoDB'],
      impact: 'Successfully launched with 500+ active users and maintained a 4.8/5 user satisfaction rate.',
      image: image1
    },
    {
      title: 'Wafer Travels',
      description: 'A modern travel booking platform with an intuitive user interface and seamless booking experience.',
      role: 'Led the UI/UX design and frontend development, implementing responsive designs and interactive features.',
      technologies: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
      impact: 'Improved user engagement by 40% and reduced booking abandonment rate by 25%.',
      image:img2
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'amit1397singh@gmail.com'
        },
        'YOUR_USER_ID'
      );
      
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      alert('Failed to send message. Please try again.');
    }
    
    setLoading(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
        {/* Navbar */}
        <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 py-4">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-2xl font-bold text-blue-600 dark:text-blue-400"
              >
                Amit Manral
              </button>
              
              <div className="hidden md:flex space-x-8">
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('skills')}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Skills
                </button>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Projects
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Contact
                </button>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-xl"
                  aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                  {darkMode ? '🌞' : '🌙'}
                </button>
              </div>
            </div>
          </div>
        </nav>

        <main>
           <section id="hero" className="pt-20 min-h-screen flex items-center bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                  UI/UX Designer & Frontend Developer
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
                  Creating intuitive designs and functional interfaces with React and Next.js
                </p>
                <div className="flex justify-center space-x-4">
                  <button
                    onClick={() => scrollToSection('projects')}
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
                  >
                    View My Work
                  </button>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-8 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300"
                  >
                    Contact Me
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
                About Me
              </h2>
              <div className="max-w-3xl mx-auto">
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  As a UI/UX Designer and Frontend Developer with 1 year of experience at TechnodepiaSoft,
                  I specialize in creating intuitive and user-friendly digital experiences. My expertise
                  spans from conceptualizing designs in Figma to implementing them with modern frontend
                  technologies.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  During my time at TechnodepiaSoft, I've had the opportunity to work on impactful
                  projects like Wafer Travels and The Designer Class, where I contributed to improving
                  user experiences and implementing responsive designs.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  I'm passionate about creating clean, efficient, and accessible web applications that
                  not only look great but also provide meaningful value to users.
                </p>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
                Skills & Technologies
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category} className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4">{category}</h3>
                    <ul className="space-y-2">
                      {items.map((skill) => (
                        <li
                          key={skill}
                          className="text-gray-600 dark:text-gray-300 flex items-center"
                        >
                          <span className="mr-2">•</span>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
                Featured Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {projects.map((project) => (
                  <div
                    key={project.title}
                    className="relative group overflow-hidden rounded-xl shadow-lg"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-90 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                        <p className="text-sm mb-3">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 text-xs bg-blue-500/20 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <p className="text-sm font-light">{project.impact}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
                Get In Touch
              </h2>
              <div className="max-w-3xl mx-auto">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 disabled:opacity-50"
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>

                <div className="mt-12 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Connect With Me
                  </h3>
                  <div className="flex justify-center space-x-6">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      GitHub
                    </a>
                    <a
                      href="mailto:amit1397singh@gmail.com"
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      Email
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="py-8 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-600 dark:text-gray-300">
              © {new Date().getFullYear()} Amit singh manral. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;