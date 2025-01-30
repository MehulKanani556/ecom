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
        ${item.link ? `<a style="cursor: pointer !important;" href="../darshit/${item.link}.html">` :""}
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
    },
    { 
        id: "2", 
        img: "image 384.png", 
        name: "Dell Laptop", 
        startprice: "$99", 
    },
    { 
        id: "3", 
        img: "image 385.png", 
        name: "Smartphones", 
        startprice: "30%", 
    },
    { 
        id: "4", 
        img: "Frame 1000003134.png", 
        name: "Gaming Accessories", 
        startprice: "20%", 
    },
    { 
        id: "5", 
        img: "image 380.png", 
        name: "Wireless Speakers", 
        startprice: "$99", 
    },
    { 
        id: "6", 
        img: "rendering-smart-home-device 1.png", 
        name: "Smart Watches", 
        startprice: "$99", 
    },
    { 
        id: "7", 
        img: "image 379.png", 
        name: "Noise Earbuds", 
        startprice: "$99", 
    },
    { 
        id: "8", 
        img: "image 2.png", 
        name: "JBL Headphones", 
        startprice: "$99", 
    },
    { 
        id: "9", 
        img: "Frame 1000003136.png", 
        name: "Tablets", 
        startprice: "30%", 
    },
    { 
        id: "10", 
        img: "image 389.png", 
        name: "Gaming Laptops", 
        startprice: "20%", 
    },
];

const electronicsec = electronic.map((item, index) => {
    let priceText = item.startprice.includes('%') 
        ? `Up to ${item.startprice} OFF`  
        : `Start from <b>${item.startprice}</b>`;
        return `
            <a href="" class="dk_product-item">
                <img src="../img/${item.img}">
                <h5 style="color: #000000; font-weight: 500;">${item.name}</h5>
                <p style="color: #000000; font-weight: 400;">${priceText}</p>
            </a>
        `;
}).join("");

document.getElementById("mv_electronic").innerHTML = electronicsec;




// Home (Women’s cards)
const womenscard = [
    { 
        id: "1", 
        images: ["kotty.png","kotty.png","kotty.png","kotty.png","kotty.png"],
        name:"Kotty",
        categorydesc:"Hot Pink V-Neck Bishop Sleeve Satin Wrap Crop Top",
        thumbnail:["ketty2.png","ketty2.png","ketty2.png"],
        discount:"30",
        price:"200",
    },
    { 
        id: "2", 
        images: ["vero moda.png","vero moda.png","vero moda.png","vero moda.png","vero moda.png"],
        name:"Vero Moda",
        categorydesc:"Women Flared High-Rise Parallel Trousers",
        thumbnail:["vero moda sub.png","vero moda sub.png","vero moda sub.png"],
        discount:"30",
        price:"200"
    },
    { 
        id: "3", 
        images: ["vro modo2.png","vro modo2.png","vro modo2.png","vro modo2.png","vro modo2.png"],
        name:"Vero Moda",
        categorydesc:"Ribbed Cotton Pullover Navy Blue Sweater",
        thumbnail:["vero modo sub2.png","vero modo sub2.png","vero modo sub2.png"],
        discount:"30",
        price:"200"
    },
    { 
        id: "4", 
        images: ["vro moda3.png","vro moda3.png","vro moda3.png","vro moda3.png","vro moda3.png"],
        name:"Vero Moda",
        categorydesc:"Women Geometric Printed Straight Fit Culottes Trousers",
        thumbnail:["vano modo sub3.png","vano modo sub3.png","vano modo sub3.png"],
        discount:"30",
        price:"200"
    },
];

