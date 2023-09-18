const Bootstrap = document.createElement("link");
Bootstrap.rel = "stylesheet";
Bootstrap.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css?v=1." + new Date().getTime();


document.head.appendChild(Bootstrap);