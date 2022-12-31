import React from 'react'
import { Link } from 'react-router-dom'

// import our icons


import edit from "../assets/edit.png"
import delet from "../assets/delete.png"
import Menu from '../component/Menu'


const Single = () => {
  return (
    <div className="single">
    
    <div className="content">
    <img src="https://thumbs.dreamstime.com/b/medical-science-scientific-research-abstract-backdrop-62195483.jpg" alt="" />

    <div className="user">
    <div className="image">
    <img src="https://i.pinimg.com/736x/f4/1b/8b/f41b8b437c64e211e2fcecb93d6c455e.jpg" alt="" />
    </div>

    <div className="info">
    <span>Fonyuy Jude Fomonyuy</span>
    <p>Posted 2min Ago</p>
    </div>
<div className="edit">
<Link to={`/write?edit=2`}>
<img src={edit} alt="" />
</Link>
<img src={delet} alt="" />
</div>

    </div>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, amet. Dolore nostrum !</h1>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, reprehenderit ducimus! Explicabo perspiciatis rem voluptatem similique quia ab illum dolor repudiandae. Quas soluta omnis repellendus ex illo reiciendis enim sunt nisi  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas fugiat pariatur ea, laudantium dolores quos maiores, nesciunt rem officiis illo sequi provident sapiente..
    adipisicing elit. Fugit, reprehenderit ducimus! Explicabo perspiciatis rem voluptatem similique quia ab illum dolor repudiandae. Quas soluta omnis repellendus ex illo reiciendis enim sunt nisi  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas fugiat pariatur ea, laudantium dolores quos maiores, nesciunt rem officiis illo sequi provident
    </p>
    
    </div>
    <div className="menu">
    <Menu/>
    </div>
    </div>
  )
}

export default Single