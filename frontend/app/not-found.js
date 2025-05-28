import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background dark:bg-background-dark flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="text-6xl font-bold text-primary dark:text-primary-hover mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-foreground dark:text-foreground-dark mb-4">
          Page Not Found
        </h2>
        <p className="text-muted-foreground dark:text-foreground-dark/70 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="space-y-4">
          <Link 
            href="/"
            className="inline-block px-6 py-3 bg-primary hover:bg-primary-hover dark:bg-primary-hover dark:hover:bg-primary text-white rounded-lg font-semibold transition-colors"
          >
            Back to Home
          </Link>
          <br />
          <Link 
            href="/blog"
            className="inline-block px-6 py-3 bg-secondary hover:bg-secondary/80 text-foreground dark:text-foreground-dark rounded-lg font-semibold transition-colors"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </div>
  );
}
