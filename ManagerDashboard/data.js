// ============================================================
//  DEVANTRA ERP — Mock API Service
//  Fetches dashboard data dynamically
// ============================================================

/**
 * Simulates a network request to fetch dashboard data.
 * Replace this implementation with an actual `fetch('api/endpoint')` later.
 * 
 * @returns {Promise<Object>} The dashboard data payload.
 */
async function fetchDashboardData() {
  // Simulate network latency (e.g. 500ms delay)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        // ── Header / User ──────────────────────────────────────────
        user: {
          name: "Amit Khanna",
          role: "Manager",
          avatarUrl: "https://ui-avatars.com/api/?name=Amit+Khanna&background=e2e8f0&color=475569",
          lastLogin: "25 Apr 2024, 9:50 AM",
          location: "Gurugram, India"
        },

        // ── Sidebar Navigation ─────────────────────────────────────
        navItems: [
          { icon: "ic-layout", label: "Dashboard", active: false },
          { icon: "ic-users", label: "My Team", active: true },
          { icon: "ic-user-friends", label: "Members", active: false },
          { icon: "ic-calendar", label: "Attendance", active: false },
          { icon: "ic-folder", label: "Projects", active: false },
          { icon: "ic-bell", label: "Announcements", active: false },
          { icon: "ic-file", label: "Requests", active: false },
          { icon: "ic-bar-chart", label: "Reports", active: false },
          { icon: "ic-settings", label: "Settings", active: false }
        ],

        // ── Stats Cards ────────────────────────────────────────────
        stats: [
          { value: "12", label: "Team Members", iconClass: "ic-users", colorClass: "stat-icon-cyan" },
          { value: "157", label: "Active Tasks", iconClass: "ic-folder", colorClass: "stat-icon-orange" },
          { value: "42", label: "Pend Approval", iconClass: "ic-tasks", colorClass: "stat-icon-blue" },
          { value: "29", label: "Requests", iconClass: "ic-file", colorClass: "stat-icon-green" },
          { value: "88%", label: "Attendance Rate", iconClass: "ic-calendar", colorClass: "stat-icon-blue" }
        ],

        rating: {
          value: "4.5",
          stars: "★★★★☆",
          vsMonth: "+12% vs month",
          aiNotifications: true
        },

        // ── Action Buttons ─────────────────────────────────────────
        actionButtons: [
          { id: "btnAssignTask", icon: "ic-clipboard", label: "Assign Task", colorClass: "btn-blue" },
          { id: "btnCreateAnnoun", icon: "ic-bell", label: "Create Announcement", colorClass: "btn-blue" },
          { id: "btnApproveReq", icon: "ic-check-circle", label: "Approve Requests", colorClass: "btn-yellow" },
          { id: "btnViewReports", icon: "ic-chart-line", label: "View Reports", colorClass: "btn-teal" }
        ],

        // ── Team Members Panel ────────────────────────────────────
        teamSummary: {
          total: 12,
          presentPercent: "89%",
          onLeave: 2
        },

        teamMembers: [
          {
            name: "Chirag Saxena",
            role: "HR",
            roleDesc: "[Havelopement]",
            status: "present",
            statusLabel: "Present"
          },
          {
            name: "Priya Sinha",
            role: "HR",
            roleDesc: "",
            status: "present",
            statusLabel: "Present"
          },
          {
            name: "Aman Joshi",
            role: "Developee, Devcnrment",
            roleDesc: "",
            status: "present",
            statusLabel: "Present"
          },
          {
            name: "Rahul Yadav",
            role: "Student, CAF",
            roleDesc: "",
            status: "leave",
            statusLabel: "On Leave"
          },
          {
            name: "Devika Thakur",
            role: "HR",
            roleDesc: "",
            status: "leave",
            statusLabel: "On Leave"
          }
        ],

        // ── Leave & Approval Requests ─────────────────────────────
        leaveRequests: [
          { icon: "ic-calendar", label: "Leave Requests", count: 2, badgeClass: "bg-blue" },
          { icon: "ic-file", label: "Task Extensions", count: 1, badgeClass: "bg-blue-light" }
        ],

        // ── Today's Summary ────────────────────────────────────────
        todaySummary: [
          { value: "4", label: "Tasks Due Today", style: "border-pill", textClass: "" },
          { value: "2", label: "Overdue Tasks", style: "bg-light-blue", textClass: "text-blue" },
          { value: "3", label: "Approval Requests", style: "border-pill", textClass: "" },
          { value: null, label: "1 Seavens month", style: "bg-grey", icon: "ic-calendar" }
        ],

        // ── Recent Team Activity ───────────────────────────────────
        recentActivity: [
          {
            name: "Chirag Saxena",
            action: "commented on",
            target: "Bug Fixes",
            targetIsPill: true,
            time: "Peprentent or a"
          },
          {
            name: "Priya Sinha",
            action: "marked",
            target: "Updated Guidelines",
            targetIsPill: false,
            time: "Festey, ll/f to 3M"
          },
          {
            name: "Aman Joshi",
            action: "started",
            target: "Develop Employee Dashboard",
            targetIsPill: false,
            time: "Today, 5:35 AM"
          }
        ],

        // ── Quick Actions ──────────────────────────────────────────
        quickActions: [
          { icon: "ic-clipboard", label: "Assign Task", colorClass: "qa-blue" },
          { icon: "ic-calendar", label: "Manage Leaves", colorClass: "qa-yellow" },
          { icon: "ic-user-plus", label: "Add Member", colorClass: "qa-teal" },
          { icon: "ic-chart-line", label: "View Reports", colorClass: "qa-green" }
        ],

        // ── Active Tasks ───────────────────────────────────────────
        activeTasks: [
          {
            assignee: "Prassornt Nerive",
            title: "Quarterly Budget Review",
            due: "27 Apr 2024",
            dueIsToday: false
          },
          {
            assignee: "Aman Joshi",
            title: "Develop Employee Dashboard",
            due: "23 Apr 2024",
            dueIsToday: false
          },
          {
            assignee: "Devika Thakur",
            title: "Prepare Presentation Slides",
            due: "Today",
            dueIsToday: true
          },
          {
            assignee: "Rahul Yadav",
            title: "Internship Feedback Session",
            due: "Today",
            dueIsToday: true
          }
        ],

        // ── Progress / Rating Panel ────────────────────────────────
        progress: {
          tasksCompleted: { percent: 92, color: "blue" },
          attendance: { percent: 88, color: "green" }
        },

        progressRating: {
          stars: "★★★★☆",
          value: "4.5",
          vsMonth: "+12%",
          vsMonthLabel: "vs last month"
        }
      });
    }, 500); // 500ms delay to simulate an API response
  });
}