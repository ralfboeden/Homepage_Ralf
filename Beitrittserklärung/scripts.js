
document.addEventListener("DOMContentLoaded", function() {
    var formularFields = document.getElementById("formularFields");
    for (var i = 1; i <= 6; i++) {
      var formularHTML = `
        <div class="form-row">
            <div class="input-wrapper">
                <label for="sparte${i}">Sparte:</label>
                <input type="text" id="sparte${i}" name="sparte${i}" required>
            </div>
            <div class="input-wrapper">
                <label for="name${i}">Name:</label>
                <input type="text" id="name${i}" name="name${i}" required>
            </div>
            <div class="input-wrapper">
                <label for="vorname${i}">Vorname:</label>
                <input type="text" id="vorname${i}" name="vorname${i}" required>
            </div>
            <div class="input-wrapper">
                <label for="geburtsdatum${i}">Geb.-Datum:</label>
                <input type="date" id="geburtsdatum${i}" name="geburtsdatum${i}" required>
            </div>
        </div>
      `;
      formularFields.insertAdjacentHTML('beforeend', formularHTML);
    }
  });
  

  document.addEventListener("DOMContentLoaded", function() {
    // Druckvorgang auslösen, wenn auf den "Drucken"-Button geklickt wird
    document.getElementById("printButton").addEventListener("click", function() {
        if (validateForm()) { // Überprüfen, ob alle Pflichtfelder ausgefüllt sind
            window.print(); // Druckbefehl auslösen, wenn das Formular gültig ist
        } else {
            alert("Bitte fülle alle Pflichtfelder aus!"); // Benutzer benachrichtigen, wenn Pflichtfelder fehlen
        }
    });
});

// Funktion zur Validierung des Formulars
function validateForm() {
  var requiredFields = ["sparte1", "name1", "vorname1", "geburtsdatum1", "strasseNr", "plzOrt", "email", "telefon", "iban"/* Weitere Felder hier einfügen */];

  // Schleife durch die Pflichtfelder, um zu überprüfen, ob sie ausgefüllt sind
  for (var i = 0; i < requiredFields.length; i++) {
      var field = document.getElementById(requiredFields[i]);
      if (!field.value.trim()) { // Überprüfen, ob das Feld leer ist
          return false; // Wenn ein Pflichtfeld leer ist, das Formular ist ungültig
      }
  }

  // Wenn alle Pflichtfelder ausgefüllt sind, ist das Formular gültig
  return true;
}

  