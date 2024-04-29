import React from 'react';
function Login() {
    return (
      <div className='bg-white px-10 py-20 rounded-3xl border-2 border-gray-100'>
        <h1 className='text-5xl font-semibold '>Login</h1>
        <p className='font-medium text-lg text-gray-500 mt-4'>Please enter your details</p>
        <div className='mt-8'>
            <div>
                <label className='text-lg font-medium' htmlFor="">Email</label>
                <input className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent' placeholder='Enter Your Email' type="email" name="email"/>
            </div>
            <div>
                <label className='text-lg font-medium' htmlFor="">Password</label>
                <input className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent' placeholder='Enter Your Password' type="password" name="email"/>
            </div>
            <div className='mt-8 flex items-center justify-between'>
                <div>
                    <input type="checkbox" name="" id="Remember" />
                    <label className='ml-2 mr-5 font-medium text-base ' htmlFor="Remember">Remember your credentials</label>
                </div>
                <button className='font-medium text-base text-violet-500'>Forgot Password</button>
            </div>
            <div className='mt-8 flex-col'>
                <button className='mb-3 w-full bg-violet-500 text-white text-lg font-bold py-3 rounded-xl active:scale-95 active:duration-150 transition-all hover:scale-[1.01] ease-out'>Sign in</button><br />
                <button className='flex items-center justify-center gap-2 mb-3 w-full  text-black text-lg  py-3 rounded-xl active:scale-95 active:duration-150 transition-all hover:scale-[1.01] ease-out '>Sign in with Google</button>
            </div>
        </div>
      </div>
    );
  } 
export default Login