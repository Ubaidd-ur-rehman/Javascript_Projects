// QR_code is the div of the Image
var QR_code = document.getElementsByClassName('QR-code')[0];
// input field
var QR_input = document.getElementById('QR-input');
// QR button 
var QR_btn = document.getElementById('QR-btn');
// img of the Qr
var QRImg = document.getElementById('QRImg');

function QRGenerator() {
  QRImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + QR_input.value;
  if (QR_input.value.length > 0) {
    QR_code.classList.add("show-img");
    console.log('Image loaded and class added');
  } else {
    QR_input.classList.add('error');
    setTimeout(()=>{
      QR_input.classList.remove('error');
    },1000)
  }
}
