"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, User, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

type PricingTier = {
  name: string;
  id: string;
  href: string;
  price: string;
  description: string;
  features: string[];
  mostPopular: boolean;
};

const individualPricing: PricingTier[] = [
  {
    name: "Monthly",
    id: "tier-individual-monthly",
    href: "#",
    price: "LKR 4000",
    description: "Monthly plan for individuals.",
    features: ["Full gym access", "Free training schedule", "Access to basic equipment", "Locker usage"],
    mostPopular: false,
  },
  {
    name: "3 Months",
    id: "tier-individual-3months",
    href: "#",
    price: "LKR 10000",
    description: "3-month plan for individuals.",
    features: ["Full gym access", "Free training schedule", "Access to all equipment", "Locker usage"],
    mostPopular: false,
  },
  {
    name: "6 Months",
    id: "tier-individual-6months",
    href: "#",
    price: "LKR 17000",
    description: "6-month plan for individuals.",
    features: ["Full gym access", "Free training schedule", "Access to all equipment", "Personal locker"],
    mostPopular: true,
  },
  {
    name: "12 Months",
    id: "tier-individual-12months",
    href: "#",
    price: "LKR 27000",
    description: "12-month plan for individuals.",
    features: ["Full gym access", "Free training schedule", "Access to all equipment", "Personal locker", "1 free PT session"],
    mostPopular: false,
  },
];

const couplePricing: PricingTier[] = [
  {
    name: "6 Months",
    id: "tier-couple-6months",
    href: "#",
    price: "LKR 27000",
    description: "6-month plan for couples.",
    features: ["Full gym access", "Free training schedule", "Access to all equipment", "2 personal lockers"],
    mostPopular: false,
  },
  {
    name: "12 Months",
    id: "tier-couple-12months",
    href: "#",
    price: "LKR 37500",
    description: "12-month plan for couples.",
    features: ["Full gym access", "Free training schedule", "Access to all equipment", "2 personal lockers", "2 free PT sessions"],
    mostPopular: true,
  },
];

interface TabProps {
  text: string;
  selected: boolean;
  setSelected: (text: string) => void;
}

function PricingTab({ text, selected, setSelected }: TabProps) {
  return (
    <button
      onClick={() => setSelected(text)}
      className={cn(
        "relative px-6 py-2 text-base font-semibold capitalize",
        "transition-colors"
      )}
    >
      <span className="relative z-10 text-white">{text}</span>
      {selected && (
        <motion.span
          layoutId="tab"
          transition={{ type: "spring", duration: 0.4 }}
          className="absolute inset-0 z-0 rounded-md bg-red-600"
        />
      )}
    </button>
  );
}

