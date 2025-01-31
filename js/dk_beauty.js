// .....................................................  beauty page  .................................................................... //

//  beauty page top brands
const top_brands_makeup = [
    { 
        id: "1", 
        img: "lorel.png", 
        discount: "10", 
        link: "topwear"
    },
    { 
        id: "2", 
        img: "chenal.png", 
        discount: "10", 
        link: "topwear" 
    },
    { 
        id: "3", 
        img: "remee.png", 
        discount: "10", 
        link: "topwear" 
    },
    { 
        id: "4", 
        img: "maybeline.png", 
        discount: "10", 
        link: "topwear" 
    },
    { 
        id: "5", 
        img: "mac.png", 
        discount: "10", 
        link: "topwear" 
    },
    { 
        id: "6", 
        img: "iconic.png", 
        discount: "10", 
        link: "topwear" 
    },
    { 
        id: "7", 
        img: "colorbar.png", 
        discount: "10", 
        link: "topwear"
    },
    { 
        id: "8", 
        img: "facescanada.png", 
        discount: "10", 
        link: "topwear" 
    },
    { 
        id: "9", 
        img: "purpale.png", 
        discount: "10", 
        link: "topwear" 
    },
    { 
        id: "10", 
        img: "nyka.png", 
        discount: "10", 
        link: "topwear" 
    },
    { 
        id: "11", 
        img: "mamaearth.png", 
        discount: "10", 
        link: "" 
    },
    { 
        id: "12", 
        img: "nieva.png", 
        discount: "10", 
        link: "topwear" 
    },
    { 
        id: "13", 
        img: "plome.png", 
        discount: "10", 
        link: "topwear"
    },
    { 
        id: "14", 
        img: "sugar.png", 
        discount: "10", 
        link: "topwear" 
    },
    { 
        id: "15", 
        img: "lotus.png", 
        discount: "10", 
        link: "topwear" 
    },
];

const beautyproduct = top_brands_makeup.map((item, index) => {
  return `
                            <a href="/darshit/${item.link}.html">
                                <div class="dk_product-item">
                                <img src="../img/${item.img}" alt="${item.img}">
                                <p>Upto ${item.discount}% OFF</p>
                                </div>
                            </a>
                        `;
}).join("");

document.getElementById("dk_beauty_top_brands").innerHTML = beautyproduct;


//  beauty page explore more
const dk_beauty_wear = [
    { 
        id: "1", 
        img: "face.png", 
        name: "Face", 
        link: "topwear"
    },
    { 
        id: "2", 
        img: "eyes.png", 
        name: "Eyes", 
        link: "topwear" 
    },
    { 
        id: "3", 
        img: "lips.png", 
        name: "Lips", 
        link: "topwear" 
    },
    { 
        id: "4", 
        img: "skin.png", 
        name: "Skin", 
        link: "topwear" 
    },
    { 
        id: "5", 
        img: "hair.png", 
        name: "Hair", 
        link: "topwear" 
    },
    { 
        id: "6", 
        img: "aceseress.png", 
        name: "Accessories", 
        link: "topwear" 
    },
];

const beautymorehtml = dk_beauty_wear.map((item, index) => {
  return `
        <div class="col-6 col-sm-4 col-md-4 col-lg-2 text-center category">
        <a href="/darshit/${item.link}.html">
            <img src="../img/${item.img}" alt="${item.img}">
            <p style="color: #fff;">${item.name}</p>
        </a>
        </div>
        `;
}).join("");

document.getElementById("dk_beauty_explore_more").innerHTML = beautymorehtml;


// beauty page New On Quickcart
const dk_beauty_new_quickcart = [
    { 
        id: "1", 
        img1: "iconic2.png", 
        img2: "s_iconic.png", 
        discount: "20", 
        info:"*T&C Apply",
        link: "topwear"
    },
    { 
        id: "2", 
        img1: "cenal2.png", 
        img2: "s_chanel.png", 
        discount: "20", 
        info:"*T&C Apply",
        link: "topwear" 
    },
    { 
        id: "3", 
        img1: "lorel2.png", 
        img2: "s_loreal.png",
        discount: "20", 
        info:"*T&C Apply",
        link: "topwear"
    },
    { 
        id: "4", 
        img1: "sugar2.png", 
        img2: "s_sugar.png", 
        discount: "20", 
        info:"*T&C Apply",
        link: "topwear" 
    },
    { 
        id: "5", 
        img1: "mac2.png", 
        img2: "s_mac.png", 
        discount: "20", 
        info:"*T&C Apply",
        link: "topwear" 
    },
    { 
        id: "6", 
        img1: "iconic2.png", 
        img2: "s_iconic.png", 
        discount: "20", 
        info:"*T&C Apply",
        link: "topwear"
    },
];

const dk_beautywere = dk_beauty_new_quickcart.map((item, index) => {
  return `
    <div class="swiper-slide">
    <a href="/darshit/${item.link}.html">
        <div class="card">
            <img src="../img/${item.img1}" class="card-img-top" alt="Calvin Klein">
                               
                <div class="card-body">
                    <div>
                    <img src="../img/${item.img2}" alt="" class="mx-auto" style="height: 25px;">
                    </div>
                    <p style="font-size: 12px; line-height: 1" class="card-text text-center mb-0">Up to ${item.discount}% OFF</p>
                    <small class="text-center mv_trending_card_dis">${item.info}</small>
                </div>
        </div>
    </a>    
    </div>
    `;
}).join("");

document.getElementById("dk_beauty_new_on_quickcart").innerHTML = dk_beautywere;

