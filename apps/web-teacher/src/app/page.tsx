'use client';

import Link from 'next/link';

const LANDING_URL = process.env.NEXT_PUBLIC_LANDING_URL || 'https://coaching.ac.pk';
const STUDENT_URL = process.env.NEXT_PUBLIC_STUDENT_URL || 'https://student.ac.pk';

const sidebarLinks = [
  { label: 'Dashboard', href: '/', icon: '🏠', active: true },
  { label: 'My Courses', href: '/courses', icon: '📚' },
  { label: 'Question Bank', href: '/questions', icon: '❓' },
  { label: 'Students', href: '/students', icon: '👥' },
  { label: 'Assignments', href: '/assignments', icon: '📝' },
  { label: 'Analytics', href: '/analytics', icon: '📊' },
  { label: 'Earnings', href: '/earnings', icon: '💰' },
  { label: 'Settings', href: '/settings', icon: '⚙️' },
];

const myCourses = [
  {
    id: 1,
    title: 'Class 10 Physics Complete',
    students: 1247,
    lessons: 45,
    status: 'published',
    rating: 4.8,
    revenue: '₨ 24,500',
    thumbnail: '🔬',
  },
  {
    id: 2,
    title: 'MDCAT Physics Crash Course',
    students: 892,
    lessons: 32,
    status: 'published',
    rating: 4.9,
    revenue: '₨ 18,200',
    thumbnail: '⚗️',
  },
  {
    id: 3,
    title: 'O-Level Physics Topical',
    students: 0,
    lessons: 18,
    status: 'draft',
    rating: null,
    revenue: '—',
    thumbnail: '🧬',
  },
];

const recentSubmissions = [
  { id: 1, student: 'Ali Khan', avatar: 'AK', course: 'Class 10 Physics', assignment: 'Chapter 7 Quiz', submitted: '2 hours ago', status: 'pending' },
  { id: 2, student: 'Sara Ahmed', avatar: 'SA', course: 'MDCAT Physics', assignment: 'Mock Test #4', submitted: '5 hours ago', status: 'graded', score: '85%' },
  { id: 3, student: 'Zain Malik', avatar: 'ZM', course: 'Class 10 Physics', assignment: 'Worksheet 12', submitted: 'Yesterday', status: 'pending' },
  { id: 4, student: 'Ayesha Raza', avatar: 'AR', course: 'MDCAT Physics', assignment: 'Chapter Quiz', submitted: 'Yesterday', status: 'graded', score: '92%' },
];

const stats = [
  { label: 'Total Students', value: '2,139', change: '+124', changeLabel: 'this month', icon: '👥', color: 'bg-violet-100 text-violet-600' },
  { label: 'Active Courses', value: '3', change: '2', changeLabel: 'published', icon: '📚', color: 'bg-emerald-100 text-emerald-600' },
  { label: 'Questions Bank', value: '1,847', change: '+89', changeLabel: 'this week', icon: '❓', color: 'bg-purple-100 text-purple-600' },
  { label: 'This Month', value: '₨ 47.5K', change: '+₨ 8.2K', changeLabel: 'vs last month', icon: '💰', color: 'bg-amber-100 text-amber-600' },
];

const quickActions = [
  { icon: '📚', title: 'Create Course', desc: 'Start a new course', href: '/courses/new' },
  { icon: '❓', title: 'Add Questions', desc: 'Build your question bank', href: '/questions/new' },
  { icon: '📝', title: 'Create Paper', desc: 'Generate guess paper', href: '/papers/new' },
  { icon: '🎥', title: 'Go Live', desc: 'Start live session', href: '/live' },
];

