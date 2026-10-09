import React from 'react';
import NewsCard from '@/components/NewsCard';


interface News{
    id :string;
    title : string;
    description:string;
    categori : string;
    imageUrl :string;
    imageAlt :string;

}

const  CategoriNews= async({params}:{params:{categoriId:string}}) => {
    const {categoriId} =await params

    const res = await fetch(`https://news-api-v2.vercel.app/api/category/${categoriId}`)
   const data = await res.json()
   const categoriNews:News[] = data.data
   console.log(categoriNews)
   
    console.log(categoriId)


    
    return (
        <div>
           <h1 className=' text-2xl font-bold border-b-3 border-red-600 mb-5'>{data.title}</h1>
           

           <div className='grid grid-cols-3 gap-10'>
            {
                categoriNews.map(news =><NewsCard key ={news.id} news={news}/>)
            }
           </div>
       
       
       
        </div>
    );
};

export default CategoriNews;