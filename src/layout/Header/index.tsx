interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <header className="">
        <h1 className="text-center m-4">
          {title}
        </h1>
    </header>
  );
}
export default Header;