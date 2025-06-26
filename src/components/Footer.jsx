const Footer = () => {
  return (
    <footer className="bg-brand-dark text-gray-300 py-6 mt-10">
      <div className="container text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Choden Landscaping & Handyman Services. All rights reserved.</p>
        <p className="mt-2">
          Website created by <a href="" className="text-brand-accent hover:underline">Ground Stack Services</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;


