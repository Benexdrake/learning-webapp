import style from '@/styles/navbar.module.css'
import { useRouter } from 'next/navigation'

export default function Navbar() {
    const myRouter = useRouter();

    const handleChoise = (e: any) => {
        myRouter.push('/fragebogen?id=' + e.target.value)
    }


    return (
        <nav className={style.navbar_body}>
            <div className={style.navbar_links}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li>
                        <select name="questions" className="questions" onChange={handleChoise}>
                            <option value="" defaultValue={''} hidden>Auswahl Fragebögen</option>
                            <optgroup label="Single Choice">
                                <option value="1">Rechtliche Konsequenz</option>
                                <option value="2">Betriebs-/ Finanzwirtschaftliche Konsequenz</option>
                                <option value="3">Übungsfragen Strafrecht</option>
                            </optgroup>
                            <optgroup label="Multi Choice">
                                <option value="3">Multi Test</option>
                            </optgroup>
                        </select>
                    </li>
                </ul>
            </div>
        </nav>
    )
}