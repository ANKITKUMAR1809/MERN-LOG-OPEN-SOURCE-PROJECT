export default function GoogleButton() {
  return (
    <button
      type="button"
      className="w-full flex items-center justify-center gap-3 border border-gray-600 text-white py-2 rounded-md hover:bg-neutral-800 transition"
      onClick={() => console.log("Google auth clicked")}
    >
      <img
        src="https://www.svgrepo.com/show/475656/google-color.svg"
        alt="Google"
        className="w-5 h-5"
      />
      Continue with Google
    </button>
  );
}
