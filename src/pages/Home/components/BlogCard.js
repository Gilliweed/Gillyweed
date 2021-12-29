import react from 'react';
import './css/blogCard.scss';

const BlogCard = ({ image, text, title, Date }) => {

  return (
    <>
      <div className="my-5">

        <img src={image} alt=" random imgee" class=" object-cover object-center rounded-lg shadow-md" />

        <div class="relative md:px-4 -mt-16 px-1  ">
          <div class="bg-white p-4 md:p-6 rounded-lg shadow-lg">
            <div class="flex items-baseline">
              <span class="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                New
              </span>
              <div class="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                {Date}  &bull; 3 min
              </div>
            </div>

            <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">{title}</h4>

            <div class="mt-1">
              {text}
              <span class="text-gray-600 text-sm">   /wk</span>
            </div>
            <div class="mt-4">
              <button class="text-gray-200 text-md font-semibold bg-stone-800 rounded-full px-3 py-1 hover:bg-stone-300 hover:text-black">Read Me More </button>
            </div>
          </div>
        </div>

      </div>
    </>
  )


}
export default BlogCard