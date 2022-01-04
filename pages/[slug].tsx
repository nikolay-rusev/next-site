import {
	GetStaticPaths,
	GetStaticPropsContext,
	InferGetStaticPropsType,
} from 'next';
import hydrate from 'next-mdx-remote/hydrate';

import { FormattedPost, getPosts } from '@shared/get-posts';

export default function Post({
  mdxContent,
  frontMatter,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  // @ts-ignore: works
  const content = hydrate(mdxContent, { components: {} });
  return (
    <>
      <header>
        <h1>{frontMatter.title}</h1>
      </header>
      <article>{content}</article>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts('./posts');

  const paths = posts.map(({ slug }) => ({
    params: { slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const { slug: routeSlug } = params as { slug: string };
  const posts = await getPosts('./posts');

  const { mdx, frontMatter } = posts.find(
    ({ slug: postSlug }) => postSlug === routeSlug
  ) as FormattedPost;

  return {
    props: {
      mdxContent: mdx,
      frontMatter,
    },
  };
};
