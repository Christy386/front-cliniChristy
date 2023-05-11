import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push(`/test/otherPage?inputValue=${inputValue}`);
  };

  return (
    <div>
      <h1>Page 1</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="inputValue">Input Value:</label>
        <input
          id="inputValue"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
