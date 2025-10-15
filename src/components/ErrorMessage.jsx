import React from "react";

export default function ErrorMessage({ message }) {
  return (
    <div className="text-center mt-6 bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-xl">
      ⚠️ {message || "Something went wrong. Please try again."}
    </div>
  );
}
