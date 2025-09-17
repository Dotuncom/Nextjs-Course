import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1>Hello Next.js i gat you</h1>

      <Link href={'/blog'}> Blog </Link>
      <Link href={'/product'}> Products </Link>
      <Link href={`/article/breaking-new-123?lang=en` }>English</Link>
      <Link href={'/article/breaking-new-123?lang=fr' }>French </Link>
      <Link href={'/article/breaking-new-123?lang=es' }> panish</Link>
    </div>
  );
};

export default HomePage;
