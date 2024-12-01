import Head from "next/head";
import { SeoProps } from "./seo.props";
import { siteConfig } from "src/config/site.config";

const SEO = ({
  children,
  metaTitle = siteConfig.metaTitle,
  metaDescription = siteConfig.metaDescription,
  metaAuthor = siteConfig.metaAuthor,
  metaKeywords = siteConfig.metaKeywords,
}: SeoProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metaTitle}</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content={metaDescription} />
        <meta name="author" content={metaAuthor} />
        <meta name="keywords" content={metaKeywords} />
        <link />
      </Head>
      {children}
    </>
  );
};

export default SEO;
