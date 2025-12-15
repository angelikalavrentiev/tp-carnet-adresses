interface FooterProps {
  content: string;
}

const Footer = ({ content }: FooterProps) => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-6 mt-8 rounded-lg shadow-lg text-center">
        <p className="text-lg">{content}</p>
    </footer>
  );
}

export default Footer;