import React from 'react'

 const About = () => {
  return (
    <div>
        <section className="bg-blue-950 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">About Me</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Hi, I am Laiba Khan, a web developer with a passion for creating beautiful and functional websites.
        </p>
      </section>

      <section className="py-20 text-center">
        <div className="max-w-5xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Background</h2>
            <p className="text-lg text-gray-700">
              I have a strong foundation in web development, specializing in HTML5,CSS3,JavaScript,TypeScript,React, Next.js, and modern UI/UX principles.
            </p>
          </div>
          
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Skills</h2>
            <ul className="space-y-2 text-lg">
            <li className="bg-gray-100 py-2 px-4 border-l-4 border-blue-500">HTML5</li>
            <li className="bg-gray-100 py-2 px-4 border-l-4 border-blue-500">CSS3</li>
            <li className="bg-gray-100 py-2 px-4 border-l-4 border-blue-500">TypeScript</li>
              <li className="bg-gray-100 py-2 px-4 border-l-4 border-blue-500">React.js</li>
              <li className="bg-gray-100 py-2 px-4 border-l-4 border-blue-500">Next.js</li>
              <li className="bg-gray-100 py-2 px-4 border-l-4 border-blue-500">Tailwind CSS</li>
              <li className="bg-gray-100 py-2 px-4 border-l-4 border-blue-500">JavaScript (ES6+)</li>
              <li className="bg-gray-100 py-2 px-4 border-l-4 border-blue-500">Responsive Web Design</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">Experience</h2>
            <p className="text-lg text-gray-700">
              I have worked on multiple projects, developing responsive websites, single-page applications (SPAs), and user interfaces for various clients.
            </p>
          </div>
        </div>
      </section>
  </div>
  )
}

export default About
