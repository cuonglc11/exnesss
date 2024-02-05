
var myLink  = document.getElementById('showPoupe');
var showPoupeAPK  = document.getElementById('showPoupeAPK');
myLink.onclick = function()
{
   show('qr_store_en')
}
showPoupeAPK.onclick = function()
{
   show('qr_store_en')
}
function closePopup(data_link)
{
    var container = document.getElementById('container_en');
    var popup = document.querySelector('[data-popup="'+data_link+'"]');
   
       container.style.display = 'block';
       popup.style.display = 'none';
}
function show(data_link)
{
    var container = document.getElementById('container_en');
    var popup = document.querySelector('[data-popup="'+data_link+'"]');
   
       container.style.display = 'none';
       popup.style.display = 'block';
}
function handler1()
{
    show('clipboard_en');
}