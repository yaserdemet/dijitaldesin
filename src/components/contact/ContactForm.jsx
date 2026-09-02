import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

import { EMAILJS_CONFIG, } from "../../utils/emailjs";

const baseInputClass =
  "w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition text-gray-900";

const inputClass = (hasError) =>
  `${baseInputClass} ${
    hasError
      ? "border-red-400 focus:border-red-500"
      : "border-gray-200 focus:border-black"
  }`;

const ErrorText = ({ children }) =>
  children ? (
    <p className="mt-1.5 text-sm text-red-500 font-medium">{children}</p>
  ) : null;

const ContactForm = () => {
  const [sendError, setSendError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
      hasEcommerce: "",
    },
  });

  const onSubmit = async (data) => {
    setSendError("");

    // Şablonun gövdesi yalnızca {{name}}, {{time}} ve {{message}} basıyor,
    // bu yüzden diğer alanları mesajın altına ekliyoruz.
    const details = [
      `Telefon: ${data.phone}`,
      `Firma: ${data.company || "-"}`,
      `Konu: ${data.subject}`,
      `E-Ticaret sitesi: ${data.hasEcommerce === "yes" ? "Evet" : "Hayır"}`,
    ].join("\n");


    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          company: data.company || "-",
          subject: data.subject,
          hasEcommerce: data.hasEcommerce === "yes" ? "Evet" : "Hayır",
          time: new Date().toLocaleString("tr-TR"),
          message: `${data.message}

---
${details}`,
        },
        { publicKey: EMAILJS_CONFIG.publicKey }
      );

      reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setSendError(
        "Mesaj gönderilemedi. Lütfen tekrar deneyin veya bize doğrudan ulaşın."
      );
    }
  };

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
        İletişim Formu
      </h2>
      <p className="text-gray-600 mb-8">
        Aşağıdaki formu doldurup gönderin. En kısa sürede sizinle iletişime
        geçeceğiz.
      </p>

      {isSubmitSuccessful && (
        <div className="mb-6 p-4 bg-white border-2 border-black rounded-xl flex items-start gap-3 shadow-lg">
          <span className="text-2xl">✓</span>
          <div>
            <h3 className="font-bold text-gray-900">
              Mesajınız başarıyla gönderildi!
            </h3>
            <p className="text-sm text-gray-600">
              En kısa sürede sizinle iletişime geçeceğiz.
            </p>
          </div>
        </div>
      )}

      {sendError && (
        <div className="mb-6 p-4 bg-white border-2 border-red-400 rounded-xl flex items-start gap-3 shadow-lg">
          <span className="text-2xl text-red-500">!</span>
          <div>
            <h3 className="font-bold text-gray-900">Mesaj gönderilemedi</h3>
            <p className="text-sm text-gray-600">{sendError}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-900 font-semibold mb-2 text-sm"
            >
              Ad Soyad *
            </label>
            <input
              type="text"
              id="name"
              {...register("name", {
                required: "Ad soyad zorunludur",
                minLength: { value: 3, message: "En az 3 karakter giriniz" },
              })}
              className={inputClass(errors.name)}
              placeholder="Adınız ve soyadınız"
            />

            <ErrorText>{errors.name?.message}</ErrorText>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-gray-900 font-semibold mb-2 text-sm"
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Email zorunludur",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
                  message: "Geçerli bir email adresi giriniz",
                },
              })}
              className={inputClass(errors.email)}
              placeholder="example@gmail.com"
            />
            <ErrorText>{errors.email?.message}</ErrorText>
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-gray-900 font-semibold mb-2 text-sm"
            >
              Telefon *
            </label>
            <input
              type="tel"
              id="phone"
              {...register("phone", {
                required: "Telefon zorunludur",
                pattern: {
                  value:
                    /^(\+90|0)?\s*5\d{2}[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/,
                  message: "Geçerli bir telefon numarası giriniz",
                },
              })}
              className={inputClass(errors.phone)}
              placeholder="+90 (5__) ___ __ __"
            />
            <ErrorText>{errors.phone?.message}</ErrorText>
          </div>

          <div>
            <label
              htmlFor="company"
              className="block text-gray-900 font-semibold mb-2 text-sm"
            >
              Firma Adı
            </label>
            <input
              type="text"
              id="company"
              {...register("company")}
              className={inputClass(false)}
              placeholder="Firma adınız"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-gray-900 font-semibold mb-2 text-sm"
          >
            Konu *
          </label>
          <input
            type="text"
            id="subject"
            {...register("subject", {
              required: "Konu zorunludur",
              minLength: { value: 3, message: "En az 3 karakter giriniz" },
            })}
            className={inputClass(errors.subject)}
            placeholder="Mesaj konusu"
          />
          <ErrorText>{errors.subject?.message}</ErrorText>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-gray-900 font-semibold mb-2 text-sm"
          >
            Mesajınız *
          </label>
          <textarea
            id="message"
            rows="5"
            {...register("message", {
              required: "Mesaj zorunludur",
              minLength: { value: 10, message: "En az 10 karakter giriniz" },
            })}
            className={`${inputClass(errors.message)} resize-none`}
            placeholder="Mesajınızı buraya yazınız..."
          />
          <ErrorText>{errors.message?.message}</ErrorText>
        </div>

        <div>
          <label className="block text-gray-900 font-semibold mb-4 text-sm">
            E-Ticaret siteniz var mı? *
          </label>
          <div className="flex gap-6">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                value="yes"
                {...register("hasEcommerce", {
                  required: "Lütfen bir seçim yapınız",
                })}
                className="w-5 h-5 accent-black"
              />
              <span className="text-gray-700 font-medium">Evet</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                value="no"
                {...register("hasEcommerce", {
                  required: "Lütfen bir seçim yapınız",
                })}
                className="w-5 h-5 accent-black"
              />
              <span className="text-gray-700 font-medium">Hayır</span>
            </label>
          </div>
          <ErrorText>{errors.hasEcommerce?.message}</ErrorText>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-black text-white font-bold py-3 px-4 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Gönderiliyor..." : "Mesajı Gönder"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
