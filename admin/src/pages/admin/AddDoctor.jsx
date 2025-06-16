import React, { useContext, useState } from 'react';
import { assets } from '../../assets/assets';
import { toast } from 'react-toastify';
import { AdminContext } from '../../context/AdminContext';
import axios from 'axios';

const AddDoctor = () => {
  const [docImg, setDocImg] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [experience, setExperience] = useState('1 year');
  const [fees, setFees] = useState('');
  const [about, setAbout] = useState('');
  const [specialty, setSpecialty] = useState('General physician');
  const [degree, setDegree] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');

  const { backendUrl, aToken } = useContext(AdminContext);

  const handleImagePreview = (e) => {
    const file = e.target.files[0];
    if (file) setDocImg(file);
  };

  const onsubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('image', docImg);
      formData.append('name', name);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('experience', experience);
      formData.append('fees', fees ? Number(fees) : 0);
      formData.append('about', about);
      formData.append('speciality', specialty);
      formData.append('degree', degree);
      formData.append('address', JSON.stringify({ line1: address1, line2: address2 }));

      const { data } = await axios.post(
        `${backendUrl}/api/admin/add-doctor`,
        formData,
        { headers: { aToken } }
      );

      if (data.success) {
        toast.success(data.message);
        setDocImg(null);
        setName('');
        setEmail('');
        setPassword('');
        setExperience('1 year');
        setFees('');
        setAbout('');
        setSpecialty('General physician');
        setDegree('');
        setAddress1('');
        setAddress2('');
      } else {
        toast.error(data.message);
      }
    } catch (e) {
      console.error(e);
      toast.error(
        e.response?.data?.message || 'An error occurred while submitting.'
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 w-full">
      <form
        onSubmit={onsubmitHandler}
        className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8 space-y-8"
      >
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Add Doctor
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Image Upload */}
          <div className="flex flex-col items-center">
            <label
              htmlFor="doc-img"
              className="cursor-pointer w-32 h-32 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center overflow-hidden"
            >
              {docImg ? (
                <img
                  src={URL.createObjectURL(docImg)}
                  alt="Doctor"
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={assets.upload_area}
                  alt="Upload"
                  className="w-12 h-12 opacity-60"
                />
              )}
            </label>
            <input
              type="file"
              id="doc-img"
              className="hidden"
              onChange={handleImagePreview}
            />
            <p className="text-sm text-gray-500 mt-2">Upload doctor picture</p>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
            <InputField label="Doctor name" value={name} onChange={setName} />
            <SelectField
              label="Speciality"
              value={specialty}
              options={[
                'General physician',
                'Gynecologist',
                'Dermatologist',
                'Pediatricians',
                'Neurologist',
                'Gastroenterologist',
              ]}
              onChange={setSpecialty}
            />
            <InputField label="Doctor Email" type="email" value={email} onChange={setEmail} />
            <InputField label="Education" value={degree} onChange={setDegree} />
            <InputField label="Doctor Password" type="password" value={password} onChange={setPassword} />
            <InputField label="Address1" value={address1} onChange={setAddress1} />
            <SelectField
              label="Experience"
              value={experience}
              options={[...Array(10)].map((_, i) => `${i + 1} year`)}
              onChange={setExperience}
            />
            <InputField label="Address2" value={address2} onChange={setAddress2} />
            <InputField label="Fees" type="number" value={fees} onChange={setFees} />
          </div>
        </div>

        {/* About Me */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            About me
          </label>
          <textarea
            rows={5}
            placeholder="write about yourself"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            required
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white font-medium text-base rounded-md hover:bg-blue-500 transition duration-300"
          >
            Add doctor
          </button>
        </div>
      </form>
    </div>
  );
};

// Reusable input field component
const InputField = ({ label, type = 'text', value, onChange }) => (
  <div>
    <label className="block text-gray-700 font-medium mb-1">{label}</label>
    <input
      type={type}
      placeholder={label}
      className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:blue-purple-500"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

// Reusable select field component
const SelectField = ({ label, value, options, onChange }) => (
  <div>
    <label className="block text-gray-700 font-medium mb-1">{label}</label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {options.map((opt, i) => (
        <option key={i} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

export default AddDoctor;
