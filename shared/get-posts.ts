import { promises as fs, readdirSync } from 'fs';
import matter from 'gray-matter';
import renderToString from 'next-mdx-remote/render-to-string';
import path from 'path';

type PostFile = {
  filepath: string;
  slug: string;
};

type FrontMatter = {
  date: string;
  title: string;
};

export type FormattedPost = {
  filepath: string;
  slug: string;
  content: string;
  frontMatter: FrontMatter;
  mdx: object;
};

const getDirData = (source: string): PostFile[] =>
  readdirSync(source).map((name) => ({
    filepath: `${source}/${name}`,
    slug: name.replace(new RegExp(path.extname(name) + '$'), ''),
  }));

const formatPostList = async ({ filepath, slug }: PostFile) => {
  const mdxSource = await fs.readFile(filepath);

  const { content, data: frontMatter } = matter(mdxSource);

  const mdx = await renderToString(content, {
    scope: frontMatter,
  });

  return { filepath, slug, content, frontMatter, mdx };
};

export async function getPosts(source: string) {
  const files = getDirData(source);

  if (files.length === 0) return [];

  const content = await Promise.all(files.map(formatPostList));

  content.sort((post1, post2) => {
    const dateMs1 = +new Date(post1.frontMatter.date);
    const dateMs2 = +new Date(post2.frontMatter.date);
    return dateMs2 - dateMs1;
  });

  return content;
}
