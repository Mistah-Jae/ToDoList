export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  // FYI can abstract out onChange and onClick functions so you have control over the event object
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={e => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button
        onClick={() => deleteTodo(id)} className="btn btn-danger">
        Delete
      </button>
    </li>
  )
}
