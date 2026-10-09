
import Link from "next/link";
import Marquee from "react-fast-marquee";

interface Headline {
    id: string;
    title: string;
}

interface NewsResponse {
    data: Headline[];
}

const MarqueeText = async () => {
    const res = await fetch(
        "https://news-api-v2.vercel.app/api/news?limit=10"
    );

    const data: NewsResponse = await res.json();
    const headLines = data.data;

    return (
        <div className="mt-7 bg-red-400 p-3 mb-6">
            <div className="flex max-w-7xl mx-auto">
                <div className="bg-red-500 py-1 px-7 font-bold">
                    সর্বশেষ
                </div>

                <Marquee speed={50} className="py-1">
                    {headLines.map((headLine) => (
                        <Link
                            className="hover:underline"
                            href={`/news/${headLine.id}`}
                            key={headLine.id}
                        >
                            <span>{headLine.title}</span>
                            <span className="mx-5">•</span>
                        </Link>
                    ))}
                </Marquee>
            </div>
        </div>
    );
};

export default MarqueeText;

