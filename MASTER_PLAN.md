# MASTER_PLAN.md — Pakistan National Digital Learning & Exam Platform

> **Single planning document for the entire project. All planning, architecture, and roadmap changes MUST be made here only.**

---

## 1. Overview

**The Coaching Platform** is a comprehensive, exam-focused digital learning platform serving Pakistan's learners at every educational stage — from basic literacy through advanced professional exam preparation.

### Brand Domains (THREE PUBLIC DOMAINS)
- **coaching.ac.pk** — Public Marketing & Discovery Website
- **student.ac.pk** — Student Learning Portal (main app)
- **teacher.ac.pk** — Teacher/Instructor Portal

### Core Philosophy
- **Exam-oriented**: Every feature serves exam success
- **Accessible & affordable**: Nominal fees, mobile-first, low-bandwidth optimized
- **Quality-assured**: Content reviewed by subject experts
- **Inclusive**: Voice-guided literacy track for non-readers
- **Single Platform**: Three frontends, ONE unified backend

### Who It Serves
- **Illiterate learners** (children and adults) starting from zero
- **School students** (Middle School 6-8, Matric 9-10, Intermediate 11-12)
- **O-Level & A-Level students** (Cambridge/international curriculum)
- **University students** (supplemental courses)
- **Professional exam candidates** (MDCAT, ECAT, CSS, etc.)
- **Teachers & content experts** (course creation, assessment management)
- **Institution administrators** (schools, coaching centers)
- **Parents/guardians** (progress monitoring)

---

## 2. Architecture Summary

### CRITICAL: Absolute Unity Requirement

Even though there are THREE domains:

**THERE MUST BE ONLY ONE PLATFORM BACKEND**

✔ ONE API  
✔ ONE database  
✔ ONE authentication system  
✔ ONE authorization system  
✔ ONE domain model  
✔ ONE user identity per person  

DO NOT build three backends.  
DO NOT split the database.  
DO NOT duplicate services.

### Domain Structure (Multi-Domain Platform)

| Domain | App | Purpose | Port (Dev) |
|--------|-----|---------|------------|
| `coaching.ac.pk` | `apps/web-public` | Public marketing & discovery | 3000 |
| `student.ac.pk` | `apps/web-student` | Student learning portal | 3002 |
| `teacher.ac.pk` | `apps/web-teacher` | Teacher/instructor portal | 3003 |
| `admin.coaching.ac.pk` | `apps/admin` | Platform administration | 3001 |
| `api.coaching.ac.pk` | `apps/api` | Unified backend API | 4000 |
| `*.coaching.ac.pk` | (Future) | Institution subdomains | — |

### Why Three Separate Domains?

```
┌─────────────────────────────────────────────────────────────────┐
│                    COACHING PLATFORM                             │
│                 (Single Unified Backend)                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   coaching.ac.pk        student.ac.pk        teacher.ac.pk      │
│   ┌─────────────┐      ┌─────────────┐      ┌─────────────┐     │
│   │  Marketing  │      │   Student   │      │   Teacher   │     │
│   │  & Landing  │      │   Portal    │      │   Portal    │     │
│   │             │      │             │      │             │     │
│   │  "Pakistan's│      │  Learn      │      │  Teach      │     │
│   │  Premier    │      │  Practice   │      │  Create     │     │
│   │  Coaching"  │      │  Succeed    │      │  Inspire    │     │
│   └──────┬──────┘      └──────┬──────┘      └──────┬──────┘     │
│          │                    │                    │             │
│          │    ┌───────────────┴────────────────────┘             │
│          │    │                                                  │
│          └────┴────────────────┐                                 │
│                                │                                 │
│                    ┌───────────┴───────────┐                     │
│                    │  api.coaching.ac.pk   │                     │
│                    │   (Unified Backend)   │                     │
│                    └───────────┬───────────┘                     │
│                                │                                 │
│              ┌─────────────────┼─────────────────┐               │
│              ▼                 ▼                 ▼               │
│         PostgreSQL          Redis      admin.coaching.ac.pk     │
└─────────────────────────────────────────────────────────────────┘
```

**Benefits:**
- **Clear branding**: Each domain speaks directly to its audience
- **SEO optimization**: Domain names match search intent
- **Trust**: `student.ac.pk` feels built FOR students
- **Simplicity**: Easy to remember, easy to share
- **Unified backend**: Single API serves all three frontends

