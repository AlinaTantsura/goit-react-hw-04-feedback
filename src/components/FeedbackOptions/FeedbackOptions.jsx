import { Button } from "./Button.styled"


export const FeedbackOptions = ({ options, onLeaveFeedback }) =>{
    return (       
            <div onClick={onLeaveFeedback}>
            {options.map((item) => {
                return <Button type="button" key={item}>{item}</Button>
            })}
            </div>
               
        )
}

