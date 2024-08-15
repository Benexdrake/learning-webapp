import styles from '@/styles/fragebogencard.module.css'
import { useState } from 'react';

export default function FragebogenSingleCard(params:any)
{
    let question = params.question;

    let [borderColor, setBorderColor] = useState('var(--color1)');

    const handleClick = (value:any) => {

        if(question.check[value.target.value])
        {
            setBorderColor('green')
        }
        else
            setBorderColor('red')
    }

    let i = 0
    question.check.map((x:any) => {
        if (x == true)
            i++
    })

    let multi = " Richtige Antworten: " + i


    return (
        <div className={styles.card} style={{borderColor:borderColor}}>
            <div>            
            <h3 className={styles.card_title}>
                {question.question + multi}
            </h3>
            {question.answer.map((x:any, i:any) => {
                return (
                    <div className={styles.card_answer_block} key={question.answer[i] +  question.id} style={{backgroundColor:i%2?'var(--color2)':'var(--color1)'}}>
                        <label>
                            <input type='radio' name={question.id} onClick={handleClick} value={i} className={styles.checkmark}/>
                            <span className={styles.card_answer}>{x}</span>
                            <br />
                        </label>
                    </div>
                )
            })}
            </div>
        </div>
    )
}