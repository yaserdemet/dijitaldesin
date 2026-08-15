import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className="relative bg-white overflow-hidden">
        {/* Grid pattern arka plan */}
        <div
          className="absolute inset-0 
    bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)]
    bg-[size:40px_40px]
    [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]"
        ></div>

        {/* İçerik */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24">
          <h1 className="text-6xl font-bold text-center">
            Anında Yanıt <br /> Artan Kazanç
          </h1>
          <p className="text-center mt-6 text-gray-600">
            AI müşteri temsilcileri...
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
