/* ===========================
   DASHBOARD MOCK DATA
=========================== */
const dashboardData = {
  user: {
    name: "Rohan Kapoor",
    role: "Admin",
    lastLogin: "25 Apr 2024, 10:10 AM",
    location: "Gurugram, India"
  },

  stats: [
    { id: "active-members", label: "Active Members", value: "261", color: "#2563EB", progress: null, extra: null, chartBars: [30, 50, 40, 70, 60, 80, 55] },
    { id: "present", label: "Present", value: "197", color: "#2563EB", progress: null, extra: null, chartBars: [40, 60, 50, 80, 70, 90, 65] },
    { id: "absent", label: "Absent", value: "21", color: "#EF4444", progress: null, extra: null, chartBars: [20, 15, 25, 10, 18, 12, 20] },
    { id: "on-leave", label: "On Leave", value: "113", color: "#F59E0B", progress: null, extra: null, chartBars: null },
    { id: "pending", label: "Pending", value: "32", color: "#10B981", progress: 85, extra: "32", chartBars: null },
    { id: "completed", label: "Completed", value: "197", color: "#F59E0B", progress: 65, extra: "174", chartBars: null },
    { id: "new-today", label: "", value: "5", color: "#EF4444", progress: null, extra: "+ 3 new today", chartBars: null }
  ],

  actionButtons: [
    { label: "Add Task", icon: "📋" },
    { label: "Post Announcement", icon: "📢" },
    { label: "Generate Report", icon: "📄" },
    { label: "View Activity Log", icon: "📊" },
    { label: "View Activity Log", icon: "📈" }
  ],

  navItems: [
    { label: "Dashboard", icon: "dashboard", active: false },
    { label: "Dashboard", icon: "home", active: true },
    { label: "Members", icon: "users", active: false },
    { label: "Attendance", icon: "calendar", active: false },
    { label: "Projects", icon: "folder", active: false },
    { label: "Announcements", icon: "bell", active: false },
    { label: "Requests", icon: "inbox", active: false },
    { label: "Reports", icon: "bar-chart", active: false },
    { label: "Settings", icon: "settings", active: false },
    { label: "Help Desk", icon: "help-circle", active: false }
  ],

  memberRequests: [
    {
      id: 1,
      name: "Akash Verma",
      role: "Intern",
      manager: "Rohan Rapoor-ynitia",
      status: "approve",
      verified: true,
      initials: "AV",
      color: "#6366F1"
    },
    {
      id: 2,
      name: "Priya Sinha",
      role: "Employee",
      manager: "Rohan Rapoor-ynitia",
      status: "approve",
      verified: true,
      initials: "PS",
      color: "#EC4899"
    },
    {
      id: 3,
      name: "Rahul Yadav",
      role: "Student",
      manager: "Rohan Rapoor admin",
      status: "today",
      verified: true,
      initials: "RY",
      color: "#F59E0B"
    }
  ],

  requestSummary: [
    { label: "Leave Requests", type: "check", count: null },
    { label: "Task Extensions", type: "outline", count: 4 },
    { label: "Access Requests", type: "check", count: null },
    { label: "Task Extensions", type: "outline", count: null }
  ],

  pendingRequests: [
    { label: "Leave Requests", count: 3, color: "#2563EB", pct: 75 },
    { label: "Access Requests", count: 2, color: "#2563EB", pct: 50 },
    { label: "Task Extensions", count: 1, color: "#F59E0B", pct: 25 }
  ],

  activities: [
    { name: "Chirag Saxena", rod: "Intern", role: "Actleat", dot: "#2563EB" },
    { name: "Amit Sharma", rod: "Employee", role: "Getnet", dot: "#F59E0B" },
    { name: "Rahul Yadav", rod: "Student", role: "Normal", dot: "#10B981" },
    { name: "Devika Thakur", rod: "HR", role: "Active", dot: "#10B981" }
  ],

  tasks: [
    {
      id: 1,
      title: "Prepare Project",
      subtitle: "Presentation",
      priority: "How",
      priorityClass: "badge-high",
      dueDate: "27 Apr 2024",
      status: "Aedlue",
      statusClass: "badge-aedlue",
      initials: "PP",
      color: "#6366F1"
    },
    {
      id: 2,
      title: "Approval for",
      subtitle: "Updated Guidelines",
      priority: "Meniben",
      priorityClass: "badge-medium",
      dueDate: "27 Apr 2024",
      status: "Ectuess",
      statusClass: "badge-ectues",
      initials: "AG",
      color: "#10B981"
    },
    {
      id: 3,
      title: "Develop Employee",
      subtitle: "Nenploppoor",
      priority: "In Progress",
      priorityClass: "badge-inprogress",
      dueDate: "25 Apr 2024",
      status: "Predure",
      statusClass: "badge-predure",
      initials: "DE",
      color: "#F59E0B"
    },
    {
      id: 4,
      title: "Quarterly Budget",
      subtitle: "Review",
      priority: "Active",
      priorityClass: "badge-active",
      dueDate: "24 Apr 2024",
      status: "Reque",
      statusClass: "badge-require",
      initials: "QB",
      color: "#EF4444"
    }
  ],

  members: [
    { name: "Chirag Saxena", joined: "25 Apr 2024", status: "Active", initials: "CS" },
    { name: "Priya Sinha", joined: "24 Apr 2024", status: "Active", initials: "PS" },
    { name: "Devika Thakur", joined: "23 Apr 2024", status: "Active", initials: "DT" },
    { name: "Arjun Verma", joined: "25 Apr 2024", status: "Active", initials: "AV" }
  ],

  announcements: [
    {
      id: 1,
      icon: "📅",
      iconBg: "#FEE2E2",
      title: "Friendly Cricket Match This Friday",
      meta: "Moniun Rupoor or (Croigs PM)    Rohan Kapoor"
    },
    {
      id: 2,
      icon: "📝",
      iconBg: "#FEF3C7",
      title: "New Internship Evaluations Started",
      meta: "Rohon Rupoor    Rattlai Rupoor"
    },
    {
      id: 3,
      icon: "📊",
      iconBg: "#DBEAFE",
      title: "Quarterly Performance Reviews",
      meta: "Reate Rupoor    Rohon Kapoor"
    }
  ]
};

