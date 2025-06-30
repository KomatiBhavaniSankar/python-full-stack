
var form = document.getElementById("studentForm");


var fields = [
  { label: "First Name", type: "text", name: "firstName" },
  { label: "Last Name", type: "text", name: "lastName" },
  { label: "Phone Number", type: "tel", name: "phone" },
  { label: "Roll Number", type: "text", name: "rollNo" },
  { label: "Photo", type: "file", name: "photo" },
  { label: "Email", type: "email", name: "email" },
  { label: "Address", type: "textarea", name: "address" },
  { label: "Parent's Name", type: "text", name: "parentName" },
  { label: "Parent's Phone", type: "tel", name: "parentPhone" },
  { label: "Class", type: "text", name: "class" },
  { label: "Section", type: "text", name: "section" }
];

var heading = document.createElement("h2");
heading.innerText = "Student Data Form";
form.appendChild(heading);

for (var i = 0; i < fields.length; i++) {
  var field = fields[i];

  var label = document.createElement("label");
  label.htmlFor = field.name;
  label.innerText = field.label;
  form.appendChild(label);

 
  var input;
  if (field.type === "textarea") {
    input = document.createElement("textarea");
  } else {
    input = document.createElement("input");
    input.type = field.type;
  }

  input.id = field.name;
  input.name = field.name;
  form.appendChild(input);

  
  form.appendChild(document.createElement("br"));
}


var button = document.createElement("button");
button.type = "submit";
button.innerText = "Submit";
form.appendChild(button);

