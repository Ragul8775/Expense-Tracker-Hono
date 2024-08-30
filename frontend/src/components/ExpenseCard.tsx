import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { api } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

export function ExpenseCard() {
  // Queries
  async function getTotalSpent() {
    const res = await api.expenses["total-spent"].$get();
    console.log("Response", res.json());
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();

    return { ...data };
  }
  useEffect(() => {
    getTotalSpent();
    console.log(
      "Total Spent",
      getTotalSpent().then((data) => data)
    );
  }, []);

  const [totalSpent, setTotalSpent] = useState();

  return (
    <Card className="w-[300px] sm:w-[350px] bg-gradient-to-b from-[#603813]  to-[#776256] border-0">
      <CardHeader>
        <CardTitle className="text-xl sm:text-3xl">Total Spent</CardTitle>
        <CardDescription className="font-semibold text-gray-300 text-xs sm:text-sm">
          The Total Amount You've Spent
        </CardDescription>
      </CardHeader>
      <CardContent className="font-bold sm:text-3xl text-xl">
        ₹{totalSpent}
      </CardContent>
    </Card>
  );
}
