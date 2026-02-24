/* ═══════════════════════════════════════════════════
   DevAntra ERP – Member Dashboard  |  script.js
   ═══════════════════════════════════════════════════ */

// ─── DUMMY DATA ──────────────────────────────────────
const tasks = [
  {
    id:1, title:"Prepare Project Presentation",
    project:"AI-Based Attendance System", category:"Presentation",
    priority:"high", status:"Pending", due:"2024-04-27", dueTime:"5:00 PM",
    assignedTo:"Amit Sharma", assignedBy:"Priya Mehta", reviewer:"Rahul Singh",
    visibility:"Project team", estimatedEffort:"8 Hours",
    description:"Prepare a comprehensive presentation for the AI-Based Attendance System. Include system overview, demo walkthrough, architecture diagrams, and key features.",
    comments:[{by:"Priya Mehta",text:"Please include a live demo section.",time:"25 Apr 2024, 9:00 AM"}],
    files:[],
    history:[
      {from:"—",to:"Assigned",by:"Priya Mehta",time:"24 Apr 2024, 10:00 AM"},
      {from:"Assigned",to:"Pending",by:"System",time:"24 Apr 2024, 10:05 AM"}
    ],
    extensionRequested:false
  },
  {
    id:2, title:"Update Daily Work Report",
    project:"Daily Ops", category:"Daily Report",
    priority:"low", status:"In Progress", due:"today", dueTime:"",
    assignedTo:"Amit Sharma", assignedBy:"Priya M.", reviewer:"Dearmat",
    visibility:"Assigned user only", estimatedEffort:"1 Hour",
    description:"Update the daily work report with today's progress, completed tasks, and blockers.",
    comments:[],files:[],
    history:[
      {from:"—",to:"Assigned",by:"Priya M.",time:"25 Apr 2024, 8:30 AM"},
      {from:"Assigned",to:"In Progress",by:"Amit Sharma",time:"25 Apr 2024, 10:15 AM"}
    ],
    extensionRequested:false
  },
  {
    id:3, title:"Bug Fixes",
    project:"Employee Portal Redesign", category:"Development",
    priority:"medium", status:"In Progress", due:"2024-04-25", dueTime:"",
    assignedTo:"Amit Sharma", assignedBy:"Rahul Singh", reviewer:"Devarbam",
    visibility:"Admin & HR", estimatedEffort:"4 Hours",
    description:"Fix reported bugs in the Employee Portal: login timeout issue, dashboard widget alignment, and notification delay.",
    comments:[{by:"Rahul Singh",text:"Focus on the login timeout bug first – it's blocking QA.",time:"24 Apr 2024, 3:00 PM"}],
    files:[],
    history:[
      {from:"—",to:"Assigned",by:"Rahul Singh",time:"23 Apr 2024, 2:00 PM"},
      {from:"Assigned",to:"In Progress",by:"Amit Sharma",time:"24 Apr 2024, 9:00 AM"}
    ],
    extensionRequested:false
  },
  {
    id:4, title:"Submit Weekly Status Report",
    project:"Daily Ops", category:"Documentation",
    priority:"medium", status:"Pending", due:"today", dueTime:"",
    assignedTo:"Amit Sharma", assignedBy:"FredCSJB.", reviewer:"Eradly Detamas",
    visibility:"Admin & HR", estimatedEffort:"2 Hours",
    description:"Compile and submit the weekly status report covering all active projects, blockers, and upcoming milestones.",
    comments:[],files:[],
    history:[
      {from:"—",to:"Assigned",by:"FredCSJB.",time:"25 Apr 2024, 7:00 AM"},
      {from:"Assigned",to:"Pending",by:"System",time:"25 Apr 2024, 7:05 AM"}
    ],
    extensionRequested:false
  }
];

const announcements = [
  {
    id:1,
    title:"Friendly Cricket Match  This Friday",
    priority:"High Priority",
    date:"Today", posted:"25 Apr 2024", time:"10:50 AM",
    desc:"Join us for a friendly cricket match on Friday, April 26th at the campus ground. Be there by 4 PM. Refreshments will be provided.",
    read:false
  }
];

const projects = [
  {name:"AI-Based Attendance System", role:"Rote. Devarbam", progress:65, color:"#3b82f6"},
  {name:"Employee Portal Redesign", role:"Rote. Devarbam", progress:40, color:"#10b981"}
];

