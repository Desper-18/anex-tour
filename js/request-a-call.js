const callRequestForm = document.querySelector('#callRequestForm');
console.log(callRequestForm);
const nameField = document.querySelector('#client_name');
const telField = document.querySelector('#client_phone');

callRequestForm.addEventListener("submit", onRequestSubmit);

function onRequestSubmit(event) {
  // Предотвратить перезагрузку перед сохранением данных в localStorage
  event.preventDefault()
  const request = {
    name: nameField.value,
    tel: telField.value
  }
  // console.dir(nameField);
  // console.log(nameField.value);
  // console.log(request);
  localStorage.setItem("client_name", request.name)
  localStorage.setItem("client_tel", request.tel)
  localStorage.setItem("requests", JSON.stringify([request]))
}