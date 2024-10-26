export function AddButton() {
  return (
    <button 
      className="fixed bottom-6 right-6 glass p-4 rounded-full shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 group"
    >
      <svg 
        className="w-6 h-6 text-indigo-400 group-hover:scale-110 transition-transform duration-300" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    </button>
  );
}