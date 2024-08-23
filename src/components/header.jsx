import { useEffect, useState } from 'react'
import Logo from './../media/digikala-3.svg'
import Neda from './content'


export default function Header() {
    const [num, setNum] = useState(0)
    const [flag, setFlag] = useState(false)
    const [nn, setNn] = useState(0)
    function addToCard(e) {
        if (nn > 0) {
            setNum(nn - 1)
        } 
        if (flag) {
            if (document.getElementsByClassName('basket')[0].childNodes.length > 1) {
                document.getElementById('emptyCart').style.display = 'none'
            } else {
                document.getElementById('emptyCart').style.display = 'flex'
            }
            document.getElementsByClassName('basket')[0].style.left = '-100%'
        } else {
            if (document.getElementsByClassName('basket')[0].childNodes.length > 1) {
                document.getElementById('emptyCart').style.display = 'none'
            } else {
                document.getElementById('emptyCart').style.display = 'flex'
            }
            document.getElementsByClassName('basket')[0].style.left = '1%'
        }
        setNn(document.getElementsByClassName('basket')[0].childNodes.length)
        setFlag(!flag)
    }
    function addToCard2(e) {
        setNn(document.getElementsByClassName('basket')[0].childNodes.length)
        if (nn > 0) {
            setNum(nn - 1)
        } 
        if (flag) {
            if (document.getElementsByClassName('basket')[0].childNodes.length > 1) {
                document.getElementById('emptyCart').style.display = 'none'
            } else {
                document.getElementById('emptyCart').style.display = 'flex'
            }
            document.getElementsByClassName('basket')[0].style.left = '0%'
        } else {
            if (document.getElementsByClassName('basket')[0].childNodes.length > 1) {
                document.getElementById('emptyCart').style.display = 'none'
            } else {
                document.getElementById('emptyCart').style.display = 'flex'
            }
            setNn(document.getElementsByClassName('basket')[0].childNodes.length)
            document.getElementsByClassName('basket')[0].style.left = '-100%'
        }       
        setFlag(!flag)
    }

    function Number() {
        return (
            <div className='basket1 w-[15px] h-[15px] bg-red-700 rounded-[50%] text-[10px] flex justify-center items-center font-sans text-white absolute right-[37%] top-[-100%] md:top-0 md:right-[15px] '>{num}</div>
        )
    }
    return (
        <div className="w-full -mb-12 md:mb-0 h-[150px] md:h-[100px] flex justify-center items-center text-[30px] bg-white">
            <div className="w-full h-[75px] md:h-[70px] hidden md:flex items-center fixed left-0 top-0  z-10 pb-2 bg-white">
                <div className="w-[75%] h-full  flex justify-start items-center p-2">
                    <figure className="w-[15%] flex justify-center items-center"><img className="w-[80%] object-cover flex " src={Logo} alt="" /></figure>
                    <label className='w-[55%] h-[95%] flex justify-start items-center rounded-[7px] bg-gray-200 pr-2' htmlFor="">
                        <span>
                            <svg className='text-gray-500 cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path className='cursor-pointer' d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                        </span>
                        <input className='w-[90%] h-full bg-gray-200 border-none outline-non rounded-[7px] text-[14px] p-4 font-primary focus:outline-none focus:border-none' placeholder='جستجو' type="text" />
                    </label>
                </div>
                <div className="w-[25%] h-full  flex justify-end items-center p-2">
                    <div className='w-[40%] h-[80%] flex justify-center items-center border border-gray-300 rounded-[10px]'>
                        <div className='w-[55%] h-full font-primary flex justify-center items-center text-gray-800 cursor-pointer'>
                            <span>
                                <svg className='text-gray-800 cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-left" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z" />
                                    <path fill-rule="evenodd" d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
                                </svg>
                            </span>
                            <div className='text-gray-700 font-primary text-[12px] mr-2'>ورود</div>

                        </div>
                        <div className='w-[5%] flex justify-end items-center ml-2 text-[20px] text-gray-800'>|</div>
                        <div className='w-[40%] font-primary flex justify-center items-center text-gray-800 text-[12px] cursor-pointer'>ثبت نام</div>

                    </div>
                    <div className='w-[5%] flex justify-end items-center -ml-3 text-[30px] text-gray-300'>|</div>
                    <div className='w-[20%] flex justify-center items-center relative'>
                        <div onClick={addToCard} className='cursor-pointer'>
                            <svg className='text-gray-800 cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>
                        </div>
                        {/* llll */}
                        <Number />
                        {/* lll */}
                    </div>
                </div>
            </div>
            <div className="md:w-full md:h-[70px] hidden md:flex fixed left-0 md:top-[55px] bottom-0 z-10 bg-white shadow">
                <div className='w-[80%] h-full flex justify-start items-center p-2 '>
                    <ul className='w-full flex justify-start items-center'>
                        <li className='w-[20%] flex justify-center items-center'><a href="#" className='flex justify-center items-center'>
                            <svg className='text-gary-700' xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                            </svg>
                            <span className='font-primary text-gray-700 text-[16px] mr-2'>دسته‌بندی کالاها</span>
                        </a>
                        </li>
                        <li className='w-[12%] flex justify-center items-center'><a href="#" className='flex justify-center items-center'>
                            <svg className='text-gray-700' xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-percent" viewBox="0 0 16 16">
                                <path className='text-gray-700 ml-3' d="M13.442 2.558a.625.625 0 0 1 0 .884l-10 10a.625.625 0 1 1-.884-.884l10-10a.625.625 0 0 1 .884 0zM4.5 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm7 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                            </svg>
                            <span className='font-primary text-gray-700 text-[14px] mr-2'>شگفت‌انگیزها</span>
                        </a>
                        </li>
                        <li className='w-[12%] flex justify-center items-center'><a href="#" className='flex justify-center items-center'>
                            <svg className='text-gray-700' xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-credit-card-2-front" viewBox="0 0 16 16">
                                <path className='text-gray-700 ml-3' d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z" />
                                <path className='text-gray-700 ml-3' d="M2 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
                            </svg>
                            <span className='font-primary text-gray-700 text-[14px] mr-2'>کارت هدیه</span>
                        </a>
                        </li>
                        <li className='w-[12%] flex justify-center items-center'><a href="#" className='flex justify-center items-center'>
                            <svg lassName='text-gray-700 ml-3' xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-fire" viewBox="0 0 16 16">
                                <path lassName='text-gray-700' d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
                            </svg>
                            <span className='font-primary text-gray-700 text-[14px] mr-2'>پرفروش‌ترین‌ها</span>
                        </a>
                        </li>
                        <li className='w-[15%] flex justify-center items-center'><a href="#" className='flex justify-center items-center'>
                            <svg lassName='text-gray-700' xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-ticket-detailed" viewBox="0 0 16 16">
                                <path lassName='text-gray-700 ml-3' d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5ZM5 7a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2H5Z" />
                                <path lassName='text-gray-700 ml-3' d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6V4.5ZM1.5 4a.5.5 0 0 0-.5.5v1.05a2.5 2.5 0 0 1 0 4.9v1.05a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-1.05a2.5 2.5 0 0 1 0-4.9V4.5a.5.5 0 0 0-.5-.5h-13Z" />
                            </svg>
                            <span className='font-primary text-gray-700 text-[14px] mr-2'>تخفیف‌ها و پیشنهادها</span>
                        </a>
                        </li>
                    </ul>
                </div>
                <div className='w-[15%] ml-4 mr-7 flex justify-end items-center'>
                    <svg className='text-gray-800 cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-pin-map" viewBox="0 0 16 16">
                        <path className='cursor-pointer' fill-rule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z" />
                        <path className='cursor-pointer' fill-rule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z" />
                    </svg>
                    <div className='text-gray-700 font-primary text-[14px] mr-2 cursor-pointer'>لطفا شهر خود را انتخاب کنید</div>
                </div>
            </div>
            <div className="w-full h-[60px] flex justify-center items-center md:hidden fixed left-0 top-0 bg-white shadow z-10">
                <label className='w-[90%] h-[85%] flex justify-start items-center rounded-[7px] bg-gray-200 pr-2' htmlFor="">
                    <svg className='text-gray-500 cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path className='cursor-pointer' d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                    <input className='w-[90%] h-full bg-gray-200 border-none outline-non rounded-[7px] text-[14px] p-4 font-primary focus:outline-none focus:border-none' placeholder='جستجو' type="text" />
                </label>
            </div>
            <div className="w-full h-[60px] flex md:hidden fixed left-0 bottom-0 bg-white shadow z-10">
                <ul className='w-full h-full flex justify-evenly items-center'>
                    <li className='w-[25%] h-full flex justify-center items-center'>
                        <a className='w-full h-full flex justify-center content-center flex-wrap' href="#">
                            <span className='w-full flex justify-center items-center text-[14px] cursor-pointer'>
                                <svg className='w-full flex justify-center items-center text-[14px]' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
                                    <path className='w-full flex justify-center items-center text-[14px]' d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z" />
                                </svg>
                            </span>
                            <div className='w-full flex justify-center items-center text-[14px]'>صفحه اصلی</div>
                        </a>
                    </li>
                    <li className='w-[25%] h-full flex justify-center items-center'>
                        <a className='w-full h-full flex justify-center content-center flex-wrap' href="#">
                            <span className='w-full flex justify-center items-center text-[14px] cursor-pointer'>
                                <svg className='w-full flex justify-center items-center text-[14px]' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grid" viewBox="0 0 16 16">
                                    <path className='w-full flex justify-center items-center text-[14px]' d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
                                </svg>
                            </span>
                            <div className='w-full flex justify-center items-center text-[14px]'>دسته‌بندی</div>
                        </a>
                    </li>
                    <li onClick={addToCard2} className='w-[25%] h-full flex justify-center items-center'>
                        <a className='w-full h-full flex justify-center content-center flex-wrap' href="#">
                            <span className='w-full flex justify-center items-center text-[14px] cursor-pointer'>
                                <svg className='w-full flex justify-center items-center text-[14px]' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
                                    <path className='w-full flex justify-center items-center text-[14px]' d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                                </svg>
                            </span>
                            <div className='w-full flex justify-center items-center text-[14px] relative'>
                                {/* llll */}
                                <Number />
                                {/* lll */}
                                سبد خرید</div>

                        </a>
                    </li>
                    <li className='w-[25%] h-full flex justify-center items-center'>
                        <a className='w-full h-full flex justify-center content-center flex-wrap' href="#">
                            <span className='w-full flex justify-center items-center text-[14px] cursor-pointer'>
                                <svg className='w-full flex justify-center items-center text-[14px]' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path className='w-full flex justify-center items-center text-[14px]' d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                    <path className='w-full flex justify-center items-center text-[14px]' fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                </svg>
                            </span>
                            <div className='w-full flex justify-center items-center text-[14px]'>دیجی کالای من</div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
