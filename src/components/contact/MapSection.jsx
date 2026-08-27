const MapSection = () => {
  return (
    <div className="h-full min-h-96 rounded-2xl overflow-hidden shadow-lg border-2 border-gray-200">
      <iframe
        title="Dijitaldesin Harita"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3063.0949361246467!2d32.83377405581518!3d39.84970546869297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d345aa8e032b49%3A0x2de5291a11022f87!2sDijitaldesin%20Reklam%20Ajans%C4%B1!5e0!3m2!1str!2str!4v1787756488583!5m2!1str!2str"
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: "400px" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapSection;
