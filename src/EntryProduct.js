import { useState } from "react";

export default function EntryProduct({ action }) {
  const [content, setContent] = useState("");

  function submit(e) {
    e.preventDefault();
    action(content);
  }

  return (
    <form onSubmit={submit}>
      Product:{" "}
      <input value={content} onChange={(e) => setContent(e.target.value)} />
    </form>
  );
}
