
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Smartphone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Login = () => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setOtpSent(true);
      toast({
        title: "OTP Sent",
        description: "A verification code has been sent to your phone.",
      });
    }, 1500);
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Login Successful",
        description: "Welcome back to ZepWash!",
      });
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col">
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold">Welcome Back</h1>
              <p className="text-gray-600 mt-2">Login to access your ZepWash dashboard</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              {!otpSent ? (
                <form onSubmit={handleSendOtp} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Mobile Number
                    </label>
                    <div className="flex">
                      <div className="flex items-center justify-center bg-gray-100 px-3 border border-r-0 border-gray-300 rounded-l-md">
                        <span className="text-gray-500">+91</span>
                      </div>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your 10-digit mobile number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="rounded-l-none"
                        maxLength={10}
                        required
                      />
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full btn-primary"
                    disabled={isLoading}
                  >
                    {isLoading ? "Sending..." : "Send OTP"}
                  </Button>
                </form>
              ) : (
                <form onSubmit={handleVerifyOtp} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
                      Enter OTP
                    </label>
                    <Input
                      id="otp"
                      type="text"
                      placeholder="Enter the 6-digit OTP"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      maxLength={6}
                      required
                    />
                    <p className="text-sm text-gray-500">
                      OTP sent to +91 {phone}
                    </p>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full btn-primary"
                    disabled={isLoading}
                  >
                    {isLoading ? "Verifying..." : "Verify & Login"}
                  </Button>
                  
                  <div className="text-center">
                    <button 
                      type="button" 
                      className="text-sm text-zep-blue-500 hover:underline"
                      onClick={() => setOtpSent(false)}
                    >
                      Change Phone Number
                    </button>
                  </div>
                </form>
              )}
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="text-center space-y-4">
                  <p className="text-sm text-gray-600">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-zep-blue-500 hover:underline font-medium">
                      Sign up
                    </Link>
                  </p>
                  
                  <div className="flex items-center justify-center space-x-2 text-gray-500 text-sm">
                    <Smartphone size={16} />
                    <span>Download our app to subscribe</span>
                  </div>
                  
                  <Link to="/" className="inline-flex items-center text-sm text-zep-blue-500 hover:underline">
                    <span>Back to home</span>
                    <ArrowRight size={14} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
