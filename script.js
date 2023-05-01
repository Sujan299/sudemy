// Navbar start
const menu_icon = document.querySelector('.menu-icon');
const links =document.querySelector('.links');
links.classList.remove("show-links");
menu_icon.addEventListener("click", function(){
    const toogle = links.classList.toggle("show-links");
})
//Navbar end

// menu start
const menu = [
    {
        id: 1,
        title: "Web developement full course 2023",
        category: "webdev",
        img: "assets/webdev.jpg",
        price: "$"+13,

    },
    {
        id: 2,
        title: "Data science 2022",
        category: "datascience",
        img: 'assets/datascience.png',
        price: "$"+12
    },
    {
        id: 3,
        title: "Cloud computing full course 2023 ",
        category: "cloudcomputing",
        img: "assets/cloudcomputing.jpg",
        price: "$"+17
    },
    {
        id: 4,
        title: "Python full course 2023 ",
        category: "python",
        img: "assets/python.png",
        price: "$"+11
    },
    {
        id: 5,
        title: "Node js full course 2023 ",
        category: "webdev",
        img: "assets/nodejs.png",
        price: "$"+13
    },
    {
        id: 6,
        title: "Networking full course 2023 ",
        category: "network",
        img: "assets/network.jpg",
        price: "$"+9
    }
];

const sectionCenter = document.querySelector('.section-center');
const filterBtns = document.querySelectorAll('.filter-btn');

window.addEventListener("DOMContentLoaded", function(){
    displayMenuItems(menu)
});
filterBtns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(
            function(menuItem){
                if(menuItem.category === category){
                    return menuItem;
                }
            }
        )
        if(category === 'all'){
            displayMenuItems(menu);
        }
        else{
            displayMenuItems(menuCategory);
        }
    })
})
function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item){
        return `<article class="menu-item">
            <img src=`+item.img+` alt="">
            <hr>
            <div class="item-info">
                <div class="header1">
                    <div>
                        <h2>`+item.title+`</h2>
                    </div>
                    <div class="cart">
                        <button>buy cart</button>
                        <div class="price">`+item.price+`</div>
                    </div>
                </div>
            </div>
        </article>`;
    });
    sectionCenter.innerHTML = displayMenu.join('');
}
// menu end 
// about start 
const more = document.querySelector('.more');
const less = document.querySelector('.less');
const addMore = document.querySelector(".addMore");
more.addEventListener('click', function(){
    addMore.classList.toggle("showMore");
    more.classList.add("hidebtn");
})