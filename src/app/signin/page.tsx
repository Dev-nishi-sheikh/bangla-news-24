"use client"
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";


const signInPage = () => {

       const onSubmit = async(e:React.SubmitEvent<HTMLElement>) =>{
            e.preventDefault()
    
            const formData = new FormData(e.target)
            const user = Object.fromEntries(formData.entries()) as {name:string,email:string,image:string,password:string}
            
    
            const{data,error} = await authClient.signIn.email({
                ...user,
                callbackURL:'/'
    
            })
            if(data){
                toast.success("Sign in successfully!")
                console.log(data)
            }
             if(error){
                toast.error(error.message)
                console.log(error)
            }
    
    
            
    
        }


    return (
         <div className='flex flex-col items-center justify-center mt-7'>
            <h2 className='text-2xl font-bold text-red-700'>সাইন ইন</h2>
            <form onSubmit={onSubmit}>
                <fieldset className="fieldset rounded-box w-md ">

                    <label className="label">ইমেইল</label>
                    <input name="email" type="email" className="input w-md " placeholder="Email" />

                    <label className="label">পাসওয়ার্ড</label>
                    <input name="password" type="password" className="input w-md" placeholder="Password" />

                    <button type = "submit" className="btn  bg-red-700 text-white mt-4">সাইন ইন করুন</button>
                </fieldset>


            </form>
        </div>
    );
};

export default signInPage;