### Monorepo Structure (pnpm workspaces)

```
coaching/                        # Repository
├── apps/
│   ├── web-public/    # Public site (coaching.ac.pk)
│   ├── web-student/   # Student portal (student.ac.pk)
│   ├── web-teacher/   # Teacher portal (teacher.ac.pk)
│   ├── admin/         # Admin panel (admin.coaching.ac.pk)
│   └── api/           # Backend API (api.coaching.ac.pk)
├── packages/
│   ├── types/         # Shared TypeScript types
│   ├── ui/            # Shared UI components
│   └── utils/         # Shared utilities
├── MASTER_PLAN.md     # This file (ONLY planning doc)
├── pnpm-workspace.yaml
├── package.json
├── .gitignore
└── .github/
    └── workflows/
        └── ci.yml
```

### Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend (all apps)** | Next.js 15+, React 19, TypeScript, TailwindCSS |
| **Backend (api)** | NestJS, Prisma ORM, PostgreSQL, Redis |
| **Auth** | JWT (access + refresh tokens), device-bound sessions |
| **Deployment** | Railway (Railpack builder), auto-deploy on push |
| **CDN/Media** | Cloudflare (streams, signed URLs) |

### SPA Requirement
- All navigation is client-side (no full page reloads)
- Next.js App Router for routing
- React Server Components where appropriate, but SPA UX maintained
- PWA-ready with service worker and manifest

---

## 3. Single Sign-On (SSO) Requirement

- ONE user identity across all apps
- Roles control access
- Teachers may also enroll as students
- Students cannot access teacher tools without role upgrade

---

## 4. STRICT SINGLE-DEVICE LOGIN RULE (MANDATORY)

**This is a PERMANENT, NON-NEGOTIABLE POLICY for STUDENTS:**

> **A student account may only be actively logged in on ONE DEVICE at a time.**

This must be enforced at the authentication/session layer.

### Rules
- ✔ Applies to STUDENT role  
- ✔ Does NOT apply to teachers/admins unless explicitly stated later  

### Behavior
- Login on Device A → session active
- Login on Device B → session on A MUST be revoked immediately
- All tokens MUST be device-bound

### Implementation Requirements
- ✔ Maintain device-bound session records  
- ✔ JWT or session token MUST embed device identifier  
- ✔ Backend MUST check both user & device before authorizing  
- ✔ Redis/Postgres MUST support session invalidation  
- ✔ All student API endpoints MUST enforce device binding  

### Failure Cases
- If device mismatches → request rejected  
- UI must show: "You are signed in on another device. Please login again on this one."

### Recovery
- ✔ Admin/support reset flow MUST exist  
- ✔ Provide secure device reset  
- ✔ Maintain audit logs

### Purpose
This rule supports:
- Cheating prevention
- Account-sharing prevention
- Exam integrity

**This is core platform security policy.**

---

## 5. Domain Model (High Level)

### Core Entities

- **User** — All platform users (students, teachers, admins, parents)
- **Role / UserRole** — Role assignments (STUDENT, TEACHER, ADMIN, PARENT, CONTENT_AUTHOR, REVIEWER)
- **Session** — Auth sessions with device binding (single-device enforcement)
- **Institution** — Schools, coaching centers (multi-tenant)
- **Course** — Learning container (e.g., "Class 10 Physics")
- **Module** — Course subdivision (e.g., "Chapter 1: Motion")
- **Lesson** — Individual learning unit within a module
- **Content** — Lesson content items (video, text, PDF, audio)
- **Question** — Assessment item (MCQ, short answer, essay, etc.)
- **QuestionBank** — Organized collection of questions by subject/topic
- **Quiz / Assignment** — Assessment container
- **Paper** — Past paper, guess paper, or mock exam
- **Enrollment** — User ↔ Course relationship
- **Submission** — Student answers/uploads for assessments
- **Grade** — Score and feedback for submissions
- **Progress** — User progress tracking per course/module/lesson
- **Notification** — User notifications

### Entity Relationships (Simplified)