export default function TeacherDashboard() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-violet-600 flex items-center justify-center shadow-lg shadow-violet-500/30">
              <span className="text-white font-bold text-xl italic">T</span>
            </div>
            <div>
              <div className="flex items-baseline">
                <span className="font-bold text-white">teacher</span>
                <span className="text-violet-400 font-bold">.ac.pk</span>
              </div>
              <p className="text-xs text-slate-500">Educator Portal</p>
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
          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-violet-600 flex items-center justify-center">
              <span className="text-white font-medium text-sm">DF</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-white truncate">Dr. Fatima</p>
              <p className="text-xs text-slate-400 truncate">Physics Expert</p>
            </div>
            <button className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors">
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
              <h1 className="text-2xl font-bold text-slate-900">Welcome back, Dr. Fatima! 👋</h1>
              <p className="text-slate-500">Manage your courses and track student progress</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="relative p-2.5 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <Link href="/courses/new" className="btn-primary btn-md">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Create Course
              </Link>
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
                  <p className="text-xs text-emerald-600 font-medium mt-0.5">{stat.change} {stat.changeLabel}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* My Courses */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-slate-900">My Courses</h2>
                <Link href="/courses" className="text-sm text-violet-600 hover:text-violet-700 font-medium">
                  Manage all courses →
                </Link>
              </div>

              <div className="space-y-4">
                {myCourses.map((course) => (
                  <div key={course.id} className="card card-hover">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-100 to-violet-200 flex items-center justify-center text-2xl">
                          {course.thumbnail}
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-900">{course.title}</h3>
                          <p className="text-sm text-slate-500">
                            {course.lessons} lessons • {course.students.toLocaleString()} students
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        {course.rating && (
                          <div className="flex items-center gap-1 text-amber-500">
                            <span>⭐</span>
                            <span className="font-semibold">{course.rating}</span>
                          </div>
                        )}
                        <div className="text-right">
                          <p className="font-semibold text-slate-900">{course.revenue}</p>
                          <span className={`badge ${course.status === 'published' ? 'badge-success' : 'badge-pending'}`}>
                            {course.status}
                          </span>
                        </div>
                        <Link href={`/courses/${course.id}`} className="btn-secondary btn-sm">
                          Edit
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Recent Submissions Table */}
              <div className="mt-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-bold text-slate-900">Recent Submissions</h2>
                  <Link href="/submissions" className="text-sm text-violet-600 hover:text-violet-700 font-medium">
                    View all →
                  </Link>
                </div>
                <div className="table-container">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Student</th>
                        <th>Assignment</th>
                        <th>Course</th>
                        <th>Time</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentSubmissions.map((sub) => (
                        <tr key={sub.id}>
                          <td>
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center text-xs font-semibold text-violet-600">
                                {sub.avatar}
                              </div>
                              <span className="font-medium text-slate-900">{sub.student}</span>
                            </div>
                          </td>
                          <td className="text-slate-600">{sub.assignment}</td>
                          <td className="text-slate-500">{sub.course}</td>
                          <td className="text-slate-500">{sub.submitted}</td>
                          <td>
                            <span className={`badge ${sub.status === 'graded' ? 'badge-success' : 'badge-warning'}`}>
                              {sub.status === 'graded' ? `Graded: ${sub.score}` : 'Pending'}
                            </span>
                          </td>
                          <td>
                            <Link href={`/submissions/${sub.id}`} className="text-violet-600 hover:text-violet-700 font-medium text-sm">
                              {sub.status === 'pending' ? 'Grade' : 'View'}
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <div className="card">
                <h2 className="text-lg font-bold text-slate-900 mb-4">Quick Actions</h2>
                <div className="space-y-3">
                  {quickActions.map((action) => (
                    <Link key={action.href} href={action.href} className="action-card">
                      <div className="action-card-icon">{action.icon}</div>
                      <div className="action-card-content">
                        <div className="action-card-title">{action.title}</div>
                        <div className="action-card-desc">{action.desc}</div>
                      </div>
                      <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Pending Reviews */}
              <div className="card">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-bold text-slate-900">Pending Reviews</h2>
                  <span className="badge-warning">{recentSubmissions.filter(s => s.status === 'pending').length}</span>
                </div>
                <div className="space-y-3">
                  {recentSubmissions.filter(s => s.status === 'pending').map((sub) => (
                    <div key={sub.id} className="p-3 rounded-xl bg-amber-50 border border-amber-100">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-sm font-semibold text-slate-900">{sub.student}</p>
                      </div>
                      <p className="text-xs text-slate-600">{sub.assignment}</p>
                      <p className="text-xs text-slate-400 mt-1">{sub.submitted}</p>
                    </div>
                  ))}
                </div>
                <Link href="/submissions?status=pending" className="btn-primary btn-sm w-full justify-center mt-4">
                  Grade All Pending
                </Link>
              </div>

              {/* Earnings Card */}
              <div className="card-dark">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Monthly Earnings</h3>
                  <span className="text-emerald-400 text-sm">+18%</span>
                </div>
                <p className="text-3xl font-bold mb-2">₨ 47,500</p>
                <p className="text-sm text-slate-400 mb-4">From 2 courses • 2,139 students</p>
                <Link href="/earnings" className="btn btn-sm bg-white/10 text-white hover:bg-white/20 w-full justify-center">
                  View Details
                </Link>
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
            <a href={STUDENT_URL} className="portal-link portal-link-student">
              <span className="w-6 h-6 rounded-lg bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-600">S</span>
              <span>Student View</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
