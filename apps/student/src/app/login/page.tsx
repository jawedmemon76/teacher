'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function StudentLogin() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // TODO: Implement actual login
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <Link href="https://teacher.ac.pk" className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <span className="font-bold text-xl text-slate-900">
              teacher<span className="text-primary-600">.ac.pk</span>
            </span>
          </Link>

          <h1 className="text-3xl font-bold text-slate-900 mb-2">Welcome back!</h1>
          <p className="text-slate-600 mb-8">Sign in to continue your learning journey</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                Email or Phone
              </label>
              <input
                id="email"
                type="text"
                placeholder="Enter your email or phone"
                className="input"
                required
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="password" className="block text-sm font-medium text-slate-700">
                  Password
                </label>
                <Link href="/forgot-password" className="text-sm text-primary-600 hover:text-primary-700">
                  Forgot password?
                </Link>
              </div>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="input"
                required
              />
            </div>

            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                className="h-4 w-4 rounded border-slate-300 text-primary-600 focus:ring-primary-500"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-slate-600">
                Keep me signed in
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full btn-primary py-3 text-lg"
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-slate-600">
              Don&apos;t have an account?{' '}
              <Link href="/register" className="text-primary-600 hover:text-primary-700 font-medium">
                Create Account
              </Link>
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-200 text-center">
            <p className="text-sm text-slate-500">
              Are you a teacher?{' '}
              <Link href="https://teach.teacher.ac.pk/login" className="text-primary-600 hover:text-primary-700">
                Go to Teacher Portal
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Decorative */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 items-center justify-center p-12">
        <div className="text-center text-white max-w-lg">
          <div className="text-6xl mb-6">📚</div>
          <h2 className="text-3xl font-bold mb-4">Start Your Learning Journey</h2>
          <p className="text-primary-100 text-lg">
            Access thousands of courses, past papers, and mock exams to ace your exams.
          </p>
          <div className="mt-12 grid grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-4xl font-bold">100K+</p>
              <p className="text-primary-200 text-sm">Questions</p>
            </div>
            <div>
              <p className="text-4xl font-bold">500+</p>
              <p className="text-primary-200 text-sm">Courses</p>
            </div>
            <div>
              <p className="text-4xl font-bold">95%</p>
              <p className="text-primary-200 text-sm">Pass Rate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

