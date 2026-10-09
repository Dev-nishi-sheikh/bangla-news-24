import Image from "next/image";
import React from "react";

const NewsDetails = async ({
  params,
}: {
  params: Promise<{ newsId: string }>;
}) => {
  const { newsId } = await params;

  console.log("News ID:", newsId);

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${newsId}`
  );

  const data = await res.json();

  console.log("API DATA:", data);

  // যদি API থেকে error আসে
  if (!data.success) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold text-red-600">
          News not found
        </h1>

        <p className="mt-3">
          {data.error?.message || "Something went wrong"}
        </p>
      </div>
    );
  }

  const news = data.data;

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-5">
        {news.title}
      </h1>

      {/* Image */}
      <Image
        src={news.imageUrl}
        alt={news.title}
        width={800}
        height={500}
        className="w-full h-auto rounded-lg"
      />

      {/* News Text */}
      <p className="mt-6 text-lg leading-8">
        {news.text}
      </p>

      {/* Author */}
      <h3 className="mt-5 font-semibold">
        {news.byline?.name}
      </h3>
    </div>
  );
};

export default NewsDetails;