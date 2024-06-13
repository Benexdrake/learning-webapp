import Link from "next/link";
import style from '@/styles/navbar.module.css'

export default function Navbar()
{
    return (
        <nav className={style.navbar_body}>
            <div className={style.navbar_links}>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/fragebogen?id=1">Recht</Link></li>
                </ul>
            </div>
    </nav>
    )
}