export default function MapComponent() {
  const address = "Miniwell Fire Safety Solutions, Survey no 1636 24, Malhar Bunglows, Karan Nagar Rd, Kadi, Gujarat 382715";   ``
  const encodedAddress = encodeURIComponent(address);

  return (
    <div 
      className="w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-sm border-t-4 bg-gray-50" 
      style={{ borderColor: '#BE0201' }}
    >
      <iframe
        src={`https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Miniwell Fire Safety Location"
      ></iframe>
    </div>
  );
}