'use client';

import Link from 'next/link';

const LANDING_URL = process.env.NEXT_PUBLIC_LANDING_URL || 'https://coaching.ac.pk';
const TEACHER_URL = process.env.NEXT_PUBLIC_TEACHER_URL || 'https://teacher.ac.pk';

const sidebarLinks = [
  { label: 'Dashboard', href: '/', icon: '🏠', active: true },
  { label: 'My Courses', href: '/courses', icon: '📚' },
  { label: 'Past Papers', href: '/past-papers', icon: '📝' },
  { label: 'Mock Exams', href: '/mock-exams', icon: '⏱️' },
  { label: 'Progress', href: '/progress', icon: '📊' },
  { label: 'Certificates', href: '/certificates', icon: '🏆' },
  { label: 'Settings', href: '/settings', icon: '⚙️' },
];

const enrolledCourses = [
  {
    id: 1,
    title: 'Class 10 Physics Complete',
    board: 'Federal Board',
    progress: 65,
    nextLesson: 'Chapter 8: Light & Optics',
    thumbnail: '🔬',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    title: 'Class 10 Chemistry',
    board: 'Federal Board',
    progress: 42,
    nextLesson: 'Chapter 5: Acids & Bases',
    thumbnail: '⚗️',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    id: 3,
    title: 'MDCAT Biology Crash Course',
    board: 'PMC Syllabus',
    progress: 28,
    nextLesson: 'Unit 3: Cell Biology',
    thumbnail: '🧬',
    color: 'from-violet-500 to-purple-500',
  },
];

const upcomingTasks = [
  { id: 1, title: 'Physics Chapter 7 Quiz', due: 'Today, 6:00 PM', type: 'quiz', urgent: true },
  { id: 2, title: 'Chemistry Assignment #4', due: 'Tomorrow, 11:59 PM', type: 'assignment', urgent: false },
  { id: 3, title: 'MDCAT Full Mock Test', due: 'Dec 28, 2025', type: 'exam', urgent: false },
];

const recentActivity = [
  { id: 1, action: 'Completed Physics Chapter 7', time: '2 hours ago', score: '85%', icon: '✅' },
  { id: 2, action: 'Watched Chemistry Lecture', time: '5 hours ago', duration: '45 min', icon: '▶️' },
  { id: 3, action: 'Submitted Biology Quiz', time: 'Yesterday', score: '92%', icon: '📝' },
];

const stats = [
  { label: 'Enrolled Courses', value: '5', icon: '📚', color: 'bg-blue-100 text-blue-600' },
  { label: 'Completed Lessons', value: '47', icon: '✅', color: 'bg-emerald-100 text-emerald-600' },
  { label: 'Avg. Quiz Score', value: '78%', icon: '🎯', color: 'bg-amber-100 text-amber-600' },
  { label: 'Study Streak', value: '12 days', icon: '🔥', color: 'bg-rose-100 text-rose-600' },
];

