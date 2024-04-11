import React from 'react'
import { MdEdit } from "react-icons/md";
import "./ToBuy.css"

const ToBuy = () => {
  return (
    <div className="toBuy shadow-2xl flex flex-col h-full w-full rounded-xl bg-[#ECECEC]">
      <div className="heading flex flex-row justify-between mb-3">
        <div className='h-1/4 text-md font-semibold text-neutral-600 pl-4 pt-2'>To Buy</div>
        
        <div className='flex flex-row'>
          <div className="editDiv size-5 mt-2.5 mr-2 flex items-center justify-center bg-black rounded-full cursor-pointer">
            <MdEdit className='invert size-3' />
          </div>

          <div className="plus bg-black text-white text-center rounded-full size-5 text-sm mt-2.5 mr-2 cursor-pointer">+</div>
        </div>
      </div>

      <div className="items mt-3 mx-4 pb-5 pr-2 flex flex-row gap-2 overflow-x-auto overflow-y-hidden">
        <div className="item flex flex-col text-neutral-500 hover:text-red-700 flex-shrink-0 bg-white rounded-2xl items-center transition-all duration-200 cursor-pointer hover:bg-neutral-100">
          <div className="name text-xs">Converse</div>
          <img className='bg-black size-20' src="https://converse.ca/media/catalog/product/cache/7675cebc3e2f09ee2a340c17d68ace33/m/7/m7650_a_107x1_2nd.jpg" alt="" />
          <div className="price text-xs">$90</div>
        </div>

        <div className="item flex flex-col text-neutral-500 hover:text-red-700 flex-shrink-0 bg-white rounded-2xl items-center transition-all duration-200 cursor-pointer hover:bg-neutral-100">
          <div className="name text-xs">Whoop</div>
          <img className='bg-black size-20' src="https://wp.technologyreview.com/wp-content/uploads/2021/09/WHOOP-4.0_Wrapped_SuperKnit_Black_Side_BlackBG.png" alt="" />
          <div className="price text-xs">$180</div>
        </div>

        <div className="item flex flex-col text-neutral-500 hover:text-red-700 flex-shrink-0 bg-white rounded-2xl items-center transition-all duration-200 cursor-pointer hover:bg-neutral-100">
          <div className="name text-xs">Watch</div>
          <img className='bg-black size-20' src="https://d2j6dbq0eux0bg.cloudfront.net/images/38270005/3368612407.jpg" alt="" />
          <div className="price text-xs">$95</div>
        </div>

        <div className="item flex flex-col text-neutral-500 hover:text-red-700 flex-shrink-0 bg-white rounded-2xl items-center transition-all duration-200 cursor-pointer hover:bg-neutral-100">
          <div className="name text-xs">Sunglasses</div>
          <img className='bg-black size-20' src="https://assets.ajio.com/medias/sys_master/root/20230623/Y5q9/6495a218a9b42d15c9c59a06/-473Wx593H-465012582-black-MODEL.jpg" alt="" />
          <div className="price text-xs">$200</div>
        </div>

        <div className="item flex flex-col text-neutral-500 hover:text-red-700 flex-shrink-0 bg-white rounded-2xl items-center transition-all duration-200 cursor-pointer hover:bg-neutral-100">
          <div className="name text-xs">Loafers</div>
          <img className='bg-black size-20' src="https://lamaretail.com/cdn/shop/products/SHFMSS0005-TAUPE-SLIP-ON-LOAFERS_1.webp?v=1708238400&width=1080" alt="" />
          <div className="price text-xs">$22</div>
        </div>

        <div className="item flex flex-col text-neutral-500 hover:text-red-700 flex-shrink-0 bg-white rounded-2xl items-center transition-all duration-200 cursor-pointer hover:bg-neutral-100">
          <div className="name text-xs">Sneakers</div>
          <img className='bg-black size-20' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTouPDZxtOxhgXdSO22M3WjAJqJSC48fpScFec8CMFBr4pw4IVl_Ouang7D3i6N7kDf4BE&usqp=CAU" alt="" />
          <div className="price text-xs">$90</div>
        </div>

        <div className="item flex flex-col text-neutral-500 hover:text-red-700 flex-shrink-0 bg-white rounded-2xl items-center transition-all duration-200 cursor-pointer hover:bg-neutral-100">
          <div className="name text-xs">Gripper</div>
          <img className='bg-black size-20' src="https://image.made-in-china.com/202f0j00qimhHlpzLJeo/Hand-Grip-Muscle-Developer-Home-Gym-Fitness-100-350-Lbs-Wrist-Strengthener-Aluminum.webp" alt="" />
          <div className="price text-xs">$3</div>
        </div>

        <div className="item flex flex-col text-neutral-500 hover:text-red-700 flex-shrink-0 bg-white rounded-2xl items-center transition-all duration-200 cursor-pointer hover:bg-neutral-100">
          <div className="name text-xs">Sanitizer</div>
          <img className='bg-black size-20' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToW3cDMedhrf571zIQPnyRHtJmJEzwszVEIZz3gk7jHA&s" alt="" />
          <div className="price text-xs">$1</div>
        </div>

        <div className="item flex flex-col text-neutral-500 hover:text-red-700 flex-shrink-0 bg-white rounded-2xl items-center transition-all duration-200 cursor-pointer hover:bg-neutral-100">
          <div className="name text-xs">T-Shirt</div>
          <img className='bg-black size-20' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfgjRyiOSifRb8UIy3vwNw8loRqYru_ToRrDWnAbHWRQ&s" alt="" />
          <div className="price text-xs">$12</div>
        </div>

        <div className="item flex flex-col text-neutral-500 hover:text-red-700 flex-shrink-0 bg-white rounded-2xl items-center transition-all duration-200 cursor-pointer hover:bg-neutral-100">
          <div className="name text-xs">Polo</div>
          <img className='bg-black size-20' src="https://ml.thcdn.com/productimg/960/960/14308139-7565038754273235.jpg" alt="" />
          <div className="price text-xs">$36</div>
        </div>

        <div className="item flex flex-col text-neutral-500 hover:text-red-700 flex-shrink-0 bg-white rounded-2xl items-center transition-all duration-200 cursor-pointer hover:bg-neutral-100">
          <div className="name text-xs">Polo</div>
          <img className='bg-black size-20' src="https://ml.thcdn.com/productimg/960/960/14308153-1695037007057842.jpg" alt="" />
          <div className="price text-xs">$36</div>
        </div>

        <div className="item flex flex-col text-neutral-500 hover:text-red-700 flex-shrink-0 bg-white rounded-2xl items-center transition-all duration-200 cursor-pointer hover:bg-neutral-100">
          <div className="name text-xs">Polo</div>
          <img className='bg-black size-20' src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F2f%2Fb0%2F2fb04924b1608ec670825e1d6bef0bb8149320f4.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5BMEN_TSHIRTSTANKS_POLO%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]" alt="" />
          <div className="price text-xs">$36</div>
        </div>

        <div className="item flex flex-col text-neutral-500 hover:text-red-700 flex-shrink-0 bg-white rounded-2xl items-center transition-all duration-200 cursor-pointer hover:bg-neutral-100">
          <div className="name text-xs">Polo</div>
          <img className='bg-black size-20' src="https://aurelien-online.com/cdn/shop/products/aurelien_polo_shirt_men_egyptian_cotton_heren_katoen_beige6_800x.jpg?v=1681313913" alt="" />
          <div className="price text-xs">$36</div>
        </div>

        <div className="item flex flex-col text-neutral-500 hover:text-red-700 flex-shrink-0 bg-white rounded-2xl items-center transition-all duration-200 cursor-pointer hover:bg-neutral-100">
          <div className="name text-xs">Joggers</div>
          <img className='bg-black size-20' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSBXD9CfKw5wmclV1xLm6R83Y0pUsM6GQ-nh88m1C0UA&s" alt="" />
          <div className="price text-xs">$9</div>
        </div>
      </div>
    </div>
  )
}

export default ToBuy
