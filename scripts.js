const element = document.querySelector("#horas")
let timer = 30000;
setInterval(() => {
    element.innerHTML = moment(moment.duration(timer, "seconds").asMilliseconds()).format("DD:hh:mm:ss");
    timer--
}, 1000);
