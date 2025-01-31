// ...................  MensCategory  ...................... //

//  Top Brands
const top_brands_cloth = [
    { 
        id: "1", 
        img: "levis.png", 
        discount: "10", 
        link: "productdetails"
    },
    { 
        id: "2", 
        img: "r&b.png", 
        discount: "10", 
        link: "productdetails" 
    },
    { 
        id: "3", 
        img: "jack.png", 
        discount: "10", 
        link: "productdetails" 
    },
    { 
        id: "4", 
        img: "Tommy.png", 
        discount: "10", 
        link: "productdetails" 
    },
    { 
        id: "5", 
        img: "us.png", 
        discount: "10", 
        link: "productdetails" 
    },
    { 
        id: "6", 
        img: "raymond.svg", 
        discount: "10", 
        link: "productdetails" 
    },
    { 
        id: "7", 
        img: "HRX.png", 
        discount: "10", 
        link: "productdetails"
    },
    { 
        id: "8", 
        img: "puma.png", 
        discount: "10", 
        link: "productdetails" 
    },
    { 
        id: "9", 
        img: "Nike.png", 
        discount: "10", 
        link: "productdetails" 
    },
    { 
        id: "10", 
        img: "skechers.png", 
        discount: "10", 
        link: "productdetails" 
    },
    { 
        id: "11", 
        img: "peter.png", 
        discount: "10", 
        link: "productdetails" 
    },
    { 
        id: "12", 
        img: "celio.png", 
        discount: "10", 
        link: "productdetails" 
    },
    { 
        id: "13", 
        img: "h&m.svg", 
        discount: "10", 
        link: "productdetails"
    },
    { 
        id: "14", 
        img: "lecooper.png", 
        discount: "10", 
        link: "productdetails" 
    },
    { 
        id: "15", 
        img: "adidas.png", 
        discount: "10", 
        link: "productdetails" 
    },
];

const topbrandcloth = top_brands_cloth.map((item, index) => {
    return `
        <a href="/darshit/${item.link}.html">
            <div class="dk_product-item">
                <img src="../r_img/${item.img}" alt="${item.img}">
                <p style="color: #000000;">Upto ${item.discount}% OFF</p>
            </div>
        </a>
    `;
}).join("");

document.getElementById("mv_top_cloth_brand").innerHTML = topbrandcloth;

//  Explore More
const exploremore = [
    { 
        id: "1", 
        img: "man.png", 
        name: "Mens", 
        link: "MensCategory"
    },
    { 
        id: "2", 
        img: "bottom.png", 
        name: "Womens", 
        link: "productdetails" 
    },
    { 
        id: "3", 
        img: "suit.png", 
        name: "Kids", 
        link: "productdetails" 
    },
    { 
        id: "4", 
        img: "shoes.png", 
        name: "Footewear", 
        link: "sportswear" 
    },
    { 
        id: "5", 
        img: "runner.png", 
        name: "Fitness Equipment", 
        link: "productdetails" 
    },
    { 
        id: "6", 
        img: "cover.png", 
        name: "Accessories", 
        link: "productdetails" 
    },
];

const MensExploremore = exploremore.map((item, index) => {
    return `
        <div class="col-6 col-sm-4 col-md-4 col-lg-2 text-center category">
            <a href="/darshit/${item.link}.html">
                <img src="/r_img/${item.img}" alt=${item.img}>
                <p style="color: #fff;">${item.name}</p>
            </a>
        </div>
    `;
}).join("");

document.getElementById("mv_mens_explore_more").innerHTML = MensExploremore;


//  New On Quickcart
const new_on_quickcart = [
    { 
        id: "1", 
        img1: "blue.png", 
        img2: "calvin.svg", 
        discount: "20", 
        info:"*T&C Apply",
        link: "productdetails"
    },
    { 
        id: "2", 
        img1: "bagman.png", 
        img2: "Louis.svg", 
        discount: "20", 
        info:"*T&C Apply",
        link: "productdetails" 
    },
    { 
        id: "3", 
        img1: "all.png", 
        img2: "venheusen.svg",
        discount: "20", 
        info:"*T&C Apply",
        link: "productdetails"
    },
    { 
        id: "4", 
        img1: "pink.png", 
        img2: "allensolly.svg", 
        name: "Mens", 
        discount: "20", 
        info:"*T&C Apply",
        link: "productdetails" 
    },
    { 
        id: "5", 
        img1: "gray.png", 
        img2: "zara.svg", 
        name: "Mens", 
        discount: "20", 
        info:"*T&C Apply",
        link: "productdetails" 
    },
    { 
        id: "6", 
        img1: "blue.png", 
        img2: "calvin.svg", 
        name: "Mens", 
        discount: "20", 
        info:"*T&C Apply",
        link: "productdetails" 
    },
];

const newquickcart = new_on_quickcart.map((item, index) => {
    return `
        <div class="swiper-slide">
            <a href="/darshit/${item.link}.html">
                <div class="card">
                    <img src="../r_img/${item.img1}" class="card-img-top" alt="Calvin Klein">         
                    <div class="card-body">
                        <div>
                            <img src="../r_img/${item.img2}" alt="" class="mx-auto" style="height: 25px;">
                        </div>
                        <p style="font-size: 12px; line-height: 1" class="card-text text-center mb-0">Up to ${item.discount}% OFF</p>
                        <small class="text-center mv_trending_card_dis">${item.info}</small>
                    </div>
                </div>
            </a>
        </div>
    `;
}).join("");

document.getElementById("dk_new_on_quick").innerHTML = newquickcart;

