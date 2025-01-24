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
        link: "" 
    },
    { 
        id: "3", 
        img: "kids.png", 
        name: "Kids", 
        link: "" 
    },
    { 
        id: "4", 
        img: "footwear.png", 
        name: "Footewear", 
        link: "" 
    },
    { 
        id: "5", 
        img: "fitness_equipment.png", 
        name: "Fitness Equipment", 
        link: "" 
    },
    { 
        id: "6", 
        img: "sports_accessories.png", 
        name: "Sports Accessories", 
        link: "" 
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
                            <div class="card">
                                <img src="../mv_image/new_under_armour.png" class="card-img-top" alt="Calvin Klein">
                               
                                <div class="card-body">
                                    <div>
                                        <img src="../mv_image/logo_under_armour.png" alt="" class="mx-auto" style="height: 25px;">
                                    </div>
                                    <p style="font-size: 12px; line-height: 1" class="card-text text-center mb-0">Up to 20% OFF</p>
                                    <small class="text-center mv_trending_card_dis">T&C Apply</small>
                                </div>
                            </div>
                        </div> 
                        `;
}).join("");

document.getElementById("dk_new_on_quick").innerHTML = newquickcart;
