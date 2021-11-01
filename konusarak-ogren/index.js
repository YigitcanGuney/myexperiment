
// header animation windows scroll

$(window).on("scroll", () => {
    $(".menu-bar").toggleClass("sticky", window.scrollY > 0);
})



// comment file 




    $("body").on("click", "#getComment", (e) => {
   
        e.preventDefault();
        let text = $("#formComment").val();
            if (text != 0) {    
               
                // $("#commentContainer").append(` <div id="comment-area" class=" mb-5 row"><div class="col-sm-12 d-flex"><span class="text-muted ms-auto mt-3" style="font-size: 12px;">1 secondAgo</span></div><div class="col-sm-12 col-md-12"><div class="row"><div class="col-sm-2 col-md-2 mb-3"><img class="w-100" src="https://picsum.photos/id/237/200/200" alt=""></div><div class="col-sm-10 col-md-10"><p class="p-0 m-0" style="font-size: 14px;">Yigitcan Guney</p><p class="p-0 m-0" style="font-size: 12px;">Front-End Developer</p></div><hr></div></div><div class="col-sm-12 mt-3 border-bottom"><p>${text}</p></div><button id="deletecomment" class="btn btn-outline-danger mb-2 ms-auto deletecomment">Sil</button></div>`);
                $(`<div id="comment-area" class=" mb-5 row"><div class="col-sm-12 d-flex"><span class="text-muted ms-auto mt-3" style="font-size: 12px;">1 secondAgo</span></div><div class="col-sm-12 col-md-12"><div class="row"><div class="col-sm-2 col-md-2 mb-3"><img class="w-100" src="https://picsum.photos/id/237/200/200" alt=""></div><div class="col-sm-10 col-md-10"><p class="p-0 m-0" style="font-size: 14px;">Yigitcan Guney</p><p class="p-0 m-0" style="font-size: 12px;">Front-End Developer</p></div><hr></div></div><div class="col-sm-12 mt-3 border-bottom"><p>${text}</p></div><button id="deletecomment" class="btn btn-outline-danger mb-2 ms-auto deletecomment">Sil</button></div>`).appendTo("#commentContainer");
               
            } else {
                alert("Yorum satırı Boş bırakılamaz kardeş.");
            }
            
        
        
    })

    $("body").on("click", "#deletecomment", () => {
        $("#deletecomment").parent().remove();
    })
    
   
















