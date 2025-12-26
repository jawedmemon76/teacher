'use client';

import Link from 'next/link';
import { useState } from 'react';

const STUDENT_URL = process.env.NEXT_PUBLIC_STUDENT_URL || 'https://student.ac.pk';
const TEACHER_URL = process.env.NEXT_PUBLIC_TEACHER_URL || 'https://teacher.ac.pk';

const educationLevels = [
  {
    title: 'Literacy Program',
    titleUr: 'خواندگی پروگرام',
    description: 'Start from zero — learn to read, write, and build foundational skills',
    icon: '📖',
    gradient: 'from-violet-500 to-purple-600',
    students: '12K+',
  },
  {
    title: 'Middle School',
    titleUr: 'مڈل سکول',
    description: 'Grades 6-8 complete curriculum with interactive lessons',
    icon: '📚',
    gradient: 'from-blue-500 to-cyan-500',
    students: '28K+',
  },
  {
    title: 'Matriculation',
    titleUr: 'میٹرک',
    description: 'Grade 9-10 board exam prep with past papers & mock tests',
    icon: '🎓',
    gradient: 'from-emerald-500 to-teal-500',
    students: '45K+',
  },
  {
    title: 'Intermediate',
    titleUr: 'انٹرمیڈیٹ',
    description: 'FSc/FA complete preparation for all major boards',
    icon: '🏆',
    gradient: 'from-amber-500 to-orange-500',
    students: '32K+',
  },
  {
    title: 'O/A Levels',
    titleUr: 'او/اے لیولز',
    description: 'Cambridge & Edexcel curriculum with topical questions',
    icon: '🌍',
    gradient: 'from-rose-500 to-pink-500',
    students: '15K+',
  },
  {
    title: 'Entry Tests',
    titleUr: 'داخلہ ٹیسٹ',
    description: 'MDCAT, ECAT, CSS, ISSB & professional exam preparation',
    icon: '🎯',
    gradient: 'from-indigo-500 to-blue-600',
    students: '22K+',
  },
];

const features = [
  {
    icon: '📝',
    title: 'Past Papers',
    description: 'Access 50,000+ past exam papers with detailed step-by-step solutions',
  },
  {
    icon: '🎲',
    title: 'Guess Papers',
    description: 'Expert-crafted predictions based on pattern analysis',
  },
  {
    icon: '⏱️',
    title: 'Mock Exams',
    description: 'Realistic timed tests that simulate actual exam conditions',
  },
  {
    icon: '📊',
    title: 'Smart Analytics',
    description: 'AI-powered insights to identify weak areas and track progress',
  },
  {
    icon: '🎥',
    title: 'Video Lessons',
    description: 'Learn from top teachers across Pakistan at your own pace',
  },
  {
    icon: '📱',
    title: 'Study Anywhere',
    description: 'Download content for offline access — learn without internet',
  },
];