// Trending Deals
const mens_trending_dealing = [
    { 
        id: "1", 
        images: ["allensollyman.png","allensollyman.png","allensollyman.png","allensollyman.png","allensollyman.png"],
        name: "Allen Solly",
        categorydesc: "Men Khaki Slim Fit Solid Shirt",
        thumbnail: ["manthumbnail.png", "manthumbnail.png", "manthumbnail.png"],
        discount: "40",
        price: "799",
        link:"productdetails"
    },
    { 
        id: "2", 
        images: ["allensollybelt.png", "allensollybelt.png", "allensollybelt.png", "allensollybelt.png", "allensollybelt.png"],
        name: "Allen Solly",
        categorydesc: "Men Grey Solid Casual Belt and...",
        thumbnail: ["allensollybelt.png"],
        discount: "50",
        price: "399",
        link:"productdetails"
    },
    { 
        id: "3", 
        images: ["allensollyshoes.png", "allensollyshoes.png", "allensollyshoes.png", "allensollyshoes.png", "allensollyshoes.png"],
        name: "SKECHERS",
        categorydesc: "Unisex Adults SK FIT YOGA MAT..",
        thumbnail: ["allensollyshoes.png", "allensollyshoes.png","allensollyshoes.png"],
        discount: "40",
        price: "1059",
        link:"productdetails"
    }
];

const Men_trending_deals = mens_trending_dealing.map(item => {
    return `
        <div class="swiper-slide">
            <div class="product-card w-100">
                <a href="../darshit/${item.link}.html">
                    <div class="swiper innerSwiper">
                        <div class="swiper-wrapper">
                            ${item.images.map(img => 
                                `<div class="swiper-slide">
                                    <img src="../r_img/${img}" alt="${item.name} Image" class="r_v1img">
                                </div>`
                            ).join('')}
                        </div>
                        <div class="swiper-pagination"></div>
                    </div>
                    <h5 style="color: #000000;" class="mv_tsmh">${item.name}</h5>
                    <p style="color: #000000;" class="mv_tssh text-start">${item.categorydesc}</p>
                    <div class="r_thumbnailimg d-flex align-items-center">
                        ${item.thumbnail.map(thumb => 
                            `<img src="../r_img/${thumb}" alt="${item.name} Thumbnail">`
                        ).join('')}
                    </div>
                    <div class="mv_discount_text">${item.discount}% OFF</div>
                    <p class="text-start m-0">
                        <strong class="mv_less_discount_price">$${item.price - (item.price * (item.discount / 100)).toFixed(0)}</strong>
                        <del class="mv_without_discount_price">$${item.price}</del>
                    </p>
                </a>
            </div>
        </div>
    `;
}).join(''); 

document.getElementById("mv_mens_trending_deals").innerHTML = Men_trending_deals;

// Trending in Accessories
const menscategory_accessories = [
    { 
        id: "1", 
        img: "watch.png", 
        discount: "20", 
        info:"*T&C Apply",
        link: "productdetails"
    },
    { 
        id: "2", 
        img: "wallet.png", 
        discount: "20", 
        info:"*T&C Apply",
        link: "productdetails" 
    },
    { 
        id: "3", 
        img: "belt.png", 
        discount: "20", 
        info:"*T&C Apply",
        link: "productdetails"
    },
    { 
        id: "4", 
        img: "perfume.png", 
        discount: "20", 
        info:"*T&C Apply",
        link: "productdetails" 
    },
    { 
        id: "5", 
        img: "gogals.png", 
        discount: "20", 
        info:"*T&C Apply",
        link: "productdetails" 
    },
    { 
        id: "6", 
        img: "blue.png", 
        discount: "20", 
        info:"*T&C Apply",
        link: "productdetails"
    },
];

const menscategory_acc = menscategory_accessories.map((item, index) => {
    return `
        <div class="swiper-slide">
            <a href="/darshit/${item.link}.html">
                <div class="card">
                    <img src="../r_img/${item.img}" class="card-img-top" alt="Calvin Klein">
                    <div class="card-body">
                        <p style="font-size: 12px; line-height: 1" class="card-text text-center">Up to ${item.discount}% OFF</p>
                        <span class="text-center mv_trending_card_dis">${item.info}</span>
                    </div>
                </div>
            </a>
        </div>
    `;
}).join("");

document.getElementById("mv_mens_acc").innerHTML = menscategory_acc;

// Explore Ethnic Wear
const menscategory_exporing_box = [
    { 
        id: "1", 
        img: "wear-1.png", 
        name:"Kurta Jacket Pairs",
        description:"Sartorial Ensembles",
        btn:"Shop Now",
        link: "productdetails"
    },
    { 
        id: "2", 
        img: "wear-2.png", 
        name:"Indo Fusion Edi",
        description:"Rediscover Your Modern Chic Charm",
        btn:"Shop Now",
        link: "productdetails" 
    },
    { 
        id: "3", 
        img: "wear-3.png", 
        name:"Kurta Sets",
        description:"Latest Kurta Jacket Set",
        btn:"Shop Now",
        link: "productdetails"
    },
    { 
        id: "4", 
        img: "wear-4.png", 
        name:"Swooning Sherwani",
        description:"Redefining Majestic Wedding Wear",
        btn:"Shop Now",
        link: "productdetails" 
    },
];

const menscategory_ex_box = menscategory_exporing_box.map((item, index) => {
    return `
       <div class="col-md-6 mb-4">
            <div class="card text-white">
                <img src="../r_img/${item.img}" class="card-img" alt="${item.name}">
                <div class="card-img-overlay d-flex flex-column justify-content-center">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">${item.description}</p>
                    <div class="mv_explore_shop_more">
                    <a href="/darshit/${item.link}.html" class="r_shopnowbtn">${item.btn}</a>
                    </div>
                </div>
            </div>
        </div>
    `;
}).join("");

document.getElementById("mv_explore_ethnic").innerHTML = menscategory_ex_box;