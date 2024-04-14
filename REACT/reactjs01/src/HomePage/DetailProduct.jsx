import React from 'react'

const DetailProduct = () => {
  return (
    <>      
        <div className=' w-max m-auto'>
            <div className=' flex'>
                <div>Trang chủ</div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg></div>
                <div>Nhà hàng</div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg></div>
                <div>Bánh mì Cô Chun</div>
            </div>
            <div id='titleX'>
                <div id='title' className=' font-bold text-4xl'>Bánh mì Cô Chun</div>
                <div id='detail_title'> Bánh mì - Xôi</div>
            </div>
            <div id='more'>
                <div id='total' className='flex'>
                    <div id='vote' className='flex mr-3'><img src="https://food.grab.com/static/images/icons/icon-star.svg" alt="" /><span>4.6</span></div>
                    <div id='time' className='flex mr-3'><img src="https://food.grab.com/static/images/icons/icon-clock.svg" alt="" /><span>30 phút</span></div>
                    <div id='km'> 1.5km</div>
                </div>
            </div>
            <div id='time'>
                <div id='title_time'> Giờ mở cửa </div>
                <div id='current_time'> Hôm nay 00:00 - 01:00 </div>
            </div>
            <div id='discounts'>
                <div className='flex'><img src="https://food.grab.com/static/images/icons/icon-promo-tag.svg" alt="" />Giảm 10% cho đơn vị giá tối thiểu</div>
                <div className='flex'><img src="https://food.grab.com/static/images/icons/icon-promo-tag.svg" alt="" />Tận hưởng ưu đãi </div>
            </div>

        <div>
            <p>Ưu đãi hôm nay</p>
            <div className=' container w-[1200px] '>
                <div id='list' className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 '>
                    <div id='item' className=' flex border-[1px] border-black bg-white rounded-xl w-[250px]'>
                       <div id='img' className=' h-[150px] w-[150px] m-5'>
                          <img src="https://food-cms.grab.com/compressed_webp/items/VNITE2023113016474698845/detail/menueditor_item_f968e9a988ef42c48250a996a95cec8f_1701362845250180102.webp"/>
                       </div>
                       <div id='content'>
                          <div id='title' className='mt-5 text-xl font-bold'> Trà Chanh</div>
                          <div id='detail_title'>Trà chanh tươi</div>
                          <div id='dis-price'> Tiết kiệm 2.000đ <span className=' line-through'>20.000đ</span></div>
                          <div id='price'>18.000đ</div>
                        </div>
                        <div className=' flex items-end p-2'>
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                           </svg>
                        </div>
                    </div>
                    <div id='item' className=' flex border-[1px] border-black bg-white rounded-xl w-[250px]'>
                       <div id='img' className=' h-[150px] w-[150px] m-5'>
                          <img src="https://food-cms.grab.com/compressed_webp/items/VNITE2023113016555377870/detail/menueditor_item_fe138ee8fecc46638eee79aaf0264261_1701363312907827027.webp"/>
                       </div>
                       <div id='content'>
                          <div id='title'className='mt-5 text-xl font-bold'> Trà Chanh Xí Muội</div>
                          <div id='detail_title'>Trà chanh tươi</div>
                          <div id='dis-price'> Tiết kiệm 2.000đ <span className=' line-through'>30.000đ</span></div>
                          <div id='price'>28.000đ</div>
                        </div>
                        <div className=' flex items-end p-2'>
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                           </svg>
                        </div>
                    </div>
                    <div id='item' className=' flex border-[1px] border-black bg-white rounded-xl w-[250px] '>
                       <div id='img'  className=' h-[150px] w-[150px] m-5'>
                          <img src="https://food-cms.grab.com/compressed_webp/items/VNITE2023113016542521337/detail/menueditor_item_9c8ee3c3e1bc44cf86f779330ea12832_1701363250265206800.webp"/>
                       </div>
                       <div id='content'>
                          <div id='title'className='mt-5 text-xl font-bold'> Trà Tắc</div>
                          <div id='detail_title'>Trà tắc tươi</div>
                          <div id='dis-price'> Tiết kiệm 2.000đ <span className=' line-through'>20.000đ</span></div>
                          <div id='price'>18.000đ</div>
                        </div>
                        <div className=' flex items-end p-2'>
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                           </svg>
                        </div>
                    </div>
                    <div id='item' className=' flex border-[1px] border-black bg-white rounded-xl w-[250px]' >
                       <div id='img'  className=' h-[150px] w-[150px] m-5'>
                          <img src="https://food-cms.grab.com/compressed_webp/items/VNITE2023113016582410665/detail/menueditor_item_b9637346b3514b8291fced183470fcc0_1701363479454214423.webp" />
                       </div>
                       <div id='content'>
                          <div id='title'className='mt-5 text-xl font-bold'> Trà Tắc Hồ lô</div>
                          <div id='detail_title'>Trà tắc tươi</div>
                          <div id='dis-price'> Tiết kiệm 3.400đ <span className=' line-through'>34.000đ</span></div>
                          <div id='price'>30.600đ</div>
                        </div>
                        <div className=' flex items-end p-2'>
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                           </svg>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </div>

    </>
  )
}

export default DetailProduct