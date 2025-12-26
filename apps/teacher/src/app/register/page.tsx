'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function TeacherRegister() {
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
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

          <h1 className="text-3xl font-bold text-slate-900 mb-2">Become a Teacher</h1>
          <p className="text-slate-600 mb-8">Share your expertise and earn with teacher.ac.pk</p>

          {/* Progress Steps */}
          <div className="flex items-center gap-2 mb-8">
            <div className={`flex-1 h-1 rounded-full ${step >= 1 ? 'bg-primary-500' : 'bg-slate-200'}`} />
            <div className={`flex-1 h-1 rounded-full ${step >= 2 ? 'bg-primary-500' : 'bg-slate-200'}`} />
            <div className={`flex-1 h-1 rounded-full ${step >= 3 ? 'bg-primary-500' : 'bg-slate-200'}`} />
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {step === 1 && (
              <>
                <div className="text-sm font-medium text-primary-600 mb-4">Step 1: Personal Information</div>
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
                    required
                  />
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <div className="text-sm font-medium text-primary-600 mb-4">Step 2: Professional Details</div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                    Primary Subject
                  </label>
                  <select id="subject" className="input" required>
                    <option value="">Select your subject</option>
                    <option value="physics">Physics</option>
                    <option value="chemistry">Chemistry</option>
                    <option value="biology">Biology</option>
                    <option value="mathematics">Mathematics</option>
                    <option value="english">English</option>
                    <option value="urdu">Urdu</option>
                    <option value="computer">Computer Science</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="qualification" className="block text-sm font-medium text-slate-700 mb-2">
                    Highest Qualification
                  </label>
                  <select id="qualification" className="input" required>
                    <option value="">Select qualification</option>
                    <option value="bachelors">Bachelor&apos;s Degree</option>
                    <option value="masters">Master&apos;s Degree</option>
                    <option value="mphil">M.Phil</option>
                    <option value="phd">Ph.D</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-slate-700 mb-2">
                    Teaching Experience (Years)
                  </label>
                  <input
                    id="experience"
                    type="number"
                    min="0"
                    placeholder="Years of experience"
                    className="input"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="institution" className="block text-sm font-medium text-slate-700 mb-2">
                    Current Institution (Optional)
                  </label>
                  <input
                    id="institution"
                    type="text"
                    placeholder="School/College/Academy name"
                    className="input"
                  />
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <div className="text-sm font-medium text-primary-600 mb-4">Step 3: Account Setup</div>
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
                </div>

                <div>
                  <label htmlFor="bio" className="block text-sm font-medium text-slate-700 mb-2">
                    Short Bio (Optional)
                  </label>
                  <textarea
                    id="bio"
                    rows={3}
                    placeholder="Tell students about yourself..."
                    className="input"
                  />
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
                    </Link>
                    {' '}and{' '}
                    <Link href="/teacher-agreement" className="text-primary-600 hover:text-primary-700">
                      Teacher Agreement
                    </Link>
                  </label>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-800">
                  <p className="font-medium mb-1">📋 Application Review</p>
                  <p>Your application will be reviewed by our team. You&apos;ll receive an email within 2-3 business days.</p>
                </div>
              </>
            )}

            <div className="flex gap-3">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
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
                {isLoading ? 'Submitting...' : step < 3 ? 'Continue' : 'Submit Application'}
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-slate-600">
              Already a teacher?{' '}
              <Link href="/login" className="text-primary-600 hover:text-primary-700 font-medium">
                Sign In
              </Link>
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-200 text-center">
            <p className="text-sm text-slate-500">
              Looking to learn?{' '}
              <Link href="https://learn.teacher.ac.pk/register" className="text-primary-600 hover:text-primary-700">
                Student Registration
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Decorative */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 items-center justify-center p-12">
        <div className="text-center text-white max-w-lg">
          <div className="text-6xl mb-6">🎯</div>
          <h2 className="text-3xl font-bold mb-4">Why Teach With Us?</h2>
          <div className="space-y-4 text-left mt-8">
            <div className="flex items-start gap-3 bg-white/10 rounded-xl p-4">
              <span className="text-2xl">💰</span>
              <div>
                <p className="font-semibold">Competitive Earnings</p>
                <p className="text-primary-200 text-sm">Earn up to ₨ 500,000/month from course sales</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white/10 rounded-xl p-4">
              <span className="text-2xl">👥</span>
              <div>
                <p className="font-semibold">Reach Thousands</p>
                <p className="text-primary-200 text-sm">Access to 50,000+ active students nationwide</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white/10 rounded-xl p-4">
              <span className="text-2xl">🛠️</span>
              <div>
                <p className="font-semibold">Powerful Tools</p>
                <p className="text-primary-200 text-sm">Course builder, question bank, analytics & more</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white/10 rounded-xl p-4">
              <span className="text-2xl">🏆</span>
              <div>
                <p className="font-semibold">Build Your Brand</p>
                <p className="text-primary-200 text-sm">Establish yourself as a top educator</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

