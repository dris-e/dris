import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const birthDate = new Date("2007-07-05");

export function calculateAge() {
  const now = new Date();
  let age = now.getFullYear() - birthDate.getFullYear();
  const m = now.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

export function calculateDays() {
  const now = new Date();
  const days = Math.floor((now.getTime() - birthDate.getTime()) / (1000 * 60 * 60 * 24));
  return days;
}

export function tenYears() {
  const now = new Date();
  const targetDate = new Date("2035-04-12"); // from april 12th, 2025

  const timeDiff = targetDate.getTime() - now.getTime();
  const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  return daysDiff > 0 ? daysDiff : 0;
}
