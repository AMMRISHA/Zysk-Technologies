import { MdOutlineArrowOutward } from "react-icons/md";
import './style.css';
function Blog({blogimg , blogh5 , blogh3 ,blogp , bloglowerimg , blogh6 , blogh7})
{
  return <> 
   
            <div className="blog-box">
              <img src={blogimg}></img>
              <h5 className="bcolor bsize">{blogh5}</h5>
              <h3 className="bh3"> {blogh3} <span><MdOutlineArrowOutward /></span> 
              </h3>
              <p className="para">{blogp}</p>
              <div className="blog-lower-1">
                <img src={bloglowerimg}></img>
                <div className="blog-lower-11">
                  <h6 className="bh6">{blogh6}</h6>
                  <h7 className="para">{blogh7}</h7>
                </div>
              </div>
            
      </div>
   
    
  </>
}

export default Blog;