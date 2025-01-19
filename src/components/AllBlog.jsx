import Blog from "./Blog";
import './style.css';
function AllBlog({Blogseries})
{
  return <>
      <div className="blog">
    <div className="blog-upper">
              <div className="blog-upper-1">
                <h5 className="bcolor bsize">Our blog</h5>
                <button class="upperbtn221 dis radius " >View all posts </button>
              </div>
              <h2 style={{fontSize: "clamp(18px, 2vw, 20px)"}}> Latest blog posts</h2>
              <p style={{fontSize: "11px"}} >Tool and strategies modern teams need to help their companies grow.</p>
        </div>
        <div className="blog-lower">
    {Blogseries.map(AllBlogDetails=>

    <Blog blogimg={AllBlogDetails.link} blogh5={AllBlogDetails. heading5} blogh3={AllBlogDetails.heading3} blogp={AllBlogDetails. para} bloglowerimg={AllBlogDetails.blogLower1link} blogh6={AllBlogDetails.heading6}  blogh7={AllBlogDetails.heading7}  ></Blog>
    )}
    </div>
    <button class="upperbtn21 disafter radius " style={{backgroundColor:"rgb(230, 63, 58)" , color:"white" , border:"none" , width:"80%"}}>View all posts </button>
    </div>
  </>
}

export default AllBlog;