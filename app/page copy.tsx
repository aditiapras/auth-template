"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Database, HardDrive, Lock, ArrowRight, Menu } from "lucide-react";
import ModeToggle from "@/components/toggle-theme";
import { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const pricingPlans = [
  {
    name: "Starter",
    price: "$9",
    description: "Perfect for small projects and personal use.",
    features: [
      "10,000 API requests/month",
      "5GB storage",
      "Basic authentication",
      "Email support",
      "1 team member",
      "Basic analytics",
    ],
    popular: true,
  },
  {
    name: "Pro",
    price: "$29",
    description: "For growing businesses and teams.",
    features: [
      "100,000 API requests/month",
      "20GB storage",
      "Advanced authentication",
      "Priority support",
      "5 team members",
      "Advanced analytics",
      "Custom domains",
      "API rate limiting",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Custom solutions for large organizations.",
    features: [
      "Unlimited API requests",
      "Unlimited storage",
      "Custom authentication",
      "24/7 dedicated support",
      "Unlimited team members",
      "Enterprise analytics",
      "Multiple custom domains",
      "Advanced rate limiting",
      "SLA guarantee",
      "Dedicated infrastructure",
    ],
  },
];

const navigationItems = [
  {
    title: "Features",
    href: "#features",
  },
  {
    title: "Pricing",
    href: "#pricing",
  },
  {
    title: "Testimonials",
    href: "#testimonials",
  },
  {
    title: "FAQ",
    href: "#faq",
  },
];

export default function Home() {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY && window.scrollY > 80) {
          setIsNavVisible(false);
        } else {
          setIsNavVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => window.removeEventListener("scroll", controlNavbar);
    }
  }, [lastScrollY]);

  return (
    <main className="relative flex min-h-screen flex-col">
      {/* Navigation */}
      <nav
        className={`fixed top-0 z-50 w-full transform bg-white/80 backdrop-blur-md transition-transform duration-300 ease-in-out dark:bg-neutral-900/80 ${
          isNavVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link
                href="/"
                className="text-xl font-bold text-zinc-900 dark:text-zinc-100"
              >
                YourBrand
              </Link>
              <NavigationMenu className="hidden md:ml-10 md:flex">
                <NavigationMenuList>
                  {navigationItems.map((item) => (
                    <NavigationMenuItem key={item.title}>
                      <Link href={item.href} legacyBehavior passHref>
                        <NavigationMenuLink className="text-sm font-medium text-zinc-900 hover:text-emerald-500 dark:text-zinc-100">
                          {item.title}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <div className="flex items-center gap-4">
              <ModeToggle />
              <div className="hidden md:flex md:items-center md:space-x-4">
                <Link href="/signin">
                  <Button variant="ghost">Sign in</Button>
                </Link>
                <Link href="/signup">
                  <Button className="border text-supaNeutral-1 border-supaPrimary-1 bg-supaPrimary-4 hover:bg-supaPrimary-3 dark:bg-supaPrimary-1 dark:hover:bg-supaPrimary-2 dark:text-white">
                    Get started
                  </Button>
                </Link>
              </div>
              <Sheet>
                <SheetTrigger asChild className="md:hidden">
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6 flex flex-col space-y-4">
                    {navigationItems.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="text-sm font-medium text-zinc-900 hover:text-emerald-500 dark:text-zinc-100"
                      >
                        {item.title}
                      </Link>
                    ))}
                    <div className="pt-4">
                      <Link href="/signin" className="block w-full">
                        <Button variant="ghost" className="w-full">
                          Sign in
                        </Button>
                      </Link>
                      <Link href="/signup" className="mt-2 block w-full">
                        <Button className="w-full border text-supaNeutral-1 border-supaPrimary-1 bg-supaPrimary-4 hover:bg-supaPrimary-3 dark:bg-supaPrimary-1 dark:hover:bg-supaPrimary-2 dark:text-white">
                          Get started
                        </Button>
                      </Link>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Background Gradients */}
      <div className="fixed inset-0 z-0">
        <div className="absolute -left-24 -top-24 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-emerald-400/30 to-teal-500/30 blur-[128px] dark:from-emerald-400/50 dark:to-teal-500/50" />
        <div className="absolute -right-24 -top-24 h-[500px] w-[500px] rounded-full bg-gradient-to-bl from-emerald-500/30 to-cyan-500/30 blur-[128px] dark:from-emerald-500/50 dark:to-cyan-500/50" />
        <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 transform rotate-45 bg-gradient-to-tr from-teal-400/25 via-emerald-500/25 to-cyan-400/25 blur-[96px] dark:from-teal-400/40 dark:via-emerald-500/40 dark:to-cyan-400/40" />
        <div className="absolute -bottom-24 -left-24 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-teal-500/30 to-emerald-400/30 blur-[128px] dark:from-teal-500/50 dark:to-emerald-400/50" />
        <div className="absolute -bottom-24 -right-24 h-[500px] w-[500px] rounded-full bg-gradient-to-tl from-cyan-500/30 to-emerald-500/30 blur-[128px] dark:from-cyan-500/50 dark:to-emerald-500/50" />
        <div className="absolute left-1/4 top-1/4 h-[400px] w-[400px] animate-pulse rounded-full bg-gradient-to-r from-emerald-500/35 to-teal-500/35 blur-[96px] dark:from-emerald-500/60 dark:to-teal-500/60" />
        <div className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] animate-pulse rounded-full bg-gradient-to-l from-teal-500/35 to-cyan-500/35 blur-[96px] dark:from-teal-500/60 dark:to-cyan-500/60" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center px-6 pt-32 lg:min-h-screen">
          <div className="relative mx-auto max-w-5xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl lg:text-7xl">
                Modern Backend Infrastructure
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                Secure authentication, scalable storage, and powerful database
                solutions for modern applications. Build faster, scale easier.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link href="/signup">
                  <Button className="group border text-supaNeutral-1 border-supaPrimary-1 bg-supaPrimary-4 hover:bg-supaPrimary-3 dark:bg-supaPrimary-1 dark:hover:bg-supaPrimary-2 dark:text-white">
                    Get Started{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link
                  href="#features"
                  className="text-sm font-semibold leading-6 text-zinc-900 dark:text-zinc-100"
                >
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="relative py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
                Everything you need to build modern apps
              </h2>
              <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                Comprehensive suite of backend services designed for developers
                who want to focus on building great products.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                {/* Authentication */}
                <div className="relative flex flex-col rounded-2xl bg-white/10 p-8 backdrop-blur-sm ring-1 ring-zinc-900/10 transition-all hover:bg-white/20 dark:bg-zinc-900/20 dark:ring-white/10">
                  <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-zinc-900 dark:text-zinc-100">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10">
                      <Lock
                        className="h-6 w-6 text-emerald-500"
                        aria-hidden="true"
                      />
                    </div>
                    Authentication
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-zinc-600 dark:text-zinc-400">
                    <p className="flex-auto">
                      Secure user authentication with support for multiple
                      providers, JWT tokens, and role-based access control.
                    </p>
                  </dd>
                </div>
                {/* Storage */}
                <div className="relative flex flex-col rounded-2xl bg-white/10 p-8 backdrop-blur-sm ring-1 ring-zinc-900/10 transition-all hover:bg-white/20 dark:bg-zinc-900/20 dark:ring-white/10">
                  <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-zinc-900 dark:text-zinc-100">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-500/10">
                      <HardDrive
                        className="h-6 w-6 text-teal-500"
                        aria-hidden="true"
                      />
                    </div>
                    Storage
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-zinc-600 dark:text-zinc-400">
                    <p className="flex-auto">
                      Scalable file storage with automatic CDN distribution,
                      image optimization, and secure access controls.
                    </p>
                  </dd>
                </div>
                {/* Database */}
                <div className="relative flex flex-col rounded-2xl bg-white/10 p-8 backdrop-blur-sm ring-1 ring-zinc-900/10 transition-all hover:bg-white/20 dark:bg-zinc-900/20 dark:ring-white/10">
                  <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-zinc-900 dark:text-zinc-100">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10">
                      <Database
                        className="h-6 w-6 text-emerald-500"
                        aria-hidden="true"
                      />
                    </div>
                    Database
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-zinc-600 dark:text-zinc-400">
                    <p className="flex-auto">
                      High-performance database with real-time subscriptions,
                      automatic backups, and zero-downtime scaling.
                    </p>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="relative py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
                Simple, transparent pricing
              </h2>
              <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                Choose the perfect plan for your needs. All plans include our
                core features.
              </p>
            </div>

            <div className="mx-auto mt-16 grid max-w-lg gap-8 lg:max-w-none lg:grid-cols-3">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative flex flex-col rounded-2xl bg-white/10 p-8 backdrop-blur-sm ring-1 transition-all hover:bg-white/20 dark:bg-zinc-900/20 
                    ${
                      plan.popular
                        ? "ring-emerald-500"
                        : "ring-zinc-900/10 dark:ring-white/10"
                    }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-500">
                      Most popular
                    </div>
                  )}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                      {plan.name}
                    </h3>
                    <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
                      {plan.description}
                    </p>
                    <p className="mt-6 flex items-baseline gap-x-1">
                      <span className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
                        {plan.price}
                      </span>
                      {plan.price !== "Custom" && (
                        <span className="text-sm font-semibold text-zinc-600 dark:text-zinc-400">
                          /month
                        </span>
                      )}
                    </p>
                  </div>
                  <ul className="mb-8 space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <svg
                          className="mr-3 h-4 w-4 text-emerald-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <Link
                      href={plan.name === "Enterprise" ? "/contact" : "/signup"}
                      className="block w-full"
                    >
                      <Button className="w-full border text-supaNeutral-1 border-supaPrimary-1 bg-supaPrimary-4 hover:bg-supaPrimary-3 dark:bg-supaPrimary-1 dark:hover:bg-supaPrimary-2 dark:text-white">
                        {plan.name === "Enterprise"
                          ? "Contact sales"
                          : "Get started"}
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative mt-32 border-t border-zinc-200 dark:border-zinc-800">
          <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
              {/* Company Info */}
              <div className="lg:col-span-1">
                <Link
                  href="/"
                  className="text-xl font-bold text-zinc-900 dark:text-zinc-100"
                >
                  YourBrand
                </Link>
                <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
                  Building the future of backend infrastructure for modern
                  applications.
                </p>
                <div className="mt-6 flex space-x-4">
                  <Link
                    href="#"
                    className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </Link>
                  <Link
                    href="#"
                    className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                  >
                    <span className="sr-only">GitHub</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Product Links */}
              <div className="lg:col-span-1">
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  Product
                </h3>
                <ul className="mt-4 space-y-3">
                  <li>
                    <Link
                      href="#features"
                      className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                    >
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#pricing"
                      className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/docs"
                      className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                    >
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/changelog"
                      className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                    >
                      Changelog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/integrations"
                      className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                    >
                      Integrations
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Company Links */}
              <div className="lg:col-span-1">
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  Company
                </h3>
                <ul className="mt-4 space-y-3">
                  <li>
                    <Link
                      href="/about"
                      className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/careers"
                      className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/partners"
                      className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                    >
                      Partners
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Legal Links */}
              <div className="lg:col-span-1">
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  Legal
                </h3>
                <ul className="mt-4 space-y-3">
                  <li>
                    <Link
                      href="/privacy"
                      className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                    >
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms"
                      className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                    >
                      Terms
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/security"
                      className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                    >
                      Security
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/cookies"
                      className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                    >
                      Cookie Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 border-t border-zinc-200 pt-8 dark:border-zinc-800">
              <p className="text-center text-xs leading-5 text-zinc-600 dark:text-zinc-400">
                © {new Date().getFullYear()} YourBrand. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
