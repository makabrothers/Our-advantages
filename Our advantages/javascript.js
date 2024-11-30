var b = document.querySelector("a");
b.addEventListener('mouseenter',function(){
    b.style.color = "salmon";
    b.style.fontSize= "30px";
});

b.addEventListener('mouseleave',function(){
    b.style.color= "black";
    b.style.fontsize="16px"
});

