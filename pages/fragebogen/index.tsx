import FragebogenSingleCard from "@/components/fragebogen_single_card";
import FragebogenMultiCard from "@/components/fragebogen_multi_card";
import styles from '@/styles/fragebogen.module.css'


export default function Fragebogen(params:any) {
  const questions = params.questions;


  const handleQuestions = () =>
  {
    if(questions.type === "single")
      {
        return (
          questions.questions.map((x:any) => {
            return (<FragebogenSingleCard question={x} key={x.id}/>)
          })
        )
      }
    else
    {
      return (
        questions.questions.map((x:any) => {
          return (<FragebogenMultiCard question={x} key={x.id}/>)
        })
      )
    }
  }

  
  return (
    <div>
      <h1 className={styles.title}>{questions.thema}</h1>
      <div>
        
        {handleQuestions()}
        
      
      </div>
    </div>
  );
}

export async function getServerSideProps(param:any)
{
  const proto = param.req.headers['x-forwarded-proto'];
  const id = param.query.id;
  let questions = [];


  if(id != undefined)
  {
    questions = await fetch(proto+'://'+param.req.headers.host+'/api/fragebogen?id='+id).then(x => { return x.json() })
  }
  else
    questions = await fetch(proto+'://'+param.req.headers.host+'/api/fragebogen?id=1').then(x => { return x.json() })

    let q = questions.questions.sort((a:any, b:any) => 0.5 - Math.random());
    questions.questions = q;

  return {
    props: {
      questions
    }
  }
}