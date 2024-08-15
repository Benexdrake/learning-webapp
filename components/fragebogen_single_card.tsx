import styles from '@/styles/fragebogencard.module.css'
import { EventHandler, useState } from 'react';
import React, { useRef } from 'react';

export default function FragebogenSingleCard(params:any)
{
    let question = params.question;

    let [borderColor, setBorderColor] = useState('var(--color1)');

    const handleRadioClick = (value:any) => {

        let id = `radio-${question.id}-${i}`
        if(question.check[value])
        {
            setBorderColor('green')
        }
        else
            setBorderColor('red')
    }

    const handleDivClick = (event:React.MouseEvent<HTMLButtonElement>) => {
        console.log(event)
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
                    <label key={question.answer[i] +  question.id}>
                        <div className={styles.card_answer_block}  style={{backgroundColor:i%2?'var(--color2)':'var(--color1)'}} onClick={() => handleDivClick}>
                            <input 
                            id = {`radio-${question.id}-${i}`}
                            type='radio' 
                            name={question.id} 
                            onClick={() => handleRadioClick(i)} 
                            className={styles.checkmark}/>
                            <span className={styles.card_answer}>{x}</span>
                            <br />
                        </div>
                    </label>
                )
            })}
            </div>
        </div>
    )
}