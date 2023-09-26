import React from 'react';

const Services = () => {
  return (
    <section className="bg-gray-700 shadow-xl ring-1 ring-gray-900/5  px-6 pt-10 pb-8  sm:rounded-lg mt-6">
      <div className="container mx-auto">
        <h2 className="text-2xl mb-4">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="bg-slate-50 shadow-xl ring-1 ring-gray-900/5  p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-slate-700 mb-4">
              Web Development
            </h3>
            <p className="text-gray-700 mb-4">
              I specialize in creating user-centric web applications using
              modern technologies like React, Next.js, and TypeScript.
            </p>
            <div className='flex justify-end w-full'>
              <img src='/services/web.png' className='w-20' />
            </div>
          </div>

          <div className="bg-slate-50 shadow-xl ring-1 ring-gray-900/5  p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-slate-700 mb-4">
              Backend Development
            </h3>
            <p className="text-gray-700 mb-4">
              I am skilled in building server-side logic and APIs using
              Node.js, Express, and databases like PostgreSQL and MongoDB.
            </p>
            <div className='flex justify-end w-full'>
              <img src='/services/server.png' className='w-20' />
            </div>
          </div>

          <div className="bg-slate-50 shadow-xl ring-1 ring-gray-900/5  p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-slate-700 mb-4">
              Automation Solutions
            </h3>
            <p className="text-gray-700 mb-4">
              I create automation solutions using Python to streamline
              processes and improve efficiency.
            </p>
            <div className='flex justify-end w-full'>
              <img src='/services/automation.png' className='w-20' />
            </div>
          </div>

          <div className="bg-slate-50 shadow-xl ring-1 ring-gray-900/5  p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-slate-700 mb-4">
              Docker & Deployment
            </h3>
            <p className="text-gray-700 mb-4">
              I can containerize applications with Docker and set up continuous
              deployment pipelines for automated deployments.
            </p>
            <div className='flex justify-end w-full'>
              <img src='/services/branch.png' className='w-20' />
            </div>
          </div>

          <div className="bg-slate-50 shadow-xl ring-1 ring-gray-900/5  p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-slate-700 mb-4">
              Performance Optimization
            </h3>
            <p className="text-gray-700 mb-4">
              I optimize websites for speed and SEO, implementing techniques
              like lazy loading and code splitting.
            </p>
            <div className='flex justify-end w-full'>
              <img src='/services/performance.png' />
            </div>
          </div>

          <div className="bg-slate-50 shadow-xl ring-1 ring-gray-900/5  p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-slate-700 mb-4">
              API Integrations
            </h3>
            <p className="text-gray-700 mb-4">
              I specialize in integrating secure payment gateways and other APIs
              to enhance the functionality of web applications.
            </p>
            <div className='flex justify-end w-full'>
              <img src='/services/api.png' className='w-20' />
            </div>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-center w-full gap-4">
          <a
            href="https://calendly.com/sudharsangs/call"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-center bg-teal-500 hover:bg-teal-600 py-2 px-4 rounded-lg text-lg font-semibold transition duration-300 ease-in-out"
          >
            Schedule a Meeting
          </a>
          <a
            href="/projects"
            className="text-white text-center bg-sky-500 hover:bg-sky-600 py-2 px-4 rounded-lg text-lg font-semibold transition duration-300 ease-in-out"
          >
            Explore My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
