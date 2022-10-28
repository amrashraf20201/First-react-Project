import{useParams}from'react-router-dom';
import {useEffect,useState} from 'react';
import{Link} from'react-router-dom';
import Recent from './Recent';
function Single() {
    var myparameters = useParams();
    var id = myparameters.id;
    console.log(id);
    const [posts , setPosts] = useState([]);
    useEffect(()=>{
fetch('https://webeetec.com/itsharks24/blog/api/singlepost.php?id='+ id ).then(res => res.json()).then(r => {
setPosts(r[0])  ; 
console.log(r);
});
    },[])

    return ( 
<section className="container">
		<div className="wrapper clear">
			<div className="contentLeft">
				
                                <div className="singlePostMeta">
                                <div className="singlePostTime">{posts.date}</div>
                                <h1>{posts.title}</h1>
                                <Link to={'/category/'+posts.category} className="singlePostCategory">{posts.category}</Link>
								<div className="singlePostImg">
                                <img src={'https://webeetec.com/itsharks24/blog/admin/'+posts.image}alt=''/>
								</div>
                            </div>	
				
				
				
				
				
				
			</div>


			<div className="sidebarRight">
				<div className="sidebar-widget">
					<h3>About us</h3>
					<div className="aboutMeWidget">
						<img src="/images/ourlogo.png" alt="Francoise img"/>
						<p>A training company specialized in teaching programming languages, networking and computer science to ensure that you get practical experience in the field of software.</p>
					</div>
				</div>
				
				
			<Recent/>				
				
			</div>
		</div>
		<div className="clear"></div>
		
	</section>

    );
}

export default Single;
