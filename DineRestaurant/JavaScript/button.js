
const blackBtn=document.getElementsByClassName(`blackButton`);

for (let i=0;i<blackBtn.length;i++){
  blackBtn[i].addEventListener ('click', () => {
  const tab = window.open(`http://127.0.0.1:5500/DineRestaurant/reservationForm.html`)
  })
}

const whiteBtn=document.getElementsByClassName("whiteButton");

for (let i=0;i<whiteBtn.length;i++){
  whiteBtn[i].addEventListener ('click', () => {
  const tab = window.open(`http://127.0.0.1:5500/DineRestaurant/reservationForm.html`)
  })
}

const menuBtn=document.getElementsByClassName("menuButton");

for (let i=0;i<menuBtn.length;i++){
  menuBtn[i].addEventListener ('click', () => {
  const tab = window.open(`http://127.0.0.1:5500/DineRestaurant/menu.html`)
  })
}

