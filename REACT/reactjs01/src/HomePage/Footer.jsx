import React from 'react'

const Footer = () => {
  return (
    <div className=' bg-green-500'>
        <div className=' pl-[10rem] pr-[10rem]'>
            <div>
                <img src="https://food.grab.com/static/images/logo-grabfood-white2.svg" className=' w-[130px] h-[50px] ' />
            </div>
            <div className='pl-[10rem] pr-[10rem] border-t-[1px] border-white'>
            </div>
            <div className='flex justify-between'>
            <div className=''>
                <div className=' text-white p-[10px] flex-1'> Về GrabFood </div>
                <div className=' text-white p-[10px] flex-1'> Về Grab </div>
                <div className=' text-white p-[10px] flex-1'> Blog </div>
            </div>
            <div className=''>
                <div className=' text-white p-[10px] flex-1'> <a href=""> Mở quán trên GrabFood</a></div>
                <div className=' text-white p-[10px] flex-1'> <a href="">Trở thành tài xế Grab</a></div>
            </div>
            <div className=''>
                <div className=' text-white p-[10px] flex-1'> <a href=""> Trung tâm hỗ trợ</a></div>
                <div className=' text-white p-[10px] flex-1'> <a href=""> Câu hỏi thường gặp</a></div>
            </div>
            <div className='flex'>
                    <div className='mr-2 p-[10px]'>
                        <a href="">
                        <img src="/src/ICON/facebook.png" />
                        </a>                        
                    </div>
                    <div className='mr-2 p-[10px]'>
                        <a href="">
                        <img src="/src/ICON/instagram.png" />
                        </a>                        
                    </div>
                    <div className=' mr-2 p-[10px]'>
                        <a href="">
                        <img src="/src/ICON/twitter.png" />
                        </a>                        
                    </div>
            </div>
            </div>
            <div className='pl-[10rem] pr-[10rem] border-t-[1px] border-white'>
            </div>
            <div className=' flex justify-between'>
                <div className=' flex'>
                <div className=' p-[10px]'>
                    <img src="https://food.grab.com/static/images/logo-appstore.svg" alt="" />
                </div>
                <div className=' p-[10px]'>
                    <img src="https://food.grab.com/static/images/logo-playstore.svg" alt="" />
                </div>
                </div>
                <div className='flex'>
                <p className='p-[10px] text-white'>2024 Grab</p>
                <p className='p-[10px] text-white '>Câu hỏi thường gặp</p>
                <p className='p-[10px] text-white '>Chính sách bảo mật</p>
                </div>
            </div>
            
            
            
        </div>
    </div>
  )
}

export default Footer