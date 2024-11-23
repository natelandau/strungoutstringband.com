function getRandomImage()
{
    var images = [
        "assets/img/header/1.jpg",
        "assets/img/header/2.jpg",
        "assets/img/header/3.jpg",
        "assets/img/header/4.jpg",
        "assets/img/header/5.jpg",
        "assets/img/header/6.jpg"
    ];
    return images[Math.floor(Math.random() * 6)];
}

$(document).ready(function(){
    $('head').append('<style>.image-container:before{background-image: url("' + getRandomImage()+ '") !important;}</style>');
});