const testimonials = [
  {
    name: 'Fatima Ahmed',
    role: 'MDCAT 2024 — 189/200',
    image: '👩‍🎓',
    quote: 'The mock tests were incredibly accurate. I felt fully prepared on exam day.',
  },
  {
    name: 'Ali Hassan',
    role: 'Matric Student — 95%',
    image: '👨‍🎓',
    quote: 'Past papers with solutions helped me understand exactly what examiners expect.',
  },
  {
    name: 'Dr. Sarah Khan',
    role: 'Physics Teacher',
    image: '👩‍🏫',
    quote: 'Finally a platform that understands Pakistan\'s education system.',
  },
];

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 nav-glass">
        <div className="container-app">
          <div className="flex h-16 lg:h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:shadow-emerald-500/50 transition-shadow">
                <span className="text-white font-bold text-xl lg:text-2xl font-serif italic">C</span>
              </div>
              <div className="hidden sm:block">
                <span className="font-bold text-xl text-slate-900">coaching</span>
                <span className="text-emerald-600 font-bold text-xl">.ac.pk</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              <Link href="/courses" className="nav-link">Courses</Link>
              <Link href="/past-papers" className="nav-link">Past Papers</Link>
              <Link href="/about" className="nav-link">About</Link>
              <Link href="/contact" className="nav-link">Contact</Link>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2 mr-4">
                <a
                  href={`${STUDENT_URL}/login`}
                  className="text-slate-600 hover:text-slate-900 font-medium transition-colors"
                >
                  Student
                </a>
                <span className="text-slate-300">|</span>
                <a
                  href={`${TEACHER_URL}/login`}
                  className="text-slate-600 hover:text-slate-900 font-medium transition-colors"
                >
                  Teacher
                </a>
              </div>
              <a href={`${STUDENT_URL}/register`} className="btn-primary btn-md">
                Get Started
              </a>
              
              {/* Mobile menu button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-slate-600 hover:text-slate-900"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 py-4">
            <div className="container-app space-y-3">
              <Link href="/courses" className="block py-2 text-slate-600 hover:text-emerald-600">Courses</Link>
              <Link href="/past-papers" className="block py-2 text-slate-600 hover:text-emerald-600">Past Papers</Link>
              <Link href="/about" className="block py-2 text-slate-600 hover:text-emerald-600">About</Link>
              <div className="pt-4 flex gap-4">
                <a href={`${STUDENT_URL}/login`} className="text-blue-600 font-medium">Student Portal →</a>
                <a href={`${TEACHER_URL}/login`} className="text-violet-600 font-medium">Teacher Portal →</a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-28 lg:pt-36 pb-16 lg:pb-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-10 bg-gradient-mesh" />
        <div className="absolute inset-0 -z-10 bg-pattern-dots opacity-40" />
        
        {/* Floating decorative elements */}
        <div className="absolute top-40 left-10 w-20 h-20 bg-emerald-400/20 rounded-full blur-2xl animate-float" />
        <div className="absolute top-60 right-20 w-32 h-32 bg-amber-400/20 rounded-full blur-3xl animate-float delay-300" />
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-blue-400/20 rounded-full blur-2xl animate-float delay-500" />

        <div className="container-app">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md border border-emerald-100 mb-8 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-medium text-slate-700">Pakistan&apos;s #1 Exam Prep Platform</span>
            </div>

            {/* Headline */}
            <h1 className="heading-display text-slate-900 mb-6 animate-slide-up text-balance">
              Master Your <span className="text-gradient">Exams,</span>
              <br />
              <span className="font-serif italic">Transform Your Future</span>
            </h1>

            <p className="text-lg lg:text-xl text-slate-600 mb-10 max-w-2xl mx-auto animate-slide-up delay-100 text-balance">
              From basic literacy to MDCAT — comprehensive courses, 50,000+ past papers, 
              mock tests, and expert guidance all in one platform.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up delay-200">
              <a href={`${STUDENT_URL}/register`} className="btn-primary btn-lg shadow-xl shadow-emerald-500/30">
                Start Learning Free
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a href={`${TEACHER_URL}/register`} className="btn-secondary btn-lg">
                <svg className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Become a Teacher
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 animate-fade-in delay-300">
              {[
                { value: '150K+', label: 'Students' },
                { value: '50K+', label: 'Questions' },
                { value: '500+', label: 'Teachers' },
                { value: '95%', label: 'Pass Rate' },
              ].map((stat, i) => (
                <div key={stat.label} className="text-center" style={{ animationDelay: `${400 + i * 100}ms` }}>
                  <div className="text-3xl lg:text-4xl font-bold text-slate-900">{stat.value}</div>
                  <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portal Navigation Cards */}
      <section className="py-8 -mt-8 relative z-10">
        <div className="container-app">
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <a
              href={STUDENT_URL}
              className="card card-hover flex items-center gap-4 p-6 group border-blue-100 hover:border-blue-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                <span className="text-white text-2xl font-bold font-serif italic">S</span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-900 text-lg group-hover:text-blue-600 transition-colors">
                  student.ac.pk
                </h3>
                <p className="text-slate-500 text-sm">Access courses, past papers & track progress</p>
              </div>
              <svg className="w-5 h-5 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>

            <a
              href={TEACHER_URL}
              className="card card-hover flex items-center gap-4 p-6 group border-violet-100 hover:border-violet-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500 to-violet-600 flex items-center justify-center shadow-lg shadow-violet-500/30 group-hover:scale-110 transition-transform">
                <span className="text-white text-2xl font-bold font-serif italic">T</span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-900 text-lg group-hover:text-violet-600 transition-colors">
                  teacher.ac.pk
                </h3>
                <p className="text-slate-500 text-sm">Create courses, manage students & earn</p>
              </div>
              <svg className="w-5 h-5 text-slate-400 group-hover:text-violet-500 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Education Levels */}
      <section className="section bg-white">
        <div className="container-app">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-slate-900 mb-4">
              Choose Your Learning Path
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Whether you&apos;re starting from scratch or preparing for competitive exams,
              we have the perfect program for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {educationLevels.map((level, i) => (
              <Link
                key={level.title}
                href={`${STUDENT_URL}/courses?level=${level.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="card card-hover group animate-fade-in"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${level.gradient} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform`}>
                    {level.icon}
                  </div>
                  <span className="text-xs font-medium text-slate-500">{level.students} students</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-emerald-600 transition-colors">
                  {level.title}
                </h3>
                <p className="text-sm text-emerald-600 font-medium mb-2" dir="rtl">
                  {level.titleUr}
                </p>
                <p className="text-slate-600 text-sm">{level.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section bg-slate-50">
        <div className="container-app">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-slate-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Powerful tools designed specifically for Pakistan&apos;s education system.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className="card-gradient card-hover"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-white">
        <div className="container-app">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-slate-900 mb-4">
              Trusted by Students & Teachers
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-2xl">
                    {t.image}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{t.name}</p>
                    <p className="text-sm text-emerald-600">{t.role}</p>
                  </div>
                </div>
                <p className="text-slate-600 italic">&ldquo;{t.quote}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-hero text-white">
        <div className="container-app text-center">
          <h2 className="heading-2 mb-4">Ready to Start Your Journey?</h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Join 150,000+ students already learning smarter with coaching.ac.pk
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`${STUDENT_URL}/register`}
              className="btn btn-lg bg-white text-emerald-700 hover:bg-emerald-50"
            >
              Create Free Account
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href={`${TEACHER_URL}/register`}
              className="btn btn-lg bg-transparent border-2 border-white/50 text-white hover:bg-white/10"
            >
              Join as Teacher
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16">
        <div className="container-app">
          <div className="grid md:grid-cols-5 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                  <span className="text-white font-bold text-xl font-serif italic">C</span>
                </div>
                <span className="font-bold text-white text-xl">coaching.ac.pk</span>
              </div>
              <p className="text-sm mb-6 max-w-xs">
                Pakistan&apos;s comprehensive exam-focused digital learning platform — 
                empowering students and teachers across the nation.
              </p>
              <div className="flex gap-3">
                <a href={STUDENT_URL} className="px-3 py-1.5 rounded-lg bg-blue-600/20 text-blue-400 text-sm font-medium hover:bg-blue-600/30 transition-colors">
                  student.ac.pk
                </a>
                <a href={TEACHER_URL} className="px-3 py-1.5 rounded-lg bg-violet-600/20 text-violet-400 text-sm font-medium hover:bg-violet-600/30 transition-colors">
                  teacher.ac.pk
                </a>
              </div>
            </div>

            {/* Programs */}
            <div>
              <h4 className="font-semibold text-white mb-4">Programs</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/courses/matric" className="hover:text-white transition-colors">Matriculation</Link></li>
                <li><Link href="/courses/intermediate" className="hover:text-white transition-colors">Intermediate</Link></li>
                <li><Link href="/courses/cambridge" className="hover:text-white transition-colors">O/A Levels</Link></li>
                <li><Link href="/courses/entry-tests" className="hover:text-white transition-colors">Entry Tests</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/past-papers" className="hover:text-white transition-colors">Past Papers</Link></li>
                <li><Link href="/guess-papers" className="hover:text-white transition-colors">Guess Papers</Link></li>
                <li><Link href="/mock-exams" className="hover:text-white transition-colors">Mock Exams</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">© {new Date().getFullYear()} coaching.ac.pk. All rights reserved.</p>
            <p className="text-sm">Made with ❤️ in Pakistan</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
