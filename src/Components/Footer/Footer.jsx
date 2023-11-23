import { Link } from "react-router-dom";
import "./Footer.css";

// import store from "../../img/shop.png";
// import home from "../../img/home.png";
// import user from "../../img/user.png";
// import bag from "../../img/shopping-bag.png";
// import favourite from "../../img/favourite.png";
// import payment from "../../img/payment.png"
// import wall from "../../assets/wall.jpg"

const Footer = () => {
		return (
		<>
			{/* Footer for mobile devices */}
		
				<footer className="mobile-footer-container">
					<div className="footer">
						<Link to="/" className="footer-icons">
							{/* <img src={home} alt="home" className="footer-img"/> */}
							<h4>Home</h4>
						</Link>
						<Link to="/" className="footer-icons">
							{/* <img src={store} alt="store" className="footer-img"/> */}
							<h4>Stores</h4>
						</Link>
						<Link to="/" className="footer-icons">
							{/* <img src={user} alt="user" className="footer-img"/> */}
							<h4>Account</h4>
						</Link>
						<Link to="/" className="footer-icons">
							{/* <img src={favourite} alt="favourite" className="footer-img"/> */}
							<h4>Wishlist</h4>
						</Link>
						<Link to="/" className="footer-icons">
							{/* <img src={bag} alt="bag" className="footer-img"/> */}
							<h4>Bag</h4>
						</Link>              
					</div>
				</footer>

			{/* Footer for large and extra large devices */}
				<footer className="main-footer-container">
					<section className="main-footer">
						<div className="each-section-details">
							<h3>Moonix</h3>
							<ul className="list-items">
								<li>Who We Are </li>
								<li>Join Our Team</li>
								<li>Terms & Conditions</li>
								<li>We Respect Your Privacy</li>
								<li>Fees & Payments</li>
								<li>Return & Refunds Policy</li>
								<li>Promotions</li>
								<li>Terms & Conditions</li>
								<li>Join Our Team</li>
							</ul>
						</div>

						<div className="each-section-details">
							<h3>Help</h3>
							<ul className="list-items">
								<li>Track Your Order </li>
								<li>Frequently Asked Questions</li>
								<li>Returns</li>
								<li>Cancellations</li>
								<li>Payments</li>
								<li>Customer Care</li>
								<li>How Do I Redeem My Coupon</li>
								<li>Terms & Conditions</li>
								<li>Join Our Team</li>
							</ul>
						</div>

						<div className="each-section-details">
							<h3>Shop By</h3>
							<ul className="list-items">
								<li>Men</li>
								<li>Women</li>
								<li>Kids</li>
								<li>Accessories</li>
								<li>Stores</li>
								<li>New Arrivals</li>
								<li>Brand Directory</li>
								<li>Home</li>
								<li>Collections</li>
							</ul>              
						</div>

						<div className="each-section-details">
							<h3>Follow Us</h3>
							<ul className="list-items">
								<li>Facebook</li>
								<li>Instagram</li>
								<li>Twitter</li>
							</ul>
						</div>
					</section>
					<hr className="hr-line"/>
					<section className="footer_payment-details">
						<div >
							<h1>MOONIX</h1>
							<p>© 2023 www.moonix.com. All rights reserved.</p>
						</div>
						{/* <img src={payment} alt="payment"/> */}
					</section>
				</footer>
			</>
)
}

export default Footer
