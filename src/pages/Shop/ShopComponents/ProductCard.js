import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from '@mui/icons-material';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <NavLink to="/cart " exact>
            <ShoppingCartOutlined />
          </NavLink>
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
//     <div className="flex font-sans">
//       <div >
//       <div className="flex-none  relative">
//         <img
//           src={item.img}
//           alt=""
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//       </div>
//       <form className="flex-initial w-94 p-10 border-solid border-2 border-indigo-600">
//         <div className="flex flex-wrap">
//           <h1 className="flex-auto text-lg font-semibold text-gray-900">
//             Classic Utility Jacket
//           </h1>
//           <div className="text-lg font-semibold text-gray-500">$110.00</div>
//           <div className="w-full flex-none text-sm font-medium text-gray-700 mt-2">
//             In stock
//           </div>
//         </div>
//         <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-gray-200">
//           <div className="space-x-2 flex text-sm">
//             <label>
//               <input
//                 className="sr-only peer"
//                 name="size"
//                 type="radio"
//                 value="xs"
//                 checked
//               />
//               <div className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-700 peer-checked:font-semibold peer-checked:bg-gray-900 peer-checked:text-white">
//                 XS
//               </div>
//             </label>
//             <label>
//               <input className="sr-only peer" name="size" type="radio" value="s" />
//               <div className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-700 peer-checked:font-semibold peer-checked:bg-gray-900 peer-checked:text-white">
//                 S
//               </div>
//             </label>
//             <label>
//               <input className="sr-only peer" name="size" type="radio" value="m" />
//               <div className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-700 peer-checked:font-semibold peer-checked:bg-gray-900 peer-checked:text-white">
//                 M
//               </div>
//             </label>
//             <label>
//               <input className="sr-only peer" name="size" type="radio" value="l" />
//               <div className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-700 peer-checked:font-semibold peer-checked:bg-gray-900 peer-checked:text-white">
//                 L
//               </div>
//             </label>
//             <label>
//               <input className="sr-only peer" name="size" type="radio" value="xl" />
//               <div className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-700 peer-checked:font-semibold peer-checked:bg-gray-900 peer-checked:text-white">
//                 XL
//               </div>
//             </label>
//           </div>
//         </div>
//         <div className="flex space-x-4 mb-6 text-sm font-medium">
//           <div className="flex-auto flex space-x-4">
//             <button
//               className="h-10 px-6 font-semibold rounded-md bg-black text-white"
//               type="submit"
//             >
//               Buy now
//             </button>
//             <button
//               className="h-10 px-6 font-semibold rounded-md border border-gray-200 text-gray-900"
//               type="button"
//             >
//               Add to bag
//             </button>
//           </div>
//           <button
//             className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-gray-300 border border-gray-200"
//             type="button"
//             aria-label="Like"
//           >
//             <svg width="20" height="20" fill="currentColor" aria-hidden="true">
//               <path
//                 fill-rule="evenodd"
//                 clip-rule="evenodd"
//                 d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
//               />
              
//             </svg>
//           </button>
//         </div>
//         <p className="text-sm text-gray-700">
//           Free shipping on all continental US orders.
//         </p>
//       </form>
//       </div>
//     </div>
  );
};

export default Product;
