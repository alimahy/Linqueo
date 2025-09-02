'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Link from 'next/link'

const mockConnections = [
  {
    id: 1,
    name: 'Sarah Johnson',
    title: 'Product Manager',
    company: 'TechCorp',
    location: 'San Francisco, CA',
    mutualConnections: 12,
    lastInteraction: '2 days ago',
    connectionStrength: 'strong',
    tags: ['Product Management', 'AI Strategy', 'Startup Growth']
  },
  {
    id: 2,
    name: 'Michael Chen',
    title: 'Senior Developer',
    company: 'InnovateLab',
    location: 'Seattle, WA',
    mutualConnections: 8,
    lastInteraction: '1 week ago',
    connectionStrength: 'medium',
    tags: ['Full Stack', 'React Expert', 'Node.js']
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    title: 'Design Lead',
    company: 'CreativeStudio',
    location: 'Austin, TX',
    mutualConnections: 15,
    lastInteraction: '3 days ago',
    connectionStrength: 'strong',
    tags: ['UI/UX Design', 'Design Systems', 'Branding']
  }
]

const networkingOpportunities = [
  {
    id: 1,
    title: 'Tech Leaders Meetup - San Francisco',
    description: '15 of your connections are attending',
    date: 'Dec 15, 2024',
    attendees: 247,
    type: 'event'
  },
  {
    id: 2,
    title: 'Product Manager Network Group',
    description: 'Based on your interest in Product Management',
    members: '1.2K',
    growth: '+18%',
    type: 'community'
  }
]