export default function Example() {
  const [tab, setTab] = useState<"individual" | "couple">("individual");
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PricingTier | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ fullName: "", phoneNumber: "" });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const handleGetStarted = (tier: PricingTier) => {
    setSelectedPlan(tier);
    setIsModalOpen(true);
    setIsSubmitted(false);
    setFormData({ fullName: "", phoneNumber: "" });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsSubmitted(false);
    setSelectedPlan(null);
    setFormData({ fullName: "", phoneNumber: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName.trim() && formData.phoneNumber.trim()) {
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);
      
      // Convert FormData to URL-encoded string
      const params = new URLSearchParams();
      for (const [key, value] of formData.entries()) {
        params.append(key, value.toString());
      }
      
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      })
        .then(() => {
          setIsSubmitted(true);
        })
        .catch((error) => {
          console.error("Form submission error:", error);
          setIsSubmitted(true);
        });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <div ref={sectionRef} className="bg-gray-950 py-24 sm:py-32 relative overflow-hidden">
        {/* Background grid pattern */}
        <div className="absolute inset-0 -z-10">
          <div className="h-full w-full bg-[linear-gradient(to_right,#4f4f4f0a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f0a_1px,transparent_1px)] bg-[size:35px_35px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-4xl text-center"
          >
            <h2 className="mt-2 text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl font-poppins">
              Simple no-tricks pricing
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-gray-400 sm:text-xl/8">
              Experience fitness freedom with our subscription plans. Make your fitness journey dynamic as you like.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center w-full mt-10"
          >
            <div className="flex rounded-lg border border-red-600 p-1">
              <PricingTab 
                text="Individual" 
                selected={tab === "individual"} 
                setSelected={() => setTab("individual")} 
              />
              <PricingTab 
                text="Couple" 
                selected={tab === "couple"} 
                setSelected={() => setTab("couple")} 
              />
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div 
              key={tab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center mt-10"
            >
              {tab === "individual" && (
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
                >
                  {individualPricing.map((tier, index) => (
                    <PricingCard key={tier.id} tier={tier} index={index} onGetStarted={handleGetStarted} />
                  ))}
                </motion.div>
              )}
              
              {tab === "couple" && (
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2"
                >
                  {couplePricing.map((tier, index) => (
                    <PricingCard key={tier.id} tier={tier} index={index} onGetStarted={handleGetStarted} />
                  ))}
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-gray-900 rounded-2xl p-6 w-full max-w-md border border-gray-700"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white">
                  {isSubmitted ? "Registration Successful!" : `Get Started with ${selectedPlan?.name}`}
                </h3>
                <button
                  onClick={handleCloseModal}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {!isSubmitted ? (
                <form 
                  onSubmit={handleSubmit} 
                  className="space-y-4" 
                  name="gym-registration" 
                  method="POST"
                  data-netlify="true"
                >
                  {/* Required hidden field for Netlify Forms with JavaScript */}
                  <input type="hidden" name="form-name" value="gym-registration" />
                  
                  {/* Hidden fields for plan details */}
                  <input type="hidden" name="selected-plan" value={selectedPlan?.name} />
                  <input type="hidden" name="plan-price" value={selectedPlan?.price} />
                  <input type="hidden" name="plan-type" value={tab} />

                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="text"
                        id="fullName"
                        name="name"
                        required
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phone"
                        required
                        value={formData.phoneNumber}
                        onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                    >
                      Submit Registration
                    </motion.button>
                  </div>
                </form>
              ) : (
                <div className="text-center space-y-4">
                  <div className="mx-auto w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <Check className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 mb-2">
                      Thank you, <span className="font-semibold text-white">{formData.fullName}</span>!
                    </p>
                    <p className="text-sm text-gray-400">
                      We&apos;ve received your registration for the <span className="font-medium text-red-400">{selectedPlan?.name}</span> plan. Our team will contact you at <span className="font-medium text-white">{formData.phoneNumber}</span> shortly.
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleCloseModal}
                    className="w-full bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                  >
                    Close
                  </motion.button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function PricingCard({ tier, index, onGetStarted }: { tier: PricingTier; index: number; onGetStarted: (tier: PricingTier) => void }) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  return (
    <motion.div
      ref={cardRef}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { 
            delay: index * 0.1,
            duration: 0.5
          }
        }
      }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
      className="flex flex-col"
    >
      <div
        className={cn(
          "relative flex flex-1 flex-col p-6 bg-black rounded-3xl",
          tier.mostPopular ? "ring-2 ring-red-600" : "ring-1 ring-gray-500"
        )}
      >
        <div className="mb-5">
          <div className="flex items-center justify-between">
            <h3 className={cn(
              "text-xl font-semibold",
              tier.mostPopular ? "text-red-600" : "text-gray-400"
            )}>
              {tier.name}
            </h3>
            {tier.mostPopular && (
              <span className="bg-red-600/10 text-red-600 border border-red-600/20 px-2 py-1 rounded text-xs font-medium">
                Most Popular
              </span>
            )}
          </div>
          <p className="mt-2 text-sm text-gray-300">
            {tier.description}
          </p>
        </div>

        <div className="mb-5">
          <p className="flex items-baseline text-4xl font-bold text-white">
            {tier.price}
          </p>
        </div>

        <ul className="mb-8 space-y-3 text-sm">
          {tier.features.map((feature) => (
            <motion.li 
              key={feature} 
              className="flex items-center gap-x-3 text-gray-600"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Check className="h-5 w-5 flex-none text-red-600" />
              {feature}
            </motion.li>
          ))}
        </ul>

        <div className="mt-auto">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onGetStarted(tier)}
            className={cn(
              "w-full py-2 px-4 rounded-md font-medium transition-colors",
              tier.mostPopular 
                ? "bg-red-600 hover:bg-red-700 text-white" 
                : "bg-gray-800 hover:bg-gray-700 text-white border border-gray-600"
            )}
          >
            Get started
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
