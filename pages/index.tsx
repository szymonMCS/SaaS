"use client"

import { SignInButton, SignedIn, SignedOut } from '@clerk/nextjs';

export default function Home() {
  return (
    <main className="min-h-screen gradient-bg">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo large */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl shadow-2xl mb-6">
              <span className="text-white font-bold text-4xl">I</span>
            </div>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Generate Your Next</span>
            <br />
            <span className="text-gray-900 dark:text-gray-100">Big Business Idea</span>
          </h1>
          
          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Harness the power of AI to discover innovative business opportunities 
            tailored for the AI agent economy
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="btn-primary w-full sm:w-auto">
                  Start Free Trial
                </button>
              </SignInButton>
              <SignInButton mode="modal">
                <button className="btn-secondary w-full sm:w-auto">
                  Learn More
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <a href="/product" className="btn-primary w-full sm:w-auto">
                Go to Dashboard
              </a>
            </SignedIn>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="glass-card p-6 card-hover">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                Instant Ideas
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Get unlimited business ideas in seconds with our AI-powered generator
              </p>
            </div>

            <div className="glass-card p-6 card-hover">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                Smart Analysis
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Detailed market analysis and implementation guides for each idea
              </p>
            </div>

            <div className="glass-card p-6 card-hover">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                Premium Access
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Unlock advanced features and priority support with subscription
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <div className="glass-card p-8 text-center card-hover">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Premium Subscription
            </h2>
            <div className="mb-6">
              <span className="text-5xl font-bold gradient-text">$10</span>
              <span className="text-gray-500 dark:text-gray-400">/month</span>
            </div>
            <ul className="text-left space-y-3 mb-8">
              <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Unlimited idea generation
              </li>
              <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Advanced AI models
              </li>
              <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Priority support
              </li>
            </ul>
            <SignedOut>
              <SignInButton mode="modal">
                <button className="btn-primary w-full">
                  Subscribe Now
                </button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center">
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          © 2024 IdeaGen Pro. Powered by AI.
        </p>
      </footer>
    </main>
  );
}