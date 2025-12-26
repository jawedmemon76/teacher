'use client';

import Link from 'next/link';

const LANDING_URL = process.env.NEXT_PUBLIC_LANDING_URL || 'http://localhost:3000';

const sidebarLinks = [
  { label: 'Dashboard', href: '/', icon: '🏠', active: true },
  { label: 'My Courses', href: '/courses', icon: '📚', active: false },
  { label: 'Question Bank', href: '/questions', icon: '❓', active: false },
  { label: 'Students', href: '/students', icon: '👥', active: false },
  { label: 'Assignments', href: '/assignments', icon: '📝', active: false },
  { label: 'Analytics', href: '/analytics', icon: '📊', active: false },
  { label: 'Earnings', href: '/earnings', icon: '💰', active: false },
  { label: 'Settings', href: '/settings', icon: '⚙️', active: false },
];

const myCourses = [
  {
    id: 1,
    title: 'Class 10 Physics Complete',
    students: 1247,
    lessons: 45,
    status: 'published',
    rating: 4.8,
  },
  {
    id: 2,
    title: 'MDCAT Physics Crash Course',
    students: 892,
    lessons: 32,
    status: 'published',
    rating: 4.9,
  },
  {
    id: 3,
    title: 'O-Level Physics Topical',
    students: 0,
    lessons: 18,
    status: 'draft',
    rating: null,
  },
];

const recentSubmissions = [
  { id: 1, student: 'Ali Khan', course: 'Class 10 Physics', assignment: 'Chapter 7 Quiz', submitted: '2 hours ago', status: 'pending' },
  { id: 2, student: 'Sara Ahmed', course: 'MDCAT Physics', assignment: 'Mock Test #4', submitted: '5 hours ago', status: 'graded' },
  { id: 3, student: 'Zain Malik', course: 'Class 10 Physics', assignment: 'Worksheet 12', submitted: 'Yesterday', status: 'pending' },
];

const stats = [
  { label: 'Total Students', value: '2,139', change: '+124 this month', icon: '👥', color: 'bg-violet-100' },
  { label: 'Active Courses', value: '3', change: '2 published', icon: '📚', color: 'bg-emerald-100' },
  { label: 'Questions Created', value: '1,847', change: '+89 this week', icon: '❓', color: 'bg-purple-100' },
  { label: 'Total Earnings', value: '₨ 47,500', change: 'This month', icon: '💰', color: 'bg-amber-100' },
];

export default function TeacherDashboard() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="p-6 border-b border-slate-800">
          <a href={LANDING_URL} className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-violet-700 flex items-center justify-center">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <div>
              <span className="font-bold text-white">teacher</span>
              <span className="text-violet-400">.ac.pk</span>
              <p className="text-xs text-slate-500">Educator Portal</p>
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

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center">
              <span className="text-white font-medium">DF</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">Dr. Fatima</p>
              <p className="text-xs text-slate-500 truncate">Physics Expert</p>
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
              <h1 className="text-2xl font-bold text-slate-900">Teacher Dashboard</h1>
              <p className="text-slate-500">Manage your courses and track student progress</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-slate-500 hover:text-slate-700">
                <span className="text-xl">🔔</span>
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <Link href="/courses/new" className="btn-primary">
                <span className="mr-2">➕</span>
                Create Course
              </Link>
            </div>
          </div>
        </header>

        <div className="p-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {stats.map((stat) => (
              <div key={stat.label} className="card">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center text-2xl`}>
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">{stat.label}</p>
                    <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                    <p className="text-xs text-slate-500">{stat.change}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* My Courses */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-slate-900">My Courses</h2>
                <Link href="/courses" className="text-sm text-violet-600 hover:text-violet-700 font-medium">
                  View all →
                </Link>
              </div>
              <div className="space-y-4">
                {myCourses.map((course) => (
                  <div key={course.id} className="card card-hover">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-100 to-violet-200 flex items-center justify-center text-2xl">
                          📚
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
                            <span className="font-medium">{course.rating}</span>
                          </div>
                        )}
                        <span className={`badge ${course.status === 'published' ? 'badge-success' : 'badge-pending'}`}>
                          {course.status}
                        </span>
                        <Link href={`/courses/${course.id}`} className="btn-secondary text-sm">
                          Edit
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-6">
              <div className="card">
                <h2 className="text-lg font-semibold text-slate-900 mb-4">Quick Actions</h2>
                <div className="space-y-3">
                  <Link
                    href="/courses/new"
                    className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 hover:border-violet-300 hover:bg-violet-50 transition-colors"
                  >
                    <span className="text-xl">📚</span>
                    <span className="text-sm font-medium text-slate-700">Create New Course</span>
                  </Link>
                  <Link
                    href="/questions/new"
                    className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 hover:border-violet-300 hover:bg-violet-50 transition-colors"
                  >
                    <span className="text-xl">❓</span>
                    <span className="text-sm font-medium text-slate-700">Add Questions</span>
                  </Link>
                  <Link
                    href="/papers/new"
                    className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 hover:border-violet-300 hover:bg-violet-50 transition-colors"
                  >
                    <span className="text-xl">📝</span>
                    <span className="text-sm font-medium text-slate-700">Create Guess Paper</span>
                  </Link>
                  <Link
                    href="/live"
                    className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 hover:border-violet-300 hover:bg-violet-50 transition-colors"
                  >
                    <span className="text-xl">🎥</span>
                    <span className="text-sm font-medium text-slate-700">Start Live Session</span>
                  </Link>
                </div>
              </div>

              {/* Pending Reviews */}
              <div className="card">
                <h2 className="text-lg font-semibold text-slate-900 mb-4">Pending Reviews</h2>
                <div className="space-y-3">
                  {recentSubmissions.filter(s => s.status === 'pending').map((submission) => (
                    <div key={submission.id} className="p-3 rounded-lg bg-slate-50">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-sm font-medium text-slate-900">{submission.student}</p>
                        <span className="badge-warning">Pending</span>
                      </div>
                      <p className="text-xs text-slate-500">{submission.assignment}</p>
                      <p className="text-xs text-slate-400 mt-1">{submission.submitted}</p>
                    </div>
                  ))}
                </div>
                <Link
                  href="/submissions"
                  className="block text-center text-sm text-violet-600 hover:text-violet-700 mt-4 font-medium"
                >
                  View all submissions →
                </Link>
              </div>
            </div>
          </div>

          {/* Recent Submissions Table */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">Recent Submissions</h2>
            <div className="table-container">
              <table className="table">
                <thead>
                  <tr>
                    <th>Student</th>
                    <th>Course</th>
                    <th>Assignment</th>
                    <th>Submitted</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {recentSubmissions.map((submission) => (
                    <tr key={submission.id}>
                      <td className="font-medium">{submission.student}</td>
                      <td>{submission.course}</td>
                      <td>{submission.assignment}</td>
                      <td className="text-slate-500">{submission.submitted}</td>
                      <td>
                        <span className={`badge ${submission.status === 'graded' ? 'badge-success' : 'badge-warning'}`}>
                          {submission.status}
                        </span>
                      </td>
                      <td>
                        <Link href={`/submissions/${submission.id}`} className="text-violet-600 hover:text-violet-700 font-medium">
                          {submission.status === 'pending' ? 'Grade' : 'View'}
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
