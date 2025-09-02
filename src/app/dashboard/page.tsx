'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Link from 'next/link'

export default function DashboardPage() {
  const router = useRouter()
  const [profiles, setProfiles] = useState([
    {
      id: 1,
      displayname: 'John Doe',
      title: 'Senior Software Engineer',
      email: 'john@example.com',
      profileimage: '',
      isActive: true,
      updatedAt: new Date().toISOString(),
      connections: 1247,
      views: 5834,
      clicks: 892
    },
    {
      id: 2,
      displayname: 'Jane Smith',
      title: 'Product Manager',
      email: 'jane@example.com', 
      profileimage: '',
      isActive: true,
      updatedAt: new Date().toISOString(),
      connections: 987,
      views: 3421,
      clicks: 567
    }
  ])

  const [cards] = useState([
    {
      id: 1,
      tag: 'Business Card',
      uid: 'NFC001',
      profile: { displayname: 'John Doe' },
      lastUpdateTimestamp: new Date().toISOString()
    }
  ])

  const session = { user: { id: '1', username: 'Demo User', name: 'Demo User', email: 'demo@example.com' } }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">L</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Linqueo
                </span>
              </div>
              <div className="hidden md:block">
                <p className="text-sm text-gray-600">
                  Welcome back, <span className="font-medium">{session.user?.username || session.user?.name}</span>
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">
                ➕ New Profile
              </Button>
              
              <Link href="/connections">
                <Button variant="ghost" size="sm">
                  🤝 Network
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Enhanced Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Profiles</CardTitle>
              <span className="text-2xl">👤</span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{profiles.length}</div>
              <p className="text-xs text-muted-foreground">
                {profiles.filter(p => p.isActive).length} active profiles
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Connections</CardTitle>
              <span className="text-2xl">🤝</span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,234</div>
              <p className="text-xs text-muted-foreground">+89 new this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Profile Views</CardTitle>
              <span className="text-2xl">👁️</span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">9,255</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Link Clicks</CardTitle>
              <span className="text-2xl">🔗</span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,459</div>
              <p className="text-xs text-muted-foreground">+18% engagement rate</p>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Tabs */}
        <Tabs defaultValue="profiles" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-600">
            <TabsTrigger value="profiles">📋 Profiles</TabsTrigger>
            <TabsTrigger value="network">🤝 Network</TabsTrigger>
            <TabsTrigger value="analytics">📊 Analytics</TabsTrigger>
            <TabsTrigger value="sharing">🔗 Sharing</TabsTrigger>
          </TabsList>

          <TabsContent value="profiles" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Your Professional Profiles</h2>
              <Button className="bg-indigo-600 hover:bg-indigo-700">
                ➕ Create Profile
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {profiles.map((profile) => (
                <Card key={profile.id} className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src={profile.profileimage} />
                        <AvatarFallback>
                          {profile.displayname?.charAt(0) || 'P'}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <CardTitle className="text-lg">
                          {profile.displayname || `Profile #${profile.id}`}
                        </CardTitle>
                        <CardDescription>
                          {profile.title || profile.email || 'No title set'}
                        </CardDescription>
                      </div>
                      <Badge variant={profile.isActive ? 'default' : 'secondary'}>
                        {profile.isActive ? 'Live' : 'Draft'}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-indigo-600">{profile.connections}</div>
                        <div className="text-xs text-gray-500">Connections</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-green-600">{profile.views}</div>
                        <div className="text-xs text-gray-500">Views</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-purple-600">{profile.clicks}</div>
                        <div className="text-xs text-gray-500">Clicks</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-500">
                        Updated {new Date(profile.updatedAt).toLocaleDateString()}
                      </p>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          🔗 Share
                        </Button>
                        <Button variant="outline" size="sm">
                          ✏️ Edit
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="network" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Professional Network Hub</CardTitle>
                <CardDescription>
                  Manage your connections and discover networking opportunities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl mb-2">🤝</div>
                      <div className="text-2xl font-bold text-blue-600">1,247</div>
                      <div className="text-sm text-gray-500">Total Connections</div>
                      <Button className="mt-4 w-full" variant="outline">
                        View All
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl mb-2">🆕</div>
                      <div className="text-2xl font-bold text-green-600">89</div>
                      <div className="text-sm text-gray-500">New This Month</div>
                      <Button className="mt-4 w-full" variant="outline">
                        Recent Connections
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl mb-2">🎯</div>
                      <div className="text-2xl font-bold text-purple-600">23</div>
                      <div className="text-sm text-gray-500">Opportunities</div>
                      <Button className="mt-4 w-full" variant="outline">
                        Explore
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-4">Smart Networking Suggestions</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarFallback>AT</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">Alex Thompson</div>
                          <div className="text-sm text-gray-500">CTO at StartupCorp - 8 mutual connections</div>
                        </div>
                      </div>
                      <Button size="sm">Connect</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Advanced Analytics & Insights</CardTitle>
                <CardDescription>
                  Track your networking success and profile performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-indigo-600">9,255</div>
                    <div className="text-sm text-gray-500">Profile Views</div>
                    <div className="text-xs text-green-600">↑ +12%</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-green-600">1,459</div>
                    <div className="text-sm text-gray-500">Link Clicks</div>
                    <div className="text-xs text-green-600">↑ +18%</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">342</div>
                    <div className="text-sm text-gray-500">Contact Downloads</div>
                    <div className="text-xs text-green-600">↑ +25%</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">15.8%</div>
                    <div className="text-sm text-gray-500">Engagement Rate</div>
                    <div className="text-xs text-green-600">↑ +3.2%</div>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-4">Top Performing Social Links</h3>
                  <div className="space-y-3">
                    {[
                      { platform: 'LinkedIn', clicks: 245, icon: '💼' },
                      { platform: 'Twitter', clicks: 189, icon: '🐦' },
                      { platform: 'GitHub', clicks: 167, icon: '💻' },
                      { platform: 'Website', clicks: 134, icon: '🌐' },
                    ].map((link) => (
                      <div key={link.platform} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <span className="text-xl">{link.icon}</span>
                          <span className="font-medium">{link.platform}</span>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold">{link.clicks}</div>
                          <div className="text-xs text-gray-500">clicks</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sharing" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Advanced Sharing Options</CardTitle>
                <CardDescription>
                  Multiple ways to share your professional profile
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl mb-3">📱</div>
                      <h3 className="font-semibold mb-2">QR Code</h3>
                      <p className="text-sm text-gray-600 mb-4">Generate custom branded QR codes</p>
                      <Button className="w-full" variant="outline">Generate QR</Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl mb-3">🔗</div>
                      <h3 className="font-semibold mb-2">Short Links</h3>
                      <p className="text-sm text-gray-600 mb-4">Custom branded short URLs</p>
                      <Button className="w-full" variant="outline">Create Link</Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl mb-3">💳</div>
                      <h3 className="font-semibold mb-2">Digital vCard</h3>
                      <p className="text-sm text-gray-600 mb-4">Downloadable contact card</p>
                      <Button className="w-full" variant="outline">Download vCard</Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl mb-3">📧</div>
                      <h3 className="font-semibold mb-2">Email Signature</h3>
                      <p className="text-sm text-gray-600 mb-4">Professional email integration</p>
                      <Button className="w-full" variant="outline">Get Signature</Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl mb-3">🌐</div>
                      <h3 className="font-semibold mb-2">Custom Domain</h3>
                      <p className="text-sm text-gray-600 mb-4">yourname.linqueo.com</p>
                      <Button className="w-full" variant="outline">Setup Domain</Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl mb-3">🎨</div>
                      <h3 className="font-semibold mb-2">Brand Kit</h3>
                      <p className="text-sm text-gray-600 mb-4">Colors, logos, and themes</p>
                      <Button className="w-full" variant="outline">Customize</Button>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg">
                  <h3 className="font-semibold mb-2">🚀 Pro Tip</h3>
                  <p className="text-sm text-gray-700">
                    Use multiple sharing methods to maximize your reach. QR codes work great for in-person networking, 
                    while custom domains are perfect for online presence.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}