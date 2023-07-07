var sun = document.querySelector("#sun")
var flag = 0
sun.addEventListener( "click",function(){
if(flag == 0) {
    document.documentElement.style.setProperty("--primary-color","#fff")
    document.documentElement.style.setProperty("--secondary-color","#000")
    sun.innerHTML = `<i class="ri-moon-clear-fill"></i>`
    flag = 1
} else {
    document.documentElement.style.setProperty("--primary-color","#000")
    document.documentElement.style.setProperty("--secondary-color","#fff")
    sun.innerHTML = `<i class="ri-sun-fill"></i>`
    flag = 0

}
})
