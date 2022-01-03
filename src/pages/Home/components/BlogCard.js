import react from "react";
import "./css/blogCard.scss";
import Btn from "../../../components/btn/btn";
const BlogCard = ({ image, text, title, Date }) => {
  return (
    <>
      <div className="my-5">
        <img
          src={image}
          alt=" random imgee"
          class=" object-cover object-center rounded-lg shadow-md"
        />

        <div class="relative md:px-4 -mt-16 px-1  ">
          <div class="bg-white p-4 md:p-6 rounded-lg shadow-lg">
            <div class="flex items-baseline">
              <span class="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                New
              </span>
              <div class="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                {Date} &bull; 3 min
              </div>
            </div>

            <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">
              {title}
            </h4>

            <div class="mt-1">{text}</div>
            <div class="mt-4">
              <Btn
                link="/article"
                styles="text-white bg-black"
                title="Read More"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BlogCard;
