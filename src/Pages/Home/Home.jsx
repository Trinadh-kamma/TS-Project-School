import React from 'react';
import {motion} from "framer-motion";
import "./Home.css";
import boy from "../../assets/little-boy.jpg";
import bag from "../../assets/school-bag.png";
import highlighter from "../../assets/formula.png";
import rocket from "../../assets/rocket.png"
import { Link } from 'react-router-dom';




const Home = () => {
    return (
    <main className="home">
        <section className="home-container">
            <motion.div
			className="home-container_info"
			initial={{opacity : 0}}
			animate={{opacity:1}}
			transition={{delay:0.5}}
			>
                <div 
				className="info">
                    <motion.h1 className="info-title"
					initial={{y:"-100vh"}}
					animate={{y : 0}}
					transition={{delay:1, type:"spring", stiffness : 20}}
					>Find Your <br/>
                        <span className="span1">School <span className="span2">here</span></span>
                    </motion.h1>
					<p
					>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime blanditiis voluptatum excepturi tenetur quae accusamus sapiente quo suscipit rerum quisquam magni explicabo quibusdam ut voluptates, molestiae veniam. Nam, blanditiis illum?
					Optio modi inventore nulla cumque facilis animi unde incidunt dolores.</p>
					<div className="button-container">
						<motion.button 
						className="button1"
						initial={{y:"-100vh"}}
						animate={{y : 0}}
						transition={{delay:2,type:"spring", stiffness : 300}}>Guidelines</motion.button>
						<motion.button 
						className="button2"
						initial={{y:"-100vh"}}
						animate={{y : 0}}
						transition={{delay:2,type:"spring", stiffness : 300}}>Classroom</motion.button>
					</div>
                </div>
				<div className="school-info_images">
					<img src={bag} alt="school-bag" className="bag"/>
					<img src={highlighter} alt="highlighter" className="highlighter"/>
				</div>
            </motion.div>

            <motion.div
			className="circle"
			initial={{opacity:0}}
			animate={{opacity:1}}
			transition={{delay:1}}>
                <img src={boy} alt="school-kid"/>
            </motion.div>
        </section>

		<section className="findout-section">
			<div>
				<h1>
					What is School Finder
				</h1>
				<p>SchoolFinder is a social EdTech enterprise established in  INDIA, to provide better <br/> opportunities for students to get admit in schools during mid-terms. Through matching students-teachers worldwide.</p>
				<Link to="/about">
					<button>Find out more</button>
				</Link>
			</div>
		</section>

		<section className="working">
			<div>
				 
			</div>
		</section>
		<section className="about">
			<h1>What We Do</h1>

		</section>

    </main>
    )
}

export default Home
