// .....................................................  sportswer page  .................................................................... //

//  SportsWear page top brands
const top_brands_shoes = [
    { 
        id: "1", 
        img: "adidas.png", 
        discount: "10", 
        link: "topwear"
    },
    { 
        id: "2", 
        img: "puma.png", 
        discount: "10", 
        link: "topwear" 
    },
    { 
        id: "3", 
        img: "nike.png", 
        discount: "10", 
        link: "topwear" 
    },
    { 
        id: "4", 
        img: "skechers.png", 
        discount: "10", 
        link: "topwear" 
    },
    { 
        id: "5", 
        img: "hrx.png", 
        discount: "10", 
        link: "topwear" 
    },
    { 
        id: "6", 
        img: "jorden.png", 
        discount: "10", 
        link: "topwear" 
    },
    { 
        id: "7", 
        img: "reebok.png", 
        discount: "10", 
        link: "topwear"
    },
    { 
        id: "8", 
        img: "asics.png", 
        discount: "10", 
        link: "topwear" 
    },
    { 
        id: "9", 
        img: "columbia.png", 
        discount: "10", 
        link: "topwear" 
    },
    { 
        id: "10", 
        img: "fila.png", 
        discount: "10", 
        link: "topwear" 
    },
    { 
        id: "11", 
        img: "nb.png", 
        discount: "10", 
        link: "" 
    },
    { 
        id: "12", 
        img: "converse.png", 
        discount: "10", 
        link: "topwear" 
    },
    { 
        id: "13", 
        img: "pai.png", 
        discount: "10", 
        link: "topwear"
    },
    { 
        id: "14", 
        img: "under_armour.png", 
        discount: "10", 
        link: "topwear" 
    },
    { 
        id: "15", 
        img: "decathlon.png", 
        discount: "10", 
        link: "topwear" 
    },
];

const topbrandshoes = top_brands_shoes.map((item, index) => {
  return `
  <a href="/darshit/${item.link}.html">
   <div class="dk_product-item">
                            <img src="../mv_image/${item.img}" alt="${item.img}">
                            <p>Upto ${item.discount}% OFF</p>
                            </div>
                            </a>
                        `;
}).join("");

document.getElementById("dk_top_shoes_brand").innerHTML = topbrandshoes;

//  SportsWear page  explore more
const exploremore = [
    { 
        id: "1", 
        img: "men.png", 
        name: "Mens", 
        link: "MensCategory"
    },
    { 
        id: "2", 
        img: "women.png", 
        name: "Womens", 
        link: "topwear" 
    },
    { 
        id: "3", 
        img: "kids.png", 
        name: "Kids", 
        link: "topwear" 
    },
    { 
        id: "4", 
        img: "footwear.png", 
        name: "Footewear", 
        link: "topwear" 
    },
    { 
        id: "5", 
        img: "fitness_equipment.png", 
        name: "Fitness Equipment", 
        link: "topwear" 
    },
    { 
        id: "6", 
        img: "sports_accessories.png", 
        name: "Sports Accessories", 
        link: "topwear" 
    },
];

const ExploremoreHtml = exploremore.map((item, index) => {
  return `
  <div class="col-6 col-sm-4 col-md-4 col-lg-2 text-center category">
  <a href="/darshit/${item.link}.html">
                        <img src="/mv_image/${item.img}" alt=${item.img}>
                        <p style="color: #fff;">${item.name}</p>
                        </a>
                        </div>
                        `;
}).join("");

document.getElementById("dk_sportswear").innerHTML = ExploremoreHtml;


//  SportsWear page  New On Quickcart
const new_on_quickcart = [
    { 
        id: "1", 
        img1: "new_under_armour.png", 
        img2: "logo_under_armour.png", 
        discount: "20", 
        info:"*T&C Apply",
        link: "MensCategory"
    },
    { 
        id: "2", 
        img1: "new_converse.png", 
        img2: "logo_converse.png", 
        discount: "20", 
        info:"*T&C Apply",
        link: "MensCategory" 
    },
    { 
        id: "3", 
        img1: "new_asics.png", 
        img2: "logo_asics.png",
        discount: "20", 
        info:"*T&C Apply",
        link: "MensCategory"
    },
    { 
        id: "4", 
        img1: "new_columbia.png", 
        img2: "logo_columbia.png", 
        name: "Mens", 
        discount: "20", 
        info:"*T&C Apply",
        link: "MensCategory" 
    },
    { 
        id: "5", 
        img1: "new_nb.png", 
        img2: "logo_nb.png", 
        name: "Mens", 
        discount: "20", 
        info:"*T&C Apply",
        link: "MensCategory" 
    },
    { 
        id: "6", 
        img1: "new_under_armour.png", 
        img2: "logo_under_armour.png", 
        name: "Mens", 
        discount: "20", 
        info:"*T&C Apply",
        link: "MensCategory"
    },
];

