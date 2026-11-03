"use client";

import type { ReactNode } from "react";
import { useBooking } from "./BookingProvider";

type Props = {
  className?: string;
  children?: ReactNode;
};

export default function BookVisitButton({
  className = "btn",
  children = "Book a Visit ↗",
}: Props) {
  const { openBooking } = useBooking();

  return (
    <button type="button" className={className} onClick={openBooking}>
      {children}
    </button>
  );
}
