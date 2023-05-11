import { useRouter } from "next/router";

export default function Result({ inputValue }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Page 2</h1>
      <p>Input Value: {inputValue}</p>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const { inputValue } = query;
  return {
    props: {
      inputValue,
    },
  };
}
