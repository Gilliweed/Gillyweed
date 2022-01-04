const head = "Get 17% off on your first buy with extra 5% off";
const tex =
  " Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging tools.";
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
    img1: "https://res.cloudinary.com/scentre-group-au/image/fetch/c_pad,b_auto,w_600,h_600,f_auto/https://sg-wfapi-image-store-production-874147266691.s3.amazonaws.com/0/604a6c5f-87f2-4255-9393-8d40daa52ea8.jpg",
    img2: "https://i.pinimg.com/originals/c8/14/74/c8147422221471ce22e05e6a3c9613cc.jpg",
    img3: "https://naturestore.wwfindia.org/wp-content/uploads/2021/12/Image-1-1.jpg",
    img4: "https://i0.wp.com/www.ecoideaz.com/wp-content/uploads/2015/10/Paper_bowl.jpg?fit=900%2C764&ssl=1",
    img5: "https://static.dezeen.com/uploads/2013/09/dezeen_Wind-Portal_5.jpg",
    img6: "https://cdn.shopify.com/s/files/1/0087/0173/9088/products/2021-8-18-11-15-14_product_2_1629265514483_800x.jpg?v=1630923822",
    img7: "https://cdn.shopify.com/s/files/1/0087/0173/9088/products/Recycled_Paper_pens-_pack_of_8__product_1_1606115994491_600x.jpg?v=1608014849",
    h1: "Recycled Paper Products",
    text: "Check out eco-friendly paper products. Don't miss out upto 30% off in the live flash sale.",
    bg: "f5fafd",
  },
  {
    id: 2,
    img1: "https://www.nspackaging.com/wp-content/uploads/sites/4/2019/03/Example-of-dress.jpg",
    img2: "http://advancedtextilessource.com/wp-content/uploads/sites/23/2013/10/102413.jpg",
    img3: "https://www.burdastyle.com/pub/media/catalog/product/cache/7bd3727382ce0a860b68816435d76e26/107/BUS-PAT-BURTE-1320516/1170x1470_BS_2016_05_132_front.png",
    img4: "https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png",
    img5: "https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png",
    img6: "https://cdn.shopify.com/s/files/1/0277/4165/1005/products/DL21-SH-021_1_600x.jpg?v=1637222515",
    img7: "https://images-do.nyc3.digitaloceanspaces.com/jellykelly/product_images/1636977869.19.PNG",
    h1: "Upcycled Clothing",
    text: "Get upto 35% off on upcycled clothing. Check out the live Flash Sale.",
    bg: "fcf1ed",
  },
  {
    id: 3,
    img1: "https://m.media-amazon.com/images/I/91QcDGOwZ3S._SL1500_.jpg",
    img2: "https://cdn.shopify.com/s/files/1/0087/0173/9088/products/2021-12-16-9-40-41_product_1_1639644041904_671fa7ee-d825-4467-8c74-ba6fffbac939_800x.jpg?v=1639811422",
    img3: "http://energy.korea.com/wp-content/uploads/2013/04/16.jpeg",
    img4: "https://images.squarespace-cdn.com/content/v1/5f0ed5e3278d57349e355c0e/1595420408091-J3M1Z48Z33IBO40QZS6O/luxury%2Bfabrics%2Brecycled%2Bp.e.t..jpeg?format=1000w",
    img5: "https://m.media-amazon.com/images/I/91QcDGOwZ3S._SL1500_.jpg",
    img6: "https://inhabitat.com/wp-content/blogs.dir/1/files/2011/09/Copenhagen-Design-Week-2011-CODE11-21.jpg",
    img7: "https://cdn.shopify.com/s/files/1/0087/0173/9088/products/2021-12-15-19-51-45_product_1_1639578105310_800x.jpg?v=1639578109",
    h1: "Home Decor",
    text: "Decorate your home with eco-friendly products. Get upto Rs.200 cashback in the Flash Sale.",
    bg: "fbf0f4",
  },
  {
    id: 3,
    img1: "https://i.pinimg.com/originals/b2/69/42/b26942de05f2e54d3e72a6956a9ca42c.jpg",
    img2: "https://i.pinimg.com/474x/95/e9/6a/95e96a4308dc4d53b093aabb7ea134de--recycled-plastic-bags-recycled-crafts.jpg",
    img3: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR2ztH1Riv2dIXiCH9BiAjEfm156Xd4P7AyOXb_E4ZHgZ_GiA5R8PgI2J5zzhRS8xHMXf-4aEA-v7SQNdOhbE303y_6HL0zvrudWlB6FY2Gxmjr25T0KDk4rQ&usqp=CAE",
    img4: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ7IBjNbKpLB369Qu5GcEtfkRRGsBEf0n8J1bb1BPw11KsXxblwUOq49yOhkN6y1OCMrRwKgGpdR2mzSeaSwTmDHkzGcfiHOR2I93nraTv-&usqp=CAE",
    img5: "https://i.pinimg.com/originals/a2/3c/c7/a23cc71d07a5b8d343c53e599cb0d1c0.jpg",
    img6: "https://cdn.shopify.com/s/files/1/0270/5129/4854/products/1570349374J13A7553_b7fd9645-3d47-4865-9546-f6ae4c7157a7_1000x.jpg?v=1610453584",
    img7: "https://media.karousell.com/media/photos/products/2020/12/3/spider_plant_in_recycled_plast_1607039303_2f50e6b6_progressive.jpg",
    h1: "Plastic",
    text: "Get atleast 20% off on recycled plastic products in the live Flash Sale.",
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
