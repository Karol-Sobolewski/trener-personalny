import Link from "next/link";
import { useState, useEffect } from "react";
import { hasCookie, setCookie } from "cookies-next";

export default function CookieBanner() {
  const [showConsent, setShowConsent] = useState(true);

  useEffect(() => {
    setShowConsent(hasCookie("cookie_consent"));
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie("cookie_consent", "true", {});
    window.gtag("consent", "update", {
      analytics_storage: "granted",
    });
  };

  const declineCookie = () => {
    setShowConsent(true);
    setCookie("cookie_consent", "false", {});
    window.gtag("consent", "update", {
      analytics_storage: "denied",
    });
  };

  if (showConsent) {
    return null;
  }

  return (
    <div
      className={`my-10 mx-auto max-w-max md:max-w-screen-sm
                        fixed bottom-0 left-0 right-0 
                        ${"flex"}  px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4  
                         bg-white dark:bg-gray-200 dark:text-gray-700 rounded-lg shadow`}
    >
      <div className="text-center">
        <Link href="/polityka-prywatnosci/#cookies">
          <p>
            Ta strona używa plików{" "}
            <span className="font-bold text-sky-400">cookies (ciasteczka)</span>
          </p>
        </Link>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => declineCookie()}
          className="px-5 py-2 text-gray-700 dark:text-gray-700 rounded-md border-gray-900"
        >
          Odrzuć
        </button>
        <button
          onClick={() => acceptCookie()}
          className="bg-gray-900 px-5 py-2 text-white rounded-lg"
        >
          Zaakceptuj
        </button>
      </div>
    </div>
  );
}
