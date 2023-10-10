import "./style.css";

const Tasks = (props) => (
    <ul className="tasks__item">
        {props.tasks.map(task => (
            <li
                key={task.id}
                className={`${props.hideDone
                        && task.done ? "task__hidden"
                        : "task__item"}`}
            >
                <button className="tasks__button tasks__content--done">
                    {task.done ? "✔" : ""}
                </button>
                <span className={`tasks__content ${task.done ? "tasks__decoration" : ""}`}>
                    {task.content}
                </span>
                <button className="tasks__buttonRemove">🗑</button>
            </li>
        ))}
    </ul >
);
export default Tasks;