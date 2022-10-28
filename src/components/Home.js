import {useEffect,useState} from 'react';
import{Link} from'react-router-dom';
import Recent from './Recent';
	function Home() {
	const [posts, setPosts] = useState([]);
    useEffect(()=>{
fetch('https://webeetec.com/itsharks24/blog/api/getposts.php').then(res => res.json()).then(r => {
setPosts(r)   
console.log(r);
});
    },[])
    return ( <>
    <section className="container mt-5">
		<div className="wrapper clear">
			
			<div className="clear"></div>
			<div className="contentLeft">
				<div className="blogPostListWrap">
                    {
                        posts.map((r) => {
                            return(
                        <div className="blogPostListItem clear" key={r.id}>
						<Link to={'/single/'+r.id} className="blogPostListImg">
							<img src={'https://webeetec.com/itsharks24/blog/admin/'+r.image}  alt="Francoise img"/>
						</Link>
						<div className="blogPostListText">
							<div className="blogPostListTime">{r.date}</div>
							<h3><Link to={'/single/'+r.id}>{r.title}</Link></h3>
							<p>{r.description}</p>
                            <br/>
                            <h5>Writer:{r.writer}</h5>
						</div>
					</div>
                            );
                        })
                    }
					
				
				</div>
				<div className="postPagination">
					<ul className="clear">
						<li className="newPosts"><Link to="/#">New posts</Link></li>
						<li className="olderPosts"><Link to="/#">Older posts</Link></li>
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
						<Link to="/#"><i className="fa fa-instagram"></i></Link>
						<span></span>
						<Link to="/#"><i className="fa fa-facebook"></i></Link>
						<span></span>
						<Link to="/#"><i className="fa fa-twitter"></i></Link>
						<span></span>
						<Link to="/#"><i className="fa fa-heart"></i></Link>
						<span></span>
						<Link to="/#"><i className="fa fa-pinterest"></i></Link>
						<span></span>
						<Link to="/#"><i className="fa fa-google-plus"></i></Link>
					</div>
				</div>
				
				<Recent/>
				
				
			</div>
		</div>
		<div className="clear"></div>
		
	</section>
    </> );
};

export default Home;
