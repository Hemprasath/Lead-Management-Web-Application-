const customers = [
    { id: 1, name: "sudhan", email: "sudhan@example.com", city:"chennai", Contact: "1234567890", status: "New", source: "Facebook" },
    { id: 2, name: "mathu", email: "mathu12@example.com", city:"karikal", Contact: "0987654321", status: "Contacted", source: "Google" },
    { id: 3, name: "siva", email: "sivasiva@example.com", city:"vellore", Contact: "1122334455", status: "Not Intrested", source: "Twitter" },
    { id: 4, name: "kailash", email: "kailash33@example.com", city:"trichi", Contact: "2234767890", status: "New", source: "Instagram" },
    { id: 5, name: "vicky", email: "vicky11@example.com", city:"thiruvarur", Contact: "09879384321", status: "New", source: "Google" },
    { id: 6, name: "suresh", email: "suresh@example.com", city:"salem", Contact: "1230397890", status: "New", source: "Facebook" },
    { id: 7, name: "reka", email: "reka22@example.com", city:"nagapattinam", Contact: "0987608321", status: "Contacted", source: "Google" },
    { id: 8, name: "mani", email: "mani@example.com", city:"covai", Contact: "11223343215", status: "Not Intrested", source: "Google" },
    { id: 9, name: "mohan", email: "mohan@example.com", city:"madurai", Contact: "1122099955", status: "Not Intrested", source: "Instagram" },
];

function sectionopen(sectionId) {
    document.querySelectorAll("section").forEach((section) => {
      section.classList.add("sections");
    });
    document.getElementById(sectionId).classList.remove("sections");
  }

//   1
  function poplisting(){
    const leadlistingbody = document.getElementById("leadlistingbody");
    leadlistingbody.innerHTML = "";

    customers.forEach((lead) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${lead.name}</td>
          <td>${lead.Contact}</td>
          <td>${lead.email}</td>
          <td>${lead.city}</td>
          <td>${lead.status}</td>
          <td><button onclick="viewLeadDetails(${lead.id})">View Details</button></td>
        `;
        leadlistingbody.appendChild(row);
      });
  }

//   2
  function viewLeadDetails(id) {
    const lead = customers.find((lead) => lead.id === id);
  
    document.getElementById("leadName").innerText = lead.name;
    document.getElementById("leadEmail").innerText = lead.email;
    document.getElementById("leadcontact").innerText = lead.Contact;
    document.getElementById("leadcity").innerText = lead.city;
    document.getElementById("leadStatus").innerText = lead.status;
  
    sectionopen("leaddetails");
  }

//   3
    function populateLeadManagement() {
    const leadTable = document.getElementById("leadmanagementbody");
    leadTable.innerHTML = "";
  
    customers.forEach((lead) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${lead.name}</td>
        <td>${lead.email}</td>
        <td>${lead.Contact}</td>
        <td>${lead.status}</td>
      `;
      leadTable.appendChild(row);
    });
  }

//   4
  function populateDashboard() {
    const totalLeads = customers.length;
    const newLeads = customers.filter((lead) => lead.status === "New").length;
    const contactedLeads = customers.filter((lead) => lead.status === "Contacted").length;
    const notintrestedLeads = customers.filter((lead) => lead.status === "Not Intrested").length;


    document.getElementById("total").innerText = totalLeads;
    document.getElementById("new").innerText = newLeads;
    document.getElementById("contacted").innerText = contactedLeads;
    document.getElementById("notintrested").innerText = notintrestedLeads;
  
    const leadSourceData = customers.reduce((acc, lead) => {
      acc[lead.source] = (acc[lead.source] || 0) + 1;
      return acc;
    }, {});
  
    renderLeadSourceChart(leadSourceData);
  }

  function renderLeadSourceChart(data) {
    const ctx = document.getElementById("chart").getContext("2d");
    const chartData = {
      labels: Object.keys(data),
      datasets: [
        {
          data: Object.values(data),
          backgroundColor: ["red", "blue", "white", "green"],
        },
      ],
    };
    new Chart(ctx, { type: "bar", data: chartData });
  }


  // inilize
  document.addEventListener("DOMContentLoaded", () => {
    sectionopen("leadlisting");
    poplisting();
    populateLeadManagement();
    populateDashboard();
  });