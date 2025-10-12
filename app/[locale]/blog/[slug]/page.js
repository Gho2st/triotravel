import { notFound } from "next/navigation";
import Header from "@/app/UI/Header";
import LineHeader from "@/app/UI/Blog/LineHeader";
import CtaLink from "@/app/UI/Blog/CtaLink";
import RecentPosts from "@/app/UI/Blog/RecentPosts";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { blogPosts } from "@/app/data/blogData";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { slug, locale } = resolvedParams;

  // Szukamy posta po polskim slugu (lub innym głównym identyfikatorze)
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  const t = await getTranslations({
    locale,
    namespace: "blog.blogPosts",
  });

  // 🔹 Pobieramy canonical URL z routing.pathnames
  // routing.pathnames["/blog"][locale] powinien zawierać już przetłumaczoną ścieżkę do tego wpisu
  const path = routing.pathnames[`/blog/${slug}`][locale];
  const canonicalUrl =
    locale === "pl"
      ? `https://triotravel.pl${path}`
      : `https://triotravel.pl/${locale}${path}`;

  return {
    title: `${t(`${post.id}.metaTitle`)}`,
    description: t(`${post.id}.contentPart1`).slice(0, 150) + "...",
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

// 🔹 Dynamiczna strona wpisu blogowego
export default async function BlogPostPage({ params }) {
  const resolvedParams = await params; // 🔹 UWAGA: trzeba await!
  const { slug, locale } = resolvedParams;

  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return notFound();

  const t = await getTranslations({ locale, namespace: "blog.blogPosts" });
  const data = {
    ...post,
    title: t(`${post.id}.title`),
    subtitle: t(`${post.id}.subtitle`),
    subtitle2: t(`${post.id}.subtitle2`),
    contentPart1: t(`${post.id}.contentPart1`),
    contentPart2: t(`${post.id}.contentPart2`),
    cta: {
      link: t(`${post.id}.cta.link`),
      button: t(`${post.id}.cta.button`),
      header: t(`${post.id}.cta.header`),
      text: t(`${post.id}.cta.text`),
    },
  };

  return (
    <main className="pt-8 px-[9%] 2xl:px-[13%]">
      <Header text={data.title} />

      <section className="py-8 2xl:py-20">
        <div>
          <LineHeader text={data.subtitle} layout="left" />
          <p
            className="text-lg text-left xl:text-xl leading-relaxed mt-10 xl:my-16"
            dangerouslySetInnerHTML={{ __html: data.contentPart1 }}
          />
        </div>

        <div>
          <LineHeader text={data.subtitle2} layout="right" />
          <p
            className="text-lg text-left xl:text-xl leading-relaxed mt-10 xl:my-16"
            dangerouslySetInnerHTML={{ __html: data.contentPart2 }}
          />
        </div>

        <CtaLink
          link="/wycieczki-jednodniowe"
          button={data.cta.button}
          header={data.cta.header}
          text={data.cta.text}
        />

        <div className="mt-16">
          <RecentPosts
            blogPosts={blogPosts.map((p) => ({
              ...p,
              title: t(`${p.id}.title`),
            }))}
            layout="row"
          />
        </div>
      </section>
    </main>
  );
}
