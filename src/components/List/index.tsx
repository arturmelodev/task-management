import React, { useState } from 'react'
import style from './List.module.scss'
import ListItem from './ListItem'

function List() {
    const [tasks, setTasks] = useState([
        {
            description: 'React',
            time: '02:00:00'
        }, {
            description: 'Javascript',
            time: '01:00:00'
        },
        {
            description: 'Typescript',
            time: '03:00:00'
        }
    ])
    return (
        <aside className={style.taskList}>
            <h2 onClick={() => {
                setTasks([...tasks, { description: 'Study React', time: '05:00:00'}])
            }}>Daily Tasks</h2>
            <ul>
                {tasks.map((task, index) => (
                    <ListItem
                        key={index}
                        description={task.description}
                        time={task.time}
                    //{...task}  <- sending all the properties that task has
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;