const womencardproduct = womenscard.map((item, index) => {

    const wishlistData = JSON.parse(localStorage.getItem('wishlist')) || [];
    const isInWishlist = wishlistData.some(wishlistItem => wishlistItem.id === item.id);
    
    const heartIconClass = isInWishlist ? 'fa-solid text-danger' : 'fa-regular';

    let currnt_record = JSON.stringify(item).replace(/"/g, '&quot;');

    return `
        <div class="col-xl-3 col-sm-6 text p-2">
            <div class="dk_browsing_products">
                <div class="card">
                    <div class="icon-container">
                        <span class="icon heart" onclick='toggleWishlist(event,${currnt_record})'>
                        <i class="${heartIconClass} fa-heart"></i></span>
                        <span class="icon cart"><i class="fa-solid fa-cart-shopping"></i></span>
                    </div>

                    <div class="slider">
                        ${item.images.map(img => 
                            `<img src="../img/${img}" alt="Product Image" class="slider-image">`
                        ).join('')}
                    </div>

                    <div class="dots-container">
                        ${item.images.map((_, id) => 
                            `<span class="dot" data-index="${id}"></span>`
                        ).join('')}
                    </div>

                    <h2>${item.name}</h2>
                    <p>${item.categorydesc}</p>

                    <div class="thumbnails">
                        ${item.thumbnail.map(thumb => 
                            `<img src="../img/${thumb}" alt="Thumbnail" class="thumbnail">`
                        ).join('')}
                    </div>

                    <div class="off">
                        <span class="off-price">${item.discount}% OFF</span>
                    </div>

                    <div class="price">
                        <span class="discount-price">$${item.price - (item.price * (item.discount / 100)).toFixed(0)}</span>
                        <span class="original-price">$${item.price}</span>
                    </div>
                </div>
                <button class="buy-now">Buy Now</button>
            </div>
        </div>
    `;
}).join(''); 

document.getElementById("mv_womens_cards").innerHTML = womencardproduct;

// Add wishlist
let wishlist = [];

function toggleWishlist(event,item) {
    console.log(item)
    event.preventDefault();

    let data = JSON.parse(localStorage.getItem('wishlist')) || [];

    let index = data.findIndex(i => i.id === item.id);
    const heartIcon = event.currentTarget.querySelector('i');

    if (index !== -1) {
        data.splice(index, 1);

        if (heartIcon) {
            heartIcon.classList.remove('fa-solid', 'text-danger');
            heartIcon.classList.add('fa-regular');
        }
    } else {
        data.push(item);

        if (heartIcon) {
            heartIcon.classList.remove('fa-regular');
            heartIcon.classList.add('fa-solid', 'text-danger');
        }
    }

    localStorage.setItem('wishlist', JSON.stringify(data));
}



// Home (Best sellers)
const bestseller = [
    { 
        id: "1", 
        best: "true",
        images: ["sumsung.png","sumsung.png","sumsung.png","sumsung.png","sumsung.png"],
        name:"",
        categorydesc:"Samsung Galaxy S23 Ultra 5G AI Smartphone (Phantom Black, 12GB, 256GB Storage)",
        thumbnail:["sumsung demo1.png","sumsung demo2.png","sumsung demo3.png"],
        discount:"30",
        price:"200",
    },
    { 
        id: "2", 
        best: "true",
        images: ["kotty.png","kotty.png","kotty.png","kotty.png","kotty.png"],
        name:"Kotty",
        categorydesc:"Hot Pink V-Neck Bishop Sleeve Satin Wrap Crop Top",
        thumbnail:["ketty demo.png","ketty demo.png","ketty demo.png"],
        discount:"30",
        price:"200"
    },
    { 
        id: "3", 
        best: "true",
        images: ["smart tv.png","smart tv.png","smart tv.png","smart tv.png","smart tv.png"],
        name:"",
        categorydesc:"LG 32LM563BPTC 32 Inches HD Ready Smart LED TV (1366x768), Dark Iron Gray,80 cm",
        thumbnail:["tv demo.png","tv demo.png","tv demo.png"],
        discount:"30",
        price:"200"
    },
    { 
        id: "4", 
        best: "true",
        images: ["leptop.png","leptop.png","leptop.png","leptop.png","leptop.png"],
        name:"",
        categorydesc:"ASUS ROG Strix G16 (2024) Gaming Laptop, 16” 16:10 FHD 165Hz Display, NVIDIA GeForc..",
        thumbnail:["leptop1.png","leptop2.png","leptop3.png"],
        discount:"30",
        price:"200"
    },
    { 
        id: "5", 
        images: ["kotty.png","kotty.png","kotty.png","kotty.png","kotty.png"],
        name:"Kotty",
        categorydesc:"Hot Pink V-Neck Bishop Sleeve Satin Wrap Crop Top",
        thumbnail:["ketty demo.png","ketty demo.png","ketty demo.png"],
        discount:"30",
        price:"200"
    },
    { 
        id: "6", 
        images: ["smart tv.png","smart tv.png","smart tv.png","smart tv.png","smart tv.png"],
        name:"",
        categorydesc:"LG 32LM563BPTC 32 Inches HD Ready Smart LED TV (1366x768), Dark Iron Gray,80 cm",
        thumbnail:["tv demo.png","tv demo.png","tv demo.png"],
        discount:"30",
        price:"200"
    },
    { 
        id: "7", 
        images: ["sumsung.png","sumsung.png","sumsung.png","sumsung.png","sumsung.png"],
        name:"",
        categorydesc:"Samsung Galaxy S23 Ultra 5G AI Smartphone (Phantom Black, 12GB, 256GB Storage)",
        thumbnail:["sumsung demo1.png","sumsung demo2.png","sumsung demo3.png"],
        discount:"30",
        price:"200",
    },
    { 
        id: "8", 
        images: ["leptop.png","leptop.png","leptop.png","leptop.png","leptop.png"],
        name:"",
        categorydesc:"ASUS ROG Strix G16 (2024) Gaming Laptop, 16” 16:10 FHD 165Hz Display, NVIDIA GeForc..",
        thumbnail:["leptop1.png","leptop2.png","leptop3.png"],
        discount:"30",
        price:"200"
    },
];

const bestsellproduct = bestseller.map((item, index) => {
    return `
        <div class="col-xl-3 col-sm-6 p-2">
            <div class="dk_best_seller_card">
                <div class="dk_bedge">
                    ${item.best === "true" ? `<p class="mb-0">Best Seller</p>` : ""}
                </div>

                <div class="owl-carousel owl-theme dk_best_seller_slider pb-4 mt-3">
                    ${item.images.map(img => 
                        `<div class="dk_caro_img mx-auto">
                            <img src="../img/${img}" alt="Product Image" class="object_cover w-100 h-100">
                        </div>`
                    ).join('')}
                </div>

                <p style="font-size: 18px; font-weight: 600; margin-bottom: 0px;">${item.name}</p>
                <h4 style="font-size: 18px; font-weight: 400; padding: 0px;">${item.categorydesc}</h4>

                <div class="dk_best_seller_thumbnails">
                    ${item.thumbnail.map(thumb => 
                        `<img src="../img/${thumb}" alt="Thumbnail" class="dk_best_seller_thumbnail">`
                    ).join('')}
                </div>

                <div class="dk_best_seller_off">
                    <span class="dk_best_seller_off-price">${item.discount}% OFF</span>
                </div>

                <div class="dk_best_seller_price">
                    <span class="dk_best_seller_discount-price">$${(item.price * (1 - item.discount / 100)).toFixed(2)}</span>
                    <span class="dk_best_seller_original-price">$${item.price}</span>
                </div>
            </div>
        </div>
    `;
}).join(''); 

document.getElementById("mv_best_sellers").innerHTML = bestsellproduct;




// Home (Top Selling Smartphones)
const top_selling_smartphones = [
    { 
        id: "5", 
        images: ["sumsung.png","sumsung.png","sumsung.png","sumsung.png","sumsung.png"],
        categorydesc:"Samsung Galaxy S23 Ultra 5G AI Smartphone (Phantom Black, 12GB, 256GB Storage)",
        thumbnail:["sumsung demo1.png","sumsung demo2.png","sumsung demo3.png"],
        discount:"30",
        price:"200",
    },
    { 
        id: "6", 
        images: ["sumsung.png","sumsung.png","sumsung.png","sumsung.png","sumsung.png"],
        categorydesc:"Samsung Galaxy S23 Ultra 5G AI Smartphone (Phantom Black, 12GB, 256GB Storage)",
        thumbnail:["sumsung demo1.png","sumsung demo2.png","sumsung demo3.png"],
        discount:"30",
        price:"200",
    },
    { 
        id: "7", 
        images: ["sumsung.png","sumsung.png","sumsung.png","sumsung.png","sumsung.png"],
        categorydesc:"Samsung Galaxy S23 Ultra 5G AI Smartphone (Phantom Black, 12GB, 256GB Storage)",
        thumbnail:["sumsung demo1.png","sumsung demo2.png","sumsung demo3.png"],
        discount:"30",
        price:"200",
    },
    { 
        id: "8", 
        images: ["sumsung.png","sumsung.png","sumsung.png","sumsung.png","sumsung.png"],
        categorydesc:"Samsung Galaxy S23 Ultra 5G AI Smartphone (Phantom Black, 12GB, 256GB Storage)",
        thumbnail:["sumsung demo1.png","sumsung demo2.png","sumsung demo3.png"],
        discount:"30",
        price:"200",
    },
];

const top_sell_phone = top_selling_smartphones.map((item, index) => {

    const wishlistData = JSON.parse(localStorage.getItem('wishlist')) || [];
    const isInWishlist = wishlistData.some(wishlistItem => wishlistItem.id === item.id);
    
    const heartIconClass = isInWishlist ? 'fa-solid text-danger' : 'fa-regular';

    let currnt_record = JSON.stringify(item).replace(/"/g, '&quot;');

    return `
        <div class="col-xl-3 col-sm-6 text p-2">
            <div class="dk_browsing_products">
                <div class="card">
                    <div class="icon-container">
                        <span class="icon heart" onclick='toggleWishlist(event,${currnt_record})'>
                        <i class="${heartIconClass} fa-heart"></i></span>
                        <span class="icon cart"><i class="fa-solid fa-cart-shopping"></i></span>
                    </div>

                    <div class="slider">
                        ${item.images.map(img => 
                            `<img src="../img/${img}" alt="Product Image" class="slider-image">`
                        ).join('')}
                    </div>

                    <div class="dots-container">
                        ${item.images.map((_, id) => 
                            `<span class="dot" data-index="${id}"></span>`
                        ).join('')}
                    </div>

                    <h4 class="dk_your_sumsung mb-3">${item.categorydesc}</h4>

                    <div class="thumbnails">
                        ${item.thumbnail.map(thumb => 
                            `<img src="../img/${thumb}" alt="Thumbnail" class="thumbnail">`
                        ).join('')}
                    </div>

                    <div class="off">
                        <span class="off-price">${item.discount}% OFF</span>
                    </div>

                    <div class="price">
                        <span class="discount-price">$${item.price - (item.price * (item.discount / 100)).toFixed(0)}</span>
                        <span class="original-price">$${item.price}</span>
                    </div>
                </div>
                <button class="buy-now">Buy Now</button>
            </div>
        </div>
    `;
}).join(''); 

document.getElementById("mv_top_selling_phone").innerHTML = top_sell_phone;




//Home (Your Browsing products)
const yourbrowsing = [
    { 
        id: "9", 
        images: ["kotty.png","kotty.png","kotty.png","kotty.png","kotty.png"],
        name:"Kotty",
        categorydesc:"Hot Pink V-Neck Bishop Sleeve Satin Wrap Crop Top",
        thumbnail:["ketty2.png","ketty2.png","ketty2.png"],
        discount:"30",
        price:"200",
    },
    { 
        id: "10", 
        images: ["Dennis_Lingo.png","Dennis_Lingo.png","Dennis_Lingo.png","Dennis_Lingo.png","Dennis_Lingo.png"],
        name:"Dennis Lingo",
        categorydesc:"Men Black Slim Fit Opaque Cotton Casual Shirt",
        thumbnail:["Dennis_Lingo_sub.png","Dennis_Lingo_sub.png","Dennis_Lingo_sub.png"],
        discount:"30",
        price:"200"
    },
    { 
        id: "11", 
        images: ["sumsung.png","sumsung.png","sumsung.png","sumsung.png","sumsung.png"],
        name:"",
        categorydesc:"Samsung Galaxy S23 Ultra 5G AI Smartphone (Phantom Black, 12GB, 256GB Storage)",
        thumbnail:["sumsung demo1.png","sumsung demo2.png","sumsung demo3.png"],
        discount:"30",
        price:"200"
    },
    { 
        id: "12", 
        images: ["vro moda3.png","vro moda3.png","vro moda3.png","vro moda3.png","vro moda3.png"],
        name:"Vero Moda",
        categorydesc:"Women Geometric Printed Straight Fit Culottes Trousers",
        thumbnail:["vano modo sub3.png","vano modo sub3.png","vano modo sub3.png"],
        discount:"30",
        price:"200"
    },
];

const your_brow_pro = yourbrowsing.map((item, index) => {

    const wishlistData = JSON.parse(localStorage.getItem('wishlist')) || [];
    const isInWishlist = wishlistData.some(wishlistItem => wishlistItem.id === item.id);
    
    const heartIconClass = isInWishlist ? 'fa-solid text-danger' : 'fa-regular';

    let currnt_record = JSON.stringify(item).replace(/"/g, '&quot;');

    return `
        <div class="col-xl-3 col-sm-6 text p-2">
            <div class="dk_browsing_products">
                <div class="card">
                    <div class="icon-container">
                        <span class="icon heart" onclick='toggleWishlist(event,${currnt_record})'>
                        <i class="${heartIconClass} fa-heart"></i></span>
                        <span class="icon cart"><i class="fa-solid fa-cart-shopping"></i></span>
                    </div>

                    <div class="slider">
                        ${item.images.map(img => 
                            `<img src="../img/${img}" alt="Product Image" class="slider-image">`
                        ).join('')}
                    </div>

                    <div class="dots-container">
                        ${item.images.map((_, id) => 
                            `<span class="dot" data-index="${id}"></span>`
                        ).join('')}
                    </div>

                    <h2>${item.name}</h2>
                    <p>${item.categorydesc}</p>

                    <div class="thumbnails">
                        ${item.thumbnail.map(thumb => 
                            `<img src="../img/${thumb}" alt="Thumbnail" class="thumbnail">`
                        ).join('')}
                    </div>

                    <div class="off">
                        <span class="off-price">${item.discount}% OFF</span>
                    </div>

                    <div class="price">
                        <span class="discount-price">$${item.price - (item.price * (item.discount / 100)).toFixed(0)}</span>
                        <span class="original-price">$${item.price}</span>
                    </div>
                </div>
                <button class="buy-now">Buy Now</button>
            </div>
        </div>
    `;
}).join(''); 

document.getElementById("mv_your_browsing_product").innerHTML = your_brow_pro;