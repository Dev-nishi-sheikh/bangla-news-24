import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface News {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt?: string;
}

const MainNews = ({ news }: { news: News[] }) => {
    // ডাটা না থাকলে এরর হ্যান্ডলিং
    if (!news || news.length === 0) {
        return <div>কোনো সংবাদ পাওয়া যায়নি।</div>;
    }

    const [firstNews, ...otherNews] = news;

    return (
        <div className="flex flex-col lg:flex-row gap-5">
            {/* প্রথম বড় সংবাদটি */}
            <Link href={`/news/${firstNews.id}`} >
                <div className="card bg-base-100 w-full lg:w-96 shadow-sm hover:shadow-md transition-shadow">
                    <figure className="relative h-64 w-full">
                        <Image
                            src={firstNews.imageUrl}
                            alt={firstNews.imageAlt || firstNews.title}
                            fill
                            className="object-cover rounded-t-lg"
                            priority
                        />
                    </figure>
                    <div className="card-body">
                        <p className="text-red-600 font-semibold">{firstNews.category}</p>
                        <h2 className="card-title text-xl font-bold">{firstNews.title}</h2>
                        <p className="text-gray-600 line-clamp-3">{firstNews.description}</p>
                    </div>
                </div>
            </Link>

            {/* পাশের অন্যান্য সংবাদসমূহ (সর্বোচ্চ ৪টি) */}
            <div className="grid gap-3 flex-1">
                {otherNews.slice(0, 4).map((otherNew) => (
                    <Link href={`/news/${otherNew.id}`} key={otherNew.id} className="block">
                        <div className="card bg-base-100 border border-gray-200 p-4 hover:bg-gray-50 transition-colors">
                            <p className="text-red-600 font-semibold text-sm mb-1">
                                {otherNew.category} {/* আগে এখানে firstNews.category ছিল */}
                            </p>
                            <h3 className="font-medium text-gray-900 hover:text-red-600">
                                {otherNew.title}
                            </h3>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default MainNews;