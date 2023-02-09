import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
const posts=[

  {
    id:1,
    title:"ART AND CULTURE",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maiores laudantium molestiae doloribus fugiat, vero ullam amet aperiam dolorum alias dolorem est suscipit consequuntur iste hic, perferendis ex veniam. Aliquid esse eum possimus doloribus!",
    img:"https://i.pinimg.com/736x/f4/1b/8b/f41b8b437c64e211e2fcecb93d6c455e.jpg"

  },

  {
    id:2,
    title:"SCIENCE RECENT",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maiores laudantium molestiae doloribus fugiat, vero ullam amet aperiam dolorum alias dolorem est suscipit consequuntur iste hic, perferendis ex veniam. Aliquid esse eum possimus doloribus!",
    img:"https://thumbs.dreamstime.com/b/medical-science-scientific-research-abstract-backdrop-62195483.jpg"

  },

  {
    id:3,
    title:"TECHNOLOGY RECENT",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maiores laudantium molestiae doloribus fugiat, vero ullam amet aperiam dolorum alias dolorem est suscipit consequuntur iste hic, perferendis ex veniam. Aliquid esse eum possimus doloribus!",
    img:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/201810/stockvault-person-studying-and-learning---knowledge-concept178241_0.jpeg?size=690:388"

  },

  
  {
    id:4,
    title:"CINEMA RECENT",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maiores laudantium molestiae doloribus fugiat, vero ullam amet aperiam dolorum alias dolorem est suscipit consequuntur iste hic, perferendis ex veniam. Aliquid esse eum possimus doloribus!",
    img:"https://img.freepik.com/premium-vector/cinema-movie-background-popcorn-filmstrip-clapboard-tickets-movie-time-background_41737-248.jpg"

  },

  {
    id:5,
    title:"DESIGN RECENT",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maiores laudantium molestiae doloribus fugiat, vero ullam amet aperiam dolorum alias dolorem est suscipit consequuntur iste hic, perferendis ex veniam. Aliquid esse eum possimus doloribus!",
    img:"https://img.freepik.com/photos-premium/conception-mot-ecrit-au-dessus-formes-3d-geometriques-colorees_2227-1663.jpg?w=2000"

  },

  {
    id:6,
    title:"FOOD AND HEALTH",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maiores laudantium molestiae doloribus fugiat, vero ullam amet aperiam dolorum alias dolorem est suscipit consequuntur iste hic, perferendis ex veniam. Aliquid esse eum possimus doloribus!",
    img:"https://www.cbc.ca/natureofthings/content/legacy/foodforthought_1920.jpg"

  }



  
]

  return (
   <div className="home">
   
   <div className="posts">
  
   {posts.map(post=>{
    return(
    <div className="post" key={post.id}>
    <div className="img-container">
    
    <img src={post.img} alt="img" className='img'/>
    </div>

    <div className="content">
    
    <Link to={`/post/${post.id}`} className="link">
    <h1>{post.title}</h1>
    <p>{post.desc}</p>
    <button>Read More</button>
    </Link>
    </div>
    </div>
    )
   
   })}
   </div>
   </div>
  )
}

export default Home

