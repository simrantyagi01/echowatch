import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "Citizen",
    city: "",
    organization: "",
    institutionType: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Hackathon shortcut: store user locally
    localStorage.setItem("echowatchUser", JSON.stringify(formData));

    alert("Registration successful!");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-slate-900 text-white">
      <div className="w-full max-w-md bg-slate-800 p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-2">EchoWatch</h2>
        <p className="text-center text-sm text-slate-400 mb-6">
          Smart Environmental Monitoring System
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-slate-700 focus:outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-slate-700 focus:outline-none"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-slate-700 focus:outline-none"
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-slate-700 focus:outline-none"
          />

          <select
            name="role"
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-slate-700 focus:outline-none"
          >
            <option>Citizen</option>
            <option>City Authority</option>
            <option>Institution Admin</option>
          </select>

          <input
            type="text"
            name="city"
            placeholder="City"
            required
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-slate-700 focus:outline-none"
          />

          {formData.role === "City Authority" && (
            <input
              type="text"
              name="organization"
              placeholder="Department Name"
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-slate-700 focus:outline-none"
            />
          )}

          {formData.role === "Institution Admin" && (
            <>
              <input
                type="text"
                name="organization"
                placeholder="Institution Name"
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-slate-700 focus:outline-none"
              />
              <select
                name="institutionType"
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-slate-700 focus:outline-none"
              >
                <option value="">Institution Type</option>
                <option>School</option>
                <option>Hospital</option>
                <option>Campus</option>
              </select>
            </>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded font-semibold"
          >
            Create Account
          </button>
        </form>

        <p className="text-sm text-center mt-4 text-slate-400">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-400 cursor-pointer"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}
