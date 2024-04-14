import React from 'react'

const Nav = () => {
  return (
    <>  
        <div className=' relative'>
            <img src="https://food-cms.grab.com/compressed_webp/merchants/5-C6E1CZKUSE4JCA/hero/bd5b324a5058459ea73e324c3f333fa3_1709807400607370713.webp" className=' w-full h-[400px] object-cover'  />
            <div className='pl-[10rem] pr-[10rem] absolute top-0 left-0 w-full'> 
            <div className='flex justify-between pb-5 pt-5'>
            <div>
                <img src="https://vectorseek.com/wp-content/uploads/2021/02/GrabFood-Logo-Vector.png?fbclid=IwAR1-qv5eaGD551ajskK27qhPEddjPuCszXJpOqW2akUIR60xBvI_GDPIjK4_aem_Acm_ldx5AE9HZnxAhWzriZSLcOvS7tURYgIcClpuJm88S8BunMiDzkapC46JSZudLNHcMaBTw8qsCcgxLwEbpbS5" className=' w-[200px] h-[50px]' />
            </div>
            <div className=' items-center flex space-x-2'>
                <img src="/src/ICON/shopping-bag.png"/>
                <p>Đăng kí / Đăng nhập</p>
                <p>VI</p>
            </div>
            </div>
            <div className=' bg-white w-[30%] p-10 border-[1px] absolute'>
                <div className=''>
                <p className=' text-[30px]'>Good Evening </p>
                <p className=' text-[35px] font-bold'>Where should we deliver your food today? </p>
                <div className=' flex'>
                <input type="text" className=' border-[1px] w-full p-3 rounded-xl ' placeholder='Nhập địa chỉ của bạn'  />   
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 flex justify-center items-center p-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>

                </div>
                <div>
                  <button className=' w-full border-[1px] border-green-500 bg-green-500 rounded-[8px] mt-5 mb-5 p-3'>  Tìm kiếm 
                    </button>  
                </div>
                </div>
            </div>
            </div>
        </div>

        
        
        
    </>

  )
}

export default Nav