import { Link } from "react-router-dom";
import ErrorIcon from "../assets/error.svg?url";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[20vh] bg-gray-100 px-6 py-4 text-center">
      <img
        src={ErrorIcon}
        alt="Kopmuş bağlantı görseli"
        className="mb-2 w-full max-w-xs h-auto"
      />

      <h1 className="text-6xl font-bold text-gray-900 mt-2 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-8">
        Üzgünüz, aradığınız sayfa bulunamadı.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-zinc-900 border-2 border-zinc-900 text-white rounded-lg hover:bg-white hover:text-zinc-900 transition transform duration-500"
      >
        Ana Sayfaya Dön
      </Link>
    </div>
  );
};

export default Error;
