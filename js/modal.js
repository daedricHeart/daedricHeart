const modal = document.querySelector('.modal');
const modal2 = document.querySelector('.modal2');
const modal3 = document.querySelector('.modal3');

const button = document.querySelectorAll('.view_button')
const button2 = document.querySelectorAll('.view_button2')
const button3 = document.querySelectorAll('.view_button3')

const original = document.querySelector('.full-img');
const original2 = document.querySelector('.full-img2');
const original3 = document.querySelector('.full-img3');



// BLOCK 1
button.forEach((preview) => {
    preview.addEventListener("click", ()=>{
        modal.classList.add("open");
        original.classList.add("open");
        $("html,body").css("overflow","hidden");
    });
});

modal.addEventListener('click', (e) => {
    if(e.target.classList.contains('modal')){
        modal.classList.remove('open');
        original.classList.remove('open');
        $("html,body").css("overflow","visible");
    }
});
// BLOCK 1 END


// BLOCK 2
button2.forEach((preview) => {
    preview.addEventListener("click", ()=>{
        modal2.classList.add("open");
        original2.classList.add("open");
        $("html,body").css("overflow","hidden");
    });
});

modal2.addEventListener('click', (e) => {
    if(e.target.classList.contains('modal2')){
        modal2.classList.remove('open');
        original2.classList.remove('open');
        $("html,body").css("overflow","visible");
    }
});
// BLOCK 2 END



// BLOCK 3
button3.forEach((preview) => {
    preview.addEventListener("click", ()=>{
        modal3.classList.add("open");
        original3.classList.add("open");
        $("html,body").css("overflow","hidden");
    });
});

modal3.addEventListener('click', (e) => {
    if(e.target.classList.contains('modal3')){
        modal3.classList.remove('open');
        original3.classList.remove('open');
        $("html,body").css("overflow","visible");
    }
});
// BLOCK 3 END






















// button.forEach((preview) => {
//     preview.addEventListener("click", ()=>{
//         modal.classList.add("open");
//         original.classList.add("open");
//         $("html,body").css("overflow","hidden");
//     });
// });

// modal.addEventListener('click', (e) => {
//     if(e.target.classList.contains('modal')){
//         modal.classList.remove('open');
//         original.classList.remove('open');
//         $("html,body").css("overflow","visible");
//     }
// })


