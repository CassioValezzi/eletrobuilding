const mycss = document.createElement("link");
mycss.rel = "stylesheet";
mycss.href = "./assets/css/style.css?v=1." + new Date().getTime();


document.head.appendChild(mycss);