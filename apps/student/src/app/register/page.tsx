'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function StudentRegister() {
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
      return;
    }
    setIsLoading(true);
    // TODO: Implement actual registration
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

          <h1 className="text-3xl font-bold text-slate-900 mb-2">Create your account</h1>
          <p className="text-slate-600 mb-8">Join thousands of students preparing smarter</p>

          {/* Progress Steps */}
          <div className="flex items-center gap-4 mb-8">
            <div className={`flex-1 h-1 rounded-full ${step >= 1 ? 'bg-primary-500' : 'bg-slate-200'}`} />
            <div className={`flex-1 h-1 rounded-full ${step >= 2 ? 'bg-primary-500' : 'bg-slate-200'}`} />
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {step === 1 && (
              <>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    className="input"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="input"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="03XX-XXXXXXX"
                    className="input"
                  />
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <div>
                  <label htmlFor="level" className="block text-sm font-medium text-slate-700 mb-2">
                    Education Level
                  </label>
                  <select id="level" className="input" required>
                    <option value="">Select your level</option>
                    <option value="middle">Middle School (6-8)</option>
                    <option value="matric">Matriculation (9-10)</option>
                    <option value="intermediate">Intermediate (11-12)</option>
                    <option value="o-level">O-Level</option>
                    <option value="a-level">A-Level</option>
                    <option value="mdcat">MDCAT Preparation</option>
                    <option value="ecat">ECAT Preparation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="board" className="block text-sm font-medium text-slate-700 mb-2">
                    Exam Board
                  </label>
                  <select id="board" className="input" required>
                    <option value="">Select your board</option>
                    <option value="federal">Federal Board</option>
                    <option value="punjab">Punjab Board</option>
                    <option value="sindh">Sindh Board</option>
                    <option value="kpk">KPK Board</option>
                    <option value="balochistan">Balochistan Board</option>
                    <option value="cambridge">Cambridge (CAIE)</option>
                    <option value="edexcel">Edexcel</option>
                    <option value="aku">AKU-EB</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
                    Create Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Create a strong password"
                    className="input"
                    required
                  />
                  <p className="mt-1 text-xs text-slate-500">
                    At least 8 characters with uppercase, lowercase, and numbers
                  </p>
                </div>

                <div className="flex items-start">
                  <input
                    id="terms"
                    type="checkbox"
                    className="h-4 w-4 mt-0.5 rounded border-slate-300 text-primary-600 focus:ring-primary-500"
                    required
                  />
                  <label htmlFor="terms" className="ml-2 text-sm text-slate-600">
                    I agree to the{' '}
                    <Link href="/terms" className="text-primary-600 hover:text-primary-700">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link href="/privacy" className="text-primary-600 hover:text-primary-700">
                      Privacy Policy
                    </Link>
                  </label>
                </div>
              </>
            )}

            <div className="flex gap-3">
              {step === 2 && (
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 btn-secondary py-3"
                >
                  Back
                </button>
              )}
              <button
                type="submit"
                disabled={isLoading}
                className="flex-1 btn-primary py-3 text-lg"
              >
                {isLoading ? 'Creating...' : step === 1 ? 'Continue' : 'Create Account'}
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-slate-600">
              Already have an account?{' '}
              <Link href="/login" className="text-primary-600 hover:text-primary-700 font-medium">
                Sign In
              </Link>
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-200 text-center">
            <p className="text-sm text-slate-500">
              Want to teach?{' '}
              <Link href="https://teach.teacher.ac.pk/register" className="text-primary-600 hover:text-primary-700">
                Apply as Teacher
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Decorative */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 items-center justify-center p-12">
        <div className="text-center text-white max-w-lg">
          <div className="text-6xl mb-6">🎓</div>
          <h2 className="text-3xl font-bold mb-4">Join Pakistan&apos;s Top Students</h2>
          <p className="text-primary-100 text-lg mb-8">
            Get access to expert-crafted courses, past papers, and mock exams.
          </p>
          <div className="space-y-4 text-left bg-white/10 rounded-xl p-6">
            <div className="flex items-center gap-3">
              <span className="text-2xl">✓</span>
              <span>Access to 500+ courses across all levels</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">✓</span>
              <span>100,000+ practice questions with solutions</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">✓</span>
              <span>Past papers from all boards (2010-2024)</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">✓</span>
              <span>Expert guess papers before every exam</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">✓</span>
              <span>Track your progress with detailed analytics</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

