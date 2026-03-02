document.addEventListener('DOMContentLoaded', async function () {

  // ── Helpers ────────────────────────────────────────────────
  function avatarUrl(name) {
    return 'https://ui-avatars.com/api/?name=' + encodeURIComponent(name) + '&background=e2e8f0&color=475569';
  }

  try {
    // 1. Fetch dashboard data (mimics an API call)
    const AppData = await fetchDashboardData();

    // ── Header / User ──────────────────────────────────────────
    const u = AppData.user;

    document.querySelectorAll('.user-name').forEach(el => el.textContent = u.name);
    document.querySelectorAll('.user-role').forEach(el => el.textContent = u.role);
    document.querySelectorAll('.user-avatar').forEach(el => {
      el.src = u.avatarUrl;
      el.alt = u.name;
    });

    const welcomeTitle = document.querySelector('.welcome-title');
    if (welcomeTitle) welcomeTitle.textContent = 'Welcome back, ' + u.name + '!';

    const welcomeMeta = document.querySelector('.welcome-meta');
    if (welcomeMeta) welcomeMeta.innerHTML =
      'Last login: ' + u.lastLogin +
      ' <span class="meta-divider">|</span> Location: ' + u.location;

    // ── Sidebar Navigation ─────────────────────────────────────
    const sidebarNav = document.querySelector('.sidebar-nav');
    if (sidebarNav) {
      sidebarNav.innerHTML = AppData.navItems.map(function (item) {
        return '<a href="#" class="nav-item' + (item.active ? ' active' : '') + '">' +
          '<svg class="ib nav-svg" width="18" height="18"><use href="#' + item.icon + '"/></svg>' +
          '<span>' + item.label + '</span>' +
          '</a>';
      }).join('');

      // Re-attach click listeners after render
      sidebarNav.querySelectorAll('.nav-item').forEach(function (navEl) {
        navEl.addEventListener('click', function () {
          sidebarNav.querySelectorAll('.nav-item').forEach(function (n) { n.classList.remove('active'); });
          this.classList.add('active');
        });
      });
    }

    // ── Stats Cards ────────────────────────────────────────────
    const statsRow = document.querySelector('.stats-row');
    if (statsRow) {
      const regularCards = AppData.stats.map(function (s) {
        return '<div class="stat-card">' +
          '<div class="stat-info">' +
          '<span class="stat-value">' + s.value + '</span>' +
          '<span class="stat-label">' + s.label + '</span>' +
          '</div>' +
          '<div class="stat-icon ' + s.colorClass + '"><svg class="ib" width="20" height="20"><use href="#' + s.iconClass + '"/></svg></div>' +
          '</div>';
      }).join('');

      const r = AppData.rating;
      const ratingCard =
        '<div class="stat-card stat-card-rating">' +
        '<div class="rating-info">' +
        '<div class="rating-value">' +
        '<span class="stat-value">' + r.value + '</span>' +
        '<span class="stars">' + r.stars + '</span>' +
        '</div>' +
        '<p class="rating-meta">' + r.vsMonth + '</p>' +
        '</div>' +
        '<div class="rating-notification">' +
        '<span class="notification-badge">' +
        '<span class="red-dot"></span> AI notifications <svg class="ib" width="12" height="12" style="display:inline-block;vertical-align:middle"><use href="#ic-chevron-down"/></svg>' +
        '</span>' +
        '</div>' +
        '</div>';

      statsRow.innerHTML = regularCards + ratingCard;
    }

    // ── Action Buttons ─────────────────────────────────────────
    const actionRow = document.querySelector('.action-buttons-row');
    if (actionRow) {
      actionRow.innerHTML = AppData.actionButtons.map(function (btn) {
        return '<button id="' + btn.id + '" class="btn btn-action ' + btn.colorClass + '">' +
          '<span><svg class="ib" width="16" height="16"><use href="#' + btn.icon + '"/></svg> ' + btn.label + '</span>' +
          '<svg class="ib" width="14" height="14"><use href="#ic-chevron-right"/></svg>' +
          '</button>';
      }).join('');
    }

    // ── Render Functions for Dynamic Updates ───────────────────
    const teamSummaryEl = document.querySelector('.team-summary-stats');
    const teamList = document.querySelector('.team-list');

    function renderTeamSummary(ts) {
      if (!teamSummaryEl) return;
      teamSummaryEl.innerHTML =
        '<div class="summary-stat">' +
        '<span class="summary-value">' + ts.total + '</span>' +
        '<span class="summary-label">Total</span>' +
        '</div>' +
        '<div class="summary-stat">' +
        '<span class="summary-value text-green">' + ts.presentPercent + '</span>' +
        '<span class="summary-label">Present Today</span>' +
        '</div>' +
        '<div class="summary-stat">' +
        '<span class="summary-value">' + ts.onLeave +
        ' <svg class="ib" width="16" height="16" style="display:inline-block;vertical-align:middle;color:#f59e0b"><use href="#ic-users"/></svg>' +
        '</span>' +
        '<span class="summary-label">On Leave</span>' +
        '</div>';
    }

    function renderTeamMembers(members) {
      if (!teamList) return;
      teamList.innerHTML = members.map(function (m) {
        const roleHtml = m.roleDesc
          ? m.role + ' <br /><span class="role-desc">' + m.roleDesc + '</span>'
          : m.role;
        return '<li class="team-list-item">' +
          '<img src="' + avatarUrl(m.name) + '" alt="" class="avatar">' +
          '<div class="member-info">' +
          '<span class="member-name">' + m.name + '</span>' +
          '<span class="member-role">' + roleHtml + '</span>' +
          '</div>' +
          '<span class="status-badge status-' + m.status + '">' + m.statusLabel + '</span>' +
          '<svg class="ib" width="14" height="14"><use href="#ic-chevron-right"/></svg>' +
          '</li>';
      }).join('');
    }

    function renderLeaveRequests(requests) {
      const leaveList = document.querySelector('.leave-list-boxes');
      if (!leaveList) return;
      if (requests.length === 0) {
        leaveList.innerHTML = '<li class="leave-box"><div class="leave-box-left"><span style="color:var(--text-secondary)">No pending requests.</span></div></li>';
        return;
      }
      leaveList.innerHTML = requests.map(function (item) {
        return '<li class="leave-box">' +
          '<div class="leave-box-left">' +
          '<svg class="ib icon-grey" width="18" height="18"><use href="#' + item.icon + '"/></svg>' +
          '<span>' + item.label + '</span>' +
          '</div>' +
          '<div class="leave-box-right">' +
          '<span class="leave-badge ' + item.badgeClass + '">' + item.count + '</span>' +
          '<svg class="ib icon-grey" width="14" height="14"><use href="#ic-chevron-right"/></svg>' +
          '</div>' +
          '</li>';
      }).join('');
    }

    function renderTodaySummary(summary) {
      const summaryPills = document.querySelector('.summary-pills');
      if (!summaryPills) return;
      summaryPills.innerHTML = summary.map(function (pill) {
        if (pill.icon) {
          return '<div class="summary-pill ' + pill.style + '">' +
            '<svg class="ib text-secondary" width="16" height="16"><use href="#' + pill.icon + '"/></svg>' +
            ' <span class="text-secondary">' + pill.label + '</span>' +
            '</div>';
        }
        return '<div class="summary-pill ' + pill.style + '">' +
          '<span class="pill-value ' + (pill.textClass || '') + '">' + pill.value + '</span>' +
          ' ' + pill.label +
          '</div>';
      }).join('');
    }

    function renderActivity(activity) {
      const activityList = document.querySelector('.activity-list');
      if (!activityList) return;
      activityList.innerHTML = activity.map(function (act) {
        const targetHtml = act.targetIsPill
          ? '<span class="activity-pill">' + act.target + ' <svg class="ib" width="12" height="12" style="display:inline-block;vertical-align:middle"><use href="#ic-chevron-down"/></svg></span>'
          : act.target;
        return '<li class="activity-item">' +
          '<img src="' + avatarUrl(act.name) + '" alt="" class="avatar avatar-sm">' +
          '<div class="activity-content">' +
          '<span class="activity-text"><strong>' + act.name + '</strong> ' + act.action + ' ' + targetHtml + '</span>' +
          '<span class="activity-time">' + act.time + '</span>' +
          '</div>' +
          '<svg class="ib" width="14" height="14"><use href="#ic-chevron-right"/></svg>' +
          '</li>';
      }).join('');
    }

    function renderQuickActions(actions) {
      const qaWrap = document.querySelector('.quick-actions-wrap');
      if (!qaWrap) return;
      qaWrap.innerHTML = actions.map(function (qa) {
        return '<button id="' + qa.id + '" class="qa-btn ' + qa.colorClass + '">' +
          '<svg class="ib" width="16" height="16"><use href="#' + qa.icon + '"/></svg> ' + qa.label +
          '</button>';
      }).join('');
    }

    function renderActiveTasks(tasks) {
      const taskList = document.querySelector('.task-list');
      if (!taskList) return;
      taskList.innerHTML = tasks.map(function (task) {
        const dueHtml = task.dueIsToday
          ? '<span class="task-due bg-grey-pill">' + task.due + '</span>'
          : '<span class="task-due">' + task.due + '</span>';
        return '<li class="task-item">' +
          '<img src="' + avatarUrl(task.assignee) + '" alt="" class="avatar avatar-sm">' +
          '<div class="task-info">' +
          '<span class="task-title">' + task.title + '</span>' +
          '<span class="task-assignee">' + task.assignee + '</span>' +
          '</div>' +
          dueHtml +
          '<svg class="ib" width="14" height="14"><use href="#ic-chevron-right"/></svg>' +
          '</li>';
      }).join('');
    }

    // Initial Render
    renderTeamSummary(AppData.teamSummary);
    renderTeamMembers(AppData.teamMembers);
    renderLeaveRequests(AppData.leaveRequests);
    renderTodaySummary(AppData.todaySummary);
    renderActivity(AppData.recentActivity);
    renderActiveTasks(AppData.activeTasks);

    // ── Quick Actions (Generic IDs added if present in AppData) ─
    renderQuickActions(AppData.quickActions);

    // ── Progress Circles ───────────────────────────────────────
    const progressCircles = document.querySelector('.progress-circles');
    if (progressCircles) {
      const circlePath = 'M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831';
      const items = [
        { data: AppData.progress.tasksCompleted, label: 'Tasks Completed' },
        { data: AppData.progress.attendance, label: 'Attendance' }
      ];
      progressCircles.innerHTML = items.map(function (item) {
        return '<div class="progress-circle-wrap">' +
          '<div class="circular-chart ' + item.data.color + '">' +
          '<svg viewBox="0 0 36 36" class="circular-chart-svg">' +
          '<path class="circle-bg" d="' + circlePath + '" />' +
          '<path class="circle" stroke-dasharray="' + item.data.percent + ', 100" d="' + circlePath + '" />' +
          '<text x="18" y="20.35" class="percentage">' + item.data.percent + '%</text>' +
          '</svg>' +
          '</div>' +
          '<span class="progress-label">' + item.label + '</span>' +
          '</div>';
      }).join('');
    }

    // ── Progress Panel Rating ──────────────────────────────────
    const panelRating = document.querySelector('.panel-rating-new');
    if (panelRating) {
      const pr = AppData.progressRating;
      panelRating.innerHTML =
        '<span class="stars">' + pr.stars + '</span>' +
        '<span class="rating-num">' + pr.value + '</span>' +
        '<span class="rating-meta"><span class="text-green">' + pr.vsMonth + '</span> ' + pr.vsMonthLabel + '</span>';
    }

    // ── Generic Modal Handling ─────────────────────────────────
    function openModal(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) modal.classList.add('active');
    }

    function closeModal(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.remove('active');
        const form = modal.querySelector('form');
        if (form) form.reset();
      }
    }

    // Bind close events for all modals
    document.querySelectorAll('.modal-overlay').forEach(modal => {
      const closeBtn = modal.querySelector('.close-modal-btn');
      const cancelBtn = modal.querySelector('.cancel-modal-btn');

      const hideModal = () => closeModal(modal.id);

      if (closeBtn) closeBtn.addEventListener('click', hideModal);
      if (cancelBtn) cancelBtn.addEventListener('click', hideModal);
      modal.addEventListener('click', (e) => {
        if (e.target === modal) hideModal();
      });
    });

    // ── Create New Member Handling ─────────────────────────────
    const btnCreateMember = document.getElementById('btnCreateMember');
    if (btnCreateMember) btnCreateMember.addEventListener('click', () => openModal('createMemberModal'));

    const formCreateMember = document.getElementById('createMemberForm');
    if (formCreateMember) {
      formCreateMember.addEventListener('submit', function (e) {
        e.preventDefault();
        const nameInput = document.getElementById('memberName').value;
        const roleInput = document.getElementById('memberRole').value;
        const teamInput = document.getElementById('memberTeam').value;
        const statusInput = document.getElementById('memberStatus').value;

        const newMember = {
          name: nameInput,
          role: roleInput,
          roleDesc: teamInput ? `[${teamInput}]` : '',
          status: statusInput,
          statusLabel: statusInput === 'present' ? 'Present' : 'On Leave'
        };

        AppData.teamMembers.unshift(newMember);
        AppData.teamSummary.total += 1;
        if (statusInput === 'leave') AppData.teamSummary.onLeave += 1;

        const presentCount = AppData.teamSummary.total - AppData.teamSummary.onLeave;
        const pct = Math.round((presentCount / AppData.teamSummary.total) * 100);
        AppData.teamSummary.presentPercent = pct + '%';

        renderTeamSummary(AppData.teamSummary);
        renderTeamMembers(AppData.teamMembers);
        closeModal('createMemberModal');
      });
    }

    // ── Action Modal Bindings ──────────────────────────────────
    const btnAssignTask = document.getElementById('btnAssignTask');
    const btnCreateAnnoun = document.getElementById('btnCreateAnnoun');
    const btnApproveReq = document.getElementById('btnApproveReq');
    const btnViewReports = document.getElementById('btnViewReports');

    if (btnAssignTask) btnAssignTask.addEventListener('click', () => openModal('assignTaskModal'));
    if (btnCreateAnnoun) btnCreateAnnoun.addEventListener('click', () => openModal('createAnnounModal'));
    if (btnApproveReq) btnApproveReq.addEventListener('click', () => openModal('approveReqModal'));
    if (btnViewReports) btnViewReports.addEventListener('click', () => {
      renderReports();
      openModal('viewReportsModal');
    });

    // ── Forms Submission Logic ─────────────────────────────────

    // 1. Assign Task
    const formAssignTask = document.getElementById('assignTaskForm');
    if (formAssignTask) {
      formAssignTask.addEventListener('submit', function (e) {
        e.preventDefault();
        const taskName = document.getElementById('taskName').value;
        const taskAssignee = document.getElementById('taskAssignee').value;
        const taskDeadline = document.getElementById('taskDeadline').value;
        const taskStart = document.getElementById('taskStart').value;
        const taskTotalTime = document.getElementById('taskTotalTime').value;

        // Add to activeTasks
        const today = new Date().toISOString().split('T')[0];
        const dueIsToday = taskDeadline === today;

        // We're appending 'Time: {taskTotalTime}h' just as an example of capturing the extra data in the UI
        AppData.activeTasks.unshift({
          title: taskName + (taskTotalTime ? ` (${taskTotalTime}h)` : ''),
          assignee: taskAssignee,
          due: dueIsToday ? "Today" : taskDeadline,
          dueIsToday: dueIsToday,
          details: { start: taskStart, time: taskTotalTime } // Store extended details
        });

        // Re-render
        renderActiveTasks(AppData.activeTasks);
        closeModal('assignTaskModal');
      });
    }

    // 2. Create Announcement
    const formCreateAnnoun = document.getElementById('createAnnounForm');
    if (formCreateAnnoun) {
      formCreateAnnoun.addEventListener('submit', function (e) {
        e.preventDefault();
        const title = document.getElementById('announTitle').value;
        const date = document.getElementById('announDate').value;
        const desc = document.getElementById('announDesc').value;
        const workType = document.getElementById('announWork').value;

        // Add to recent activity as a way to show it registered
        AppData.recentActivity.unshift({
          name: AppData.user.name,
          action: "announced",
          target: `${title} [${workType}]`,
          targetIsPill: true,
          time: "Just now"
        });

        // Re-render
        renderActivity(AppData.recentActivity);
        closeModal('createAnnounModal');
      });
    }

    // 3. Approve Requests
    const formApproveReq = document.getElementById('approveReqForm');
    if (formApproveReq) {
      formApproveReq.addEventListener('submit', function (e) {
        e.preventDefault();

        // Clear all requests in mock data
        AppData.leaveRequests = [];

        // Re-render
        renderLeaveRequests(AppData.leaveRequests);

        // Update pills
        const approvalPill = AppData.todaySummary.find(p => p.label === 'Approval Requests');
        if (approvalPill) approvalPill.value = "0";
        renderTodaySummary(AppData.todaySummary);

        closeModal('approveReqModal');
      });
    }

    // 4. View Reports Render Logic
    function renderReports() {
      const container = document.getElementById('reportListContainer');
      if (!container) return;

      if (AppData.activeTasks.length === 0) {
        container.innerHTML = '<p style="color:var(--text-secondary); padding: 20px 0;">No assigned tasks to report.</p>';
        return;
      }

      const tableHTML = `
        <table style="width:100%; text-align:left; border-collapse: collapse; font-size: 0.9rem;">
          <thead>
            <tr style="border-bottom: 2px solid var(--border-color); color: var(--text-secondary);">
              <th style="padding: 10px 0;">Task</th>
              <th style="padding: 10px 0;">Assignee</th>
              <th style="padding: 10px 0;">Deadline</th>
            </tr>
          </thead>
          <tbody>
            ${AppData.activeTasks.map(task => `
              <tr style="border-bottom: 1px solid var(--border-color);">
                <td style="padding: 10px 0; color: var(--text-primary); font-weight:500;">${task.title}</td>
                <td style="padding: 10px 0; color: var(--text-secondary);">${task.assignee}</td>
                <td style="padding: 10px 0;">
                  <span class="${task.dueIsToday ? 'bg-grey-pill' : ''}" style="${!task.dueIsToday ? 'color: var(--text-secondary);' : ''}">${task.due}</span>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `;
      container.innerHTML = tableHTML;
    }

  } catch (error) {
    console.error("Failed to load dashboard data:", error);
    // Here you could render an error state or a "Retry" button
  }

  // ── Mobile Sidebar Toggle ──────────────────────────────────
  const sidebar = document.querySelector('.sidebar');
  const backdrop = document.getElementById('sidebarBackdrop');
  window.toggleSidebar = function () {
    if (sidebar) {
      sidebar.classList.toggle('open');
      if (backdrop) backdrop.classList.toggle('visible');
    }
  };
  window.openSidebar = function () {
    if (sidebar) sidebar.classList.add('open');
    if (backdrop) backdrop.classList.add('visible');
  };
  window.closeSidebar = function () {
    if (sidebar) sidebar.classList.remove('open');
    if (backdrop) backdrop.classList.remove('visible');
  };

});