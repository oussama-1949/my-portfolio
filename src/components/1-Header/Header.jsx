import { useEffect, useState } from 'react';
import './Header.css'

const Header = () => {

    const [theme, setTheme] = useState("dark");
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {

        if (theme === "light"){
        document.body.classList.remove("dark");

        document.body.classList.add("light");}

    }, [theme])

    return (

        <header className=' flex'>
            <button onClick={() => {
                setShowModal(true)
            }}
                className='menu icon-menu flex'></button>
            <div />
            <nav>

                <ul className='flex'>
                    <li><a href="">About</a></li>
                    <li><a href="">Articles</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">Speaking</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </nav>
            <button onClick={() => {

                localStorage.setItem("currentMode", "light" )

                setTheme(localStorage.getItem("currentMode"))
            }} className='mode flex'>
                <span className='icon-moon-o'></span>
            </button>

            {showModal && (

                <div className=" fixed">

                    <ul className="modal ">
                        <li>
                            <button className='icon-close' onClick={() => { setShowModal(false) }} />
                        </li>
                        <li ><a href="">About</a></li>
                        <li><a href="">Articles</a></li>
                        <li><a href="">Projects</a></li>
                        <li><a href="">Speaking</a></li>
                        <li><a href="">Uses</a></li>
                    </ul>

                </div>)}
        </header>
    );
}

export default Header;
