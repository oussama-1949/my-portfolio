import { useState } from 'react'
import './Main.css'
import { myProjects } from './myProjects';



export default function Main() {
  const [currentActive, setCurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

 

  return (

    <main className='flex'>

      <section className=' flex left-section ' >
      <button onClick={() => {
          setCurrentActive("all")
          setArr(myProjects)
          const newArray = myProjects.filter(((item) => {

            const ZZZ = item.category.filter((myItem) => { return myItem === "all" })
            return ZZZ[0] === "all";          

            }));
          setArr(newArray);

        }} className={currentActive === "all" ? "active" : null} >All Projects</button>
        <button onClick={() => {
          setCurrentActive("css");
          const newArray = myProjects.filter(((item) => {

            const ZZZ = item.category.filter((myItem) => { return myItem === "css" })
            return ZZZ[0] === "css";          

            }));
          setArr(newArray);

        }} className={currentActive === "css" ? "active" : null} >Html & Css</button>
         <button onClick={() => {
          setCurrentActive("javascript");
          const newArray = myProjects.filter(((item) => {

            const ZZZ = item.category.filter((myItem) => { return myItem === "javascript" })
            return ZZZ[0] === "javascript";          

            }));
          setArr(newArray);

        }} className={currentActive === "javascript" ? "active" : null} >JavaScript</button>
         <button onClick={() => {
          setCurrentActive("react");
          const newArray = myProjects.filter(((item) => {

            const ZZZ = item.category.filter((myItem) => { return myItem === "react" })
            return ZZZ[0] === "react";          

            }));
          setArr(newArray);

        }} className={currentActive === "react" ? "active" : null} >React & MUI</button>















        {/* <button>Javascript</button>
        <button>React</button>
        <button>Node & Express</button> */}
      </section>
      <section className='  flex right-section '>

        {arr.map((item) => {
          return (

            <article key={item.imgPath} className='card'>
              <img width={266} src={item.imgPath}></img>
              <div style={{ width: "266px" }} className=' box'>
                <h1 className='title' >
                  {item.projectTitle}</h1>
                <p className='sub-title' >Lorem Ipsum is a dummy text random generator. You choose the number of paragraphs, words or lists. You then get a random text that you can then freely use it in your layout.</p>
                <div className='flex icons' >
                  <div className='flex'>
                    <div className='' ></div>
                    <div className='icon-github'></div>
                  </div>
                  <a className='link flex' href=''>
                    more
                    <span className='icon-arrow-right' ></span>
                  </a>
                </div>
              </div>


            </article>
          )

        })}
      </section>



    </main>
  )
}
