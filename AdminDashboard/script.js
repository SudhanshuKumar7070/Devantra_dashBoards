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
    { label: "Dashboard", icon: "ic-home", active: true },
    { label: "Members", icon: "ic-users", active: false },
    { label: "Attendance", icon: "ic-calendar", active: false },
    { label: "Projects", icon: "ic-folder", active: false },
    { label: "Announcements", icon: "ic-bell", active: false },
    { label: "Requests", icon: "ic-inbox", active: false },
    { label: "Reports", icon: "ic-bar-chart", active: false },
    { label: "Settings", icon: "ic-settings", active: false },
    { label: "Help Desk", icon: "ic-help", active: false }
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
   ICONS — SVG sprite helper
=========================== */
function svgIcon(id, w, h) {
  w = w || 18; h = h || 18;
  return `<svg class="ib nav-svg" width="${w}" height="${h}"><use href="#${id}"/></svg>`;
}

/* ===========================
   RENDER FUNCTIONS
=========================== */

// Render sidebar navigation
function renderNav() {
  const nav = document.getElementById('sidebarNav');
  dashboardData.navItems.forEach(item => {
    const el = document.createElement('a');
    el.className = `nav-item${item.active ? ' active' : ''}`;
    el.innerHTML = `${svgIcon(item.icon)}<span>${item.label}</span>`;
    el.addEventListener('click', () => {
      nav.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
      el.classList.add('active');
    });
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
  const createBtn = document.getElementById('createMemberBtn');
  if (createBtn) {
    createBtn.textContent = '+ Create New Member';
    createBtn.addEventListener('click', () => openModal('createMemberModal'));
  }
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
  container.innerHTML = '';
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

// Render action buttons — wired to modals
function renderActionButtons() {
  const container = document.getElementById('actionButtons');
  const buttonMap = {
    'Add Task': () => openModal('addTaskModal'),
    'Post Announcement': () => openModal('announcementModal'),
    'Generate Report': () => openModal('reportModal'),
    'View Activity Log': () => {
      const el = document.getElementById('recentActivitiesContent');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      showToast('Scrolled to Activity Log', 'success');
    }
  };

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
    el.addEventListener('click', () => {
      const handler = buttonMap[btn.label];
      if (handler) handler();
      else showToast(`"${btn.label}" clicked`, 'success');
    });
    container.appendChild(el);
  });
}

// Render new member requests — with approve/reject/detail handlers
function renderMemberRequests() {
  const container = document.getElementById('newMemberRequestsList');
  container.innerHTML = '';
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
        <span class="badge ${badgeClass} btn-approve-badge" data-id="${m.id}">${badgeText}</span>
        ${m.verified ? '<span class="badge badge-verified" style="font-size:10px;padding:2px 7px;">Verified</span>' : ''}
        <span class="badge badge-reject btn-reject-badge" data-id="${m.id}">Reject</span>
        <button class="chevron-btn btn-member-detail" data-id="${m.id}">›</button>
      </div>
    `;
    // Approve handler
    el.querySelector('.btn-approve-badge').addEventListener('click', () => approveMember(m.id));
    // Reject handler
    el.querySelector('.btn-reject-badge').addEventListener('click', () => rejectMember(m.id));
    // Detail handler
    el.querySelector('.btn-member-detail').addEventListener('click', () => openMemberDetail(m.id));
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
    tr.style.cursor = 'pointer';
    tr.addEventListener('click', () => openTaskDetail(t.id));
    tbody.appendChild(tr);
  });

  container.appendChild(table);
  const viewAll = document.createElement('a');
  viewAll.href = '#';
  viewAll.className = 'view-all-link';
  viewAll.textContent = 'View All ›';
  viewAll.addEventListener('click', (e) => { e.preventDefault(); showToast('View All Tasks coming soon', 'success'); });
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
   MODAL HELPERS
=========================== */
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.add('open');
}
function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.remove('open');
}
// Click outside modal to close
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-overlay') && e.target.classList.contains('open')) {
    e.target.classList.remove('open');
  }
});

/* ===========================
   TOAST NOTIFICATIONS
=========================== */
function showToast(msg, type) {
  type = type || 'default';
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast ' + type;
  const iconMap = { success: '✓', error: '✕', default: 'ℹ' };
  toast.innerHTML = '<span class="toast-icon">' + (iconMap[type] || 'ℹ') + '</span><span>' + msg + '</span>';
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('out');
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

/* ===========================
   MEMBER APPROVE / REJECT
=========================== */
function approveMember(id) {
  const m = dashboardData.memberRequests.find(x => x.id === id);
  if (!m) return;
  showToast('"' + m.name + '" has been approved!', 'success');
  dashboardData.memberRequests = dashboardData.memberRequests.filter(x => x.id !== id);
  renderMemberRequests();
  // Update stat
  const stat = dashboardData.stats.find(s => s.label === 'Active Members');
  if (stat) { stat.value++; renderStats(); }
}
function rejectMember(id) {
  const m = dashboardData.memberRequests.find(x => x.id === id);
  if (!m) return;
  showToast('Request from "' + m.name + '" rejected', 'error');
  dashboardData.memberRequests = dashboardData.memberRequests.filter(x => x.id !== id);
  renderMemberRequests();
}

/* ===========================
   MEMBER DETAIL MODAL
=========================== */
function openMemberDetail(id) {
  const m = dashboardData.memberRequests.find(x => x.id === id);
  if (!m) return;
  document.getElementById('mdTitle').textContent = m.name;
  document.getElementById('mdBody').innerHTML = `
    <div class="td-section">
      <div style="display:flex;align-items:center;gap:14px;margin-bottom:16px">
        <div class="member-avatar" style="background:${m.color};color:#fff;width:48px;height:48px;font-size:18px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:600">${m.initials}</div>
        <div>
          <div style="font-size:16px;font-weight:600;color:#1e293b">${m.name}</div>
          <div style="font-size:13px;color:#64748b">${m.role}</div>
        </div>
      </div>
    </div>
    <div class="td-section">
      <h4>Details</h4>
      <p><strong>Role:</strong> ${m.role}</p>
      <p><strong>Manager:</strong> ${m.manager}</p>
      <p><strong>Status:</strong> ${m.status === 'approve' ? 'Pending Approval' : 'Today'}</p>
      <p><strong>Verified:</strong> ${m.verified ? 'Yes ✓' : 'No'}</p>
    </div>
    <div class="td-section">
      <h4>Actions</h4>
      <div class="td-actions">
        <button class="btn-action-modal primary" onclick="approveMember(${m.id});closeModal('memberDetailModal')">✓ Approve</button>
        <button class="btn-action-modal" onclick="rejectMember(${m.id});closeModal('memberDetailModal')">✕ Reject</button>
      </div>
    </div>
  `;
  openModal('memberDetailModal');
}

/* ===========================
   TASK DETAIL MODAL
=========================== */
function openTaskDetail(id) {
  const t = dashboardData.tasks.find(x => x.id === id);
  if (!t) return;
  document.getElementById('tdTitle').textContent = t.title + ' ' + t.subtitle;
  document.getElementById('tdBody').innerHTML = `
    <div class="td-section">
      <div class="td-badges">
        <span class="badge ${t.priorityClass}">${t.priority}</span>
        <span class="badge ${t.statusClass}">${t.status}</span>
      </div>
    </div>
    <div class="td-section">
      <h4>Details</h4>
      <p><strong>Task:</strong> ${t.title} — ${t.subtitle}</p>
      <p><strong>Priority:</strong> ${t.priority}</p>
      <p><strong>Due Date:</strong> ${t.dueDate}</p>
      <p><strong>Status:</strong> ${t.status}</p>
      <p><strong>Assigned To:</strong> ${t.initials}</p>
    </div>
    <div class="td-section">
      <h4>Actions</h4>
      <div class="td-actions">
        <button class="btn-action-modal primary" onclick="markTaskComplete(${t.id})">✓ Mark Complete</button>
        <button class="btn-action-modal" onclick="closeModal('taskDetailModal');showToast('Edit mode coming soon','success')">✎ Edit Task</button>
      </div>
    </div>
  `;
  document.getElementById('tdFooter').innerHTML = '<button class="btn-secondary" onclick="closeModal(\'taskDetailModal\')">Close</button>';
  openModal('taskDetailModal');
}

function markTaskComplete(id) {
  const t = dashboardData.tasks.find(x => x.id === id);
  if (!t) return;
  t.status = 'Completed';
  t.statusClass = 'badge-active';
  showToast('Task "' + t.title + '" marked as Complete!', 'success');
  closeModal('taskDetailModal');
  // Re-render tasks
  document.getElementById('activeTasksContent').innerHTML = '';
  renderTasks();
}

/* ===========================
   FORM SUBMISSIONS
=========================== */
function submitCreateMember() {
  const name = document.getElementById('cmFullName').value.trim();
  const email = document.getElementById('cmEmail').value.trim();
  const role = document.getElementById('cmRole').value;
  const dept = document.getElementById('cmDept').value;
  if (!name) { showToast('Please enter a name', 'error'); return; }
  if (!email) { showToast('Please enter an email', 'error'); return; }

  const initials = name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
  const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'];
  const color = colors[Math.floor(Math.random() * colors.length)];

  dashboardData.members.push({
    name: name,
    joined: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
    status: 'Active',
    initials: initials
  });

  // Update stat
  const stat = dashboardData.stats.find(s => s.label === 'Active Members');
  if (stat) { stat.value++; renderStats(); }

  showToast('Member "' + name + '" created successfully!', 'success');
  closeModal('createMemberModal');

  // Reset form
  document.getElementById('cmFullName').value = '';
  document.getElementById('cmEmail').value = '';

  // Re-render member directory
  document.getElementById('memberDirectoryContent').innerHTML = '';
  renderMemberDirectory();
}

function submitAddTask() {
  const title = document.getElementById('atTitle').value.trim();
  const desc = document.getElementById('atDesc').value.trim();
  const assignee = document.getElementById('atAssignee').value.trim();
  const priority = document.getElementById('atPriority').value;
  const due = document.getElementById('atDue').value;
  if (!title) { showToast('Please enter a task title', 'error'); return; }

  const initials = assignee ? assignee.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2) : 'UN';
  const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];
  const color = colors[Math.floor(Math.random() * colors.length)];
  const priorityClassMap = { 'High': 'badge-high', 'Medium': 'badge-medium', 'Low': 'badge-low' };
  const formattedDue = due ? new Date(due).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : 'TBD';

  dashboardData.tasks.push({
    id: Date.now(),
    title: title,
    subtitle: desc ? desc.substring(0, 20) : '',
    priority: priority,
    priorityClass: priorityClassMap[priority] || 'badge-medium',
    dueDate: formattedDue,
    status: 'Assigned',
    statusClass: 'badge-active',
    initials: initials,
    color: color
  });

  showToast('Task "' + title + '" created and assigned to ' + (assignee || 'Unassigned'), 'success');
  closeModal('addTaskModal');

  // Reset form
  document.getElementById('atTitle').value = '';
  document.getElementById('atDesc').value = '';
  document.getElementById('atAssignee').value = '';
  document.getElementById('atDue').value = '';

  // Re-render tasks
  document.getElementById('activeTasksContent').innerHTML = '';
  renderTasks();
}

function submitAnnouncement() {
  const title = document.getElementById('annTitle').value.trim();
  const priority = document.getElementById('annPriority').value;
  const message = document.getElementById('annMessage').value.trim();
  if (!title) { showToast('Please enter a title', 'error'); return; }
  if (!message) { showToast('Please enter a message', 'error'); return; }

  const iconMap = { 'High': '🔴', 'Medium': '📢', 'Low': '📋' };
  const bgMap = { 'High': '#FEE2E2', 'Medium': '#DBEAFE', 'Low': '#F1F5F9' };

  dashboardData.announcements.push({
    id: Date.now(),
    icon: iconMap[priority] || '📢',
    iconBg: bgMap[priority] || '#DBEAFE',
    title: title,
    meta: message.substring(0, 40) + (message.length > 40 ? '...' : '')
  });

  showToast('Announcement "' + title + '" posted!', 'success');
  closeModal('announcementModal');

  // Reset form
  document.getElementById('annTitle').value = '';
  document.getElementById('annMessage').value = '';

  // Re-render announcements
  document.getElementById('announcementsContent').innerHTML = '';
  renderAnnouncements();
}

function submitReport() {
  const type = document.getElementById('rptType').value;
  const from = document.getElementById('rptFrom').value;
  const to = document.getElementById('rptTo').value;
  const format = document.getElementById('rptFormat').value;
  if (!from || !to) { showToast('Please select a date range', 'error'); return; }

  showToast(type + ' Report (' + format + ') is being generated...', 'success');
  closeModal('reportModal');

  // Simulate report generation
  setTimeout(() => {
    showToast(type + ' Report ready for download!', 'success');
  }, 2000);
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
