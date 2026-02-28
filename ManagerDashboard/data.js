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
          { icon: "fas fa-th-large", label: "Dashboard", active: false },
          { icon: "fas fa-users", label: "My Team", active: true },
          { icon: "fas fa-user-friends", label: "Members", active: false },
          { icon: "fas fa-calendar-alt", label: "Attendance", active: false },
          { icon: "fas fa-briefcase", label: "Projects", active: false },
          { icon: "fas fa-bullhorn", label: "Announcements", active: false },
          { icon: "fas fa-file-alt", label: "Requests", active: false },
          { icon: "fas fa-chart-bar", label: "Reports", active: false },
          { icon: "fas fa-cog", label: "Settings", active: false }
        ],

        // ── Stats Cards ────────────────────────────────────────────
        stats: [
          { value: "12", label: "Team Members", iconClass: "fas fa-users", colorClass: "stat-icon-cyan" },
          { value: "157", label: "Active Tasks", iconClass: "fas fa-briefcase", colorClass: "stat-icon-orange" },
          { value: "42", label: "Pend Approval", iconClass: "fas fa-check-square", colorClass: "stat-icon-blue" },
          { value: "29", label: "Requests", iconClass: "fas fa-handshake", colorClass: "stat-icon-green" },
          { value: "88%", label: "Attendance Rate", iconClass: "fas fa-id-card", colorClass: "stat-icon-blue" }
        ],

        rating: {
          value: "4.5",
          stars: "★★★★☆",
          vsMonth: "+12% vs month",
          aiNotifications: true
        },

        // ── Action Buttons ─────────────────────────────────────────
        actionButtons: [
          { id: "btnAssignTask", icon: "fas fa-clipboard-list", label: "Assign Task", colorClass: "btn-blue" },
          { id: "btnCreateAnnoun", icon: "fas fa-bullhorn", label: "Create Announcement", colorClass: "btn-blue" },
          { id: "btnApproveReq", icon: "fas fa-check-circle", label: "Approve Requests", colorClass: "btn-yellow" },
          { id: "btnViewReports", icon: "fas fa-chart-line", label: "View Reports", colorClass: "btn-teal" }
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
          { icon: "far fa-calendar-alt", label: "Leave Requests", count: 2, badgeClass: "bg-blue" },
          { icon: "far fa-plus-square", label: "Task Extensions", count: 1, badgeClass: "bg-blue-light" }
        ],

        // ── Today's Summary ────────────────────────────────────────
        todaySummary: [
          { value: "4", label: "Tasks Due Today", style: "border-pill", textClass: "" },
          { value: "2", label: "Overdue Tasks", style: "bg-light-blue", textClass: "text-blue" },
          { value: "3", label: "Approval Requests", style: "border-pill", textClass: "" },
          { value: null, label: "1 Seavens month", style: "bg-grey", icon: "fas fa-calendar-alt" }
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
          { icon: "fas fa-clipboard-list", label: "Assign Task", colorClass: "qa-blue" },
          { icon: "fas fa-calendar-alt", label: "Manage Leaves", colorClass: "qa-yellow" },
          { icon: "fas fa-user-plus", label: "Add Member", colorClass: "qa-teal" },
          { icon: "fas fa-user-plus", label: "Add Member", colorClass: "qa-teal" },
          { icon: "fas fa-chart-line", label: "View Reports", colorClass: "qa-green" }
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