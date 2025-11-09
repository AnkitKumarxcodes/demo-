export default function Card({ children, className = '', hover = true }) {
  return (
    <div className={`bg-white rounded-xl shadow-lg ${hover ? 'hover:shadow-2xl' : ''} transition-shadow duration-300 overflow-hidden ${className}`}>
      {children}
    </div>
  );
}
