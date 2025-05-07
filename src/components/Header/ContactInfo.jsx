const ContactInfo = ({ icon: Icon, text }) => (
  <div className="flex items-center space-x-2">
    <Icon className="h-4 w-4 text-emerald-600" />
    <span className="text-sm">{text}</span>
  </div>
);

export default ContactInfo;
