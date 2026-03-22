import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Rock Paper Scissors
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            A digital implementation of the classic rock-paper-scissors game where you can compete 
            against a computer opponent. Enjoy instant results, score tracking, and a clean, 
            intuitive interface for quick entertainment.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-3">🎮</div>
              <h3 className="font-semibold text-gray-800 mb-2">Simple Gameplay</h3>
              <p className="text-gray-600">Easy to learn, fun to play. Perfect for all ages.</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-3">📊</div>
              <h3 className="font-semibold text-gray-800 mb-2">Score Tracking</h3>
              <p className="text-gray-600">Keep track of your wins and losses against the computer.</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="font-semibold text-gray-800 mb-2">Instant Results</h3>
              <p className="text-gray-600">Get immediate feedback and play again instantly.</p>
            </div>
          </div>
          
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <Link
              href="/login"
              className="block md:inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-200"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="block md:inline-block bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-200"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}