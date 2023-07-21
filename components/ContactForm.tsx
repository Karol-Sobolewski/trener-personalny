import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import "yup-phone-lite";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import emailjs from "emailjs-com";
import styles from "./ContactForm.module.scss";
import { useEffect, useRef, useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import Loading from "./common/Loading";

export default function ContactForm() {
  const [token, setToken] = useState<string | null>(null);
  const captchaRef = useRef<HCaptcha>(null);
  const hCaptchaSiteKey = "1d32eb16-521e-4c05-97f2-b4213ac0c29a";
  const [isDarkMode, setDarkMode] = useState(false);
  const [formLoading, setFormLoading] = useState(false) 
  useEffect(() => {
    const mode = localStorage.getItem("nightwind-mode");
    if (mode === "dark") {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  });

  const contactFormSchema = yup
    .object({
      firstName: yup
        .string()
        .required("Podaj imię")
        .max(254, "Zbyt długa nazwa"),
      lastName: yup
        .string()
        .required("Podaj nazwisko")
        .max(254, "Zbyt długa nazwa"),
      email: yup
        .string()
        .email("Podaj poprawny adres email")
        .required("Adres email jest wymagany")
        .max(254, "Zbyt długa nazwa"),
      phone: yup
        .string()
        .phone("PL", "Podaj poprawny numer telefonu")
        .nullable()
        .defined()
        .when("PHONE", {
          is: (val: string) => val && val.length > 0,
          then: (schema) => schema.required(),
        }),
      message: yup
        .string()
        .required("Podaj wiadomość")
        .min(50, "Zbyt krótka wiadomość")
        .max(1000, "Zbyt długa wiadomość"),
    })
    .required();

  type CheckoutFormData = yup.InferType<typeof contactFormSchema>;

  const { register, setValue, handleSubmit, formState, reset } =
    useForm<CheckoutFormData>({
      resolver: yupResolver(contactFormSchema),
    });

  const toastifySuccess = () => {
    toast(`Formularz wysłany!`, {
      autoClose: 2000,
      className: styles.submitFeedback,
      closeOnClick: true,
      draggable: false,
      hideProgressBar: true,
      pauseOnHover: true,
      position: `bottom-right`,
      toastId: `notifyToast`,
    });
  };

  const toastifyError = () => {
    toast(`Błąd!`, {
      autoClose: 2000,
      className: styles.errorFeedback,
      closeOnClick: true,
      draggable: false,
      hideProgressBar: true,
      pauseOnHover: true,
      position: `bottom-right`,
      toastId: `notifyToastError`,
    });
  };

  const onSubmit = handleSubmit(async (data) => {
    if (captchaRef.current) {
      captchaRef.current.execute();
      if (token) {
      setFormLoading(true)
        try {
          const templateParams = {
            firstName: data.firstName,
            lastName: data.lastName,
            phone: data.phone,
            email: data.email,
            message: data.message,
          };

          const serviceID = "service_exwa3po"
          const templateID = "template_ikd912k"
          const publicKey = "IiI-MyEcp_QssH9PQ"
          if (serviceID && templateID){
            await emailjs.send(serviceID, templateID, templateParams, publicKey);
            toastifySuccess();
            reset();
            setFormLoading(false)
          } else {
            toastifyError();
            setFormLoading(false)
          }
        } catch (e) {
          console.log(`status:`, e);
          toastifyError();
          setFormLoading(false)
        }
      } else {
        toastifyError();
      }
    }
  });

  return (
    <section className="text-gray-900 rounded-lg dark:shadow-none md:mx-16 pb-16 pt-16 shadow-sm hover:shadow-md px-4 py-8 mx-4 bg-white dark:bg-inherit  dark:border-slate-400">
      <div className="max-w-screen-xl px-4 flex justify-center align-middle ">
        <div className="max-w-3xl w-full">
          {formLoading ? <Loading/> : 
           <form className="grid grid-cols-6 gap-4" onSubmit={onSubmit}>
           <div className="col-span-6 md:col-span-3">
             <label
               htmlFor="firstName"
               className="block text-xs font-medium text-gray-700"
             >
               Imię*
             </label>

             <input
               autoComplete="given-name"
               type="text"
               id="firstName"
               className="mt-1 p-2.5 w-full rounded-md border-gray-100 shadow-sm sm:text-sm bg-gray-100"
               {...register("firstName")}
             />
             <span role="alert" className="text-sm font-bold text-red-500">
               {formState.errors.firstName?.message}
             </span>
           </div>

           <div className="col-span-6 md:col-span-3">
             <label
               htmlFor="lastName"
               className="block text-xs font-medium text-gray-700"
             >
               Nazwisko*
             </label>

             <input
               autoComplete="family-name"
               type="text"
               id="lastName"
               {...register("lastName")}
               className="mt-1 p-2.5 w-full rounded-md shadow-sm sm:text-sm bg-gray-100"
             />
             <span role="alert" className="text-sm font-bold text-red-500">
               {formState.errors.lastName?.message}
             </span>
           </div>

           <div className="col-span-6 md:col-span-3">
             <label
               htmlFor="email"
               className="block text-xs font-medium text-gray-700 "
             >
               Email*
             </label>

             <input
               autoComplete="email"
               type="text"
               id="email"
               {...register("email")}
               className="mt-1 p-2.5 w-full rounded-md shadow-sm sm:text-sm bg-gray-100"
             />
             <span role="alert" className="text-sm font-bold text-red-500">
               {formState.errors.email?.message}
             </span>
           </div>

           <div className="col-span-6 md:col-span-3">
             <label
               htmlFor="phone"
               className="block text-xs font-medium text-gray-700 "
             >
               Telefon
             </label>

             <input
               autoComplete="tel"
               type="tel"
               id="phone"
               {...register("phone")}
               className="mt-1 p-2.5 w-full rounded-md shadow-sm sm:text-sm bg-gray-100"
             />
             <span role="alert" className="text-sm font-bold text-red-500">
               {formState.errors.phone?.message}
             </span>
           </div>

           <div className="col-span-6">
             <label
               htmlFor="message"
               className="block text-xs font-medium text-gray-700 "
             >
               Wiadomość*
             </label>
             <textarea
               id="message"
               rows={5}
               cols={60}
               {...register("message")}
               className="mt-1 p-2.5 w-full rounded-md shadow-sm sm:text-sm bg-gray-100"
             />
             <span role="alert" className="text-sm font-bold text-red-500">
               {formState.errors.message?.message}
             </span>
           </div>
           <div className="col-span-6 flex align-middle justify-center w-full">
             <HCaptcha
               sitekey={hCaptchaSiteKey}
               onVerify={setToken}
               ref={captchaRef}
               theme={isDarkMode ? "dark" : "light"}
             />
           </div>
           <div className="col-span-6 flex align-middle justify-center w-full">
             <button
               disabled={!token}
               type="submit"
               className={`block rounded-md p-4 text-sm font-bold transition hover:shadow-lg  text-gray-100 
               ${!token ? "bg-red-700/10 dark:text-gray-100/50" :  "bg-red-700 hover:bg-red-700/75 hover:dark:bg-red-500/75 dark:bg-red-200 dark:text-gray-900"}`}
             >
               Wyślij wiadomość
             </button>
           </div>
         </form>
          }
         
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}
