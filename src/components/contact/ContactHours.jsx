import { Icon } from '@iconify/react'

const ContactHours = () => {
  const hours = [
    { day: "Pazartesi - Cuma", time: "09:00 - 18:00" },
    { day: "Cumartesi - Pazar", time: "Kapalı" },
  ];

  return (
    <div className="bg-white border-2 border-gray-200 rounded-2xl shadow-lg p-8">
      <div className="flex items-start gap-4 mb-6">
        <Icon icon="solar:clock-circle-bold" className="w-8 h-8 text-gray-900 flex-shrink-0" />
        <div>
          <h3 className="text-2xl font-bold text-gray-900">Hizmet Saatleri</h3>
          <p className="text-gray-600 text-sm mt-1">
            Bize ulaşmak için en uygun saatler
          </p>
        </div>
      </div>

      <div className="space-y-4 mt-6">
        {hours.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center pb-4 border-b border-gray-200 last:border-b-0"
          >
            <span className="text-gray-700">{item.day}</span>
            <span className="font-bold text-lg text-gray-900">{item.time}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex gap-2">
          <Icon icon="solar:lightbulb-bold" className="w-5 h-5 text-gray-900 flex-shrink-0" />
          <p className="text-gray-700 text-sm">
            <strong>Hızlı destek için:</strong> Whatsapp üzerinden de bize
            ulaşabilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactHours;
