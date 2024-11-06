import { FormEvent, useRef } from "react";

export default function AddTodoForm({
  onSubmit,
}: {
  onSubmit: (text: string) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const text = formData.get("text") as string;
    onSubmit(text);

    // Clear input field so user can add another task quickly
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }
  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "0.5rem" }}>
      <input
        ref={inputRef}
        type="text"
        name="text"
        placeholder="Add task"
        required
        style={{ padding: "0.5rem" }}
      />
      <button type="submit">Add</button>
    </form>
  );
}
