import matter from 'gray-matter';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { GetServerSideProps } from 'next';

interface Props {
  content: string;
  data: {
    title: string;
    date: string;
  };
  route: string;
}

const transformImageUriFactory = (title: string) => {
  const transformImageUri = (input: string) => {
    return `/blog/${title}/` + input;
  };
  return transformImageUri;
};

const BlogTemplate = ({ content, data, route }: Props) => {
  return (
    <>
      {/* <h1>{data.title}</h1> */}
      <ReactMarkdown
        source={content}
        transformImageUri={transformImageUriFactory(route)}
        escapeHtml={false}
      />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  // @ts-ignore
  const route = context.params['route'];

  // Import our .md file using the `slug` from the URL
  // @ts-ignore
  const content = await import(`../../public/blog/${route}/index.md`);

  // Parse .md data through `matter`
  const data = matter(content.default);

  return {
    props: {
      content: data.content,
      data: data.data,
      route,
    },
  };
};

export default BlogTemplate;
