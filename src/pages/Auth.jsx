import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Check, Mail, Lock, User, ArrowRight } from 'lucide-react';

const Auth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // TODO: Implement authentication logic
    setTimeout(() => {
      setIsLoading(false);
      // Redirect to dashboard after successful login
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-paytech-dark to-black">
      <Navbar />

      <main className="flex-1 pt-32 pb-16 flex items-center justify-center">
        <div className="container mx-auto px-4 max-w-md">
          <Card className="bg-paytech-dark/80 border border-white/10 shadow-2xl backdrop-blur-lg overflow-hidden">
            <div className="absolute inset-0 overflow-hidden z-0">
              <div className="absolute -inset-[100%] opacity-20">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute h-[1px] w-[200%]"
                    style={{
                      top: `${10 + i * 12}%`,
                      background: 'linear-gradient(90deg, transparent, rgba(108, 92, 231, 0.7) 50%, transparent)',
                      transform: `rotate(${i % 2 ? 1 : -1}deg)`
                    }}
                  />
                ))}
              </div>
            </div>
            
            <CardHeader className="relative z-10 space-y-1 text-center pb-2">
              <CardTitle className="text-3xl font-bold gradient-text">Welcome to Payvance</CardTitle>
              <CardDescription className="text-paytech-gray">
                Your platform for seamless mentor payments
              </CardDescription>
            </CardHeader>
            
            <CardContent className="relative z-10 pt-4">
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger 
                    value="login"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-paytech-purple data-[state=active]:to-paytech-accent data-[state=active]:text-white"
                  >
                    Sign In
                  </TabsTrigger>
                  <TabsTrigger 
                    value="register"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-paytech-purple data-[state=active]:to-paytech-accent data-[state=active]:text-white"
                  >
                    Create Account
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="login" className="mt-0">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white flex items-center gap-2">
                        <Mail size={16} className="text-paytech-purple" /> Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="name@example.com"
                        className="bg-paytech-dark/40 border-white/10 text-white focus:border-paytech-purple"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-white flex items-center gap-2">
                        <Lock size={16} className="text-paytech-purple" /> Password
                      </Label>
                      <Input
                        id="password"
                        type="password"
                        className="bg-paytech-dark/40 border-white/10 text-white focus:border-paytech-purple"
                        required
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="remember" className="rounded border-white/10 bg-paytech-dark/40" />
                        <Label htmlFor="remember" className="text-sm text-paytech-gray">Remember me</Label>
                      </div>
                      <Link to="/forgot-password" className="text-sm text-paytech-purple hover:text-paytech-accent">
                        Forgot password?
                      </Link>
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-paytech-purple to-paytech-accent hover:from-paytech-accent hover:to-paytech-purple text-white transition-all duration-300 flex items-center justify-center gap-2 py-5"
                      disabled={isLoading}
                    >
                      {isLoading ? "Signing in..." : "Sign In"}
                      {!isLoading && <ArrowRight size={16} />}
                    </Button>
                  </form>
                </TabsContent>
                
                <TabsContent value="register" className="mt-0">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white flex items-center gap-2">
                        <User size={16} className="text-paytech-purple" /> Full Name
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        className="bg-paytech-dark/40 border-white/10 text-white focus:border-paytech-purple"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-email" className="text-white flex items-center gap-2">
                        <Mail size={16} className="text-paytech-purple" /> Email
                      </Label>
                      <Input
                        id="signup-email"
                        type="email"
                        placeholder="name@example.com"
                        className="bg-paytech-dark/40 border-white/10 text-white focus:border-paytech-purple"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-password" className="text-white flex items-center gap-2">
                        <Lock size={16} className="text-paytech-purple" /> Password
                      </Label>
                      <Input
                        id="signup-password"
                        type="password"
                        className="bg-paytech-dark/40 border-white/10 text-white focus:border-paytech-purple"
                        required
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="terms" className="rounded border-white/10 bg-paytech-dark/40" required />
                      <Label htmlFor="terms" className="text-sm text-paytech-gray">
                        I agree to the{" "}
                        <Link to="/terms" className="text-paytech-purple hover:text-paytech-accent">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link to="/privacy" className="text-paytech-purple hover:text-paytech-accent">
                          Privacy Policy
                        </Link>
                      </Label>
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-paytech-purple to-paytech-accent hover:from-paytech-accent hover:to-paytech-purple text-white transition-all duration-300 flex items-center justify-center gap-2 py-5"
                      disabled={isLoading}
                    >
                      {isLoading ? "Creating account..." : "Create Account"}
                      {!isLoading && <ArrowRight size={16} />}
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
              
              <div className="mt-6 text-center">
                <p className="text-paytech-gray text-sm">
                  Need help?{" "}
                  <Link to="/contact" className="text-paytech-purple hover:text-paytech-accent">
                    Contact our support team
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Auth;