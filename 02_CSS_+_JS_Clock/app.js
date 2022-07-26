
const secondHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')


function setDate() {
  // guardamos la fecha
  // guardamos los segundos, minutos y horas
  // dividimos los segundos entre 60 para tener el porcentaje y luego multiplicamos por 360 para tener los grados. Le añadimos 90 para contrarrestar los 90 que le hemos puesto en el diseño

  const now = new Date();
  
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`
  
  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  minHand.style.transform = `rotate(${minutesDegrees}deg)`
  
  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`

}

setInterval(setDate, 1000)