
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Car, 
  ClipboardList, 
  Clock, 
  Home, 
  LogOut, 
  MessageSquare, 
  Pause, 
  Play, 
  Settings, 
  User 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';

const Dashboard = () => {
  const [isPaused, setIsPaused] = useState(false);
  const { toast } = useToast();

  const handleTogglePause = () => {
    setIsPaused(!isPaused);
    toast({
      title: isPaused ? "Subscription Resumed" : "Subscription Paused",
      description: isPaused 
        ? "Your car wash subscription has been resumed." 
        : "Your car wash subscription has been paused. You can resume it anytime."
    });
  };

  const handleContactSupport = () => {
    toast({
      title: "Support Request Submitted",
      description: "Our team will get back to you within 24 hours.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="hidden md:flex md:w-64 lg:w-72 flex-col bg-white border-r border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-zep-blue-500">Zep<span className="text-zep-green-500">Wash</span></span>
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          <a href="#" className="flex items-center space-x-3 px-3 py-3 rounded-lg bg-zep-blue-50 text-zep-blue-600 font-medium">
            <Home size={20} />
            <span>Dashboard</span>
          </a>
          <a href="#" className="flex items-center space-x-3 px-3 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
            <Car size={20} />
            <span>My Plan</span>
          </a>
          <a href="#" className="flex items-center space-x-3 px-3 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
            <ClipboardList size={20} />
            <span>Wash History</span>
          </a>
          <a href="#" className="flex items-center space-x-3 px-3 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
            <MessageSquare size={20} />
            <span>Support</span>
          </a>
          <a href="#" className="flex items-center space-x-3 px-3 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
            <Settings size={20} />
            <span>Settings</span>
          </a>
        </nav>

        <div className="p-4 border-t border-gray-200">
          <Link to="/">
            <Button variant="outline" className="w-full flex items-center justify-center gap-2">
              <LogOut size={18} />
              <span>Logout</span>
            </Button>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="container max-w-5xl mx-auto p-4 md:p-6 lg:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold">Hello, Rahul</h1>
              <p className="text-gray-600">Welcome to your ZepWash dashboard</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button onClick={handleContactSupport} variant="outline" className="flex items-center gap-2">
                <MessageSquare size={18} />
                <span>Contact Support</span>
              </Button>
            </div>
          </div>

          {/* Current Plan Section */}
          <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Current Plan</h2>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${isPaused ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>
                {isPaused ? 'Paused' : 'Active'}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-zep-blue-50 to-zep-blue-100 rounded-xl p-5">
                <h3 className="text-lg font-semibold mb-1">Premium Plan</h3>
                <p className="text-gray-600 text-sm mb-4">Foam + Dry + Glass</p>
                <div className="flex items-center text-zep-blue-600">
                  <Calendar size={18} className="mr-2" />
                  <span className="text-sm">3 days/week</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-zep-green-50 to-zep-green-100 rounded-xl p-5">
                <h3 className="text-lg font-semibold mb-1">Next Wash</h3>
                <p className="text-gray-600 text-sm mb-4">Scheduled in</p>
                <div className="flex items-center text-zep-green-600">
                  <Clock size={18} className="mr-2" />
                  <span className="text-sm">{isPaused ? 'Paused' : 'Tomorrow, 9:00 AM'}</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-5">
                <h3 className="text-lg font-semibold mb-1">Your Car</h3>
                <p className="text-gray-600 text-sm mb-4">Registration</p>
                <div className="flex items-center text-purple-600">
                  <Car size={18} className="mr-2" />
                  <span className="text-sm">MH 02 AB 1234</span>
                </div>
              </div>
            </div>

            <Separator className="my-6" />

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleTogglePause}
                className={`flex items-center gap-2 ${isPaused ? 'bg-green-500 hover:bg-green-600' : 'bg-yellow-500 hover:bg-yellow-600'}`}
              >
                {isPaused ? <Play size={18} /> : <Pause size={18} />}
                <span>{isPaused ? 'Resume Subscription' : 'Pause Subscription'}</span>
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Settings size={18} />
                <span>Manage Plan</span>
              </Button>
            </div>
          </div>

          {/* Recent Washes Section */}
          <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold mb-6">Recent Washes</h2>

            <div className="space-y-4">
              {[
                { date: '15 Apr 2025', time: '9:30 AM', status: 'Completed', staff: 'Vikram S.' },
                { date: '12 Apr 2025', time: '10:15 AM', status: 'Completed', staff: 'Vikram S.' },
                { date: '09 Apr 2025', time: '9:00 AM', status: 'Completed', staff: 'Ajay P.' }
              ].map((wash, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center mb-3 sm:mb-0">
                    <div className="w-10 h-10 bg-zep-blue-100 rounded-full flex items-center justify-center mr-4">
                      <Car size={20} className="text-zep-blue-500" />
                    </div>
                    <div>
                      <div className="font-medium">{wash.date}</div>
                      <div className="text-sm text-gray-500">{wash.time}</div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                    <div className="flex items-center">
                      <User size={16} className="text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600">{wash.staff}</span>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 inline-block">
                      {wash.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <Button variant="link" className="text-zep-blue-500">
                View All History
              </Button>
            </div>
          </div>

          {/* Support Section */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-semibold mb-6">Quick Support</h2>

            <div className="space-y-4">
              <div>
                <label htmlFor="issue" className="block text-sm font-medium text-gray-700 mb-1">
                  What's the issue?
                </label>
                <select
                  id="issue"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-zep-blue-300 focus:ring focus:ring-zep-blue-200 focus:ring-opacity-50"
                >
                  <option value="">Select an issue</option>
                  <option value="missed">Missed Wash</option>
                  <option value="quality">Quality Issue</option>
                  <option value="billing">Billing Question</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={3}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-zep-blue-300 focus:ring focus:ring-zep-blue-200 focus:ring-opacity-50"
                  placeholder="Please describe your issue"
                ></textarea>
              </div>

              <Button onClick={handleContactSupport} className="w-full sm:w-auto btn-primary">
                Submit
              </Button>

              <p className="text-sm text-gray-500 mt-2">
                We will respond within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
