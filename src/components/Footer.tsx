export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Triple Organization</h3>
              <p className="text-gray-400">Empowering businesses through technology</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/about" className="hover:text-primary">About Us</a></li>
                <li><a href="/services" className="hover:text-primary">Services</a></li>
                <li><a href="/contact" className="hover:text-primary">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">123 Business Street<br/>Khaplu, NY 10001</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Triple Organization. All rights reserved.</p>
            <p className="  text-end text-gray-400">elibU</p>
          </div>
          
        </div>
      </footer>
    );
  }