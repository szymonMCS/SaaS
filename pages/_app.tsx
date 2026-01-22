import { ClerkProvider } from '@clerk/nextjs';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { useRouter } from 'next/router';
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';
import Link from 'next/link';

function Navigation() {
  const router = useRouter();
  const isHomePage = router.pathname === '/';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-gray-200/50 dark:border-gray-700/50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
              <span className="text-white font-bold text-lg">I</span>
            </div>
            <span className="text-xl font-bold gradient-text">IdeaGen Pro</span>
          </Link>

          <div className="flex items-center gap-4">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="btn-secondary text-sm">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              {!isHomePage && (
                <Link 
                  href="/product"
                  className="btn-primary text-sm"
                >
                  Dashboard
                </Link>
              )}
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider {...pageProps}>
      <Navigation />
      <div className="pt-16">
        <Component {...pageProps} />
      </div>
    </ClerkProvider>
  );
}