const meetings = [
  {title:"Weekly Team Meeting", time:"Fri ugr. 2024, | 5:00 PM", type:"team"},
  {title:"Client Review Call", time:"Thi, 25 Apr 2024, | 11 AM", type:"video"}
];

// ─── CONSTANTS ──────────────────────────────────────
const STATUS_FLOW = ["Assigned","Pending","In Progress","Under Review","Completed","Closed"];
let activeFilter = "Pending";
let activeModalFilter = "All";
let activeExtensionTask = null;
let activeCommentTask = null;

// ─── SVG HELPER (returns <svg> string using <use>) ─
function svg(id, w=16, h=16){ return `<svg class="ib" width="${w}" height="${h}"><use href="#${id}"/></svg>`; }

// ═══════════════════════════════════════════════════
//  RENDER ALL
// ═══════════════════════════════════════════════════
function renderAll(){
  renderAnnouncements();
  renderTasks();
  renderSummary();
  renderProjects();
  renderMeetings();
  attachFilterListeners();
}

// ─── Announcements ─────────────────────────────────
function renderAnnouncements(){
  document.getElementById("announcementArea").innerHTML = announcements.map(a=>`
    <div class="ann-item">
      <div class="ann-top">
        <span class="ann-title">${a.title}</span>
        <span class="ann-badge">${a.priority}</span>
      </div>
      <div class="ann-meta"><span>${a.date}</span> • <span>${a.posted}</span> • <span>${a.time}</span></div>
      <p class="ann-desc">${a.desc}</p>
      <div class="ann-footer">
        <button class="btn-mark-read" onclick="markRead(${a.id})">Mark as Read</button>
        <a class="view-all-link">View All ${svg('ic-chevron-right',14,14)}</a>
      </div>
    </div>
  `).join("");
}
function markRead(id){
  const a=announcements.find(x=>x.id===id);
  if(a){a.read=true; showToast("Announcement marked as read","success");}
}

// ─── My Tasks ───────────────────────────────────────
function renderTasks(){
  document.getElementById("tasksList").innerHTML = getFilteredTasks(activeFilter).map(t=>`
    <div class="task-row" onclick="openTaskDetail(${t.id})">
      <div class="task-left">
        <div class="task-dot ${getDotColor(t)}"></div>
        <div class="task-info">
          <div class="task-title">${t.title}</div>
          <div class="task-sub">${t.project} ${getPriorityBadge(t)} ${getStatusBadge(t)}</div>
        </div>
      </div>
      <div class="task-right">
        <span class="${isToday(t.due)?'badge-today':'task-date'}">${formatDue(t.due)}</span>
        <span class="task-priority-label">${capitalise(t.priority)} Priority</span>
      </div>
    </div>
  `).join("");
}

// ─── Summary ────────────────────────────────────────
function renderSummary(){
  const dueToday = tasks.filter(t=>isToday(t.due)||t.due==="today").length + 1;
  const overdue  = tasks.filter(t=>isOverdue(t)).length;
  document.getElementById("summaryGrid").innerHTML = `
    <div class="summary-box">
      <div class="sb-icon orange">${svg('ic-cal-leave',18,18)}</div>
      <div class="sb-text"><div class="sb-num">${dueToday}</div><div class="sb-label">Tasks Due Today</div></div>
      <span class="sb-extra">${svg('ic-trending-down',16,16)}</span>
    </div>
    <div class="summary-box">
      <div class="sb-icon red">${svg('ic-alert',18,18)}</div>
      <div class="sb-text"><div class="sb-num">${overdue}</div><div class="sb-label">Overdue Tasks</div></div>
      <span class="sb-extra" style="color:#ef4444">${svg('ic-alert',16,16)}</span>
    </div>
    <div class="summary-box">
      <div class="sb-icon blue">${svg('ic-users',18,18)}</div>
      <div class="sb-text"><div class="sb-num">1</div><div class="sb-label">Meeting Scheduled</div></div>
      <span class="sb-extra" style="color:#3b82f6">${svg('ic-check',16,16)}</span>
    </div>
    <div class="summary-box">
      <div class="sb-icon green">${svg('ic-bell',18,18)}</div>
      <div class="sb-text"><div class="sb-num">${announcements.length+2}</div><div class="sb-label">New Announcements</div></div>
      <span class="sb-extra" style="color:#10b981">${svg('ic-check',16,16)}</span>
    </div>
  `;
}

