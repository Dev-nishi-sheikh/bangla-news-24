import Image from 'next/image';
import NavLinks from "../components/NavLinks";
import UserInfo from './UserInfo';

const Header = () => {
    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
    });
    console.log(date)
    return (
     <header>
        <div className="flex justify-between p-4  items-center">
            <div className="flex items-center gap-2 max-w-7xl mx-auto">
                <Image className=" w-15 h-15" width={50} height={50} src={"/logo.webp"} alt="header-logo"></Image>
                <div className="">
                    <h2 className=" pb-1 text-red-500 text-4xl font-bold">Bangla News 24</h2>
                    <p>{date}</p>
                </div>
            </div>
           <UserInfo></UserInfo>
           
        </div>
    <NavLinks/>
    </header>
    );
};

export default Header;