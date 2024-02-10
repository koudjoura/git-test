const btn = document.getElementById("btn");
const nomInput = document.getElementById("nom");
const prenomInput = document.getElementById("Prenom");
const ageInput = document.getElementById("age");
 btn.addEventListener("click", function() {
  const nom = nomInput.value;
  const prenom = prenomInput.value;
  const age = ageInput.value;

   
  const div = document.createElement("div");
  div.innerHTML = `
     
    <p>Nom: ${nom}</p>
    <p>Prénom: ${prenom}</p>
    <p>Age: ${age}</p>
  `;
  nom.nom="";
  prenom.Prenom="";
  age.age="";
  document.body.appendChild(div);
});
