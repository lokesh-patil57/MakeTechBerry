import { useState } from "react";
import { registerProject } from "../../services/project.service";

const CompanyProject = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    projectTitle: "",
    projectDescription: "",
    techStack: "",
    budget: "",
    timeline: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerProject(formData);
      alert("Project submitted successfully ✅");
      setFormData({});
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Project Registration</h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        {Object.keys(formData).map((field) => (
          <input
            key={field}
            type="text"
            name={field}
            placeholder={field}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        ))}

        <button className="bg-indigo-600 text-white px-4 py-2 rounded">
          Submit Project
        </button>
      </form>
    </div>
  );
};

export default CompanyProject;
