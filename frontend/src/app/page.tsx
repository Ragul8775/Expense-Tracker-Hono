"use client";

import NavBar from "@/components/NavBar";
import GridPattern from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";
import { Grid } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [expense, setExpense] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/expenses") // Adjusted endpoint
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setExpense(data.expenses); // Assuming your API returns an object with an 'expenses' array
      })
      .catch((error) => console.error("Error fetching data:", error)); // Adding error handling
  }, []);

  return (
    <div className="min-w-full">
      <NavBar />
    </div>
  );
}
