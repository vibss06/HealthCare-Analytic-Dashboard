/* ---------- LOGIN ---------- */
function login() {
  const email = document.getElementById("email").value;

  if (email === "") {
    alert("Enter email");
    return;
  }

  localStorage.setItem("userEmail", email);
  window.location.href = "dashboard.html";
}

/* ---------- LOAD USER ---------- */
function loadUser() {
  const email = localStorage.getItem("userEmail");
  if (!email) {
    window.location.href = "login.html";
    return;
  }

  document.getElementById("userEmail").innerText = email;
  showDashboard();
}

/* ---------- LOGOUT ---------- */
function logout() {
  localStorage.clear();
  window.location.href = "login.html";
}

/* ---------- DUMMY DATA ---------- */
const patients = [
  { name: "Rahul Sharma", age: 45, disease: "Diabetes", status: "Active" },
  { name: "Anita Verma", age: 32, disease: "BP", status: "Active" },
  { name: "Amit Singh", age: 60, disease: "Heart", status: "Critical" },
  { name: "Neha Patil", age: 27, disease: "Fever", status: "Recovered" }
];

const doctors = [
  { name: "Dr. Mehta", spec: "Cardiologist", available: "Yes" },
  { name: "Dr. Rao", spec: "Neurologist", available: "No" },
  { name: "Dr. Khan", spec: "Orthopedic", available: "Yes" },
  { name: "Dr. Joshi", spec: "General Physician", available: "Yes" }
];

/* ---------- DASHBOARD ---------- */
function showDashboard() {
  document.getElementById("content").innerHTML = `
    <div class="stats">
      <div class="card">Total Patients<br><strong>${patients.length}</strong></div>
      <div class="card">Total Doctors<br><strong>${doctors.length}</strong></div>
      <div class="card">Appointments Today<br><strong>68</strong></div>
      <div class="card">Active Users<br><strong>143</strong></div>
    </div>

    <div class="charts">
      <div class="chart-box">
        <h3>Patient Growth</h3>
        <canvas id="patientChart"></canvas>
      </div>

      <div class="chart-box">
        <h3>Disease Distribution</h3>
        <canvas id="diseaseChart"></canvas>
      </div>

      <div class="chart-box">
        <h3>Doctor Availability</h3>
        <canvas id="doctorChart"></canvas>
      </div>
    </div>
  `;

  loadCharts();
}

/* ---------- PATIENTS ---------- */
function showPatients() {
  let rows = patients.map(p =>
    `<tr>
      <td>${p.name}</td>
      <td>${p.age}</td>
      <td>${p.disease}</td>
      <td>${p.status}</td>
    </tr>`
  ).join("");

  document.getElementById("content").innerHTML = `
    <h2>Patients</h2>
    <table>
      <tr><th>Name</th><th>Age</th><th>Disease</th><th>Status</th></tr>
      ${rows}
    </table>
  `;
}

/* ---------- DOCTORS ---------- */
function showDoctors() {
  let rows = doctors.map(d =>
    `<tr>
      <td>${d.name}</td>
      <td>${d.spec}</td>
      <td>${d.available}</td>
    </tr>`
  ).join("");

  document.getElementById("content").innerHTML = `
    <h2>Doctors</h2>
    <table>
      <tr><th>Name</th><th>Specialization</th><th>Available</th></tr>
      ${rows}
    </table>
  `;
}

/* ---------- SUGGESTIONS ---------- */
function showSuggestions() {
  document.getElementById("content").innerHTML = `
    <h2>Health Suggestions</h2>
    <ul>
      <li>Drink enough water daily</li>
      <li>Regular BP and sugar checkups</li>
      <li>Exercise at least 30 minutes</li>
      <li>Consult doctor if symptoms persist</li>
    </ul>
  `;
}

/* ---------- CHARTS ---------- */
function loadCharts() {

  new Chart(patientChart, {
    type: "line",
    data: {
      labels: ["Jan","Feb","Mar","Apr","May","Jun"],
      datasets: [{
        label: "Patients",
        data: [120,200,280,350,420,500],
        borderWidth: 2
      }]
    }
  });

  new Chart(diseaseChart, {
    type: "pie",
    data: {
      labels: ["Diabetes","BP","Heart","Fever"],
      datasets: [{
        data: [30,25,20,25]
      }]
    }
  });

  new Chart(doctorChart, {
    type: "bar",
    data: {
      labels: ["Cardio","Neuro","Ortho","General"],
      datasets: [{
        label: "Doctors",
        data: [3,2,2,4]
      }]
    }
  });
}
