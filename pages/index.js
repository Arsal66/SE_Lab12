import { getPostData } from '../lib/posts';

export default function Home({ post }) {
  const { data, content } = post;

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.date}</p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

// Fetch data on the server during build time
export async function getStaticProps() {
  const post = getPostData(); // Fetch the data from the 'getPostData' function
  return {
    props: {
      post, // Pass the data as props to the page component
    },
  };
}
