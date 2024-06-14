import Link from "next/link";
import style from '@/styles/navbar.module.css'

export default function Navbar()
{
    return (
        <nav className={style.navbar_body}>
            <div className={style.navbar_links}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/fragebogen?id=1">Rechtliche Kompetenz</a></li>
                    <li><a href="/fragebogen?id=2">Betriebs-/ Finanzwirtschaftliche Kompetenz</a></li>
                </ul>
            </div>
    </nav>
    )
}