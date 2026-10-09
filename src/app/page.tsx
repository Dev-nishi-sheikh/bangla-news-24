import NewsCard from "@/components/NewsCard";
import MainNews from "@/components/MainNews";
import MostRead from "@/components/MostRead";



interface IOtherSection {
  curationId: string;
  title: string;
  articles: {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string;
  }[];
}



export default async function Home() {
  const res = await fetch('https://news-api-v2.vercel.app/api/news/sections')
  const data = await res.json()
  const sections = data.data
  const mainNews = sections[0].articles
  const otherSections:IOtherSection[] = sections.slice(1)
  // console.log(otherSections)

  return (
    <div >
    
      <div className="grid grid-cols-3 ">
        {/* news section */}
        <div className="col-span-2 ">
          <MainNews news={mainNews}></MainNews>

          <div className="grid gap-5 mt-5">
            {
              otherSections.map(otherSection => <div key={otherSection.curationId} >
                <h1 className="font-bold  border-b-3 pb-2 mb-3 border-red-700" >{otherSection.title}</h1>
                <div className="grid grid-cols-3 gap-4">
                  {
                    otherSection.articles.map(news => <NewsCard key={news.id} news={news}></NewsCard>)
                  }
                </div>
              </div>
              )}

          </div>







        </div>
        {/* most read section */}
        <div className="col-span-1 ps-6 ">
          <MostRead></MostRead>
        </div>
      </div>
    </div>
  );
}
