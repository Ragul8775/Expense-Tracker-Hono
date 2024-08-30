"use client";

import { ExpenseCard } from "@/components/ExpenseCard";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="min-w-full  px-4 sm:px-9 flex-col justify-start space-y-6">
      <NavBar />
      <ExpenseCard />
    </div>
  );
}
