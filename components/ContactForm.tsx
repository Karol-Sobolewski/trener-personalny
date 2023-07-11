import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import "yup-phone-lite";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import emailjs from "emailjs-com";
import styles from "./ContactForm.module.scss";

export default function ContactForm() {
  const contactFormSchema = yup.object({
    firstName: yup.string().required("Podaj imię").max(254, "Zbyt długa nazwa"),
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
      .notRequired(),

    message: yup
      .string()
      .required("Podaj wiadomość")
      .min(50, "Zbyt krótka wiadomość")
      .max(1000, "Zbyt długa wiadomość"),
  });

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

  const onSubmit = handleSubmit(async (data) => {
    reset();
    try {
      const templateParams = {
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
        email: data.email,
        message: data.message,
      };

      const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

      // await emailjs.send(serviceID, templateID, templateParams, userId);
      reset();
      toastifySuccess();
    } catch (e) {
      console.log(`status:`, e);
    }
  });

  return (
    <section className="text-gray-900 rounded-lg dark:shadow-none md:mx-16 pb-8 shadow-sm hover:shadow-md px-4 py-8  bg-white dark:bg-inherit  dark:border-slate-400">
      <div className="max-w-screen-xl px-4 flex justify-center align-middle ">
        <div className="max-w-3xl w-full">
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
              <button
                type="submit"
                className="block rounded-md bg-red-700 p-4 text-sm text-gray-100 font-bold transition hover:shadow-lg hover:bg-red-700/75 hover:dark:bg-red-500/75 dark:bg-red-200 dark:text-gray-900"
              >
                Wyślij wiadomość
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}
