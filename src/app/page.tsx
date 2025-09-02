'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

const features = [
  {
    title: '🔗 Enhanced Social Linking',
    description: 'Connect all your social media, professional profiles, and websites in one place with advanced tracking.',
  },
  {
    title: '🤝 Better Connection Management', 
    description: 'Manage your professional network with smart insights, connection strength analysis, and follow-ups.',
  },
  {
    title: '📤 Advanced Sharing Options',
    description: 'QR codes, custom domains, email signatures, vCards, and branded short links for maximum reach.',
  },
  {
    title: '💼 Professional Networking',
    description: 'Smart networking suggestions, referral tracking, and collaboration opportunities discovery.',
  },
  {
    title: '🎨 Custom Branding Options',
    description: 'Personalize with custom colors, logos, domains, and branded profile pages that reflect your identity.',
  },
  {
    title: '📊 Advanced Analytics',
    description: 'Track engagement, profile views, link clicks, and networking ROI with detailed insights.',
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Linqueo
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <Link href="/auth/signin">
                <Button variant="ghost">Sign In</Button>
              </Link>
              <Link href="/auth/signup">
                <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Your Professional{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Network Hub
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced social linking, professional networking, and custom branding - 
              all in one powerful platform. Build meaningful connections that drive your career forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/auth/signup">
                <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-lg px-8 py-4">
                  Start Networking
                </Button>
              </Link>
              <Link href="/demo">
                <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                  View Demo
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero Demo Cards */}
          <div className="mt-20 relative">
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur-lg opacity-20"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { name: 'Sarah Johnson', role: 'Product Manager', company: 'TechCorp', connections: '1.2K', views: '8.5K' },
                    { name: 'Michael Chen', role: 'Senior Developer', company: 'InnovateLab', connections: '987', views: '6.3K' },
                    { name: 'Emily Rodriguez', role: 'Design Lead', company: 'CreativeStudio', connections: '1.5K', views: '12K' },
                  ].map((profile, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mb-4 flex items-center justify-center text-white font-bold">
                        {profile.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <h3 className="font-semibold text-gray-900">{profile.name}</h3>
                      <p className="text-gray-600 text-sm">{profile.role}</p>
                      <p className="text-gray-500 text-xs mb-3">{profile.company}</p>
                      <div className="flex justify-between text-xs">
                        <span><strong>{profile.connections}</strong> connections</span>
                        <span><strong>{profile.views}</strong> views</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Excel
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful features designed to amplify your professional presence and networking success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300 border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <span className="text-2xl">{feature.title.split(' ')[0]}</span>
                    <span className="text-lg">{feature.title.substring(feature.title.indexOf(' ') + 1)}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              See Linqueo in Action
            </h2>
            <p className="text-xl text-gray-600">
              Experience the power of professional networking reimagined.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <span className="text-indigo-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Create Your Professional Profile</h3>
                  <p className="text-gray-600">Build a comprehensive profile with custom branding, social links, and professional information.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <span className="text-indigo-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Connect & Network Smartly</h3>
                  <p className="text-gray-600">Use AI-powered suggestions to find and connect with the right professionals in your industry.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <span className="text-indigo-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Track Your Success</h3>
                  <p className="text-gray-600">Monitor your networking ROI with detailed analytics, engagement metrics, and growth insights.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  🚀
                </div>
                <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Networking?</h3>
                <p className="text-gray-600 mb-6">Join thousands of professionals already using Linqueo to advance their careers.</p>
                <Link href="/dashboard">
                  <Button size="lg" className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                    Try Live Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Elevate Your Professional Network?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Join the next generation of professionals who are building meaningful connections and advancing their careers with Linqueo.
            </p>
            <Link href="/auth/signup">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4 bg-white text-indigo-600 hover:bg-gray-50">
                Start Your Journey Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="text-xl font-bold text-white">Linqueo</span>
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 Linqueo. All rights reserved. Professional networking reimagined.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}