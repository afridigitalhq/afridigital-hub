export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center hero">
      <div className="glass p-10 w-96">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <input className="w-full p-3 mb-4 rounded bg-black/30" placeholder="Email" />
        <input className="w-full p-3 mb-6 rounded bg-black/30" placeholder="Password" />
        <button className="w-full bg-blue-600 p-3 rounded hover:bg-blue-700">
          Access System
        </button>
      </div>
    </div>
  );
}
