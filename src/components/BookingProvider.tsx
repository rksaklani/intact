"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import BookingModal from "./BookingModal";

type BookingContextValue = {
  openBooking: () => void;
  closeBooking: () => void;
};

const BookingContext = createContext<BookingContextValue | null>(null);

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) {
    throw new Error("useBooking must be used within BookingProvider");
  }
  return ctx;
}

export default function BookingProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  const openBooking = useCallback(() => setOpen(true), []);
  const closeBooking = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeBooking();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, closeBooking]);

  const value = useMemo(
    () => ({ openBooking, closeBooking }),
    [openBooking, closeBooking]
  );

  return (
    <BookingContext.Provider value={value}>
      {children}
      <BookingModal open={open} onClose={closeBooking} />
    </BookingContext.Provider>
  );
}
