import React, { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDark = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 font-sans min-h-screen transition-colors duration-300">

        {/* Navbar */}
        <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md transition-colors">
          <nav className="flex justify-between items-center px-6 py-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">SoftSell</span>
            </div>
            <div className="space-x-6">
              <a href="#hero" className="hover:text-blue-600">Home</a>
              <a href="#how-it-works" className="hover:text-blue-600">How It Works</a>
              <a href="#why-choose-us" className="hover:text-blue-600">Why Us</a>
              <a href="#testimonials" className="hover:text-blue-600">Testimonials</a>
              <a href="#contact-form" className="hover:text-blue-600">Contact</a>
              <button
                onClick={toggleDark}
                className="ml-2 bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded text-sm"
              >
                {darkMode ? "☀️" : "🌙"}
              </button>
            </div>
          </nav>
        </header>

        {/* Hero */}
        <motion.section
          id="hero"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Sell Your Unused Software Licenses
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Turn your unused software into cash with SoftSell
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Get a Quote
          </button>
        </motion.section>

        {/* How it Works */}
        <motion.section
          id="how-it-works"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="py-20 px-6 bg-white dark:bg-gray-900 text-center"
        >
          <h2 className="text-3xl font-semibold mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["📁 Upload License", "💰 Get Valuation", "💳 Get Paid"].map((step, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-6 border rounded-lg dark:border-gray-600"
              >
                <div className="text-5xl mb-4">{step.split(" ")[0]}</div>
                <h3 className="text-xl font-medium">{step.split(" ").slice(1).join(" ")}</h3>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Why Choose Us */}
        <section id="why-choose-us" className="py-20 px-6 bg-gray-100 dark:bg-gray-800 text-center">
          <h2 className="text-3xl font-semibold mb-8">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {["Fast Payouts", "Verified Buyers", "Simple Process", "Secure & Private"].map((point, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
              >
                <h3 className="text-lg font-semibold mb-2">{point}</h3>
                <p className="text-sm">We ensure your experience is hassle-free and reliable.</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-20 px-6 text-center">
          <h2 className="text-3xl font-semibold mb-8">Customer Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: "Anjali Sharma", role: "IT Manager" },
              { name: "Ravi Mehta", role: "Freelancer" }
            ].map((person, i) => (
              <motion.div
                key={i}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.2 }}
                className="p-6 border rounded-lg bg-white dark:bg-gray-700"
              >
                <p className="italic mb-2">
                  "SoftSell made it super easy to convert my unused licenses into cash!"
                </p>
                <h4 className="font-bold">{person.name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{person.role}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact-form" className="py-20 px-6 bg-blue-50 dark:bg-gray-900">
          <h2 className="text-3xl font-semibold mb-8 text-center">Contact Us</h2>
          <form className="max-w-xl mx-auto grid gap-4">
            <input type="text" placeholder="Name" className="border px-4 py-2 rounded dark:bg-gray-800 dark:border-gray-600" />
            <input type="email" placeholder="Email" className="border px-4 py-2 rounded dark:bg-gray-800 dark:border-gray-600" />
            <input type="text" placeholder="Company" className="border px-4 py-2 rounded dark:bg-gray-800 dark:border-gray-600" />
            <select className="border px-4 py-2 rounded dark:bg-gray-800 dark:border-gray-600" required>
            <option value="">Select License Type</option>
            <option value="os">Operating System</option>
            <option value="productivity">Productivity</option>
            <option value="dev">Developer Tools</option>
          </select>
            <textarea placeholder="Message" className="border px-4 py-2 rounded dark:bg-gray-800 dark:border-gray-600" />
            <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Submit</button>
          </form>
        </section>
      </main>
    </div>
  );
}
