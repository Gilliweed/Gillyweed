import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { ShoppingCartOutlined } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
// import '../carasoule.css';
const FlashDealCard = (props) => {
  return (
    <div>
      <Card
        className=" text-dark border-0"
        style={{
          width: '100%',
          height: '17rem',
          // boxShadow: '5px 5px 5px  grey',
        }}
      >
        <NavLink to="/productDesc " exact>
          <Card.Img
            className=" text-dark border-0"
            src={props.img}
            alt="Card image"
            style={{ width: '100%', height: '11rem' }}
          />

          <Card.ImgOverlay className=" text-dark border-0">
            <Card.Title>{props.para}</Card.Title>
          </Card.ImgOverlay>
        </NavLink>
        <Card className=" text-dark border-0">
          <Card.Title>{props.head}</Card.Title>

          <Button variant="outline-success">
            <ShoppingCartOutlined /> Add
          </Button>
        </Card>
      </Card>
    </div>
  );
};
export default FlashDealCard;

// const Example = () => {
//   return (
//     <div class="flex w-{12} font-serif">
//   <div class="flex-none w-52 relative">
//     <img src="/dogtooth-style-jacket.jpg" alt="" class="absolute inset-0 w-full h-full object-cover rounded-lg" />
//   </div>
//   <form class="flex-auto p-6">
//     <div class="flex flex-wrap items-baseline">
//       <h1 class="w-full flex-none mb-3 text-2xl leading-none text-gray-900">
//         DogTooth Style Jacket
//       </h1>
//       <div class="flex-auto text-lg font-medium text-gray-500">
//         $350.00
//       </div>
//       <div class="text-xs leading-6 font-medium uppercase text-gray-500">
//         In stock
//       </div>
//     </div>
//     <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-gray-200">
//       <div class="space-x-1 flex text-sm font-medium">
//         <label>
//           <input class="sr-only peer" name="size" type="radio" value="xs" checked />
//           <div class="w-7 h-7 rounded-full flex items-center justify-center text-gray-500 peer-checked:bg-gray-100 peer-checked:text-gray-900">
//             XS
//           </div>
//         </label>
//         <label>
//           <input class="sr-only peer" name="size" type="radio" value="s" />
//           <div class="w-7 h-7 rounded-full flex items-center justify-center text-gray-500 peer-checked:bg-gray-100 peer-checked:text-gray-900">
//             S
//           </div>
//         </label>
//         <label>
//           <input class="sr-only peer" name="size" type="radio" value="m" />
//           <div class="w-7 h-7 rounded-full flex items-center justify-center text-gray-500 peer-checked:bg-gray-100 peer-checked:text-gray-900">
//             M
//           </div>
//         </label>
//         <label>
//           <input class="sr-only peer" name="size" type="radio" value="l" />
//           <div class="w-7 h-7 rounded-full flex items-center justify-center text-gray-500 peer-checked:bg-gray-100 peer-checked:text-gray-900">
//             L
//           </div>
//         </label>
//         <label>
//           <input class="sr-only peer" name="size" type="radio" value="xl" />
//           <div class="w-7 h-7 rounded-full flex items-center justify-center text-gray-500 peer-checked:bg-gray-100 peer-checked:text-gray-900">
//             XL
//           </div>
//         </label>
//       </div>
//     </div>
//     <div class="flex space-x-4 mb-5 text-sm font-medium">
//       <div class="flex-auto flex space-x-4 pr-4">
//         <button class="flex-none w-1/2 h-12 uppercase font-medium tracking-wider bg-gray-900 text-white" type="submit">
//           Buy now
//         </button>
//         <button class="flex-none w-1/2 h-12 uppercase font-medium tracking-wider border border-gray-200 text-gray-900" type="button">
//           Add to bag
//         </button>
//       </div>
//       <button class="flex-none flex items-center justify-center w-12 h-12 text-gray-300 border border-gray-200" type="button" aria-label="Like">
//         <svg width="20" height="20" fill="currentColor" aria-hidden="true">
//           <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
//         </svg>
//       </button>
//     </div>
//     <p class="text-sm text-gray-500">
//       Free shipping on all continental US orders.
//     </p>
//   </form>
// </div>
//   );
// };
// export default Example;
