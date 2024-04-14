import React from 'react'

const DetailRes = () => {
  return (
    <>  <div className=' w-max m-auto'>
        <div className=' mt-10 flex'>
            <div className=' text-blue-400'> Trang chủ </div>
            <div> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
            </div>
            <div>Nhà hàng</div>
        </div>
        <p className=' mt-10 mb-10 text-4xl font-bold '>Món ngon gần bạn</p>
        <div id='container' className=' w-[1200px]'>
            <div id='list' className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 '>
                <div id='item' className=' text-center'>
                    <div id='img' className=''>
                        <img src="https://food-cms.grab.com/compressed_webp/merchants/5-CYMADBU1JVLGAT/hero/e380e3273fc24aca8ca4fcaf60bde875_1691032151131944651.webp" className=' rounded-xl'/>
                    </div>
                    <div id='content' className=''>
                        <div id='title'> KFC </div>
                        <div id='detail_title'> Gà rán - Burger - Cơm - món Quốc tế </div>
                        <div id='total' className='flex'>
                            <div id='vote' className='flex mr-3'><img src="https://food.grab.com/static/images/icons/icon-star.svg" alt="" /><span>4.2</span></div>
                            <div id='time' className='flex mr-3'><img src="https://food.grab.com/static/images/icons/icon-clock.svg" alt="" /><span>25 phút</span></div>
                            <div id='km'> 2.5km</div>
                        </div>
                    </div>
                </div>
                <div id='item' className=' text-center relative'>
                    <div id='img' className=' '>
                        <img src="https://food-cms.grab.com/compressed_webp/merchants/VNGFVN000003bz/hero/601c49a5e84e4761afd55d1ad7cd31cf_1670796915212160401.webp" className=' rounded-xl'/>
                    </div>
                    <div id='content' className=''>
                        <div id='title'> Let's sushi </div>
                        <div id='detail_title'> Sushi</div>
                        <div id='total' className='flex'>
                            <div id='vote' className='flex mr-3'><img src="https://food.grab.com/static/images/icons/icon-star.svg" alt="" /><span>4.6</span></div>
                            <div id='time' className='flex mr-3'><img src="https://food.grab.com/static/images/icons/icon-clock.svg" alt="" /><span>30 phút</span></div>
                            <div id='km'> 1.5km</div>
                        </div>
                    </div>
                </div>
                <div id='item' className=' relative text-center'>
                    <div id='img' className=''>
                        <img src="https://food-cms.grab.com/compressed_webp/merchants/5-CZDTGECYL7KKJ2/hero/88f1ade470454f54b1aeb49d09eaf2be_1636898445826470493.webp" className=' rounded-xl'/>
                    </div>
                    <div id='content'>
                        <div id='title'> Gà nướng Việt Hà </div>
                        <div id='detail_title'> Lấu nướng - Quay </div>
                        <div id='total' className='flex'>
                            <div id='vote' className='flex mr-3'><img src="https://food.grab.com/static/images/icons/icon-star.svg" alt="" /><span>4.5</span></div>
                            <div id='time' className='flex mr-3'><img src="https://food.grab.com/static/images/icons/icon-clock.svg" alt="" /><span>40 phút</span></div>
                            <div id='km'> 1.5km</div>
                        </div>
                    </div>
                </div>
                <div id='item' className=' relative text-center'>
                    <div id='img' className=''>
                        <img src="https://food-cms.grab.com/compressed_webp/merchants/5-C6CKJPLXTAA3CT/hero/8bf20c85d8944981ae12bc20483d06f4_1704944798143540911.webp" className=' rounded-xl'/>
                    </div>
                    <div id='content'>
                        <div id='title'> Cơm - Phở - Cháo Hương Lan </div>
                        <div id='detail_title'> Cơm, Bún, Phở, Cháo </div>
                        <div id='total' className='flex'>
                            <div id='vote' className='flex mr-3'><img src="https://food.grab.com/static/images/icons/icon-star.svg" alt="" /><span>4.1</span></div>
                            <div id='time' className='flex mr-3'><img src="https://food.grab.com/static/images/icons/icon-clock.svg" alt="" /><span>10 phút</span></div>
                            <div id='km'> 4.5km</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <p className=' mt-10 mb-10 text-4xl font-bold'>Quán ăn tại <span className=' text-green-500'>Hà Nội</span></p>
        <div id='container' className=' w-[1200px]'>
            <div id='list' className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 '>
                <div id='item' className=' text-center'>
                    <div id='img' className=''>
                        <img src="https://food-cms.grab.com/compressed_webp/merchants/VNGFVN0000043w/hero/2197de099b874d659b651e166e8ddc6d_1704100426827873101.webp" className=' rounded-xl'/>
                    </div>
                    <div id='content' className=''>
                        <div id='title'> Tocotoco </div>
                        <div id='detail_title'> Trà sữa  </div>
                        <div id='total' className='flex'>
                            <div id='vote' className='flex mr-3'><img src="https://food.grab.com/static/images/icons/icon-star.svg" alt="" /><span>4.4</span></div>
                            <div id='time' className='flex mr-3'><img src="https://food.grab.com/static/images/icons/icon-clock.svg" alt="" /><span>10 phút</span></div>
                            <div id='km'> 2.5km</div>
                        </div>
                    </div>
                </div>
                <div id='item' className=' text-center relative'>
                    <div id='img' className=' '>
                        <img src="https://food-cms.grab.com/compressed_webp/merchants/5-C2EBBB5VTNLUME/hero/389ee8853a0c42ada314d33913621a0d_1670796940856597208.webp" className=' rounded-xl'/>
                    </div>
                    <div id='content' className=''>
                        <div id='title'> Spaghetti Italia HaNoi </div>
                        <div id='detail_title'> Pizza </div>
                        <div id='total' className='flex'>
                            <div id='vote' className='flex mr-3'><img src="https://food.grab.com/static/images/icons/icon-star.svg" alt="" /><span>4.7</span></div>
                            <div id='time' className='flex mr-3'><img src="https://food.grab.com/static/images/icons/icon-clock.svg" alt="" /><span>25 phút</span></div>
                            <div id='km'> 3.2km</div>
                        </div>
                    </div>
                </div>
                <div id='item' className=' relative text-center'>
                    <div id='img' className=''>
                        <img src="https://food-cms.grab.com/compressed_webp/merchants/5-C2ADGVM3AE5HNE/hero/0e9a0e91b97949118c47d5da16c95862_1670796873039277136.webp" className=' rounded-xl'/>
                    </div>
                    <div id='content'>
                        <div id='title'> Pizza Bar </div>
                        <div id='detail_title'> Cơm, Pizza, Gà rán  </div>
                        <div id='total' className='flex'>
                            <div id='vote' className='flex mr-3'><img src="https://food.grab.com/static/images/icons/icon-star.svg" alt="" /><span>4.2</span></div>
                            <div id='time' className='flex mr-3'><img src="https://food.grab.com/static/images/icons/icon-clock.svg" alt="" /><span>12 phút</span></div>
                            <div id='km'> 3.3km</div>
                        </div>
                    </div>
                </div>
                <div id='item' className=' relative text-center'>
                    <div id='img' className=''>
                        <img src="https://food-cms.grab.com/compressed_webp/merchants/5-CZEARVAWWCAKJA/hero/4c309653875147ed86b16369e8a04b55_1610312446163908644.webp" className=' rounded-xl'/>
                    </div>
                    <div id='content'>
                        <div id='title'> Bánh đúc nóng </div>
                        <div id='detail_title'> Bún - Phở - Cháo </div>
                        <div id='total' className='flex'>
                            <div id='vote' className='flex mr-3'><img src="https://food.grab.com/static/images/icons/icon-star.svg" alt="" /><span>4.4</span></div>
                            <div id='time' className='flex mr-3'><img src="https://food.grab.com/static/images/icons/icon-clock.svg" alt="" /><span>9 phút</span></div>
                            <div id='km'> 0.5km</div>
                        </div>
                    </div>
                </div>
                <div id='item' className=' relative text-center'>
                    <div id='img' className=''>
                        <img src="https://food-cms.grab.com/compressed_webp/merchants/5-CZCDLFEHJKKUTN/hero/927311d142e14c6fbdccd1f558e38da4_1679106929310283027.webp" className=' rounded-xl'/>
                    </div>
                    <div id='content'>
                        <div id='title'> ChagoTea </div>
                        <div id='detail_title'> Cà phê - Trà sữa - Ăn vặt</div>
                        <div id='total' className='flex'>
                            <div id='vote' className='flex mr-3'><img src="https://food.grab.com/static/images/icons/icon-star.svg" alt="" /><span>4.2</span></div>
                            <div id='time' className='flex mr-3'><img src="https://food.grab.com/static/images/icons/icon-clock.svg" alt="" /><span>7 phút</span></div>
                            <div id='km'> 3.3km</div>
                        </div>
                    </div>
                </div>
                <div id='item' className=' relative text-center'>
                    <div id='img' className=''>
                        <img src="https://food-cms.grab.com/compressed_webp/merchants/VNGFVN00000812/hero/6aa009c161f949de814459888c7399a1_1643364310885059303.webp" className=' rounded-xl'/>
                    </div>
                    <div id='content'>
                        <div id='title'> Xôi chú Ngọng </div>
                        <div id='detail_title'> Bánh mì - xôi </div>
                        <div id='total' className='flex'>
                            <div id='vote' className='flex mr-3'><img src="https://food.grab.com/static/images/icons/icon-star.svg" alt="" /><span>4.2</span></div>
                            <div id='time' className='flex mr-3'><img src="https://food.grab.com/static/images/icons/icon-clock.svg" alt="" /><span>5 phút</span></div>
                            <div id='km'> 1.5km</div>
                        </div>
                    </div>
                </div>
                <div id='item' className=' relative text-center'>
                    <div id='img' className=''>
                        <img src="https://food-cms.grab.com/compressed_webp/merchants/5-C4JFG7VXLBUDTT/hero/288d93b7-7773-47d5-9686-0bd979e589ab__store_cover__2023__07__31__17__11__56.webp" className=' rounded-xl'/>
                    </div>
                    <div id='content'>
                        <div id='title'> Bánh canh cua ghẹ </div>
                        <div id='detail_title'> Bún - Phở - Cháo</div>
                        <div id='total' className='flex'>
                            <div id='vote' className='flex mr-3'><img src="https://food.grab.com/static/images/icons/icon-star.svg" alt="" /><span>4.2</span></div>
                            <div id='time' className='flex mr-3'><img src="https://food.grab.com/static/images/icons/icon-clock.svg" alt="" /><span>10 phút</span></div>
                            <div id='km'> 1.5km</div>
                        </div>
                    </div>
                </div>
                <div id='item' className=' relative text-center'>
                    <div id='img' className=''>
                        <img src="https://food-cms.grab.com/compressed_webp/merchants/5-C4KDGXUEGGB3CJ/hero/af66d16f-860d-4b8a-a101-077ef1cf2c72__store_cover__2023__08__22__14__20__29.webp" className=' rounded-xl'/>
                    </div>
                    <div id='content'>
                        <div id='title'> Bánh mì Sài Gòn </div>
                        <div id='detail_title'> Bánh mì - xôi  </div>
                        <div id='total' className='flex'>
                            <div id='vote' className='flex mr-3'><img src="https://food.grab.com/static/images/icons/icon-star.svg" alt="" /><span>4.2</span></div>
                            <div id='time' className='flex mr-3'><img src="https://food.grab.com/static/images/icons/icon-clock.svg" alt="" /><span>25 phút</span></div>
                            <div id='km'> 1.5km</div>
                        </div>
                    </div>
                </div>
                <div id='item' className=' relative text-center'>
                    <div id='img' className=''>
                        <img src="https://food-cms.grab.com/compressed_webp/merchants/5-C2B1BFXAEJEGJE/hero/a1e4b9ae1046461d86ef182974ba227a_1631600248974156365.webp" className=' rounded-xl'/>
                    </div>
                    <div id='content'>
                        <div id='title'> Bellamour </div>
                        <div id='detail_title'> Cà phê - Trà - Sinh tố </div>
                        <div id='total' className='flex'>
                            <div id='vote' className='flex mr-3'><img src="https://food.grab.com/static/images/icons/icon-star.svg" alt="" /><span>4.2</span></div>
                            <div id='time' className='flex mr-3'><img src="https://food.grab.com/static/images/icons/icon-clock.svg" alt="" /><span>25 phút</span></div>
                            <div id='km'> 2.5km</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    </>
  )
}

export default DetailRes