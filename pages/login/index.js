import React from 'react'
import { useState } from 'react';
import Link from 'next/link';
export default function Login() {
  
    return (
      <div className='container mx-auto xl:mt-32 lg:mt-32 md:mt-32 sm:mt-32 xs:mt-32 flex flex-col items-center' >

           <div className='w-40 h-40'>
               <img src='#' className='w-full h-full rounded-full bg-[#FB5D4F]  text-center'></img>
           </div>
           <br/>
           
        <form className='text-center'>
          <label className='w-full block text-left'>
              Email:
          </label>
          <input className='w-full px-52 pl-2 py-2 bg-[#F3F3F3] border-solid border-2 border-gray rounded-md outline-[#FB5D4F] text-left'
              type="email"
            />
          <br/>
          <br/>
          <label className='w-full block text-left'>
            Password:
          </label>
          <input className='w-full pl-2 py-2 mb-5 bg-[#F3F3F3] border-solid border-2 border-gray rounded-lg outline-[#FB5D4F]'
              type="password"
            />
            <div className='mb-4'>
                <Link href="#!">Forgot your password?</Link>
            </div>
          <button className='bg-[#FB5D4F] rounded-lg px-10 py-2 text-white shadow-xl ' type="submit" >
             <Link href="/dashboard">Login</Link>
          </button>
        </form>
      </div>
    );

  }
  
