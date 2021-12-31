const head = 'Get 17% off on your first buy with extra 5% off';
const tex =
  ' Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging tools.';
const MainCardData = [
  // {
  //     img: 'https://images.unsplash.com/photo-1524993242431-9de0d2d86e85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
  //     h1:head,
  //     text: tex
  // },
  // {
  //     img:'https://images.unsplash.com/photo-1524993242431-9de0d2d86e85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
  //     title:'title2',
  //     text: tex
  // },
  // {
  //     img:'https://images.unsplash.com/photo-1553117535-5edfe8ab4b8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
  //     h1:head,
  //     text: tex
  // },
  // {
  //     img:'https://images.unsplash.com/photo-1638984849672-f6a3f96bcc18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  //     h1:head,
  //     text: tex
  // },
  // {
  //     img:'https://images.unsplash.com/photo-1595867182286-492a6bb84e7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
  //     h1:head,
  //     text: tex
  // },
  {
    id: 1,
    img1 :'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg',
    img2:'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg',
    img3:'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg',
    img4:'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg',
    img5:'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg',
    img6:'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg',
    img7:'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg',
    h1: 'SUMMER SALE',
    text: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.Best Saree collection is Here",
    bg: 'f5fafd',
  },
  {
    id: 2,
    img1 :'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg',
    img2:'https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png',
    img3:'https://www.burdastyle.com/pub/media/catalog/product/cache/7bd3727382ce0a860b68816435d76e26/107/BUS-PAT-BURTE-1320516/1170x1470_BS_2016_05_132_front.png',
    img4:'https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png',
    img5:'https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png',
    img6:'https://images.unsplash.com/photo-1552664199-fd31f7431a55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    img7:'https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png',
    h1: 'AUTUMN COLLECTION',
    text: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: 'fcf1ed',
  },
  {
    id: 3,
    img1 :'https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg',
    img2:'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    img3:'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
    img4:'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-06.jpg',
    img5:'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    img6:'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-08.jpg',
    img7:'https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png',
    h1: 'LOUNGEWEAR LOVE',
    text: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: 'fbf0f4',
  },
  {
    id: 3,
    img1 :'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg',
    img2:'https://www.burdastyle.com/pub/media/catalog/product/cache/7bd3727382ce0a860b68816435d76e26/107/BUS-PAT-BURTE-1320516/1170x1470_BS_2016_05_132_front.png',
    img3:'https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png',
    img4:'https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png',
    img5:'https://images.unsplash.com/photo-1552664199-fd31f7431a55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    img6:'https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png',
    img7:'https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg',
    h1: 'LOUNGEWEAR LOVE',
    text: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
  },
  // {
  //   id: 4,
  //   img1 :'https://c.neh.tw/thumb/f/720/comhiclipartxmtan.jpg',
  //   img2:'',
  //   img3:'',
  //   img4:'',
  //   img5:'',
  //   img6:'',
  //   img7:'',
  //   h1: 'LOUNGEWEAR LOVE',
  //   text: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
  // },
  
];
export default MainCardData;