```
User ─┬─► Enrollment ─► Course ─► Module ─► Lesson ─► Content
      │                   │
      │                   └─► Quiz/Assignment ─► Question
      │
      └─► Submission ─► Grade
      
Institution ─► User (scoped)
            ─► Course (private courses)

Session ─► User (device-bound, single active per student)

Paper ─► Question (past/guess/mock composition)
```

---

## 6. Phase Plan

### Phase 0 — Repository & Tooling ✅ COMPLETE
**Goals**: Establish monorepo foundation with proper tooling

**Scope**:
- [x] Initialize Git repo with GitHub remote
- [x] Create pnpm monorepo structure
- [x] Configure pnpm-workspace.yaml
- [x] Add root package.json with workspace scripts
- [x] Add comprehensive .gitignore
- [x] Add CI workflow (.github/workflows/ci.yml)
- [x] Create MASTER_PLAN.md (this document)

---

### Phase 1 — App Skeletons & API Base ✅ COMPLETE
**Goals**: Scaffold all applications with basic configuration

**Scope**:
- [x] Create `apps/web-public` (Next.js 15+, public marketing site)
- [x] Create `apps/web-student` (Next.js 15+, student learning portal)
- [x] Create `apps/web-teacher` (Next.js 15+, teacher/instructor portal)
- [x] Create `apps/admin` (Next.js 15+, platform admin)
- [x] Create `apps/api` (NestJS with TypeScript)
- [x] Configure `next.config.ts` for Railway (standalone output, AVIF/WebP)
- [x] Add `railway.json` to each app
- [x] Implement `/health` endpoint in API
- [x] Set up Prisma with complete schema
- [x] Create shared packages (types, ui, utils)

---

### Phase 2 — Authentication & Roles
**Goals**: Implement secure auth with role-based access control AND single-device enforcement

**Scope**:
- User entity with Prisma
- Role/UserRole entities
- Session entity with device binding
- JWT auth (access + refresh tokens)
- Auth module in API (register, login, refresh, logout)
- Password hashing (bcrypt)
- **Single-device session enforcement for students**
- Auth guards and decorators
- Basic auth UI in all frontend apps (login, register pages)

**Tech Impact**:
- Prisma schema: User, Role, UserRole, Session tables
- Session table: deviceId, userAgent, ipAddress, isActive, lastActivity
- API: auth module, guards, JWT strategy, device validation middleware
- All apps: auth pages, auth context/hooks

**Acceptance Criteria**:
- User can register and login
- JWT tokens issued and validated
- Refresh token flow works
- **Single-device enforcement active for students**
- Role-based route protection works

---

### Phase 3 — Core LMS Entities
**Goals**: Build foundational LMS data structures

**Scope**:
- Institution entity (multi-tenant)
- Course, Module, Lesson entities
- Content entity (polymorphic: video, text, PDF, audio)
- Enrollment entity
- Progress tracking entity
- CRUD APIs for courses, modules, lessons
- Basic course listing and detail pages

---

### Phase 4 — Assessment Engine
**Goals**: Implement quiz/exam functionality

**Scope**:
- Question entity with types (MCQ, short, essay, etc.)
- QuestionBank entity
- Quiz/Assignment entity
- Submission and Grade entities
- Quiz taking flow (timed, untimed modes)
- Auto-grading for objective questions
- Manual grading interface for subjective
- Past paper entity and archive
- Guess paper workflow (draft → review → publish)
- Mock exam generation

---

### Phase 5 — Analytics & Dashboards
**Goals**: Rich progress tracking and insights

**Scope**:
- Student dashboard with progress overview
- Teacher dashboard with class analytics
- Admin dashboard with platform metrics
- Performance charts (score trends, topic mastery)
- Comparative analytics (percentile among peers)
- Score prediction (based on mock performance)
- Notification system

---

### Phase 6 — Content Authoring & Management
**Goals**: Enable teachers to create and manage content

---

### Phase 7 — Literacy Track
**Goals**: Voice-guided learning for non-readers

---

### Phase 8 — Multi-Tenant & Institutions
**Goals**: School/coaching center support

---

### Phase 9 — PWA & Offline
**Goals**: Full offline capability

---

### Phase 10 — Professional Exam Prep (MDCAT, etc.)
**Goals**: Specialized features for competitive exams

---

## 7. Environment Variables Reference

