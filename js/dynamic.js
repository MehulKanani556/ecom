// Home  (Menas Fashion)
const category = [
    { 
        id: "1", 
        img: "man.png", 
        name: "Mens Fashion", 
        link: "MensCategory"
    },
    { 
        id: "2", 
        img: "woman.png", 
        name: "Womens Fashion", 
        link: "" 
    },
    { 
        id: "3", 
        img: "kids.png", 
        name: "Kids Fashion", 
        link: "" 
    },
    { 
        id: "4", 
        img: "electorics.png", 
        name: "Electronics", 
        link: "" 
    },
    { 
        id: "5", 
        img: "beuty.png", 
        name: "Beauty", 
        link: "" 
    },
    { 
        id: "6", 
        img: "sports.png", 
        name: "Sports", 
        link: "" 
    },
];

const categoryHtml = category.map((item, index) => {
    return `
        <a href="../darshit/${item.link}.html">
            <div class="swiper-slide">
                <img src="../img/${item.img}" alt="${item.name}">
                <p style="color: #000000; font-weight: 500;">${item.name}</p>
            </div>
        </a>`;
}).join("");

document.getElementById("mv_mens_fashion").innerHTML = categoryHtml;


// Home  (Footwear & Handbags)
const footwear = [
    { 
        id: "1", 
        img: "dsaggg 1.png", 
        name: "Sports Shoes", 
        link: "sportswear"
    },
    { 
        id: "2", 
        img: "pair-brown-shoes-with-black-leather-sole-word-bottom 1.png", 
        name: "Mens Shoes", 
        link: "" 
    },
    { 
        id: "3", 
        img: "small-purse-studio-still-life 1.png", 
        name: "Handbags", 
        link: "" 
    },
    { 
        id: "4", 
        img: "high-heel-shoes 1.png", 
        name: "Women Heels", 
        link: "" 
    },
    { 
        id: "5", 
        img: "infant-background-birthday-child-newborn 1.png", 
        name: "Kids Shoes", 
        link: "" 
    },
];


const sportshoes = footwear.map((item, index) => {
    return `
        <div class="col-6 col-sm-4 col-md-4 col-lg-2 text-center category">
            <a href="../darshit/${item.link}.html">
                <img src="../img/${item.img}">
                <p style="color: #fff; font-weight: 500;">${item.name}</p>
            </a>
        </div>`;
}).join("");

document.getElementById("mv_sport_shoes").innerHTML = sportshoes;


// Home  (Electronics)
const electronic = [
    { 
        id: "1", 
        img: "image 383.png", 
        name: "Xiaomi Smart TV", 
        startprice: "$99", 
        link: ""
    },
    { 
        id: "2", 
        img: "image 384.png", 
        name: "Dell Laptop", 
        startprice: "$99", 
        link: ""
    },
    { 
        id: "3", 
        img: "image 385.png", 
        name: "Smartphones", 
        startprice: "30%", 
        link: ""
    },
    { 
        id: "4", 
        img: "Frame 1000003134.png", 
        name: "Gaming Accessories", 
        startprice: "20%", 
        link: ""
    },
    { 
        id: "5", 
        img: "image 380.png", 
        name: "Wireless Speakers", 
        startprice: "$99", 
        link: ""
    },
    { 
        id: "6", 
        img: "rendering-smart-home-device 1.png", 
        name: "Smart Watches", 
        startprice: "$99", 
        link: ""
    },
    { 
        id: "7", 
        img: "image 379.png", 
        name: "Noise Earbuds", 
        startprice: "$99", 
        link: ""
    },
    { 
        id: "8", 
        img: "image 2.png", 
        name: "JBL Headphones", 
        startprice: "$99", 
        link: ""
    },
    { 
        id: "9", 
        img: "Frame 1000003136.png", 
        name: "Tablets", 
        startprice: "30%", 
        link: ""
    },
    { 
        id: "10", 
        img: "image 389.png", 
        name: "Gaming Laptops", 
        startprice: "20%", 
        link: ""
    },
];


const electronicsec = electronic.map((item, index) => {
    let priceText = item.startprice.includes('%') 
        ? `Up to ${item.startprice} OFF`  
        : `Start from <b>${item.startprice}</b>`;
        return `
            <a href="../darshit/${item.link}.html" class="dk_product-item">
                <img src="../img/${item.img}">
                <h5 style="color: #000000; font-weight: 500;">${item.name}</h5>
                <p style="color: #000000; font-weight: 400;">${priceText}</p>
            </a>
        `;
}).join("");

document.getElementById("mv_electronic").innerHTML = electronicsec;