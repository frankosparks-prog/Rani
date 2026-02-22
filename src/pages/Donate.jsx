import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Copy,
  CheckCircle2,
  Phone,
  Building,
  ArrowRight,
} from "lucide-react";
import PageHeader from "../components/PageHeader";
import { useToast } from "../context/ToastContext";

function Donate() {
  const { addToast } = useToast();

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    addToast(`${type} copied to clipboard!`, "success");
  };

  return (
    <div className="min-h-screen bg-neutral-50 pb-20">
      <PageHeader
        title="Support Our Cause"
        subtitle="Your generosity helps us color the world with smiles and bring hope to those who need it most."
        bgImage="/extracted_images/image_1_2.jpeg"
      />

      <div className="container-custom mt-16 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <Heart
            size={48}
            className="mx-auto text-primary-600 mb-6 drop-shadow-sm"
          />
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Make a Donation
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Every contribution, big or small, makes a profound difference in the
            lives of vulnerable communities in Nakuru, Kenya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* M-Pesa Option */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-neutral-100 hover:shadow-md transition-shadow relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center">
                <Phone size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-neutral-900">M-Pesa</h3>
                <p className="text-sm text-neutral-500 font-medium tracking-wide uppercase">
                  Mobile Money (Kenya)
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-neutral-50 p-5 rounded-2xl border border-neutral-100 flex justify-between items-center">
                <div>
                  <p className="text-xs text-neutral-500 uppercase tracking-wider font-semibold mb-1">
                    Paybill Number
                  </p>
                  <p className="text-2xl font-heading font-bold text-neutral-900">
                    123456
                  </p>
                </div>
                <button
                  onClick={() => handleCopy("123456", "Paybill Number")}
                  className="p-3 text-neutral-400 hover:text-green-600 hover:bg-green-50 rounded-xl transition-colors"
                  title="Copy Paybill"
                >
                  <Copy size={20} />
                </button>
              </div>

              <div className="bg-neutral-50 p-5 rounded-2xl border border-neutral-100 flex justify-between items-center">
                <div>
                  <p className="text-xs text-neutral-500 uppercase tracking-wider font-semibold mb-1">
                    Account Name
                  </p>
                  <p className="text-xl font-heading font-bold text-neutral-900">
                    DONATION
                  </p>
                </div>
                <button
                  onClick={() => handleCopy("DONATION", "Account Name")}
                  className="p-3 text-neutral-400 hover:text-green-600 hover:bg-green-50 rounded-xl transition-colors"
                  title="Copy Account Name"
                >
                  <Copy size={20} />
                </button>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-100">
              <p className="text-sm text-neutral-500 flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-500" />
                Instant transfer verification
              </p>
            </div>
          </motion.div>

          {/* Bank Transfer Option */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-neutral-100 hover:shadow-md transition-shadow relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center">
                <Building size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-neutral-900">
                  Bank Transfer
                </h3>
                <p className="text-sm text-neutral-500 font-medium tracking-wide uppercase">
                  International & Local
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-100 flex justify-between items-center">
                <div>
                  <p className="text-xs text-neutral-500 uppercase tracking-wider font-semibold">
                    Bank Name
                  </p>
                  <p className="font-semibold text-neutral-900">
                    Kenya Commercial Bank (KCB)
                  </p>
                </div>
              </div>

              <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-100 flex justify-between items-center">
                <div>
                  <p className="text-xs text-neutral-500 uppercase tracking-wider font-semibold">
                    Account Name
                  </p>
                  <p className="font-semibold text-neutral-900">
                    Rani Ramchandani Foundation
                  </p>
                </div>
              </div>

              <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-100 flex justify-between items-center">
                <div>
                  <p className="text-xs text-neutral-500 uppercase tracking-wider font-semibold">
                    Account Number
                  </p>
                  <p className="font-semibold text-neutral-900 tracking-wider">
                    0123456789
                  </p>
                </div>
                <button
                  onClick={() => handleCopy("0123456789", "Account Number")}
                  className="p-2 text-neutral-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  title="Copy Account Number"
                >
                  <Copy size={18} />
                </button>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-neutral-100 text-center">
              <button
                onClick={() => {
                  handleCopy("SWIFT123XXX", "Swift Code");
                }}
                className="text-sm font-semibold text-primary-600 hover:text-primary-700 flex items-center justify-center gap-1 mx-auto transition-colors"
              >
                View Swift Code & International Details <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Donate;