### API Service (Railway)
```env
DATABASE_URL=${{Postgres.DATABASE_URL}}
REDIS_URL=${{Redis.REDIS_URL}}
NODE_ENV=production
API_URL=https://api.coaching.ac.pk
CORS_ORIGINS=https://coaching.ac.pk,https://student.ac.pk,https://teacher.ac.pk,https://admin.coaching.ac.pk
UPLOAD_PATH=/app/uploads/images
CDN_BASE_URL=https://api.coaching.ac.pk
JWT_ACCESS_SECRET=<128 char hex>
JWT_REFRESH_SECRET=<128 char hex>
```

### Frontend Services (Railway)

**Web Public (coaching.ac.pk)**:
```env
NODE_ENV=production
NEXT_PUBLIC_API_URL=https://api.coaching.ac.pk
NEXT_PUBLIC_STUDENT_URL=https://student.ac.pk
NEXT_PUBLIC_TEACHER_URL=https://teacher.ac.pk
```

**Web Student (student.ac.pk)**:
```env
NODE_ENV=production
NEXT_PUBLIC_API_URL=https://api.coaching.ac.pk
NEXT_PUBLIC_LANDING_URL=https://coaching.ac.pk
```

**Web Teacher (teacher.ac.pk)**:
```env
NODE_ENV=production
NEXT_PUBLIC_API_URL=https://api.coaching.ac.pk
NEXT_PUBLIC_LANDING_URL=https://coaching.ac.pk
```

**Admin (admin.coaching.ac.pk)**:
```env
NODE_ENV=production
NEXT_PUBLIC_API_URL=https://api.coaching.ac.pk
```

---

## 8. Railway Services Configuration

### Service Summary

| Service | Root Directory | Watch Paths | Domain |
|---------|---------------|-------------|--------|
| `web-public` | `apps/web-public` | `apps/web-public/**`, `packages/**` | `coaching.ac.pk` |
| `web-student` | `apps/web-student` | `apps/web-student/**`, `packages/**` | `student.ac.pk` |
| `web-teacher` | `apps/web-teacher` | `apps/web-teacher/**`, `packages/**` | `teacher.ac.pk` |
| `admin` | `apps/admin` | `apps/admin/**`, `packages/**` | `admin.coaching.ac.pk` |
| `api` | `apps/api` | `apps/api/**`, `packages/**` | `api.coaching.ac.pk` |
| `postgres` | — | — | (internal) |
| `redis` | — | — | (internal) |

### DNS Records

**For coaching.ac.pk (at registrar):**
```
CNAME  @       → <railway-web-public>.up.railway.app
CNAME  www     → <railway-web-public>.up.railway.app
CNAME  admin   → <railway-admin>.up.railway.app
CNAME  api     → <railway-api>.up.railway.app
```

**For student.ac.pk (at registrar):**
```
CNAME  @       → <railway-web-student>.up.railway.app
CNAME  www     → <railway-web-student>.up.railway.app
```

**For teacher.ac.pk (at registrar):**
```
CNAME  @       → <railway-web-teacher>.up.railway.app
CNAME  www     → <railway-web-teacher>.up.railway.app
```

---

## 9. Portal Theming

Each portal has a distinct visual identity:

| Portal | Primary Color | Theme |
|--------|--------------|-------|
| Web Public | Emerald (#059669) | Trust, education, growth |
| Web Student | Blue (#2563eb) | Learning, calm, focus |
| Web Teacher | Violet (#9333ea) | Expertise, creativity |
| Admin | Emerald (#059669) | Consistent with brand |

---

## 10. Revision History

| Date | Change | Author |
|------|--------|--------|
| 2025-12-26 | Initial MASTER_PLAN.md created | AI Agent |
| 2025-12-26 | Added separate portals (student, teacher) architecture | AI Agent |
| 2025-12-26 | Changed to multi-domain: coaching.ac.pk, student.ac.pk, teacher.ac.pk | AI Agent |
| 2025-12-26 | Restructured apps: web-public, web-student, web-teacher per scope doc | AI Agent |
| 2025-12-26 | Added STRICT SINGLE-DEVICE LOGIN RULE for students | AI Agent |

---

*This document is the ONLY planning/spec/architecture document for the Coaching Platform. Do not create additional planning files.*
