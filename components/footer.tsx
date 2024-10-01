import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full py-6 bg-background dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex justify-center items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Website designed and developed by{' '}
            <Link 
              href="https://www.linkedin.com/in/monish-agrawal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              Monish Agrawal
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}