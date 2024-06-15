import styles from '@/styles/fragebogencard.module.css'
import { useState } from 'react';

export default function FragebogenCard(params:any)
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

    return (
        <div className={styles.card} style={{borderColor:borderColor}}>
            <div>            
            <h3 className={styles.card_title}>
                {question.question}
            </h3>
            {question.answer.map((x:any, i:any) => {
                return (
                    <div className={styles.card_answer_block} key={question.answer[i] +  question.id} style={{backgroundColor:i%2?'var(--color4)':'var(--color3)'}}>
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