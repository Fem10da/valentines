// preload.js
$(document).ready(function() {
    console.log("preload.js: Документ готовий. Завантаження preloader.html у #preloaderContainer");
    $("#preloaderContainer").load("preloader.html", function() {
        console.log("preload.js: preloader.html завантажено");
        checkAccess();
        setInterval(checkAccess, 10000);
    });
});

function checkAccess() {
    var targetTime = new Date(2025, 1, 14, 10, 0, 0);
    var now = new Date();
    console.log("preload.js: Перевірка доступу. Поточний час:", now, "Цільовий час:", targetTime);
  
    if (now >= targetTime) {
      console.log("preload.js: Час настав. Показ основного контенту.");
      $("#mainDiv").fadeIn();
      $("#preloaderContainer").fadeOut(1000, function(){
        console.log("preload.js: Прелоадер сховано і видалено.");
        $(this).remove();
        adjustLayout();
      });
    } else {
      console.log("preload.js: Ще рано, продовжуємо перевірку.");
    }
}
