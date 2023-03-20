var typed = new Typed(".multiple-text", {
    strings: ["Backend Developer", "Programmer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})
var typed_2 = new Typed(".multiple_description",{
    strings: ["Hello. I am glad to see you on my page. For now I am undergraduate student. And I am studying in Technical University in Kosice"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: false
})
// Using window.innerWidth
const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
console.log('Viewport width:', viewportWidth);
// Select the button element using its ID
// Select the anchor element using its ID
if (viewportWidth > 1000){
    document.getElementById("home_img_prev").remove();
}
else {
    document.getElementById("home_img").remove();
}
