
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="mt-4 alert alert-${type} alert-dismissible fade show"  role="alert">`,
    `   <div>${message}</div>`,
    '   <button id="cerrar-alert" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
  
    const validatorName = document.getElementById("inputName")
    if( validatorName.value != ""){
    appendAlert('Registro procesado con éxito!', 'success')
    return
    }
    appendAlert('Faltan Datos en el formulario', 'danger')
  })
}
