interface FooterProps {
  content: string;
}

const Footer = ({ content }: FooterProps) => {
  return (
    <footer className="mt-8 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 shadow-2xl hover:bg-white/15 transition-all duration-300 text-center">
      <p className="text-lg text-gray-300 hover:text-white transition-colors duration-300">
        {content}
      </p>
      <div className="mt-4">
        <div className="inline-block w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"></div>
      </div>
    </footer>
  );
};

export default Footer;
