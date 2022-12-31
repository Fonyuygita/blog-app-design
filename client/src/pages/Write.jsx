import React from 'react'
import { useState } from 'react';

// let us import our react quil
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
  const [value, setValue]=useState("");
  console.log(value)
  return (
    <div className="write">
    <div className="content">
    <input type="text" placeholder='title' />
    <div className="editorContainer">
    <ReactQuill className='write' theme='snow' value={value} onChange={setValue} />


    </div>
    </div>
    <div className="menu">
    <div className="item">
    <h1>Publish</h1>
    <span>
    <b>Status</b>Draft
    </span>

    <span>
    <b>Visibility</b> Public
    </span>
    <input type="file" name=" " id="" />
    <label htmlFor="file">Upload Image</label>
<div className="buttons">
<button>Save as draft</button>
<button>Update</button>

</div>

    </div>
    <div className="item">
    <h1>Category</h1>

    <input type="radio" name="cat" id="art" value="art" />
    <label htmlFor="art">Art</label>

    <input type="radio" name="cat" id="art" value="science" />
    <label htmlFor="science">Art</label>

    <input type="radio" name="cat" id="art" value="art" />
    <label htmlFor="art">Science</label>

    <input type="radio" name="cat" id="technology" value="technology" />
    <label htmlFor="technology">Technology</label>

    <input type="radio" name="cat" id="cinema" value="cinema" />
    <label htmlFor="cinnema">Cinema</label>

    <input type="radio" name="cat" id="food" value="food" />
    <label htmlFor="food">Food</label>
    </div>

    </div>
    
    </div>
  )
}

export default Write