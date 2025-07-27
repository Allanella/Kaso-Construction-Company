import React from "react";

export default function Contact() {
  return (
    <main className="min-h-screen bg-blue-50 text-gray-800 p-8">
      <section className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-blue-900 mb-4 text-center">Contact Us</h1>
        <p className="text-center text-gray-600 mb-6">
          We'd love to hear about your project. Reach out today and let's build something incredible together.
        </p>

        <div className="space-y-4 text-sm">
          <p><strong>Phone (Uganda):</strong> +256763567391, +256764773432</p>
          <p><strong>Phone (KSA):</strong> +966543361302</p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:allanbaliddawa@gmail.com" className="text-blue-600 underline">
              allanbaliddawa@gmail.com
            </a>
          </p>
          <p><strong>Office Hours:</strong> Monday - Friday, 8AM - 6PM</p>
        </div>
      </section>
    </main>
  );
}
