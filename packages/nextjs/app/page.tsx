"use client";

import Link from "next/link";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-32">
        <div className="text-center mb-24">
          <div className="animate-fade-in-down mt-8">
            <h1 className="text-6xl font-bold mb-8 text-primary">
              Welcome to HealthLink
            </h1>
            <p className="text-2xl mb-16 max-w-3xl mx-auto leading-relaxed">
              A decentralized platform revolutionizing healthcare data management through blockchain technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="card bg-base-100 p-8 shadow-xl hover:shadow-2xl">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="text-xl font-semibold mb-2">
                  Medical Records
                </h3>
                <p>
                  Secure storage and sharing of health data
                </p>
              </div>
            </div>

            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="card bg-base-100 p-8 shadow-xl hover:shadow-2xl">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-semibold mb-2">
                  Privacy Shield
                </h3>
                <p>
                  Advanced encryption and data protection
                </p>
              </div>
            </div>

            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="card bg-base-100 p-8 shadow-xl hover:shadow-2xl">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold mb-2">
                  AI Diagnostics
                </h3>
                <p>
                  Smart analysis of medical data
                </p>
              </div>
            </div>

            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="card bg-base-100 p-8 shadow-xl hover:shadow-2xl">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-semibold mb-2">
                  Data Marketplace
                </h3>
                <p>
                  Monetize anonymous health data
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Link
                href="/dashboard"
                className="btn btn-primary btn-lg"
              >
                Access Dashboard
              </Link>
              <Link
                href="/records"
                className="btn btn-secondary btn-lg"
              >
                Manage Records
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
