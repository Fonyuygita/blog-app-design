import React from 'react'

const Menu = () => {
    const posts=[

        {
          id:1,
          title:"ART AND CULTURE",
          desc:"Lorem ipsum dolor sit amet consectetur  esse eum possimus doloribus!",
          img:"https://i.pinimg.com/736x/f4/1b/8b/f41b8b437c64e211e2fcecb93d6c455e.jpg"
      
        },
      
        {
          id:2,
          title:"SCIENCE RECENT",
          desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maiores ex veniam. Aliquid esse eum possimus doloribus!",
          img:"https://thumbs.dreamstime.com/b/medical-science-scientific-research-abstract-backdrop-62195483.jpg"
      
        },
      
        {
          id:3,
          title:"TECHNOLOGY RECENT",
          desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. ntur iste hic, perferendis ex veniam. Aliquid esse eum possimus doloribus!",
          img:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/201810/stockvault-person-studying-and-learning---knowledge-concept178241_0.jpeg?size=690:388"
      
        },
      
        
        {
          id:4,
          title:"CINEMA RECENT",
          desc:"Lorem ipsum dolor sit amet consectetur adipisicing veniam. Aliquid esse eum possimus doloribus!",
          img:"https://img.freepik.com/premium-vector/cinema-movie-background-popcorn-filmstrip-clapboard-tickets-movie-time-background_41737-248.jpg"
      
        },
    ]      

  return (
    <div className="menu">
    <h1>Other posts you may like</h1>

    {posts.map(post=>{
        return(
        <div className="post" key={post.id}>
        <img src={post.img} alt="" />
        <h2>{post.desc}</h2>
        <button>Read More</button>
        
        </div>
        )
    })}
    
    </div>
  )
}

export default Menu