// ─── Projects ───────────────────────────────────────
function renderProjects(){
  document.getElementById("projectsList").innerHTML = projects.map(p=>`
    <div class="project-row">
      <div class="proj-check">${svg('ic-check',12,12)}</div>
      <div class="proj-info">
        <div class="proj-name">${p.name}</div>
        <div class="proj-role">${p.role}</div>
        <div class="proj-bar"><div class="proj-bar-fill" style="width:${p.progress}%;background:${p.color}"></div></div>
      </div>
    </div>
  `).join("");
}

// ─── Meetings ───────────────────────────────────────
function renderMeetings(){
  document.getElementById("meetingsList").innerHTML = meetings.map(m=>{
    const cls = m.type==="video" ? "green" : "blue";
    const ic  = m.type==="video" ? "ic-video" : "ic-users";
    return `
      <div class="meeting-row">
        <div class="meet-icon ${cls}">${svg(ic,17,17)}</div>
        <div class="meet-info">
          <div class="meet-title">${m.title}</div>
          <div class="meet-time">${m.time}</div>
        </div>
      </div>`;
  }).join("");
}

// ═══════════════════════════════════════════════════
//  FILTERS
// ═══════════════════════════════════════════════════
function attachFilterListeners(){
  document.querySelectorAll("#taskFilters .tf").forEach(btn=>{
    btn.onclick=()=>{
      document.querySelectorAll("#taskFilters .tf").forEach(b=>b.classList.remove("active"));
      btn.classList.add("active");
      activeFilter=btn.dataset.filter;
      renderTasks();
    };
  });
  document.querySelectorAll("#modalFilters .tf").forEach(btn=>{
    btn.onclick=()=>{
      document.querySelectorAll("#modalFilters .tf").forEach(b=>b.classList.remove("active"));
      btn.classList.add("active");
      activeModalFilter=btn.dataset.mfilter;
      renderAllTasksModal();
    };
  });
}

function getFilteredTasks(filter){
  if(filter==="Overdue")    return tasks.filter(t=>isOverdue(t));
  if(filter==="Completed")  return tasks.filter(t=>t.status==="Completed"||t.status==="Closed");
  if(filter==="In Progress") return tasks.filter(t=>t.status==="In Progress"||t.status==="Under Review");
  if(filter==="Pending")    return tasks.filter(t=>t.status==="Pending"||t.status==="Assigned");
  return tasks;
}

// ═══════════════════════════════════════════════════
//  TASK DETAIL MODAL
// ═══════════════════════════════════════════════════
function openTaskDetail(id){
  const t=tasks.find(x=>x.id===id);
  if(!t) return;
  document.getElementById("modalTaskTitle").textContent=t.title;

  const next=getNextStatus(t);
  const canAdv=t.status!=="Completed"&&t.status!=="Closed";

  document.getElementById("modalTaskBody").innerHTML=`
    <div class="td-section">
      <div class="td-badges">
        ${getPriorityBadgeFull(t)}
        <span class="status-badge ${getStatusClass(t.status)}">${t.status}</span>
        ${isOverdue(t)?'<span class="status-badge status-overdue">⚠ Overdue</span>':''}
      </div>
    </div>
    <div class="td-section">
      <h4>Details</h4>
      <p><strong>Project:</strong> ${t.project}</p>
      <p><strong>Category:</strong> ${t.category}</p>
      <p><strong>Priority:</strong> ${capitalise(t.priority)}</p>
      <p><strong>Due:</strong> ${formatDue(t.due)} ${t.dueTime||''}</p>
      <p><strong>Estimated Effort:</strong> ${t.estimatedEffort}</p>
      <p><strong>Assigned By:</strong> ${t.assignedBy}</p>
      <p><strong>Reviewer:</strong> ${t.reviewer}</p>
      <p><strong>Visibility:</strong> ${t.visibility}</p>
    </div>
    <div class="td-section">
      <h4>Description</h4>
      <p>${t.description}</p>
    </div>
    <div class="td-section">
      <h4>Comments / Progress Notes</h4>
      ${t.comments.length
        ? t.comments.map(c=>`<div class="td-history-row"><span>${c.by}</span><span>${c.text}</span><span style="margin-left:auto;font-size:11px">${c.time}</span></div>`).join("")
        : '<p style="color:#94a3b8;font-size:12px">No comments yet.</p>'}
      <button class="btn-action" style="margin-top:8px" onclick="openCommentModal(${t.id})">${svg('ic-note',14,14)} Add Note</button>
    </div>
    <div class="td-section">
      <h4>Status History</h4>
      ${t.history.map(h=>`<div class="td-history-row"><span>${h.from} → ${h.to}</span><span>By ${h.by}</span><span style="margin-left:auto;font-size:11px">${h.time}</span></div>`).join("")}
    </div>
    <div class="td-section">
      <h4>Actions</h4>
      <div class="td-actions">
        ${canAdv && next ? `<button class="btn-action primary" onclick="advanceTask(${t.id})">${svg('ic-play',14,14)} Move to ${next}</button>` : ''}
        ${t.status!=="Completed"&&t.status!=="Closed" ? `<button class="btn-action" onclick="openExtensionModal(${t.id})">${svg('ic-clock-ext',14,14)} Request Extension</button>` : ''}
        <button class="btn-action" onclick="openUploadModal()">${svg('ic-paperclip',14,14)} Upload File</button>
        ${t.status==="Under Review" ? `<button class="btn-action primary" onclick="markCompleted(${t.id})">${svg('ic-check',14,14)} Mark Completed</button>` : ''}
      </div>
    </div>
  `;
  openModal("taskDetailModal");
}

