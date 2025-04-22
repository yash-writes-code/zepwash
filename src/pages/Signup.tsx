
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, CheckCircle, Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      toast({
        title: "Account Created",
        description: "Your account has been successfully created.",
      });
    }, 1500);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col">
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="w-full max-w-md">
            {!isSuccess ? (
              <>
                <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold">Create an Account</h1>
                  <p className="text-gray-600 mt-2">Join ZepWash for premium car cleaning services</p>
                </div>
                
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
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
                          name="phone"
                          type="tel"
                          placeholder="Enter your 10-digit mobile number"
                          value={formData.phone}
                          onChange={handleChange}
                          className="rounded-l-none"
                          maxLength={10}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="text-sm text-gray-500">
                      By signing up, you agree to our{" "}
                      <Link to="/terms" className="text-zep-blue-500 hover:underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link to="/privacy" className="text-zep-blue-500 hover:underline">
                        Privacy Policy
                      </Link>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full btn-primary"
                      disabled={isLoading}
                    >
                      {isLoading ? "Creating Account..." : "Sign Up"}
                    </Button>
                  </form>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="text-center">
                      <p className="text-sm text-gray-600">
                        Already have an account?{" "}
                        <Link to="/login" className="text-zep-blue-500 hover:underline font-medium">
                          Login
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="mb-6 flex justify-center">
                  <div className="rounded-full bg-green-100 p-3 text-green-500">
                    <CheckCircle size={48} />
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold mb-3">Thanks for signing up!</h2>
                <p className="text-gray-600 mb-8">
                  To choose a plan & start your subscription, download our app.
                </p>
                
                <div className="space-y-4">
                  <Button className="w-full bg-zep-blue-500 hover:bg-zep-blue-600 flex items-center justify-center gap-2">
                    <Download size={18} />
                    <span>Download Our App</span>
                  </Button>
                  
                  <Link to="/">
                    <Button variant="outline" className="w-full">
                      Return to Home
                    </Button>
                  </Link>
                </div>
                
                <p className="mt-6 text-sm text-gray-500">
                  You'll also receive a confirmation email with download links.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