const newquickcart = new_on_quickcart.map((item, index) => {
  return `
  <div class="swiper-slide">
                        <a href="/darshit/${item.link}.html">
                            <div class="card">
                                <img src="../mv_image/${item.img1}" class="card-img-top" alt="Calvin Klein">
                               
                                <div class="card-body">
                                    <div>
                                        <img src="../mv_image/${item.img2}" alt="" class="mx-auto" style="height: 25px;">
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

// SportsWear page Trending Deals
const trending_dealing = [
    { 
        id: "1", 
        images: ["new_balance.png","new_balance.png","new_balance.png","new_balance.png","new_balance.png"],
        name: "New Balance",
        categorydesc: "Men's Fresh Foam X 1080v14",
        thumbnail: ["new_balance1.png", "new_balance2.png", "new_balance3.png"],
        discount: "40",
        price: "700",
        link:""
    },
    { 
        id: "2", 
        images: ["trending_reebok.png", "trending_reebok.png", "trending_reebok.png", "trending_reebok.png", "trending_reebok.png"],
        name: "Reebok",
        categorydesc: "Women's Running App",
        thumbnail: ["trending_reebok1.png"],
        discount: "50",
        price: "399",
        link:""
    },
    { 
        id: "3", 
        images: ["trending_skechers.png", "trending_skechers.png", "trending_skechers.png", "trending_skechers.png", "trending_skechers.png"],
        name: "SKECHERS",
        categorydesc: "Unisex Adults SK FIT YOGA MAT..",
        thumbnail: ["trending_skechers1.png", "trending_skechers1.png"],
        discount: "40",
        price: "299",
        link:""
    }
];

const trending_deals = trending_dealing.map(item => {
    return `
        <div class="swiper-slide">
            <div class="product-card w-100">
                <div class="swiper innerSwiper">
                    <div class="swiper-wrapper">
                        ${item.images.map(img => 
                            `<div class="swiper-slide">
                                <img src="../mv_image/${img}" alt="${item.name} Image" class="r_v1img">
                            </div>`
                        ).join('')}
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
                <h5 class="mv_tsmh">${item.name}</h5>
                <p class="mv_tssh text-start">${item.categorydesc}</p>
                <div class="r_thumbnailimg d-flex align-items-center">
                    ${item.thumbnail.map(thumb => 
                        `<img src="../mv_image/${thumb}" alt="${item.name} Thumbnail">`
                    ).join('')}
                </div>
                <div class="mv_discount_text">${item.discount}% OFF</div>
                <p class="text-start m-0">
                    <strong class="mv_less_discount_price">$${item.price - (item.price * (item.discount / 100)).toFixed(0)}</strong>
                    <del class="mv_without_discount_price">$${item.price}</del>
                </p>
            </div>
        </div>
    `;
}).join(''); 

document.getElementById("dk_trending_deals").innerHTML = trending_deals;

// SportsWear page Trending in sports Accessories
const sportswer_accessories = [
    { 
        id: "1", 
        img: "trending_1.png", 
        discount: "20", 
        info:"*T&C Apply",
        link: "topwear"
    },
    { 
        id: "2", 
        img: "trending_2.png", 
        discount: "20", 
        info:"*T&C Apply",
        link: "topwear" 
    },
    { 
        id: "3", 
        img: "trending_3.png", 
        discount: "20", 
        info:"*T&C Apply",
        link: "topwear"
    },
    { 
        id: "4", 
        img: "trending_4.png", 
        discount: "20", 
        info:"*T&C Apply",
        link: "topwear" 
    },
    { 
        id: "5", 
        img: "trending_5.png", 
        discount: "20", 
        info:"*T&C Apply",
        link: "topwear" 
    },
    { 
        id: "6", 
        img: "trending_1.png", 
        discount: "20", 
        info:"*T&C Apply",
        link: "topwear"
    },
];

const sportswer_acc = sportswer_accessories.map((item, index) => {
                    return `
                        <div class="swiper-slide">
                        <a href="/darshit/${item.link}.html">
                            <div class="card">
                                <img src="../mv_image/${item.img}" class="card-img-top" alt="Calvin Klein">
                               
                                <div class="card-body">
                                    <p style="font-size: 12px; line-height: 1" class="card-text text-center">Up to ${item.discount}% OFF</p>
                                    <span class="text-center mv_trending_card_dis">T&C Apply</span>
                                </div>
                            </div>
                            </a>
                        </div>
                        `;
                    }).join("");

document.getElementById("dk_trending_sports_acc").innerHTML = sportswer_acc;

//SportsWear page Explore more box
const sportswer_exporing_box = [
    { 
        id: "1", 
        img: "sport_explore_1.png", 
        name:"NEW STYLES",
        btn:"Shop Now",
        link: "topwear"
    },
    { 
        id: "2", 
        img: "sport_explore_2.png", 
        name:"",
        btn:"Shop Now",
        showFinalTouch:"true",
        link: "topwear" 
    },
    { 
        id: "3", 
        img: "sport_explore_3.png", 
        name:"NO REST, JUST RUN",
        description:"Run to live. Live to run",
        btn:"Shop Now",
        link: "topwear"
    },
    { 
        id: "4", 
        img: "sport_explore_4.png", 
        name:"SPORTS ACCESSORIES",
        description:"Your comfort, our Priority",
        btn:"Shop Now",
        link: "topwear" 
    },
];

const sportswer_ex_box = sportswer_exporing_box.map((item, index) => {
    return `
       <div class="col-md-6 mb-4">
            <div class="card text-white">
                <img src="../mv_image/${item.img}" class="card-img" alt="${item.name}">
                <div class="card-img-overlay d-flex flex-column justify-content-center">
                    <p class="mv_card_title">${item.name}</p>
                    ${item.showFinalTouch ? `
                        <p class="mv_add_the">
                            Add the <span style="color: #CF2A2A;">FINAL</span> touch to your 
                            <span style="color: #CF2A2A;">ADVENTURE</span>
                        </p>
                    ` : ""}
                    ${item.description ? `<p class="mv_run_to">${item.description}</p>` : ""}
                    <div class="mv_explore_shop_more">
                    <a href="/darshit/${item.link}.html" class="r_shopnowbtn">${item.btn}</a>
                    </div>
                </div>
            </div>
        </div>
    `;
}).join("");

document.getElementById("dk_explore_more_box").innerHTML = sportswer_ex_box;