// ═══════════════════════════════════════════════════
//  ALL TASKS MODAL
// ═══════════════════════════════════════════════════
function openTasksModal(){
  activeModalFilter="All";
  document.querySelectorAll("#modalFilters .tf").forEach(b=>b.classList.remove("active"));
  const all=document.querySelector("#modalFilters .tf[data-mfilter='All']");
  if(all) all.classList.add("active");
  renderAllTasksModal();
  openModal("allTasksModal");
}
function renderAllTasksModal(){
  document.getElementById("allTasksList").innerHTML = getFilteredTasks(activeModalFilter).map(t=>`
    <div class="task-row" onclick="openTaskDetail(${t.id})">
      <div class="task-left">
        <div class="task-dot ${getDotColor(t)}"></div>
        <div class="task-info">
          <div class="task-title">${t.title}</div>
          <div class="task-sub">${t.project} ${getPriorityBadge(t)} ${getStatusBadge(t)}</div>
        </div>
      </div>
      <div class="task-right">
        <span class="${isToday(t.due)?'badge-today':'task-date'}">${formatDue(t.due)}</span>
        <span class="task-priority-label">${capitalise(t.priority)} Priority</span>
      </div>
    </div>
  `).join("");
}

// ═══════════════════════════════════════════════════
//  STATUS ADVANCEMENT
// ═══════════════════════════════════════════════════
function advanceTask(id){
  const t=tasks.find(x=>x.id===id);
  if(!t) return;
  const next=getNextStatus(t);
  if(!next){showToast("No further status available","error");return;}
  if(next==="Closed"){showToast("Only a reviewer / manager can close a task","error");return;}
  const prev=t.status;
  t.status=next;
  t.history.push({from:prev,to:next,by:"Amit Sharma",time:nowStr()});
  showToast(`Task moved to "${next}"`, "success");
  renderAll();
  openTaskDetail(id);
}
function markCompleted(id){
  const t=tasks.find(x=>x.id===id);
  if(!t) return;
  const prev=t.status;
  t.status="Completed";
  t.history.push({from:prev,to:"Completed",by:"Amit Sharma",time:nowStr()});
  showToast("Task marked as Completed!","success");
  renderAll();
  openTaskDetail(id);
}
function getNextStatus(t){
  const i=STATUS_FLOW.indexOf(t.status);
  return (i===-1||i>=STATUS_FLOW.length-1)?null:STATUS_FLOW[i+1];
}

// ═══════════════════════════════════════════════════
//  EXTENSION & COMMENT
// ═══════════════════════════════════════════════════
function openExtensionModal(id){
  activeExtensionTask=tasks.find(x=>x.id===id);
  if(!activeExtensionTask) return;
  document.getElementById("extTaskTitle").value=activeExtensionTask.title;
  document.getElementById("extCurrentDeadline").value=formatDue(activeExtensionTask.due);
  document.getElementById("extNewDate").value="";
  document.getElementById("extReason").value="";
  openModal("extensionModal");
}
function submitExtension(){
  const reason=document.getElementById("extReason").value.trim();
  const newDate=document.getElementById("extNewDate").value;
  if(!reason){showToast("Reason is mandatory","error");return;}
  if(!newDate){showToast("Please select a new deadline","error");return;}
  activeExtensionTask.extensionRequested=true;
  activeExtensionTask.history.push({from:"Extension Requested",to:`New deadline: ${newDate}`,by:"Amit Sharma",time:nowStr()});
  showToast("Extension request submitted – awaiting manager approval","success");
  closeModal("extensionModal");
  renderAll();
}

