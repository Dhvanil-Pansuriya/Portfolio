const Footer = ({ personalInfo }) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">
              ©{currentYear} {personalInfo.name} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
