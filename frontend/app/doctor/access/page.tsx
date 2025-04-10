import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";

export const metadata: Metadata = {
  title: "Doctor Access | MediGuardian",
};

export default function AccessWalletPage() {
  return (
    <div className="min-h-screen p-6 bg-teal-50 flex flex-col items-center justify-center">
      <Card className="w-full max-w-md shadow-lg border border-teal-300">
        <CardContent className="p-6 space-y-4">
          <div className="text-center">
            <Wallet className="mx-auto text-teal-600" size={40} />
            <h2 className="text-xl font-semibold mt-2 text-teal-800">
              Access Patient Wallet
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Feature under development. Will allow doctors to view NFT health records once blockchain setup is complete.
            </p>
          </div>
          <Button className="w-full bg-teal-600 text-white" disabled>
            Coming Soon
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
