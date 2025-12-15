interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <header className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 mb-8 shadow-2xl hover:bg-white/15 transition-all duration-300">
      <h1 className="text-5xl font-bold text-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
        {title}
      </h1>
      <div className="mt-4 text-center">
        <div className="inline-block w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
      </div>
    </header>
  );
};

export default Header;
