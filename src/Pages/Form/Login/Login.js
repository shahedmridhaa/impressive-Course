import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import { AiOutlineGoogle } from 'react-icons/ai'
import { useForm } from 'react-hook-form';
import "../../Shared/Css/style.css"
import { authcontext } from '../../../Authprovider/AuthProvide';


const Login = () => {

  const {user} = useContext(authcontext)
  const { register,formState: { errors }, handleSubmit} = useForm()

  const handleForm =(data)=>{
    const email = data.email
    const password = data.password
 
    console.log(email,password);
  }


    return (
      <div>
      <div className="min-h-screen bg-gradient-to-tl from-green-400 to-indigo-900 w-full py-16 px-4 ">
       <div className="flex flex-col items-center justify-center">
         <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
           <p
             tabIndex={0}
             aria-label="Login to your account"
             className="text-2xl font-extrabold leading-6 text-gray-800"
            >
            Login In to Your account
            </p>
           <p className="text-sm mt-4 font-medium leading-none text-gray-500">
              Don't have an account
             <span
               tabIndex={0}
               role="link"
               aria-label="Sign up here"
               className="text-sm font-medium leading-none underline text-gray-800 cursor-pointer"
             >
               {' '}
               <Link to="/regester" className="text-cyan-500">
                 Please Sign up in here
               </Link>
             </span>
           </p>
           <div className="text-center mt-12 mb-2">
             <button className="btn btn-outline w-full">
               {' '}
               <span className="pr-2 font-2xl">
                 <AiOutlineGoogle />
               </span>{' '}
               Google
             </button>
           </div>

           <div className="w-full flex items-center justify-between py-5">
             <hr className="w-full bg-gray-400" />
             <p className="text-base font-medium leading-4 px-2.5 text-gray-400">
               OR
             </p>
             <hr className="w-full bg-gray-400  " />
           </div>

           <form onSubmit={handleSubmit(handleForm)}>
            
             <div className="mt-6 w-full">
               <lable className="text-sm font-medium leading-none text-gray-800">
                 Email
               </lable>
               <input
                 type="email"
                 className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                  {...register('email', {
                    required: true,
                  })}
               />
               {errors.email && (
               <p className="text-red-600">Email is required</p>
             )}
             </div>

             <div className="mt-6 w-full">
               <lable className="text-sm font-medium leading-none text-gray-800">
                 Password
               </lable>
               <input
                 aria-label="enter Password"
                 type="password"
                 name="password"
                 className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                  {...register('password', {
                    required: true,
                    minLength: {
                      value: 6,
                      message: 'Password must be 6 Charaters or longer',
                    },
                  })}
               />
             {errors.password && (
               <p className='text-red-500'>{errors.password.message}</p>
             )}
             </div>
           
             <div className="mt-8">
               <button
                 type="submit"
                 aria-label="create my account"
                 className='button flex items-center w-full'
               >
                 Login account
               </button>
             </div>
           </form>
         </div>
       </div>
     </div>
     </div>
    );
};

export default Login;