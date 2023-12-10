import { Button } from "./Button.styled"


export const FeedbackOptions = ({ options, onLeaveFeedback }) =>{
    return (       
            <div onClick={onLeaveFeedback}>
            {options.map((item) => {
                const arr = item.split('');
                arr[0] = arr[0].toUpperCase();
                arr.join('');
                return <Button type="button" key={item}>{arr}</Button>
            })}
            </div>
               
        )
}

