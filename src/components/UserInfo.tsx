
"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const UserInfo = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;

    console.log(user);


    const handleSignout = async() =>{
        await authClient.signOut()
    }

    return (
        <div>
            {user ? (
                <div className="flex flex-col items-center gap-2">
                    <div className="avatar">
                        <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                            <img
                                alt="Avatar-component"
                                src={user?.image || ""}
                            />
                        </div>
                    </div>
                    <h2>{user?.name}</h2>
                     <button onClick={handleSignout} className="btn bg-red-600 text-white">
                      সাইন আউট
                    </button>
                    
                </div>
            ) : (
                <div className="flex gap-4">
                    <Link href={'/signin'}><button className="btn btn-ghost text-netural-700 transition-colors hover:text-red-700">
                        সাইন ইন
                    </button></Link>

                    <Link href={'/signup'}><button className="btn bg-red-600 text-white">
                        সাইন আপ
                    </button></Link>
                </div>
            )}
        </div>
    );
};

export default UserInfo;

