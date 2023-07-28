import React from 'react'

export default function Signup() {
  return (
    <div>
        <form action="">
            <div>
                <label htmlFor="Email"> Email</label>
                <input type="text" className='border-gray-500 border-2 m-3 '/>
                <br />
                <button className='bg-gray-600 text-white p-1 px-4 rounded-full'>Create Account</button>

            </div>
        </form>
    </div>
  )
}
