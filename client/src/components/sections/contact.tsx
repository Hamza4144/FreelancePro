import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertContactSubmissionSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from "lucide-react";
import type { InsertContactSubmission } from "@shared/schema";

export default function Contact() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      budget: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "🚀 Message Sent Successfully!",
        description: "Expect a response within 24 hours. We're excited to work with you!",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contact"] });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactSubmission) => {
    contactMutation.mutate(data);
  };

  const benefits = [
    "Free consultation & project planning",
    "24-hour response time", 
    "Transparent pricing, no hidden fees",
    "Professional development approach",
    "Confidential & secure process"
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(219,82%,61%)]/10 via-transparent to-[hsl(173,85%,40%)]/10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Ready to start your project? Get in touch and let's discuss how we can help your business succeed online.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-center max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <div className="text-2xl font-bold text-blue-400">24 Hours</div>
              <div className="text-gray-300">Response Time</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <div className="text-2xl font-bold text-green-400">Free Consultation</div>
              <div className="text-gray-300">No Commitment</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <div className="text-2xl font-bold text-teal-400">Professional Support</div>
              <div className="text-gray-300">Throughout Project</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Benefits Section */}
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-[hsl(219,82%,61%)] to-[hsl(173,85%,40%)] p-1 rounded-2xl">
              <div className="bg-black rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">What You Get When You Contact Us:</h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="text-gray-300 flex items-center text-lg">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-4"></span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="glass-effect p-8 rounded-2xl border border-white/10">
              <h4 className="text-xl font-bold text-white mb-4">What Our Clients Say:</h4>
              <blockquote className="text-gray-300 italic mb-4">
                "Sharp Sol delivered a professional website that perfectly represents our business. 
                Great communication and quality work!"
              </blockquote>
              <div className="text-sm text-gray-400">- Sarah Johnson, Business Owner</div>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center bg-blue-500 text-white px-6 py-3 rounded-full font-bold text-lg mb-4">
                Trusted by 100+ Clients
              </div>
              <p className="text-gray-400 text-sm">Professional web development since 2019</p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-gradient-to-r from-[hsl(219,82%,61%)] to-[hsl(173,85%,40%)] p-1 rounded-2xl">
            <Card className="bg-white">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Your Free Consultation</h3>
                  <p className="text-gray-600">Fill out this form and we'll get back to you within 24 hours</p>
                </div>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-bold text-gray-900">
                              Full Name *
                            </FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Your full name" 
                                {...field} 
                                className="border-2 border-gray-200 focus:ring-2 focus:ring-[hsl(219,82%,61%)] focus:border-[hsl(219,82%,61%)] h-12 text-lg"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-bold text-gray-900">
                              Email Address *
                            </FormLabel>
                            <FormControl>
                              <Input 
                                type="email" 
                                placeholder="your@email.com" 
                                {...field} 
                                className="border-2 border-gray-200 focus:ring-2 focus:ring-[hsl(219,82%,61%)] focus:border-[hsl(219,82%,61%)] h-12 text-lg"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-bold text-gray-900">
                            What Do You Need? *
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="border-2 border-gray-200 focus:ring-2 focus:ring-[hsl(219,82%,61%)] focus:border-[hsl(219,82%,61%)] h-12 text-lg">
                                <SelectValue placeholder="Choose your project type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="high-converting-website">🚀 High-Converting Website</SelectItem>
                              <SelectItem value="wordpress">📱 WordPress Website</SelectItem>
                              <SelectItem value="web-app">⚡ Custom Web Application</SelectItem>
                              <SelectItem value="ecommerce">🛒 E-commerce Store</SelectItem>
                              <SelectItem value="api">🔗 API Integration</SelectItem>
                              <SelectItem value="maintenance">🛠️ Website Maintenance</SelectItem>
                              <SelectItem value="other">💬 Other (Let's discuss)</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="budget"
                      render={({ field }) => (
                        <FormItem>
                          {/* <FormLabel className="text-sm font-bold text-gray-900">
                            Investment Budget 💰
                          </FormLabel> */}
                          {/* <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="border-2 border-gray-200 focus:ring-2 focus:ring-[hsl(219,82%,61%)] focus:border-[hsl(219,82%,61%)] h-12 text-lg">
                                <SelectValue placeholder="Select your budget range" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="under-2k">💸 Under $2,000 (Starter Package)</SelectItem>
                              <SelectItem value="2k-5k">💳 $2,000 - $5,000 (Professional)</SelectItem>
                              <SelectItem value="5k-10k">💎 $5,000 - $10,000 (Premium)</SelectItem>
                              <SelectItem value="10k-25k">🚀 $10,000 - $25,000 (Enterprise)</SelectItem>
                              <SelectItem value="25k-plus">👑 $25,000+ (Custom Solution)</SelectItem>
                            </SelectContent>
                          </Select> */}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-bold text-gray-900">
                            Tell Us About Your Vision *
                          </FormLabel>
                          <FormControl>
                            <Textarea 
                              rows={5}
                              placeholder="What's your business goal? What problems are you trying to solve? What would success look like for you?"
                              {...field} 
                              className="border-2 border-gray-200 focus:ring-2 focus:ring-[hsl(219,82%,61%)] focus:border-[hsl(219,82%,61%)] resize-none text-lg"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      disabled={contactMutation.isPending}
                      className="w-full gradient-bg text-white py-6 px-8 rounded-xl font-bold text-xl hover:shadow-2xl transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed magnetic-hover text-shadow"
                    >
                      {contactMutation.isPending ? (
                        "🔄 Sending Your Request..."
                      ) : (
                        <>
                          🚀 Get My Free Consultation Now
                          <Send className="ml-3 h-5 w-5" />
                        </>
                      )}
                    </Button>
                    
                    <div className="text-center space-y-2">
                      <p className="text-sm text-green-600 font-bold">✅ Free consultation</p>
                      <p className="text-xs text-gray-500">
                        🔒 Your information is 100% secure and confidential. No spam, guaranteed.
                      </p>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
