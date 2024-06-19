import styles from '@/styles/fragebogenMulticard.module.css'
import { useState } from 'react';

export default function FragebogenMultiCard(params:any)
{
    let question = params.question;

    
    const handleClick = (e:any) => {
        
        let style = e.target.parentNode.style;

        if(question.check[e.target.value])
            style.color = 'green';
        else
            style.color = 'red';
    }

    return (
        <div className={styles.card}>
            <div>            
            <h3 className={styles.card_title}>
                {question.question}
            </h3>
            {question.answer.map((x:any, i:any) => {
                return (
                    <div className={styles.card_answer_block} key={question.answer[i] +  question.id} style={{backgroundColor:i%2?'var(--color4)':'var(--color3)'}}>
                        <label>
                            <input type='checkbox' name={question.id} onClick={handleClick} value={i} className={styles.checkmark}/>
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