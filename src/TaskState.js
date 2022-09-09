import React from 'react'

export class TaskState {
    constructor() {
        this.task = []
        /*
        const [task, setTask] = useState()

        this.addTask = (title) => {
            setTask(prev => [...prev, {
                title: title,
                id: Date.now().toString()
            }])
        }

        this.allTasks = task.map(task => <TaskItem taskName={task.title} />)

         */
    }

    addTask(title) {
        this.task.push({
            title: title,
            id: Date.now().toString()
        })
    }

    getTask() {
        return this.task
    }



}