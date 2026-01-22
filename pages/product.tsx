"use client"

import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import { useAuth } from '@clerk/nextjs';
import { fetchEventSource } from '@microsoft/fetch-event-source';
import { Protect } from '@clerk/nextjs';

function IdeaGenerator() {
  const { getToken } = useAuth();
  const [idea, setIdea] = useState<string>('loading');
  const [isLoading, setIsLoading] = useState(true);

  const regenerateIdea = async () => {
    setIsLoading(true);
    setIdea('...');
    
    const jwt = await getToken();
    if (!jwt) {
      setIdea('Authentication required');
      setIsLoading(false);
      return;
    }
    
    await fetchEventSource('/api', {
      headers: { Authorization: `Bearer ${jwt}` },
      onmessage(ev) {
        setIdea(ev.data);
        setIsLoading(false);
      },
      onerror(err) {
        console.error('SSE error:', err);
        setIsLoading(false);
      }
    });
  };

  useEffect(() => {
    (async () => {
      const jwt = await getToken();
      if (!jwt) {
        setIdea('Authentication required');
        setIsLoading(false);
        return;
      }
      
      await fetchEventSource('/api', {
        headers: { Authorization: `Bearer ${jwt}` },
        onmessage(ev) {
          setIdea(ev.data);
          setIsLoading(false);
        },
        onerror(err) {
          console.error('SSE error:', err);
          setIsLoading(false);
        }
      });
    })();
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <header className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl shadow-lg mb-4">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
          Business Idea Generator
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          AI-powered innovation at your fingertips
        </p>
      </header>

      {/* Content Card */}
      <div className="max-w-4xl mx-auto">
        <div className="glass-card overflow-hidden">
          {/* Card Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="font-medium text-gray-700 dark:text-gray-300">
                Generated Idea
              </span>
            </div>
            <button 
              onClick={regenerateIdea}
              disabled={isLoading}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors disabled:opacity-50"
            >
              <svg className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span className="text-sm font-medium">
                {isLoading ? 'Generating...' : 'Regenerate'}
              </span>
            </button>
          </div>
          
          {/* Card Content */}
          <div className="p-8">
            {isLoading ? (
              <div className="flex flex-col items-center justify-center py-16">
                <div className="relative">
                  <div className="w-16 h-16 border-4 border-blue-200 rounded-full"></div>
                  <div className="absolute top-0 left-0 w-16 h-16 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
                </div>
                <p className="mt-4 text-gray-500 dark:text-gray-400 animate-pulse">
                  Generating your business idea...
                </p>
              </div>
            ) : (
              <div className="markdown-content">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm, remarkBreaks]}
                >
                  {idea}
                </ReactMarkdown>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div className="max-w-2xl mx-auto mt-12">
        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Tips for Better Results
          </h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
            <li>• Click "Regenerate" to get a new idea</li>
            <li>• Ideas are tailored to the current AI agent economy</li>
            <li>• Each idea includes market analysis and implementation steps</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Product() {
  return (
    <main className="min-h-screen gradient-bg">
      <Protect
        plan="premium_subscription"
        fallback={
          <div className="container mx-auto px-4 py-12">
            <header className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
                Choose Your Plan
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
                Unlock unlimited AI-powered business ideas
              </p>
            </header>
            <div className="max-w-4xl mx-auto">
              <div className="glass-card p-8">
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl shadow-lg mb-6">
                    <span className="text-white font-bold text-3xl">I</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    Premium Access Required
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
                    Subscribe to access the AI-powered business idea generator and unlock unlimited creative potential.
                  </p>
                  <a href="/" className="btn-primary inline-flex">
                    View Plans
                  </a>
                </div>
              </div>
            </div>
          </div>
        }
      >
        <IdeaGenerator />
      </Protect>
    </main>
  );
}