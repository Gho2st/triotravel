"use client";

import { useState, useEffect } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { ArrowUpRight, Calendar } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function FacebookPosts() {
  const t = useTranslations("facebook");
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function truncateText(text, wordLimit) {
    const words = text.split(" ");
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(" ") + "...";
  }

  useEffect(() => {
    async function fetchPosts() {
      const timestamp = Date.now(); // prostsze i bardziej czytelne

      try {
        const res = await fetch(`/api/facebook/${timestamp}`, {
          headers: { "Cache-Control": "no-cache" },
        });
        const data = await res.json();
        setPosts(data.data || []);
      } catch (error) {
        console.error("Błąd podczas pobierania postów:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return (
    <section className="relative px-4 xl:px-20 2xl:px-[16%] pt-24 pb-16 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(37,99,235,0.06),_transparent_60%)]"
      />

      <div className="text-center mb-12 md:mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6 ring-1 ring-blue-100">
          <FaFacebookSquare size={16} />
          <span>Facebook</span>
        </div>

        <h2 className="text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl font-bold tracking-tight text-gray-900 mb-4">
          {t("header")}{" "}
          <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            {t("span")}
          </span>{" "}
          {t("header2")}
        </h2>

        <a
          href="https://www.facebook.com/TrioTravel"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-full bg-blue-600 text-white font-medium shadow-md shadow-blue-600/20 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 hover:-translate-y-0.5 transition-all duration-300 ease-out"
        >
          <FaFacebookSquare size={20} />
          <span>{t("cta")}</span>
          <ArrowUpRight
            size={18}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </div>

      {isLoading ? (
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 2xl:gap-10">
          {[...Array(3)].map((_, i) => (
            <li
              key={i}
              className="bg-white rounded-3xl overflow-hidden ring-1 ring-gray-100 shadow-sm"
            >
              <div className="w-full h-72 xl:h-96 bg-gray-100 animate-pulse" />
              <div className="p-6 space-y-3">
                <div className="h-4 bg-gray-100 rounded animate-pulse w-full" />
                <div className="h-4 bg-gray-100 rounded animate-pulse w-5/6" />
                <div className="h-4 bg-gray-100 rounded animate-pulse w-2/3" />
                <div className="flex justify-between pt-4">
                  <div className="h-3 bg-gray-100 rounded animate-pulse w-20" />
                  <div className="h-3 bg-gray-100 rounded animate-pulse w-16" />
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : posts.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-500 text-lg">{t("error")}</p>
        </div>
      ) : (
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 2xl:gap-10">
          {posts.map((post) => {
            const imageUrl =
              post.attachments?.data?.[0]?.media?.image?.src ?? null;
            const [pageId, postId] = post.id.split("_");
            const postUrl = `https://www.facebook.com/${pageId}/posts/${postId}`;

            return (
              <li
                key={post.id}
                className="group relative bg-white rounded-3xl overflow-hidden ring-1 ring-gray-100 shadow-sm hover:shadow-2xl hover:shadow-blue-600/10 hover:-translate-y-1 transition-all duration-500 ease-out flex flex-col"
              >
                {imageUrl && (
                  <a
                    href={postUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-full h-72 xl:h-96 overflow-hidden block"
                  >
                    <Image
                      src={imageUrl}
                      alt="Zdjęcie z posta"
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </a>
                )}

                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-gray-700 leading-relaxed text-sm 2xl:text-base mb-6 flex-1">
                    {truncateText(post.message || t("error2"), 35)}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                      <Calendar size={14} />
                      <time dateTime={post.created_time}>
                        {new Date(post.created_time).toLocaleDateString(
                          "pl-PL",
                          {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          },
                        )}
                      </time>
                    </div>

                    <a
                      href={postUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors"
                    >
                      {t("cta2")}
                      <ArrowUpRight
                        size={14}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
