import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const birthDate = new Date("2007-07-05");
const today = new Date();

export function calculateAge() {
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

export function calculateDays() {
  const days = Math.floor((today.getTime() - birthDate.getTime()) / (1000 * 60 * 60 * 24));
  return days;
}

export function tenYears() {
  const targetDate = new Date("2035-04-12"); // from april 12th, 2025

  const timeDiff = targetDate.getTime() - today.getTime();
  const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  return daysDiff > 0 ? daysDiff : 0;
}
