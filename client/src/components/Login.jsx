const Login = ({ label, type, name, value, onChange }) => {
  return (
    <div className="flex flex-col mb-6">
      <label
        htmlFor={name}
        className="text-sm font-semibold text-white mb-2 rounded-2xl"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        required
        className="px-4 py-3 bg-[#1f1f1f] text-white border border-lime-500 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-lime-400 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lime-400/30"
      />
    </div>
  );
};

export default Login;
