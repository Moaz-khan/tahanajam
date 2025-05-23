"use client";
import { useEffect, useState } from "react";

export default function ConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setShowBanner(true);
    } else {
      loadAnalytics(); // Load if already accepted
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie_consent", "true");
    setShowBanner(false);
    loadAnalytics();
  };

  const loadAnalytics = () => {
    if (typeof window !== "undefined") {
      const script1 = document.createElement("script");
      script1.setAttribute("async", "true");
      script1.src = "https://www.googletagmanager.com/gtag/js?id=G-LHXYX6WED2";
      document.head.appendChild(script1);

      const script2 = document.createElement("script");
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-LHXYX6WED2');
      `;
      document.head.appendChild(script2);
    }
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 w-full bg-black text-white px-4 py-3 flex justify-between items-center z-50">
      <p className="text-sm">
        We use cookies to improve your experience. By using our site, you accept
        analytics cookies.
      </p>
      <button
        onClick={acceptCookies}
        className="bg-white text-black px-4 py-2 text-sm font-semibold rounded hover:bg-gray-300 transition">
        Accept
      </button>
    </div>
  );
}
