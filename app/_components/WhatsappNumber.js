'use client';

import { FaWhatsapp } from 'react-icons/fa';

function WhatsappNumber() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+8615915732732';
    const message = 'مرحبا، أحتاج مساعدة بخصوص شحنتي';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  return (
    <div
      className="flex cursor-pointer items-center justify-center gap-2 text-green-500 transition-colors hover:text-green-400"
      onClick={handleWhatsAppClick}
    >
      <span> الواتس اب</span>
      <span>
        <FaWhatsapp className="h-6 w-6" />
      </span>
    </div>
  );
}

export default WhatsappNumber;
