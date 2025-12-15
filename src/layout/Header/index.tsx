const Header = ({ title }) => {
  return (
    <header className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-4">
            <h1 className="text-2xl font-bold text-gray-800">
                {title}
            </h1>
        </div>
    </header>
    );
}
export default Header;