interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 mb-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center">{title}</h1>
    </header>
  );
}
export default Header;