import React from 'react'

const Contact = () => {
  return (
    <div><section className="bg-blue-950 text-white py-20 text-center">
    <h1 className="text-5xl font-bold mb-4">Contact Me</h1>
    <p className="text-lg max-w-2xl mx-auto">
      If you have any questions, feel free to reach out. I will get back to you as soon as possible!
    </p>
  </section>

  <section className="py-20">
        <form className="max-w-lg mx-auto px-4" action="#" method="POST">
          <div className="mb-6">
            <label htmlFor="name" className="block text-lg font-medium mb-2">Your Name</label>
            <input type="text" id="name" name="name" className="w-full p-3 border border-gray-300 rounded" required />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-lg font-medium mb-2">Your Email</label>
            <input type="email" id="email" name="email" className="w-full p-3 border border-gray-300 rounded" required />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
            <textarea id="message" name="message" className="w-full p-3 border border-gray-300 rounded" required></textarea>
          </div>

          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 rounded">
            Send Message
          </button>
        </form>
      </section>
  
  </div>
  )
}

export default Contact
