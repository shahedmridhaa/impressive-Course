import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import { AiOutlineGoogle } from 'react-icons/ai'
import { useForm } from 'react-hook-form';
import "../../Shared/Css/style.css"
import { authcontext } from '../../../Authprovider/AuthProvide';


const Regestration = () => {

   const {user, registerUser, googleUser, userUpdet} = useContext(authcontext)
   const { register,formState: { errors }, handleSubmit} = useForm()


 const handleForm =(data)=>{

  registerUser(data.email, data.password)
  .then(result =>{
    const user = result.user

    // =updetprofile
    const userInfo = {
      displayName: data.name,
    }
    userUpdet(userInfo)
    .then(()=>{
      saveUser(data.name, data.email, data.role)

    })
    .cathc(()=>{})
  })
  .catch(err =>{
    console.log(err);
  })
 }


//  ==google
const handlegoogle= () =>{
   googleUser()
   .then((result)=>{
      const user = result.user

      const name = user.displayName
      const email = user.email
      const role = "Student"
      saveUser(name, email, role)
   })
   .catch(()=>{})
}


// ==save from mongodb
const saveUser =(name, email, role)=>{
  const userdetails={
    name,
    email,
    role
  }
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
                Create Your Account
              </p>
              <p className="text-sm mt-4 font-medium leading-none text-gray-500">
                Do you have already account
                <span
                  tabIndex={0}
                  role="link"
                  aria-label="Sign up here"
                  className="text-sm font-medium leading-none underline text-gray-800 cursor-pointer"
                >
                  {' '}
                  <Link to="/login" className="text-cyan-500">
                    Please Login in here
                  </Link>
                </span>
              </p>
              <div className="text-center mt-12 mb-2">
                <button onClick={handlegoogle} className="btn btn-outline w-full">
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
                <div>
                  <lable className="text-sm font-medium leading-none text-gray-800">
                    Name
                  </lable>
                  <input
                    type="text"
                    className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                    {...register('name', {
                      required: true,
                    })}
                  />    
                </div>
  
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
  
  
                <div className="mt-6 w-full">
                  <label className="text-sm font-medium leading-none text-gray-800">
                   Your Image
                  </label>
                  <input
                   className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                    type="file"
                    placeholder="Upload here"
                     {...register('image', {
                      required: true,
                     })}
                  />
                 {
                  errors.image && (
                    <p className='text-red-500'>Image is required</p>
                    )
                 }
                </div>
  
  
                <div className="mt-6 w-full">
                  <lable className="text-sm font-medium leading-none text-gray-800 ">
                    Select Your Identity
                  </lable>
                  <br></br>
                  <select
                     {...register('role')}
                     className="select select-bordered w-full max-w-xs mt-3"
                    >
                    <option>Student</option>
                    <option>Teacher</option>
                    <option>Admin</option>
                  </select>
                </div>
  
              
                <div className="mt-8">
                  <button
                    type="submit"
                    aria-label="create my account"
                    className='button flex items-center w-full'
                  >
                    Create an account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        </div>
    );
};

export default Regestration;