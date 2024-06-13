import FragebogenCard from "@/components/fragebogen_card";
import styles from '@/styles/fragebogen.module.css'


export default function Fragebogen(params:any) {
  const questions = params.questions;
  
  return (
    <div>
      <h1 className={styles.title}>{questions.thema}</h1>
      <div>
        {questions.questions.map((x:any) => {
          return (<FragebogenCard question={x}/>)
        })}
      </div>
    </div>
  );
}

export async function getServerSideProps(param:any)
{
  const id = param.query.id;
  let questions = [];

  if(id != undefined)
    questions = await fetch('https://learning-opal.vercel.app/api/fragebogen?id='+id).then(x => { return x.json() })
  else
    questions = await fetch('https://learning-opal.vercel.app/api/fragebogen?id=1').then(x => { return x.json() })


  return {
    props: {
      questions
    }
  }
}