function openCommentModal(id){
  activeCommentTask=tasks.find(x=>x.id===id);
  if(!activeCommentTask) return;
  document.getElementById("cmtTaskTitle").value=activeCommentTask.title;
  document.getElementById("cmtNote").value="";
  openModal("commentModal");
}
function submitComment(){
  const note=document.getElementById("cmtNote").value.trim();
  if(!note){showToast("Please add a note","error");return;}
  activeCommentTask.comments.push({by:"Amit Sharma",text:note,time:nowStr()});
  showToast("Progress note saved","success");
  closeModal("commentModal");
  openTaskDetail(activeCommentTask.id);
}

// ═══════════════════════════════════════════════════
//  CREATE TASK
// ═══════════════════════════════════════════════════
function openSubmitTaskModal(){
  document.getElementById("stTitle").value="";
  document.getElementById("stDesc").value="";
  document.getElementById("stAssigned").value="";
  document.getElementById("stDue").value="";
  openModal("submitTaskModal");
}
function submitNewTask(){
  const title=document.getElementById("stTitle").value.trim();
  if(!title){showToast("Please enter a task title","error");return;}
  tasks.push({
    id:Date.now(), title,
    project:document.getElementById("stProject").value,
    category:document.getElementById("stCategory").value,
    priority:document.getElementById("stPriority").value,
    status:"Assigned",
    due:document.getElementById("stDue").value||new Date().toISOString().slice(0,10),
    dueTime:"",
    assignedTo:document.getElementById("stAssigned").value.trim()||"Amit Sharma",
    assignedBy:"Amit Sharma (Admin)", reviewer:"Priya Mehta",
    visibility:"Project team", estimatedEffort:"TBD",
    description:document.getElementById("stDesc").value.trim()||"No description provided.",
    comments:[],files:[],
    history:[{from:"—",to:"Assigned",by:"Amit Sharma",time:nowStr()}],
    extensionRequested:false
  });
  showToast(`Task "${title}" created and assigned!`,"success");
  closeModal("submitTaskModal");
  renderAll();
}

// ═══════════════════════════════════════════════════
//  LEAVE / UPLOAD / HELPDESK openers
// ═══════════════════════════════════════════════════
function openLeaveModal(){openModal("leaveModal")}
function openUploadModal(){
  document.getElementById("uploadTask").innerHTML=tasks.map(t=>`<option value="${t.id}">${t.title}</option>`).join("");
  openModal("uploadModal");
}
function openHelpDeskModal(){openModal("helpDeskModal")}

// ═══════════════════════════════════════════════════
//  MODAL HELPERS
// ═══════════════════════════════════════════════════
function openModal(id){document.getElementById(id).classList.add("open")}
function closeModal(id){document.getElementById(id).classList.remove("open")}
document.querySelectorAll(".modal-overlay").forEach(o=>{
  o.addEventListener("click",e=>{if(e.target===o)o.classList.remove("open")});
});

// ═══════════════════════════════════════════════════
//  TOAST
// ═══════════════════════════════════════════════════
function showToast(msg, type="default"){
  const container=document.getElementById("toastContainer");
  const toast=document.createElement("div");
  const icId = type==="success"?"ic-check":type==="error"?"ic-x":"ic-info";
  toast.className=`toast ${type}`;
  toast.innerHTML=`<span class="toast-icon">${svg(icId,16,16)}</span><span>${msg}</span>`;
  container.appendChild(toast);
  setTimeout(()=>{toast.classList.add("out");setTimeout(()=>toast.remove(),300)},2800);
}

// ═══════════════════════════════════════════════════
//  OVERDUE AUTO-CHECK
// ═══════════════════════════════════════════════════
function autoMarkOverdue(){
  tasks.forEach(t=>{
    if(isOverdue(t)&&t.status!=="Overdue"&&t.status!=="Completed"&&t.status!=="Closed"){
      const prev=t.status;
      t.status="Overdue";
      t.history.push({from:prev,to:"Overdue (auto)",by:"System",time:nowStr()});
    }
  });
}

