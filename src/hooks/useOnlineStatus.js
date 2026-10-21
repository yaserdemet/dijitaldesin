import { useSyncExternalStore } from "react";

const subscribe = (callback) => {
  window.addEventListener("online", callback);
  window.addEventListener("offline", callback);
  return () => {
    window.removeEventListener("online", callback);
    window.removeEventListener("offline", callback);
  };
};

const getSnapshot = () => navigator.onLine;

// Prerender (SSR) ve hydration sırasında çevrimiçi kabul edilir; hydration mismatch olmaz.
const getServerSnapshot = () => true;

// Cihazın internet bağlantısı olup olmadığını döner; bağlantı değişince otomatik güncellenir.
const useOnlineStatus = () =>
  useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

export default useOnlineStatus;
