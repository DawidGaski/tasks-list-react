import "./style.css";

const Tasks = (props) => (
    <ul className="section__ul">
        {props.tasks.map(task => (
            <li className={`${props.hideDoneTasks && task.done ? "task__hidden" : "task__item"}`}
            >
                <button className="form__buttonDone form__buttonDone--click">
                    {task.done ? "✔" : ""}
                </button>
                <span className={`form__text ${task.done ? " task__decoration " : ""}`}>
                    {task.content}
                </span>
                <button className="form__buttonRemove">🗑</button>
            </li>
        ))}
    </ul >
);
export default Tasks;