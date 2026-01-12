// LOGIN
function login() {
  const email = document.getElementById("email").value;

  if (email === "") {
    alert("Please enter email");
    return;
  }

  localStorage.setItem("userEmail", email);
  window.location.href = "dashboard.html";
}

// LOAD USER ON DASHBOARD
function loadUser() {
  const email = localStorage.getItem("userEmail");

  if (!email) {
    window.location.href = "index.html";   // 🔥 FIX
    return;
  }

  document.getElementById("userEmail").innerText = email;
  loadCharts();
}

// LOGOUT
function logout() {
  localStorage.removeItem("userEmail");
  window.location.href = "index.html";     // 🔥 FIX
}

// CHARTS
function loadCharts() {

  new Chart(document.getElementById("patientChart"), {
    type: "line",
    data: {
      labels: ["Jan","Feb","Mar","Apr","May","Jun"],
      datasets: [{
        label: "Patients",
        data: [120,190,300,250,420,500],
        borderWidth: 2
      }]
    }
  });

  new Chart(document.getElementById("diseaseChart"), {
    type: "pie",
    data: {
      labels: ["Diabetes","Heart","BP","Covid","Other"],
      datasets: [{
        data: [30,20,25,15,10]
      }]
    }
  });

  new Chart(document.getElementById("doctorChart"), {
    type: "bar",
    data: {
      labels: ["Cardiology","Neurology","Orthopedic","General"],
      datasets: [{
        label: "Doctors Available",
        data: [8,5,6,10]
      }]
    }
  });
}
