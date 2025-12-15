interface FooterProps {
  content: string;
}

const Footer = ({ content }: FooterProps) => {
  return (
    <footer className="mt-8 mb-4 text-center">
        <p>{content}</p>
    </footer>
  );
}

export default Footer;