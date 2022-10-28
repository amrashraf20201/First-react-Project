import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
function Recent() {
const [recentPosts , setRecentPosts] = useState([]);
	
    useEffect(()=>{
fetch('https://webeetec.com/itsharks24/blog/api/getposts.php').then(res => res.json()).then(recent => {
setRecentPosts(recent[0])   
console.log(recent);
});
    },[])
    return ( 
    <>
				
				<div className="sidebar-widget">
					<h3>Recent post</h3>
					<div className="popularPostsWidget">
						<div className="popularPostsWidgetItem">
							< Link to={"/single/"+recentPosts.id} className="popularPostsItemImg"><img src={'https://webeetec.com/itsharks24/blog/admin/'+recentPosts.image} alt="Francoise img"/></Link>
							<time datetime="2015-05-15">{recentPosts.date}</time>
							<h4><Link to={'/single/'+recentPosts.id}>{recentPosts.title}</Link></h4>
						</div>
						
					</div>
				</div>
				
				
		<div className="clear"></div>
		
    </> );};
	export default Recent;
