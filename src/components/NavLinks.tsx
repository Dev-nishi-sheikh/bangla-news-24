import Link from "next/link"
import { title } from "process";

interface Navs {
    slug :string
    title :string
    topicId : string | null
    url: string
    scrapable: boolean
}

const NavLinks =async () => {
    const res = await fetch("https://news-api-v2.vercel.app/api/categories")
    const data = await res.json()
    const navs = data.data
    const filterNavs = navs.filter(nav => nav.scrapable)
    return (
        <div className="flex justify-center gap-10 mt-5 me-60">
           <Link href={"/"}>হোম</Link>
            {
                filterNavs.map((nav, i) => 
                <Link key ={i} href={`/categori/${nav.slug}`}>{nav.title}</Link>
            )}
        </div>
    );
};

export default NavLinks;