// ═══════════════════════════════════════════════════
//  UTILITIES
// ═══════════════════════════════════════════════════
function isToday(due){
  if(due==="today") return true;
  const d=new Date(due+"T00:00:00"),n=new Date();
  return d.getFullYear()===n.getFullYear()&&d.getMonth()===n.getMonth()&&d.getDate()===n.getDate();
}
function isOverdue(t){
  if(t.due==="today") return false;
  if(t.status==="Completed"||t.status==="Closed") return false;
  return new Date(t.due+"T23:59:59")<new Date();
}
function formatDue(due){
  if(due==="today") return "Today";
  const d=new Date(due+"T00:00:00");
  return `${d.getDate()} ${"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ")[d.getMonth()]} ${d.getFullYear()}`;
}
function capitalise(s){return s.charAt(0).toUpperCase()+s.slice(1)}
function nowStr(){return new Date().toLocaleString("en-IN",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"})}

function getDotColor(t){
  if(isOverdue(t))            return "red";
  if(t.status==="Pending"||t.status==="Assigned") return "orange";
  if(t.status==="In Progress"||t.status==="Under Review") return "green";
  return "gray";
}
function getPriorityBadge(t){
  if(t.priority==="high")   return `<span class="badge badge-high">High Priority</span>`;
  return "";
}
function getPriorityBadgeFull(t){
  const map={high:"badge-high",medium:"badge-medium",low:"badge-low"};
  const labels={high:"High Priority",medium:"Medium Priority",low:"Low Priority"};
  return `<span class="badge ${map[t.priority]||''}">${labels[t.priority]||capitalise(t.priority)}</span>`;
}
function getStatusBadge(t){
  const map={
    "In Progress":"status-inprogress",
    "Under Review":"status-underreview",
    "Completed":"status-completed",
    "Closed":"status-closed",
    "Overdue":"status-overdue",
    "Reopened":"status-reopened"
  };
  return map[t.status]?`<span class="status-badge ${map[t.status]}">${t.status}</span>`:"";
}
function getStatusClass(status){
  const map={"Assigned":"status-assigned","Pending":"status-pending","In Progress":"status-inprogress","Under Review":"status-underreview","Completed":"status-completed","Closed":"status-closed","Overdue":"status-overdue","Reopened":"status-reopened"};
  return map[status]||"";
}

// ─── Sidebar nav highlight + mobile auto-close ────
document.querySelectorAll(".nav-item").forEach(item=>{
  item.addEventListener("click",function(){
    document.querySelectorAll(".nav-item").forEach(n=>n.classList.remove("active"));
    this.classList.add("active");
    // on mobile, close the drawer after picking a nav item
    if(window.innerWidth<=768) closeSidebar();
  });
});

// ═══════════════════════════════════════════════════
//  MOBILE SIDEBAR TOGGLE
// ═══════════════════════════════════════════════════
function toggleSidebar(){
  const sb   = document.getElementById("mainSidebar");
  const back = document.getElementById("sidebarBackdrop");
  const isOpen = sb.classList.toggle("open");
  // backdrop: add visible first tick so CSS transition fires
  if(isOpen){
    back.style.display="block";
    // force reflow so the opacity transition starts from 0
    void back.offsetWidth;
    back.classList.add("visible");
  } else {
    back.classList.remove("visible");
    // wait for fade-out before hiding
    back.addEventListener("transitionend",function once(){
      back.style.display="none";
      back.removeEventListener("transitionend",once);
    },{once:true});
  }
}
function closeSidebar(){
  const sb   = document.getElementById("mainSidebar");
  const back = document.getElementById("sidebarBackdrop");
  if(!sb.classList.contains("open")) return;
  sb.classList.remove("open");
  back.classList.remove("visible");
  back.addEventListener("transitionend",function once(){
    back.style.display="none";
    back.removeEventListener("transitionend",once);
  },{once:true});
}

// ═══ INIT ═══
(function init(){
  autoMarkOverdue();
  renderAll();
  setInterval(()=>{autoMarkOverdue();renderAll()},60000);

  // If user resizes past tablet breakpoint while sidebar is open, close it
  window.addEventListener("resize",()=>{
    if(window.innerWidth>768) {
      const sb=document.getElementById("mainSidebar");
      const back=document.getElementById("sidebarBackdrop");
      sb.classList.remove("open");
      back.classList.remove("visible");
      back.style.display="none";
    }
  });
})();