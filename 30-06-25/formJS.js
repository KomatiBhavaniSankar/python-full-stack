const form = document.getElementById("studentForm");

  const fields = [
    "First Name", "Last Name", "Phone Number", "Roll Number", "Class", "Section"
, "Email", "Address"
    
  ];


  const heading = document.createElement("h2");
  heading.textContent = "Student Data Form";
  form.appendChild(heading);

fields.forEach(field => {
  form.innerHTML += `
    <label>${field}</label><br>
    ${field === "Address" 
      ? '<textarea></textarea>' 
      : '<input type="text">'}
    <br>
  `;
});

  const button = document.createElement("button");
  button.type = "submit";
  button.textContent = "Submit";
  form.appendChild(button);