/* ===========================
   ICONS SVG HELPERS
=========================== */
const icons = {
  dashboard: `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>`,
  home: `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  users: `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  calendar: `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  folder: `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,
  bell: `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,
  inbox: `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>`,
  "bar-chart": `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
  settings: `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
  "help-circle": `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`
};

/* ===========================
   RENDER FUNCTIONS
=========================== */

// Render sidebar navigation
function renderNav() {
  const nav = document.getElementById('sidebarNav');
  // Remove first duplicate Dashboard
  const navItems = dashboardData.navItems.slice(1);
  navItems.forEach(item => {
    const el = document.createElement('div');
    el.className = `nav-item${item.active ? ' active' : ''}`;
    el.innerHTML = `
      <span class="nav-icon">${icons[item.icon] || icons['home']}</span>
      <span>${item.label}</span>
    `;
    nav.appendChild(el);
  });
}

// Render welcome section
function renderWelcome() {
  const { user } = dashboardData;
  document.getElementById('welcomeTitle').textContent = `Welcome, ${user.name}!`;
  document.getElementById('welcomeSub').innerHTML = `
    Last login: ${user.lastLogin} 
    <span class="sep-bar">|</span> 
    Location: <span class="location">${user.location}</span>
  `;
  document.getElementById('createMemberBtn').textContent = '+ Create New Member';
}

// Mini bar chart helper
function renderMiniChart(bars, color) {
  if (!bars) return '';
  const maxH = 28;
  return `<div class="stat-mini">${bars.map(v => {
    const h = Math.round((v / 100) * maxH);
    return `<div class="stat-bar" style="height:${h}px;background:${color};"></div>`;
  }).join('')}</div>`;
}

// Render stats cards
function renderStats() {
  const container = document.getElementById('statsRow');
  // Use only 6 cards
  const statsToShow = [
    dashboardData.stats[0], // Active Members
    dashboardData.stats[1], // Present
    dashboardData.stats[2], // Absent
    dashboardData.stats[3], // On Leave
    dashboardData.stats[4], // Pending
    dashboardData.stats[5], // Completed
  ];

  statsToShow.forEach((stat, i) => {
    const card = document.createElement('div');
    card.className = 'stat-card';

    let extra = '';
    if (stat.progress !== null && stat.progress !== undefined) {
      extra = `
        <div style="display:flex;align-items:center;gap:6px;margin-top:4px;">
          <div class="stat-progress-bar" style="flex:1;">
            <div class="stat-progress-fill" style="width:${stat.progress}%;background:${stat.color};"></div>
          </div>
          <span class="stat-tag">${stat.extra}</span>
        </div>`;
    } else if (stat.chartBars) {
      extra = renderMiniChart(stat.chartBars, stat.color);
    } else if (stat.extra) {
      extra = `<span class="stat-new-today">${stat.extra}</span>`;
    } else {
      // On leave - envelope icon
      extra = `<div style="font-size:20px;margin-top:4px;">✉️</div>`;
    }

    card.innerHTML = `
      <div class="stat-number" style="color:${stat.color};">${stat.value}</div>
      <div class="stat-label">${stat.label}</div>
      ${extra}
    `;
    container.appendChild(card);
  });
}

// Render action buttons
function renderActionButtons() {
  const container = document.getElementById('actionButtons');
  dashboardData.actionButtons.forEach(btn => {
    const el = document.createElement('button');
    el.className = 'action-btn';
    el.innerHTML = `
      <span style="display:flex;align-items:center;gap:8px;">
        <span class="action-btn-icon">${btn.icon}</span>
        <span>${btn.label}</span>
      </span>
      <span class="action-btn-arrow">›</span>
    `;
    container.appendChild(el);
  });
}

// Render new member requests
function renderMemberRequests() {
  const container = document.getElementById('newMemberRequestsList');
  dashboardData.memberRequests.forEach(m => {
    const badgeClass = m.status === 'approve' ? 'badge-approve' : 'badge-today';
    const badgeText = m.status === 'approve' ? 'Approve' : 'Today';
    const el = document.createElement('div');
    el.className = 'member-request-item';
    el.innerHTML = `
      <div class="member-avatar" style="background:${m.color};color:#fff;">${m.initials}</div>
      <div class="member-info">
        <div class="member-name">${m.name}</div>
        <div class="member-role-sub">${m.role} · ${m.manager}</div>
      </div>
      <div class="member-actions">
        <span class="badge ${badgeClass}">${badgeText}</span>
        ${m.verified ? '<span class="badge badge-verified" style="font-size:10px;padding:2px 7px;">Verified</span>' : ''}
        <span class="badge badge-reject">Reject</span>
        <button class="chevron-btn">›</button>
      </div>
    `;
    container.appendChild(el);
  });
}

// Render request summary
function renderRequestSummary() {
  const container = document.getElementById('requestSummaryList');
  const grid = document.createElement('div');
  grid.className = 'request-summary-grid';

  dashboardData.requestSummary.forEach(item => {
    const el = document.createElement('div');
    el.className = 'req-summary-item';
    const iconEl = item.type === 'check'
      ? `<div class="req-check">✓</div>`
      : `<div class="req-check-outline">□</div>`;
    const countBadge = item.count ? `<span class="req-count-badge">${item.count}</span>` : '';
    el.innerHTML = `${iconEl}<span>${item.label}${countBadge}</span>`;
    grid.appendChild(el);
  });
  container.appendChild(grid);
}

// Render pending requests
function renderPendingRequests() {
  const container = document.getElementById('pendingRequestsList');
  const wrap = document.createElement('div');
  wrap.style.padding = '8px 0';

  dashboardData.pendingRequests.forEach(item => {
    const el = document.createElement('div');
    el.className = 'pending-item';
    el.innerHTML = `
      <span class="pending-label">${item.label}</span>
      <div class="pending-bar-wrap">
        <div class="pending-bar-fill" style="width:${item.pct}%;background:${item.color};"></div>
      </div>
      <span class="pending-count">${item.count}</span>
      <span class="pending-icon">⊞</span>
    `;
    wrap.appendChild(el);
  });
  container.appendChild(wrap);
}

// Render recent activities
function renderActivities() {
  const container = document.getElementById('recentActivitiesContent');

  const table = document.createElement('table');
  table.className = 'activities-table';
  table.innerHTML = `
    <thead>
      <tr>
        <th><span class="tbl-filter">Name <span class="tbl-filter-arrow">▾</span></span></th>
        <th><span class="tbl-filter">Rod <span class="tbl-filter-arrow">▾</span></span></th>
        <th><span class="tbl-filter">Role <span class="tbl-filter-arrow">▾</span></span></th>
      </tr>
    </thead>
    <tbody></tbody>
  `;

  const tbody = table.querySelector('tbody');
  dashboardData.activities.forEach(a => {
    const badgeClass = {
      'Actleat': 'badge-actleat',
      'Getnet': 'badge-getnet',
      'Normal': 'badge-normal',
      'Active': 'badge-active'
    }[a.role] || 'badge-active';

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>
        <div class="activity-name">
          <div class="activity-dot" style="background:${a.dot};"></div>
          ${a.name}
        </div>
      </td>
      <td>${a.rod}</td>
      <td><span class="badge ${badgeClass}">${a.role}</span></td>
    `;
    tbody.appendChild(tr);
  });

  container.appendChild(table);
  const viewAll = document.createElement('a');
  viewAll.href = '#';
  viewAll.className = 'view-all-link';
  viewAll.textContent = 'View All ›';
  container.appendChild(viewAll);
}

