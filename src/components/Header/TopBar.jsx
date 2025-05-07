import { Phone, Mail, Clock } from "lucide-react";

const TopBar = () => (
  <div className="bg-emerald-800 text-white py-2 px-4 hidden md:block">
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <Phone className="h-4 w-4" />
          <span className="text-sm">+92 3411536297</span>
        </div>
        <div className="flex items-center space-x-2">
          <Mail className="h-4 w-4" />
          <span className="text-sm">owaiszakir88@gmail.com</span>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Clock className="h-4 w-4" />
        <span className="text-sm">Classes Available 24/7</span>
      </div>
    </div>
  </div>
);

export default TopBar;
