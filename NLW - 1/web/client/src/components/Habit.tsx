interface HabitsProps {
    completed: number
}

const Habit = (props: HabitsProps) => {
    
    return (
        <div>
            <h1>{props.completed}</h1>
        </div>
    )
}

export default Habit