// Render active tasks
function renderTasks() {
  const container = document.getElementById('activeTasksContent');

  const table = document.createElement('table');
  table.className = 'tasks-table';
  table.innerHTML = `
    <thead>
      <tr>
        <th>Task</th>
        <th><span class="tbl-filter">Priority <span class="tbl-filter-arrow">▾</span></span></th>
        <th>Due Date</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody></tbody>
  `;

  const tbody = table.querySelector('tbody');
  dashboardData.tasks.forEach(t => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>
        <div class="task-info">
          <div class="task-avatar" style="background:${t.color};color:#fff;">${t.initials}</div>
          <div>
            <div class="task-name">${t.title}</div>
            <div class="task-sub">${t.subtitle}</div>
          </div>
        </div>
      </td>
      <td><span class="badge ${t.priorityClass}">${t.priority}</span></td>
      <td style="white-space:nowrap;font-size:12px;color:#475569;">${t.dueDate}</td>
      <td><span class="badge ${t.statusClass}">${t.status}</span></td>
    `;
    tbody.appendChild(tr);
  });

  container.appendChild(table);
  const viewAll = document.createElement('a');
  viewAll.href = '#';
  viewAll.className = 'view-all-link';
  viewAll.textContent = 'View All ›';
  container.appendChild(viewAll);
}

// Render member directory
function renderMemberDirectory() {
  const container = document.getElementById('memberDirectoryContent');

  const table = document.createElement('table');
  table.className = 'dir-table';
  table.innerHTML = `
    <thead>
      <tr>
        <th>Trials</th>
        <th>Name</th>
        <th><span class="tbl-filter">Joined <span class="tbl-filter-arrow">▾</span></span></th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody></tbody>
  `;

  const tbody = table.querySelector('tbody');
  dashboardData.members.forEach((m, i) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td style="color:#94A3B8;font-size:12px;">${i + 1}</td>
      <td>
        <div class="dir-member-info">
          <div class="dir-avatar">${m.initials}</div>
          <span class="dir-name">${m.name}</span>
        </div>
      </td>
      <td class="dir-date">${m.joined}</td>
      <td><span class="badge badge-active">${m.status}</span></td>
    `;
    tbody.appendChild(tr);
  });

  container.appendChild(table);
  const footer = document.createElement('div');
  footer.className = 'card-footer';
  footer.innerHTML = `<a href="#" class="card-link">View All Requests ›</a>`;
  container.appendChild(footer);
}

// Render announcements
function renderAnnouncements() {
  const container = document.getElementById('announcementsContent');

  dashboardData.announcements.forEach(ann => {
    const el = document.createElement('div');
    el.className = 'announcement-item';
    el.innerHTML = `
      <div class="ann-icon" style="background:${ann.iconBg};">${ann.icon}</div>
      <div class="ann-content">
        <div class="ann-title">${ann.title}</div>
        <div class="ann-meta">${ann.meta}</div>
      </div>
      <button class="ann-action icon-btn-sm">›</button>
    `;
    container.appendChild(el);
  });
}

/* ===========================
   MOBILE SIDEBAR TOGGLE
=========================== */
function initSidebarToggle() {
  const hamburger = document.getElementById('hamburger');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');

  hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('open');
  });

  overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
  });
}

/* ===========================
   INIT - RENDER ALL
=========================== */
function init() {
  renderNav();
  renderWelcome();
  renderStats();
  renderActionButtons();
  renderMemberRequests();
  renderRequestSummary();
  renderPendingRequests();
  renderActivities();
  renderTasks();
  renderMemberDirectory();
  renderAnnouncements();
  initSidebarToggle();
}

document.addEventListener('DOMContentLoaded', init);
