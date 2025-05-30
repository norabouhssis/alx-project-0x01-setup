import React, { useState } from "react";
import { UserData } from "@/interfaces";

interface UserModalProps {
  onClose: () => void;
  onSubmit: (user: UserData) => void;
}

const initialUser: UserData = {
  id: 0,
  name: "",
  username: "",
  email: "",
  address: {
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    geo: {
      lat: "",
      lng: "",
    },
  },
  phone: "",
  website: "",
  company: {
    name: "",
    catchPhrase: "",
    bs: "",
  },
};

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>(initialUser);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name.startsWith("address.")) {
      const key = name.split(".")[1];
      setUser((prev) => ({
        ...prev,
        address: { ...prev.address, [key]: value },
      }));
    } else if (name.startsWith("geo.")) {
      const key = name.split(".")[1];
      setUser((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          geo: { ...prev.address.geo, [key]: value },
        },
      }));
    } else if (name.startsWith("company.")) {
      const key = name.split(".")[1];
      setUser((prev) => ({
        ...prev,
        company: { ...prev.company, [key]: value },
      }));
    } else {
      setUser((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ ...user, id: Date.now() });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg">
        <h2 className="text-xl font-bold mb-4">Add New User</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            className="w-full border rounded px-3 py-2"
            name="name"
            placeholder="Name"
            value={user.name}
            onChange={handleChange}
            required
          />
          <input
            className="w-full border rounded px-3 py-2"
            name="username"
            placeholder="Username"
            value={user.username}
            onChange={handleChange}
            required
          />
          <input
            className="w-full border rounded px-3 py-2"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
            required
          />
          <input
            className="w-full border rounded px-3 py-2"
            name="phone"
            placeholder="Phone"
            value={user.phone}
            onChange={handleChange}
          />
          <input
            className="w-full border rounded px-3 py-2"
            name="website"
            placeholder="Website"
            value={user.website}
            onChange={handleChange}
          />
          <div className="grid grid-cols-2 gap-2">
            <input
              className="border rounded px-3 py-2"
              name="address.street"
              placeholder="Street"
              value={user.address.street}
              onChange={handleChange}
            />
            <input
              className="border rounded px-3 py-2"
              name="address.suite"
              placeholder="Suite"
              value={user.address.suite}
              onChange={handleChange}
            />
            <input
              className="border rounded px-3 py-2"
              name="address.city"
              placeholder="City"
              value={user.address.city}
              onChange={handleChange}
            />
            <input
              className="border rounded px-3 py-2"
              name="address.zipcode"
              placeholder="Zipcode"
              value={user.address.zipcode}
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <input
              className="border rounded px-3 py-2"
              name="geo.lat"
              placeholder="Geo Lat"
              value={user.address.geo.lat}
              onChange={handleChange}
            />
            <input
              className="border rounded px-3 py-2"
              name="geo.lng"
              placeholder="Geo Lng"
              value={user.address.geo.lng}
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-3 gap-2">
            <input
              className="border rounded px-3 py-2"
              name="company.name"
              placeholder="Company Name"
              value={user.company.name}
              onChange={handleChange}
            />
            <input
              className="border rounded px-3 py-2"
              name="company.catchPhrase"
              placeholder="Catch Phrase"
              value={user.company.catchPhrase}
              onChange={handleChange}
            />
            <input
              className="border rounded px-3 py-2"
              name="company.bs"
              placeholder="BS"
              value={user.company.bs}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              className="px-4 py-2 rounded bg-gray-300"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-blue-700 text-white"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;