const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white py-6 border-t border-neutral-700">
      <div className="container text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Choden Landscaping & Handyman Services. All rights reserved.</p>
        <p className="mt-2">
          Website created by <a href="" className="text-brand-accent hover:underline">Green Stack Services</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

