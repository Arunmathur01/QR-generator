let imagebox=document.getElementById('imagebox');
let qrtext=document.getElementById('qrtext');
let qrimage=document.getElementById('qrimage');

function generateqr(){
   if(qrtext.value.length>0){
    qrimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;
    
    imagebox.classList.add("show-img");
   }
   else{
    qrtext.classList.add('error');
    setTimeout(() => {
        qrtext.classList.remove('error');
    }, 1000);
   }
}