export default function NetworkingPage() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard">
                <Button variant="ghost" size="sm">
                  ← Dashboard
                </Button>
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">Professional Networking Hub</h1>
            </div>
            
            <Button className="bg-indigo-600 hover:bg-indigo-700">
              🤝 Connect with New People
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Network Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="text-3xl mr-4">🤝</div>
                <div>
                  <div className="text-2xl font-bold text-indigo-600">1,247</div>
                  <div className="text-sm text-gray-500">Total Connections</div>
                  <div className="text-xs text-green-600">↑ +8% this month</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="text-3xl mr-4">🆕</div>
                <div>
                  <div className="text-2xl font-bold text-green-600">89</div>
                  <div className="text-sm text-gray-500">New This Month</div>
                  <div className="text-xs text-green-600">Above average</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="text-3xl mr-4">🔥</div>
                <div>
                  <div className="text-2xl font-bold text-red-600">156</div>
                  <div className="text-sm text-gray-500">Strong Connections</div>
                  <div className="text-xs text-blue-600">High engagement</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="text-3xl mr-4">🎯</div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">23</div>
                  <div className="text-sm text-gray-500">Opportunities</div>
                  <div className="text-xs text-purple-600">Active leads</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="connections" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-600">
            <TabsTrigger value="connections">👥 Connections</TabsTrigger>
            <TabsTrigger value="opportunities">🎯 Opportunities</TabsTrigger>
            <TabsTrigger value="insights">📊 Insights</TabsTrigger>
            <TabsTrigger value="referrals">💼 Referrals</TabsTrigger>
          </TabsList>

          <TabsContent value="connections" className="space-y-6">
            {/* Search */}
            <div className="flex gap-4">
              <Input
                placeholder="🔍 Search connections, companies, or skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1"
              />
              <Button variant="outline">Filter</Button>
              <Button variant="outline">Sort</Button>
            </div>

            {/* Connections Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockConnections.map((connection) => (
                <Card key={connection.id} className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-indigo-500">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src="" />
                        <AvatarFallback className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold">
                          {connection.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <CardTitle className="text-lg">{connection.name}</CardTitle>
                        <CardDescription>
                          {connection.title} at {connection.company}
                        </CardDescription>
                        <div className="flex items-center space-x-1 mt-1">
                          <span className="text-xs">📍</span>
                          <span className="text-xs text-gray-500">{connection.location}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">🤝 {connection.mutualConnections} mutual connections</span>
                        <Badge variant={connection.connectionStrength === 'strong' ? 'default' : 'secondary'}>
                          {connection.connectionStrength === 'strong' ? '🔥 Strong' : '👋 Medium'}
                        </Badge>
                      </div>
                      
                      <div className="text-xs text-gray-500">
                        Last interaction: {connection.lastInteraction}
                      </div>
                      
                      <div className="flex flex-wrap gap-1">
                        {connection.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs bg-indigo-50 text-indigo-700">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2 pt-2">
                        <Button variant="outline" size="sm">
                          💬 Message
                        </Button>
                        <Button variant="outline" size="sm">
                          👁️ View Profile
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="opportunities" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>🎯 Smart Networking Opportunities</CardTitle>
                  <CardDescription>
                    AI-powered suggestions based on your profile and goals
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {networkingOpportunities.map((opportunity) => (
                    <div key={opportunity.id} className="p-4 border rounded-lg hover:bg-gray-50">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="font-semibold">{opportunity.title}</h4>
                          <p className="text-sm text-gray-600 mt-1">{opportunity.description}</p>
                          {opportunity.type === 'event' ? (
                            <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                              <span>📅 {opportunity.date}</span>
                              <span>👥 {opportunity.attendees} attendees</span>
                            </div>
                          ) : (
                            <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                              <span>👥 {opportunity.members} members</span>
                              <span className="text-green-600">📈 {opportunity.growth} growth</span>
                            </div>
                          )}
                        </div>
                        <Button size="sm" className="ml-4">
                          {opportunity.type === 'event' ? 'RSVP' : 'Join'}
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>💡 Recommended Connections</CardTitle>
                  <CardDescription>
                    People you should connect with based on mutual interests
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarFallback className="bg-blue-100 text-blue-600">AT</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold">Alex Thompson</h4>
                          <p className="text-sm text-gray-600">CTO at StartupCorp</p>
                          <p className="text-xs text-gray-500">8 mutual connections</p>
                        </div>
                      </div>
                      <Button size="sm">Connect</Button>
                    </div>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarFallback className="bg-green-100 text-green-600">RM</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold">Rachel Martinez</h4>
                          <p className="text-sm text-gray-600">VP Engineering at DataFlow</p>
                          <p className="text-xs text-gray-500">12 mutual connections</p>
                        </div>
                      </div>
                      <Button size="sm">Connect</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="insights" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>📊 Networking Analytics & Insights</CardTitle>
                <CardDescription>
                  Track your networking success and identify growth opportunities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">85%</div>
                    <div className="text-sm text-gray-600">Connection Rate</div>
                    <div className="text-xs text-green-600">↑ +5% this month</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">4.2</div>
                    <div className="text-sm text-gray-600">Avg Response Time (hrs)</div>
                    <div className="text-xs text-green-600">↓ Improved</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">67%</div>
                    <div className="text-sm text-gray-600">Follow-up Success</div>
                    <div className="text-xs text-green-600">↑ +12%</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">23</div>
                    <div className="text-sm text-gray-600">Referrals Given</div>
                    <div className="text-xs text-blue-600">Building reputation</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">🎯 Networking Goals Progress</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <div className="font-medium">Connect with 50 Product Managers</div>
                        <div className="text-sm text-gray-600">Progress: 34/50</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-green-600">68%</div>
                        <div className="w-20 h-2 bg-gray-200 rounded-full">
                          <div className="w-3/4 h-full bg-green-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <div className="font-medium">Attend 5 Tech Events</div>
                        <div className="text-sm text-gray-600">Progress: 2/5</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-blue-600">40%</div>
                        <div className="w-20 h-2 bg-gray-200 rounded-full">
                          <div className="w-2/5 h-full bg-blue-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="referrals" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>💼 Professional Referrals & Collaboration</CardTitle>
                <CardDescription>
                  Manage referrals, recommendations, and professional opportunities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="text-center">
                        <div className="text-3xl mb-2">📤</div>
                        <div className="text-2xl font-bold text-blue-600">23</div>
                        <div className="text-sm text-gray-600">Referrals Given</div>
                        <div className="text-xs text-green-600">Building your reputation</div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="text-center">
                        <div className="text-3xl mb-2">📥</div>
                        <div className="text-2xl font-bold text-green-600">11</div>
                        <div className="text-sm text-gray-600">Referrals Received</div>
                        <div className="text-xs text-blue-600">Great network value</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Recent Referral Activity</h3>
                    <Button variant="outline" size="sm">Give Referral</Button>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="font-medium">Referred Sarah to TechCorp</div>
                          <div className="text-sm text-gray-600">For Senior Product Manager position</div>
                          <div className="text-xs text-gray-500">3 days ago</div>
                        </div>
                        <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>
                      </div>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="font-medium">Michael referred you to InnovateLab</div>
                          <div className="text-sm text-gray-600">For Frontend Developer role</div>
                          <div className="text-xs text-gray-500">1 week ago</div>
                        </div>
                        <Badge className="bg-green-100 text-green-800">Successful</Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg">
                  <h3 className="font-semibold mb-2">💡 Pro Tip</h3>
                  <p className="text-sm text-gray-700">
                    Giving quality referrals builds your professional reputation and strengthens your network. 
                    Focus on matching the right people with the right opportunities.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}