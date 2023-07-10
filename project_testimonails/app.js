let testimonails = [
    {
        id: 1,
        name: "James",
        jobtitle: "ui ux designer",
        img: "https://www.course-api.com/images/people/person-1.jpeg",
        discription:  "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",

        


    },
    {
        id: 2,
        name: "Richard",
        jobtitle: "back end  developer",
        img: "https://www.course-api.com/images/people/person-2.jpeg",
        discription:  "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",

        


    },
    {
        id: 3,
        name: "Stephen",
        jobtitle: "front end  developer",
        img: "https://www.course-api.com/images/people/person-3.jpeg",
        discription:  "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",

        


    },
    {
        id: 4,
        name: "Justin",
        jobtitle: "Project Manager",
        img: "https://www.course-api.com/images/people/person-4.jpeg",
        discription:  "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",

        


    }
]
      

let nextbtn = document.getElementById('next-btn');
let prevbtn = document.getElementById('prev-btn');
let img = document.getElementById('img');
let discription = document.getElementById('p')
let nameperson = document.getElementById('name')
let jobTitle = document.getElementById('jobTitle')


let crruntslider = 0;
window.addEventListener('DOMContentLoaded', function () {
    info(crruntslider)
})


function info(preson) {
    let item = testimonails[preson]
    nameperson.textContent = item.name;
    jobTitle.textContent = item.jobtitle;
    discription.textContent = item.discription;
    img.src = item.img;
}



nextbtn.addEventListener('click', function () {
    crruntslider++
    if(crruntslider > testimonails.length - 1 ) {
        crruntslider = 0;
    }
    info(crruntslider)



});


prevbtn.addEventListener('click', function () {
    crruntslider--
    if(crruntslider < 0) {
        crruntslider = testimonails.length - 1
    }
    info(crruntslider)
    
});




