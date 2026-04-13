import logoWhite from "@assets/logo_white.png";

export default function Footer() {
  return (
    <footer className="bg-black py-20 border-t border-white/10 text-white/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img src={logoWhite} alt="NADI Logo" className="h-14 w-auto opacity-90" />
            </div>
            <p className="max-w-sm font-light text-sm leading-relaxed">
              The infrastructure for global talent. Connecting the ambitions of the GCC with the exceptional capabilities of Asia.
            </p>
          </div>

          <div>
            <h4 className="text-white text-xs uppercase tracking-widest font-semibold mb-6">Platform</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#" className="hover:text-white transition-colors">For Employers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">For Talent</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Methodology</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs uppercase tracking-widest font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ethics Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs font-light">
          <p>&copy; {new Date().getFullYear()} NADI Talent Group. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
