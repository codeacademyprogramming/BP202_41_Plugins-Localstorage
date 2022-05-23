$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:500,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

let editor
ClassicEditor
.create( document.querySelector( '#editor' ), {
    toolbar: [ 'bold', 'italic', 'link', 'undo', 'redo','bulletedList', 'numberedList']
} )
.then(newEditor=>{
editor = newEditor
})
.catch( error => {
    console.log( error );
} );

let form = document.getElementById('form');

form.addEventListener('submit',function(e){
    e.preventDefault();
    let data = editor.getData();

    console.log(data)

})