import{Link} from'react-router-dom';
import {useState , useEffect} from 'react';
function NavBar() {
	const [category , setCategory] = useState([]);
	useEffect(()=>{
		fetch('https://webeetec.com/itsharks24/blog/api/getcategory.php')
		.then(res=>res.json())
		.then((r)=>{
			setCategory(r);
			console.log(r)
		})
	},[])
    return ( 
        <div>
 <header id="header">
		<div className="siteHeader">
			<div className="wrapper clear">
				<Link to="/" className="mobile-logo">
				</Link>
				<ul className="mainMenu clear">
					<li>
						<Link to="/Home">home</Link >
					</li>
					<li>
						<Link to="#">Category</Link>
						<ul>
							{
								category.map((c)=>{
									return(

										<li><Link to={'/category/'+c.name} key={c.id}>{c.name}</Link></li>
									)
								})
							}
						</ul>
					</li>
					
				</ul>
				<div className="pull-right clear">
					<div className="headerSocialLinks clear">
						<Link to="#"><i className="fa fa-facebook"></i></Link>
						<Link to="#"><i className="fa fa-instagram"></i></Link>
						<Link to="#"><i className="fa fa-twitter"></i></Link>
						<Link to="#"><i className="fa fa-heart"></i></Link>
						<Link to="#"><i className="fa fa-pinterest"></i></Link>
						<Link to="#"><i className="fa fa-google-plus"></i></Link>
					</div>
					<div className="searchIcon"></div>
				</div>
				<span className="showMobileMenu">
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</span>
			</div>	
		</div>
		<Link to="/#" className="logo">IT SHARKS 25</Link>
	</header> 
	<br/>
        </div>
        
     );
}

export default NavBar;