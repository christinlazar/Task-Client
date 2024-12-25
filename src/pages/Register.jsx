import React, { useState } from 'react'
import { Toaster,toast } from 'sonner'
import { regsiter } from './Api/userApi'
function Register() {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [ConfirmPass,setConfirmPass] = useState('')
    const handleSubmssion = async (e)=>{
        try {
            e.preventDefault()
            if(!name.trim() || !email.trim() || !password.trim() || !ConfirmPass.trim()){
                return toast.error("fields cant be empty")
            }
            if(password != ConfirmPass){
                return toast.error("password must be matching")
            }
            const formData = {
                name,
                email,
                password
            }

            const response = await regsiter(formData)

        } catch (error) {
            toast.error("Something unexpected happend")
        }
    }
  return (
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"/>
      <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>
    </div>
  
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form onSubmit={handleSubmssion} class="space-y-6" action="#" method="POST">
        <div>
          <label for="email" class="block text-sm/6 font-medium text-gray-900">Email address</label>
          <div class="mt-2">
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" name="email" id="email" autocomplete="email" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
          </div>
        </div>
        <div>
          <div class="flex items-center ">
            <label for="name" class="block text-sm/6 font-medium text-gray-900">Name</label>
           
          </div>
          <div class="mt-2">
            <input value={name} onChange={(e)=>setName(e.target.value)} type="name" name="name" id="name" autocomplete="current-name" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
          </div>
        </div>
  
        <div>
          <div class="flex items-center ">
            <label for="password" class="block text-sm/6 font-medium text-gray-900">Password</label>
           
          </div>
          <div class="mt-2">
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" name="password" id="password" autocomplete="current-password" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
          </div>
        </div>
        <div>
          <div class="flex items-center ">
            <label for="password" class="block text-sm/6 font-medium text-gray-900"> Confirm Password</label>
           
          </div>
          <div class="mt-2">
            <input value={ConfirmPass} onChange={(e)=>setConfirmPass(e.target.value)} type="password" name="password" id="password" autocomplete="current-password" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
          </div>
        </div>
  
        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
        </div>
      </form>
  
      
    </div>
  </div>
  )
}

export default Register