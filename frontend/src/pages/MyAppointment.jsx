import React from "react";
import { doctors } from "../assets/assets";

const MyAppointment = () => {
	return (
		<div className="p-6 max-w-4xl mx-auto">
			<p className="text-2xl font-semibold mb-6">My Appointments</p>

			<div className="grid gap-6">
				{doctors.slice(0, 2).map((item, index) => (
					<div
						key={index}
						className="flex gap-6 border rounded-xl p-4 shadow-md items-start bg-white"
					>
						{/* Doctor Image */}
						<div className="w-24 h-24 flex-shrink-0">
							<img
								src={item.image}
								alt={item.name}
								className="w-full h-full object-cover rounded-full"
							/>
						</div>

						{/* Doctor Info */}
						<div className="flex-1">
							<p className="text-lg font-medium">{item.name}</p>
							<p className="text-gray-600">{item.speciality}</p>
							<p className="mt-2 text-sm text-gray-700 font-semibold">
								Address:
							</p>
							<p className="text-sm">{item.address.line1}</p>
							<p className="text-sm">{item.address.line2}</p>
							<p className="mt-2 text-sm font-medium text-gray-700">
								Date & Time:{" "}
								<span className="font-normal">25, July, 2025 | 8:30 PM</span>
							</p>
						</div>

						{/* Actions */}
						<div className="flex flex-col gap-2 mt-4">
							<button className="text-green-700 border-2 border-green-700 px-2 py-1 font-semibold hover:bg-green-100 rounded-sm">
								Pay Online
							</button>
							<button className="text-red-700 border-2 border-red-700 px-4 py-1 font-semibold hover:bg-red-100 rounded-sm">
								Cancel Appointment
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default MyAppointment;
