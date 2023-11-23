import React from 'react'
import "./RootLayOut.css";
import Navbar from '../Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'


const RootLayOut = () => {
		return (
		<div className="root-layout">
			<Navbar/>
			<main className="outlet">
				<Outlet/>
			</main>
			<Footer/>
		</div>
		)
}

export default RootLayOut
