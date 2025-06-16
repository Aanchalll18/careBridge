import React, { useContext } from "react";
import Login from "./pages/Login.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AdminContext } from "./context/AdminContext.jsx";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/sidebar.jsx";
import Dashboard from "./pages/admin/Dashboard.jsx";
import Appointments from "./pages/admin/Appointments.jsx";
import AddDoctor from "./pages/admin/AddDoctor.jsx";
import Doctorslist from "./pages/admin/Doctorslist.jsx";
import { Routes,Route } from "react-router-dom";

const App = () => {
	const { aToken } = useContext(AdminContext);

	return aToken ? (
		<div className="bg-[#F8F9FD]">
			<ToastContainer />
			<Navbar />
			<div className="flex items-start h-full">
				<Sidebar />
				<Routes>
					<Route path="/" element={<></>} />
					<Route path="/admin-dashboard" element={<Dashboard />} />
					<Route path="/all-appointment" element={<Appointments />} />
					<Route path="/add-doctor" element={<AddDoctor />} />
					<Route path="/doctor-list" element={<Doctorslist />} />
					<Route />
				</Routes>
			</div>
		</div>
	) : (
		<>
			<Login />
			<ToastContainer />
		</>
	);
};

export default App;