export default function StudentDashboard() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
              <span className="text-white font-bold text-xl italic">S</span>
            </div>
            <div>
              <div className="flex items-baseline">
                <span className="font-bold text-slate-900">student</span>
                <span className="text-blue-600 font-bold">.ac.pk</span>
              </div>
              <p className="text-xs text-slate-500">Learning Portal</p>
            </div>
          </Link>
        </div>

        <nav className="sidebar-nav">
          {sidebarLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`sidebar-link ${link.active ? 'active' : ''}`}
            >
              <span className="icon">{link.icon}</span>
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
              <span className="text-white font-medium text-sm">AK</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-slate-900 truncate">Ali Khan</p>
              <p className="text-xs text-slate-500 truncate">Class 10 Student</p>
            </div>
            <button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Header */}
        <header className="main-header">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Welcome back, Ali! 👋</h1>
              <p className="text-slate-500">Continue your learning journey — you&apos;re doing great!</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="relative p-2.5 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="relative p-2.5 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
            </div>
          </div>
        </header>

        <div className="main-body">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat) => (
              <div key={stat.label} className="card-stat">
                <div className={`card-stat-icon ${stat.color}`}>
                  {stat.icon}
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                  <p className="text-sm text-slate-500">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Continue Learning */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-slate-900">Continue Learning</h2>
                <Link href="/courses" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                  View all courses →
                </Link>
              </div>

              <div className="space-y-4">
                {enrolledCourses.map((course) => (
                  <Link key={course.id} href={`/courses/${course.id}`} className="card card-hover block">
                    <div className="flex gap-4">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center text-3xl shadow-lg flex-shrink-0`}>
                        {course.thumbnail}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="font-semibold text-slate-900">{course.title}</h3>
                            <p className="text-sm text-slate-500">{course.board}</p>
                          </div>
                          <span className="badge-primary">{course.progress}%</span>
                        </div>
                        <div className="mt-3">
                          <div className="progress-bar">
                            <div className="progress-fill" style={{ width: `${course.progress}%` }} />
                          </div>
                        </div>
                        <p className="mt-2 text-sm text-slate-600">
                          Next: <span className="font-medium text-blue-600">{course.nextLesson}</span>
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Recent Activity */}
              <div className="card mt-8">
                <h2 className="text-lg font-bold text-slate-900 mb-4">Recent Activity</h2>
                <div className="space-y-3">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0 last:pb-0">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{activity.icon}</span>
                        <div>
                          <p className="text-sm font-medium text-slate-900">{activity.action}</p>
                          <p className="text-xs text-slate-500">{activity.time}</p>
                        </div>
                      </div>
                      {activity.score && (
                        <span className="badge-success">{activity.score}</span>
                      )}
                      {activity.duration && (
                        <span className="text-sm text-slate-500">{activity.duration}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              {/* Upcoming Tasks */}
              <div className="card">
                <h2 className="text-lg font-bold text-slate-900 mb-4">Upcoming Tasks</h2>
                <div className="space-y-3">
                  {upcomingTasks.map((task) => (
                    <div key={task.id} className={`flex items-center gap-3 p-3 rounded-xl ${task.urgent ? 'bg-red-50 border border-red-100' : 'bg-slate-50'}`}>
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg ${
                        task.type === 'quiz' ? 'bg-blue-100' :
                        task.type === 'assignment' ? 'bg-amber-100' :
                        'bg-violet-100'
                      }`}>
                        {task.type === 'quiz' && '📝'}
                        {task.type === 'assignment' && '📋'}
                        {task.type === 'exam' && '⏱️'}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-slate-900 truncate">{task.title}</p>
                        <p className={`text-xs ${task.urgent ? 'text-red-600 font-medium' : 'text-slate-500'}`}>{task.due}</p>
                      </div>
                      {task.urgent && (
                        <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="card">
                <h2 className="text-lg font-bold text-slate-900 mb-4">Quick Actions</h2>
                <div className="grid grid-cols-2 gap-3">
                  <Link href="/past-papers" className="quick-action">
                    <div className="quick-action-icon">📝</div>
                    <div className="quick-action-label">Past Papers</div>
                  </Link>
                  <Link href="/mock-exams" className="quick-action">
                    <div className="quick-action-icon">⏱️</div>
                    <div className="quick-action-label">Mock Exam</div>
                  </Link>
                  <Link href="/guess-papers" className="quick-action">
                    <div className="quick-action-icon">🎯</div>
                    <div className="quick-action-label">Guess Papers</div>
                  </Link>
                  <Link href="/ask" className="quick-action">
                    <div className="quick-action-icon">❓</div>
                    <div className="quick-action-label">Ask Tutor</div>
                  </Link>
                </div>
              </div>

              {/* Browse More */}
              <div className="card bg-gradient-to-br from-blue-50 to-sky-50 border-blue-100">
                <h3 className="font-semibold text-slate-900 mb-2">Browse More Courses</h3>
                <p className="text-sm text-slate-600 mb-4">
                  Explore 500+ courses from top teachers across Pakistan.
                </p>
                <a href={`${LANDING_URL}/courses`} className="btn-primary btn-sm w-full justify-center">
                  Explore Courses
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Portal Navigation Bar */}
        <div className="portal-bar">
          <p className="text-sm text-slate-500">Part of the coaching.ac.pk family</p>
          <div className="flex items-center gap-4">
            <a href={LANDING_URL} className="portal-link portal-link-landing">
              <span className="w-6 h-6 rounded-lg bg-emerald-100 flex items-center justify-center text-xs font-bold text-emerald-600">C</span>
              <span>coaching.ac.pk</span>
            </a>
            <a href={TEACHER_URL} className="portal-link portal-link-teacher">
              <span className="w-6 h-6 rounded-lg bg-violet-100 flex items-center justify-center text-xs font-bold text-violet-600">T</span>
              <span>Become a Teacher</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

