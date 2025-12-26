'use client';

import Link from 'next/link';

const LANDING_URL = process.env.NEXT_PUBLIC_LANDING_URL || 'http://localhost:3000';

const sidebarLinks = [
  { label: 'Dashboard', href: '/', icon: '🏠', active: true },
  { label: 'My Courses', href: '/courses', icon: '📚', active: false },
  { label: 'Past Papers', href: '/past-papers', icon: '📝', active: false },
  { label: 'Mock Exams', href: '/mock-exams', icon: '⏱️', active: false },
  { label: 'Progress', href: '/progress', icon: '📊', active: false },
  { label: 'Certificates', href: '/certificates', icon: '🏆', active: false },
  { label: 'Settings', href: '/settings', icon: '⚙️', active: false },
];

const enrolledCourses = [
  {
    id: 1,
    title: 'Class 10 Physics',
    board: 'Federal Board',
    progress: 65,
    nextLesson: 'Chapter 8: Light',
    thumbnail: '🔬',
  },
  {
    id: 2,
    title: 'Class 10 Chemistry',
    board: 'Federal Board',
    progress: 42,
    nextLesson: 'Chapter 5: Acids & Bases',
    thumbnail: '⚗️',
  },
  {
    id: 3,
    title: 'MDCAT Biology',
    board: 'PMC',
    progress: 28,
    nextLesson: 'Unit 3: Cell Biology',
    thumbnail: '🧬',
  },
];

const upcomingTasks = [
  { id: 1, title: 'Physics Chapter 7 Quiz', due: 'Today, 6:00 PM', type: 'quiz' },
  { id: 2, title: 'Chemistry Assignment', due: 'Tomorrow', type: 'assignment' },
  { id: 3, title: 'MDCAT Mock Test #3', due: 'Dec 28, 2025', type: 'exam' },
];

const recentActivity = [
  { id: 1, action: 'Completed Physics Chapter 7', time: '2 hours ago', score: '85%' },
  { id: 2, action: 'Watched Chemistry Lecture', time: '5 hours ago', score: null },
  { id: 3, action: 'Submitted Biology Quiz', time: 'Yesterday', score: '92%' },
];

export default function StudentDashboard() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="p-6 border-b border-slate-200">
          <a href={LANDING_URL} className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <div>
              <span className="font-bold text-slate-900">student</span>
              <span className="text-blue-600">.ac.pk</span>
              <p className="text-xs text-slate-500">Learning Portal</p>
            </div>
          </a>
        </div>

        <nav className="py-4">
          {sidebarLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`sidebar-link ${link.active ? 'active' : ''}`}
            >
              <span className="text-xl">{link.icon}</span>
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-blue-600 font-medium">AK</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-900 truncate">Ali Khan</p>
              <p className="text-xs text-slate-500 truncate">Class 10 Student</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Header */}
        <header className="bg-white border-b border-slate-200 px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Welcome back, Ali! 👋</h1>
              <p className="text-slate-500">Continue your learning journey</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-slate-500 hover:text-slate-700">
                <span className="text-xl">🔔</span>
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <a
                href={`${LANDING_URL}/help`}
                className="text-slate-500 hover:text-slate-700"
              >
                <span className="text-xl">❓</span>
              </a>
            </div>
          </div>
        </header>

        <div className="p-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="card">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-2xl">
                  📚
                </div>
                <div>
                  <p className="text-sm text-slate-500">Enrolled Courses</p>
                  <p className="text-2xl font-bold text-slate-900">5</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center text-2xl">
                  ✅
                </div>
                <div>
                  <p className="text-sm text-slate-500">Completed Lessons</p>
                  <p className="text-2xl font-bold text-slate-900">47</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center text-2xl">
                  🎯
                </div>
                <div>
                  <p className="text-sm text-slate-500">Avg. Quiz Score</p>
                  <p className="text-2xl font-bold text-slate-900">78%</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center text-2xl">
                  🔥
                </div>
                <div>
                  <p className="text-sm text-slate-500">Study Streak</p>
                  <p className="text-2xl font-bold text-slate-900">12 days</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* My Courses */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-slate-900">Continue Learning</h2>
                <Link href="/courses" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                  View all →
                </Link>
              </div>
              <div className="space-y-4">
                {enrolledCourses.map((course) => (
                  <div key={course.id} className="card card-hover cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-3xl">
                        {course.thumbnail}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold text-slate-900">{course.title}</h3>
                            <p className="text-sm text-slate-500">{course.board}</p>
                          </div>
                          <span className="badge-primary">{course.progress}%</span>
                        </div>
                        <div className="mt-3">
                          <div className="progress-bar">
                            <div
                              className="progress-bar-fill"
                              style={{ width: `${course.progress}%` }}
                            />
                          </div>
                        </div>
                        <p className="mt-2 text-sm text-slate-600">
                          Next: <span className="font-medium">{course.nextLesson}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              {/* Upcoming Tasks */}
              <div className="card">
                <h2 className="text-lg font-semibold text-slate-900 mb-4">Upcoming Tasks</h2>
                <div className="space-y-3">
                  {upcomingTasks.map((task) => (
                    <div key={task.id} className="flex items-center gap-3 p-3 rounded-lg bg-slate-50">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        task.type === 'quiz' ? 'bg-blue-100 text-blue-600' :
                        task.type === 'assignment' ? 'bg-amber-100 text-amber-600' :
                        'bg-purple-100 text-purple-600'
                      }`}>
                        {task.type === 'quiz' && '📝'}
                        {task.type === 'assignment' && '📋'}
                        {task.type === 'exam' && '⏱️'}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-slate-900 truncate">{task.title}</p>
                        <p className="text-xs text-slate-500">{task.due}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="card">
                <h2 className="text-lg font-semibold text-slate-900 mb-4">Recent Activity</h2>
                <div className="space-y-3">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
                      <div>
                        <p className="text-sm text-slate-900">{activity.action}</p>
                        <p className="text-xs text-slate-500">{activity.time}</p>
                      </div>
                      {activity.score && (
                        <span className="badge-success">{activity.score}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="card">
                <h2 className="text-lg font-semibold text-slate-900 mb-4">Quick Actions</h2>
                <div className="grid grid-cols-2 gap-3">
                  <Link
                    href="/past-papers"
                    className="p-4 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50 text-center transition-colors"
                  >
                    <span className="text-2xl block mb-1">📝</span>
                    <span className="text-sm font-medium text-slate-700">Past Papers</span>
                  </Link>
                  <Link
                    href="/mock-exams"
                    className="p-4 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50 text-center transition-colors"
                  >
                    <span className="text-2xl block mb-1">⏱️</span>
                    <span className="text-sm font-medium text-slate-700">Mock Exam</span>
                  </Link>
                  <Link
                    href="/guess-papers"
                    className="p-4 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50 text-center transition-colors"
                  >
                    <span className="text-2xl block mb-1">🎯</span>
                    <span className="text-sm font-medium text-slate-700">Guess Papers</span>
                  </Link>
                  <Link
                    href="/ask"
                    className="p-4 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50 text-center transition-colors"
                  >
                    <span className="text-2xl block mb-1">❓</span>
                    <span className="text-sm font-medium text-slate-700">Ask Tutor</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
