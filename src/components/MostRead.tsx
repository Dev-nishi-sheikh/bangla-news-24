import React from 'react';

const MostRead = async () => {
    const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read")
    const data = await res.json()
    const news = data.data
    console.log(news)
    return (
        <div className='card p-2 bg-base-100 border border-gray-300'>
            <h1 className='font-bold text-black mb-3 text-2xl pt-2 ps-2 '>সর্বাধিক পঠিত</h1>
            <div className='grid gap-3'>
                {
                    news.map((n, i) => <div key={n.id} className='flex gap-2 p-4'>
                        <p className='text-2xl font-bold text-red-400'>{i + 1}</p> <h2>{n.title}</h2>
                    </div>)
                }
            </div>

        </div>
    );
};

export default MostRead;