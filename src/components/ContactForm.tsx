import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    title: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: send formData to backend/email service
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <input
          type="text"
          name="name"
          autoComplete="name"
          placeholder="Who’s sending the signal? (full name)"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-white dark:bg-slate-800 dark:text-white"
        />
        <input
          type="email"
          name="email"
          autoComplete="email"
          placeholder="Where should I reply? (email)"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-white dark:bg-slate-800 dark:text-white"
        />
        <input
          type="tel"
          name="phone"
          autoComplete="tel"
          placeholder="Carrier pigeon backup? (phone)"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-white dark:bg-slate-800 dark:text-white sm:col-span-2"
        />
      </div>
      <input
        type="text"
        name="title"
        autoComplete="organization-title"
        placeholder="What's this flight about?"
        required
        value={formData.title}
        onChange={handleChange}
        className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-white dark:bg-slate-800 dark:text-white"
      />
      <textarea
        name="message"
        autoComplete="off"
        placeholder="Unpack your ideas here..."
        required
        value={formData.message}
        onChange={handleChange}
        rows={6}
        className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-white dark:bg-slate-800 dark:text-white"
      />
      <button
        type="submit"
        className="bg-cyan-700 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
      >
        Send My Signal
      </button>
    </form>
  );
};

export default ContactForm;
