'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Link from 'next/link'

export default function DemoPage() {
  const [activeTab, setActiveTab] = useState('profile')

  const demoProfile = {
    name: 'Sarah Johnson',
    title: 'Senior Product Manager',
    company: 'TechCorp',
    bio: 'Passionate product manager with 7+ years of experience building user-centered products. Led teams of 15+ engineers and designers to ship products used by millions.',
    location: 'San Francisco, CA',
    email: 'sarah.johnson@techcorp.com',
    phone: '+1 (555) 123-4567',
    brandColor: '#4F46E5',
    profileViews: 8547,
    connections: 1834,
    linkClicks: 2156
  }

  const socialLinks = [
    { platform: 'LinkedIn', icon: '💼', username: 'sarahjohnsonpm', clicks: 892 },
    { platform: 'Twitter', icon: '🐦', username: 'sarah_builds', clicks: 634 },
    { platform: 'Medium', icon: '📝', username: 'sarahjohnson', clicks: 445 },
    { platform: 'Website', icon: '🌐', username: 'sarahbuilds.com', clicks: 298 }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Demo Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="sm">← Back to Home</Button>
              </Link>
              <Badge className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                🚀 LIVE DEMO
              </Badge>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                📱 QR Code
              </Button>
              <Button variant="outline" size="sm">
                🔗 Share Profile
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Demo Profile Header */}
        <Card className="mb-6 overflow-hidden">
          <div 
            className="h-32 bg-gradient-to-r from-indigo-500 to-purple-600"
            style={{ background: `linear-gradient(135deg, ${demoProfile.brandColor}, ${demoProfile.brandColor}88)` }}
          />
          <CardHeader className="relative -mt-16 pb-4">
            <div className="flex flex-col md:flex-row items-center md:items-end space-y-4 md:space-y-0 md:space-x-6">
              <Avatar className="h-24 w-24 border-4 border-white shadow-lg">
                <AvatarFallback className="text-2xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                  SJ
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 text-center md:text-left">
                <CardTitle className="text-3xl">{demoProfile.name}</CardTitle>
                <CardDescription className="text-lg">
                  {demoProfile.title} at {demoProfile.company}
                </CardDescription>
                <div className="flex items-center justify-center md:justify-start space-x-1 mt-2">
                  <span>📍</span>
                  <span className="text-sm text-gray-600">{demoProfile.location}</span>
                </div>
                
                <div className="flex justify-center md:justify-start items-center space-x-8 mt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-600">{demoProfile.profileViews.toLocaleString()}</div>
                    <div className="text-xs text-gray-500">Profile Views</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{demoProfile.connections.toLocaleString()}</div>
                    <div className="text-xs text-gray-500">Connections</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{demoProfile.linkClicks.toLocaleString()}</div>
                    <div className="text-xs text-gray-500">Link Clicks</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Button 
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                >
                  🤝 Connect
                </Button>
                <Button variant="outline">
                  💾 Save Contact
                </Button>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Demo Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile">👤 Profile</TabsTrigger>
            <TabsTrigger value="social">🔗 Social Links</TabsTrigger>
            <TabsTrigger value="network">🤝 Network</TabsTrigger>
            <TabsTrigger value="insights">📊 Insights</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Professional Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <span>📧</span>
                    <span>{demoProfile.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>📱</span>
                    <span>{demoProfile.phone}</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">About Sarah</h3>
                  <p className="text-gray-600 leading-relaxed">{demoProfile.bio}</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="social" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Enhanced Social Linking</CardTitle>
                <CardDescription>
                  Professional social media presence with click tracking
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {socialLinks.map((link, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="text-3xl">{link.icon}</div>
                        <div>
                          <div className="font-medium">{link.platform}</div>
                          <div className="text-sm text-gray-500">{link.username}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-center">
                          <div className="text-lg font-semibold text-indigo-600">{link.clicks}</div>
                          <div className="text-xs text-gray-500">clicks</div>
                        </div>
                        <Badge className="bg-green-100 text-green-800">Active</Badge>
                        <Button variant="ghost" size="sm">
                          🔗
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-xl">💡</span>
                    <h3 className="font-semibold">Smart Link Optimization</h3>
                  </div>
                  <p className="text-sm text-gray-700">
                    Your LinkedIn profile is performing exceptionally well! Consider adding more professional content to maintain momentum.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="network" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Professional Network Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                    <div className="text-3xl mb-2">🏢</div>
                    <div className="text-xl font-bold text-blue-600">247</div>
                    <div className="text-sm text-gray-600">Industry Connections</div>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                    <div className="text-3xl mb-2">🎓</div>
                    <div className="text-xl font-bold text-green-600">89</div>
                    <div className="text-sm text-gray-600">Alumni Network</div>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                    <div className="text-3xl mb-2">🌍</div>
                    <div className="text-xl font-bold text-purple-600">156</div>
                    <div className="text-sm text-gray-600">Global Connections</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="insights" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Performance Insights & Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold">📈 Growth Metrics</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Profile Views</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 h-2 bg-gray-200 rounded-full">
                            <div className="w-4/5 h-full bg-indigo-500 rounded-full"></div>
                          </div>
                          <span className="text-sm font-medium">+12%</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Connection Rate</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 h-2 bg-gray-200 rounded-full">
                            <div className="w-5/6 h-full bg-green-500 rounded-full"></div>
                          </div>
                          <span className="text-sm font-medium">+8%</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Engagement Rate</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 h-2 bg-gray-200 rounded-full">
                            <div className="w-3/4 h-full bg-purple-500 rounded-full"></div>
                          </div>
                          <span className="text-sm font-medium">+18%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold">🎯 Key Achievements</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                        <span className="text-xl">🏆</span>
                        <div>
                          <div className="font-medium text-green-800">Top 5% Profile Views</div>
                          <div className="text-xs text-green-600">In your industry</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                        <span className="text-xl">⭐</span>
                        <div>
                          <div className="font-medium text-blue-800">High Engagement Rate</div>
                          <div className="text-xs text-blue-600">15.8% above average</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                        <span className="text-xl">🚀</span>
                        <div>
                          <div className="font-medium text-purple-800">Growing Network</div>
                          <div className="text-xs text-purple-600">+23% this quarter</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <Card className="mt-8 bg-gradient-to-r from-indigo-600 to-purple-600 border-0 text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Build Your Professional Network?</h2>
            <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
              This is just a preview of what Linqueo can do for your professional presence. 
              Create your account to unlock all features and start building meaningful connections.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/signup">
                <Button size="lg" variant="secondary" className="bg-white text-indigo-600 hover:bg-gray-50">
                  🚀 Create My Profile
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600">
                  📋 View Full Dashboard
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}