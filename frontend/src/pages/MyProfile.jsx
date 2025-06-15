import React, { useState } from "react";
import { assets } from "../assets/assets";

const MyProfile = () => {
	const [userData, setUserData] = useState({
		name: "Edward Vincent",
		image: assets.profile_pic,
		email: "richardjames@gmail.com",
		phone: "+1 123 456 7890",
		address: {
			line1: "57th Cross, Richmond",
			line2: "Circle, Church Road, London",
		},
		gender: "Male",
		dob: "2000-01-20",
	});

	const [isEdit, setIsEdit] = useState(false);

	return (
		<div className="max-w-lg mx-auto flex flex-col gap-4 text-sm text-neutral-800">
			<img
				src={userData.image}
				alt="Profile"
				className="w-24 h-24 rounded-full"
			/>

			{isEdit ? (
				<input
					className="text-3xl font-medium max-w-60 mt-2 bg-gray-100 p-1 rounded"
					type="text"
					value={userData.name}
					onChange={(e) => handleInputChange("name", e.target.value)}
				/>
			) : (
				<p className="font-medium text-3xl mt-2">{userData.name}</p>
			)}

			<hr className="h-[1px] bg-zinc-300 border-none" />

			<div className="grid grid-cols-[1fr_3fr] gap-y-2 gap-x-4 mt-2">
				<p className="col-span-2 text-neutral-500 underline font-medium">Contact Information</p>

				<label>Email:</label>
				<p>{userData.email}</p>

				<label>Phone:</label>
				{isEdit ? (
					<input
						className="bg-gray-100 p-1 rounded"
						type="text"
						value={userData.phone}
						onChange={(e) => handleInputChange("phone", e.target.value)}
					/>
				) : (
					<p>{userData.phone}</p>
				)}
			</div>

			<hr className="h-[1px] bg-zinc-300 border-none" />

			<div className="grid grid-cols-[1fr_3fr] gap-y-2 gap-x-4 mt-2">
				<p className="col-span-2 text-neutral-500 underline font-medium">Address</p>

				<label>Line 1:</label>
				{isEdit ? (
					<input
						className="bg-gray-100 p-1 rounded"
						type="text"
						value={userData.address.line1}
						onChange={(e) => handleAddressChange("line1", e.target.value)}
					/>
				) : (
					<p>{userData.address.line1}</p>
				)}

				<label>Line 2:</label>
				{isEdit ? (
					<input
						className="bg-gray-100 p-1 rounded"
						type="text"
						value={userData.address.line2}
						onChange={(e) => handleAddressChange("line2", e.target.value)}
					/>
				) : (
					<p>{userData.address.line2}</p>
				)}
			</div>

			<hr className="h-[1px] bg-zinc-300 border-none" />

			<div className="grid grid-cols-[1fr_3fr] gap-y-2 gap-x-4 mt-2">
				<p className="col-span-2 text-neutral-500 underline font-medium">Basic Information</p>

				<label>Gender:</label>
				{isEdit ? (
					<select
						className="bg-gray-100 p-1 rounded"
						value={userData.gender}
						onChange={(e) => handleInputChange("gender", e.target.value)}
					>
						<option value="Male">Male</option>
						<option value="Female">Female</option>
						<option value="Other">Other</option>
					</select>
				) : (
					<p>{userData.gender}</p>
				)}

				<label>Birthday:</label>
				{isEdit ? (
					<input
						className="bg-gray-100 p-1 rounded"
						type="date"
						value={userData.dob}
						onChange={(e) => handleInputChange("dob", e.target.value)}
					/>
				) : (
					<p>{new Date(userData.dob).toLocaleDateString("en-GB")}</p>
				)}
			</div>

			<hr className="h-[1px] bg-zinc-300 border-none" />

			<div className="mt-4">
				{isEdit ? (
					<button
						onClick={() => setIsEdit(false)}
						className="px-4 py-2 bg-indigo-800 text-white rounded cursor-pointer"
					>
						Save Information
					</button>
				) : (
					<button
						onClick={() => setIsEdit(true)}
						className="px-4 py-2 bg-indigo-800 text-white rounded cursor-pointer"
					>
						Edit
					</button>
				)}
			</div>
		</div>
	);
};

export default MyProfile;
