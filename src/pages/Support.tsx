import { FormEvent, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import {
  Car,
  CheckCircle,
  Headphones,
  Mail,
  Phone,
  User,
  XCircle,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FaqAccordion from "@/components/FaqAccordion";
import { useEffect } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import BubbleBackground from "@/components/BubbleBackground";

const faqItems = [
  {
    question: "How do I subscribe to ZepWash services?",
    answer:
      "You can subscribe to our services by downloading our mobile app from the App Store or Google Play. After registration, you can choose from our different subscription plans and make the payment through the app.",
  },
  {
    question: "What if I need to miss a scheduled wash?",
    answer:
      "You can easily reschedule or cancel a wash through our app at least 6 hours before the scheduled time without any penalty. For last-minute cancellations, please contact our support team.",
  },
  {
    question: "How do your water-efficient washes work?",
    answer:
      "Our eco-friendly cleaning process uses specialized equipment and premium chemicals that require minimal water. We use a foam-based cleaning method that effectively removes dirt and grime while using up to 95% less water than traditional washing methods.",
  },
  {
    question: "Can I specify which car to wash if I have multiple vehicles?",
    answer:
      "Yes, you can register multiple vehicles in our app and specify which one needs to be washed for each scheduled service. You can also set different plans for different vehicles.",
  },
  {
    question: "Is there a minimum subscription period?",
    answer:
      "Our standard subscriptions have a minimum period of one month. However, we also offer flexible plans for shorter durations. Check our app for current offers and plans.",
  },
];

const Support = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Animation refs
  const headerTitleRef = useScrollAnimation<HTMLHeadingElement>();
  const headerTextRef = useScrollAnimation<HTMLParagraphElement>();
  const faqTitleRef = useScrollAnimation<HTMLHeadingElement>();
  const faqDescRef = useScrollAnimation<HTMLParagraphElement>({
    threshold: 0.2,
  });
  const faqContentRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const contactInfoTitleRef = useScrollAnimation<HTMLHeadingElement>();
  const contactCard1Ref = useScrollAnimation<HTMLDivElement>();
  const contactCard2Ref = useScrollAnimation<HTMLDivElement>({
    threshold: 0.2,
  });
  const contactCard3Ref = useScrollAnimation<HTMLDivElement>({
    threshold: 0.2,
  });
  const contactCard4Ref = useScrollAnimation<HTMLDivElement>({
    threshold: 0.2,
  });
  const formTitleRef = useScrollAnimation<HTMLHeadingElement>();
  const formRef = useScrollAnimation<HTMLFormElement>({ threshold: 0.1 });
  const thankYouRef = useScrollAnimation<HTMLDivElement>();
  const errorRef = useScrollAnimation<HTMLDivElement>();

  // Background animation ref
  const bgPatternRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bgPatternRef.current) {
        const scrollY = window.scrollY;
        bgPatternRef.current.style.transform = `translateY(${
          scrollY * 0.05
        }px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      console.log("fields missing");

      return;
    }
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/support`,
        {
          name: contactForm.name,
          email: contactForm.email,
          phone: contactForm.phone,
          message: contactForm.message,
        }
      );

      if (res.status == 200) {
        setContactForm({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        toast({
          title: "Support Request Sent",
          description: "We'll get back to you within 24 hours.",
        });
      }
    } catch (e) {
      toast({
        title: "Couldn't send support request",
        description: "Please Try After Some Time",
      });
    }
    finally{
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      {/* Header */}
      <div className="relative mt-[-6.5rem] pt-[6.5rem] pb-12 bg-gradient-to-r from-zep-blue-500 to-zep-green-500 text-white overflow-hidden">
        {/* Background pattern */}
        <div
          ref={bgPatternRef}
          className="absolute inset-0 bg-pattern-overlay opacity-15 transition-transform duration-500"
        ></div>

        <div className="container max-w-7xl mx-auto px-4 md:px-6 text-center pt-16 relative z-10">
          <h1
            ref={headerTitleRef}
            className="text-3xl md:text-5xl font-bold mb-4 fade-in-up"
          >
            Customer Support
          </h1>
          <p
            ref={headerTextRef}
            className="text-xl opacity-90 max-w-2xl mx-auto fade-in-up stagger-delay-1"
          >
            We're here to help. Get in touch with our team for any questions or
            assistance.
          </p>
        </div>
      </div>

      {/* FAQ FIRST */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-12">
            <h2
              ref={faqTitleRef}
              className="text-3xl font-bold mb-4 fade-in-up"
            >
              Frequently Asked Questions
            </h2>
            <p
              ref={faqDescRef}
              className="text-gray-600 max-w-2xl mx-auto fade-in-up stagger-delay-1"
            >
              Find quick answers to common questions about our services.
            </p>
          </div>
          <div
            ref={faqContentRef}
            className="max-w-3xl mx-auto fade-in-up stagger-delay-2"
          >
            <FaqAccordion faqItems={faqItems} />
            <div className="text-center mt-10">
              <p className="text-gray-600 mb-4">
                Can't find what you're looking for?
              </p>
              <Button className="btn-primary animate-pulse-slow">
                <span className="p-4 font-semibold"> Contact Us </span>
              </Button>
            </div>
          </div>
        </div>

        {/* Subtle bubble background */}
        <div className="absolute inset-0 opacity-5">
          <BubbleBackground density="low" variant="blue" />
        </div>
      </section>

      {/* CONTACT INFO SECOND */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container max-w-4xl mx-auto px-4 md:px-6 relative z-10">
          <h2
            ref={contactInfoTitleRef}
            className="text-2xl font-bold mb-6 fade-in-up"
          >
            Contact Information
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div
              ref={contactCard1Ref}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover-pop fade-in-left"
            >
              <div className="rounded-full bg-zep-blue-100 w-12 h-12 flex items-center justify-center mb-4">
                <Phone size={24} className="text-zep-blue-500" />
              </div>
              <h3 className="font-semibold mb-1">Phone Support</h3>
              <p className="text-gray-600 text-sm mb-3">Mon-Sat, 9am to 6pm</p>
              <a
                href="tel:+919876543210"
                className="text-zep-blue-500 font-medium"
              >
                +91 98765 43210
              </a>
            </div>
            <div
              ref={contactCard2Ref}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover-pop fade-in-right"
            >
              <div className="rounded-full bg-zep-green-100 w-12 h-12 flex items-center justify-center mb-4">
                <Mail size={24} className="text-zep-green-500" />
              </div>
              <h3 className="font-semibold mb-1">Email Support</h3>
              <p className="text-gray-600 text-sm mb-3">24/7 email support</p>
              <a
                href="mailto:support@zepwash.com"
                className="text-zep-blue-500 font-medium"
              >
                support@zepwash.com
              </a>
            </div>
          </div>
          <div
            ref={contactCard3Ref}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8 hover-pop fade-in-up stagger-delay-3"
          >
            <div className="flex items-start">
              <div className="rounded-full bg-zep-purple-100 w-12 h-12 flex items-center justify-center mr-4">
                <Headphones size={24} className="text-zep-purple-500" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Subscriber Support</h3>
                <p className="text-gray-600 mb-3">
                  For faster support, subscribers can use the support section in
                  their dashboard or the ZepWash app.
                </p>
                <Link to="/login">
                  <Button variant="outline" className="text-sm">
                    Login to Dashboard
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div
            ref={contactCard4Ref}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover-pop fade-in-up stagger-delay-4"
          >
            <div className="flex items-start">
              <div className="rounded-full bg-zep-blue-100 w-12 h-12 flex items-center justify-center mr-4">
                <Car size={24} className="text-zep-blue-500" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Service Issues</h3>
                <p className="text-gray-600 mb-3">
                  In case of any immediate service issues, please contact your
                  dedicated tower team directly through the app.
                </p>
                <Button variant="outline" className="text-sm">
                  <span>Download App</span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle soap bubbles */}
        <div className="absolute inset-0 opacity-5">
          <BubbleBackground density="low" variant="green" />
        </div>
      </section>

      {/* CONTACT FORM LAST */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        <div className="container max-w-3xl mx-auto px-4 md:px-6 relative z-10">
          <h2 ref={formTitleRef} className="text-2xl font-bold mb-6 fade-in-up">
            Get in Touch
          </h2>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-8 rounded-xl shadow-md fade-in-up stagger-delay-1 hover-pop"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User size={16} className="text-gray-400" />
                  </div>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    className="pl-10"
                    placeholder="John Doe"
                    value={contactForm.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail size={16} className="text-gray-400" />
                  </div>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    className="pl-10"
                    placeholder="john.doe@example.com"
                    value={contactForm.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone size={16} className="text-gray-400" />
                </div>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="pl-10"
                  placeholder="+91 98765 43210"
                  value={contactForm.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-zep-blue-300 focus:ring focus:ring-zep-blue-200 focus:ring-opacity-50"
                placeholder="How can we help you?"
                value={contactForm.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <Button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Submit"}
            </Button>
          </form>

          {/* Subtle bubble background */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <BubbleBackground density="low" variant="purple" />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Support;
