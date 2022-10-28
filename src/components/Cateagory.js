import {useEffect,useState} from 'react';
import{Link , useParams} from'react-router-dom';
function Cateagory() {
    var myparams = useParams();
    var mycategory = myparams.category;
    console.log(mycategory);
    const [Cateagory, setCategory] = useState([]);
    useEffect(()=>{
fetch('https://webeetec.com/itsharks24/blog/api/getpostsbycategory.php?category='+mycategory).then(res => res.json()).then(r => {
setCategory(r)   
console.log(r);
});
    },[])
    return ( 
        <section className="container">
		<div className="wrapper clear">
			<div className="contentLeft">
				<div className="archivePageTitle"><span>Lifestyle</span></div>
				<div className="archivePostWrap">

					{
                        Cateagory.map((c)=>{
                            return(
                                <div className="archivePostItem" key={c.id}>
						<div className="archivePostTime">{c.date}</div>
						<h3 className="archivePostTitle"><Link to={'/single/'+c.id}>{c.title}</Link></h3>
						<Link to={'/single/'+c.id} className="archivePostCategory">{c.category}</Link>
						<Link to={'/single/'+c.id} className="archivePostImg">
							<img src={'https://webeetec.com/itsharks24/blog/admin/'+c.image} alt="Francoise img"/>
						</Link>
						<p>{c.description}</p>
						<div className="archivePostItemMeta">
							<a href="#" className="archivePostItemComments">124 Comments</a>
							<div className="archivePostItemShareLinks">
								<a href="#"><i className="fa fa-facebook"></i></a>
								<a href="#"><i className="fa fa-twitter"></i></a>
								<a href="#"><i className="fa fa-pinterest"></i></a>
							</div>
							<a href="single.html" className="archivePostReadMore">Read More</a>
						</div>
					</div>
                            )
                        })
                    }
					
				</div>
				<div className="postPagination">
					<ul className="clear">
						<li className="newPosts"><a href="#">New posts</a></li>
						<li className="olderPosts"><a href="#">Older posts</a></li>
					</ul>
				</div>
			</div>
			<div className="sidebarRight">
				<div className="sidebar-widget">
					<h3>About us</h3>
					<div className="aboutMeWidget">
						<img src="images/ourlogo.png" alt="Francoise img"/>
						<p>A training company specialized in teaching programming languages, networking and computer science to ensure that you get practical experience in the field of software.</p>
					</div>
				</div>
				<div className="sidebar-widget">
					<h3>follow me</h3>
					<div className="followMeSocialLinks">
						<a href="#"><i className="fa fa-instagram"></i></a>
						<span></span>
						<a href="#"><i className="fa fa-facebook"></i></a>
						<span></span>
						<a href="#"><i className="fa fa-twitter"></i></a>
						<span></span>
						<a href="#"><i className="fa fa-heart"></i></a>
						<span></span>
						<a href="#"><i className="fa fa-pinterest"></i></a>
						<span></span>
						<a href="#"><i className="fa fa-google-plus"></i></a>
					</div>
				</div>
				
				<div className="sidebar-widget">
					<h3>Recent post</h3>
					<div className="popularPostsWidget">
						<div className="popularPostsWidgetItem">
							<a href="#" className="popularPostsItemImg"><img src="images/content/popularPostImg.jpg" alt="Francoise img"/></a>
							<time datetime="2015-05-15">15.05.2015</time>
							<h4><a href="#">MY BEDSIDE TABLE: THE CURATOR</a></h4>
						</div>
						
					</div>
				</div>
				
				
			</div>
		</div>
		<div className="clear"></div>
		
	</section>
     );
}

export default Cateagory;