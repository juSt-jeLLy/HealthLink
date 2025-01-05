"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import {
  UserCircleIcon,
  DocumentTextIcon,
  BeakerIcon,
  ChatBubbleLeftRightIcon,
  VideoCameraIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";

const Dashboard: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="hero bg-base-200 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-primary">HealthLink Dashboard</h1>
          <p className="py-6 text-xl">
            Secure, Decentralized Healthcare Data Management
          </p>
          <div className="flex justify-center items-center gap-4">
            <Address address={connectedAddress} />
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Medical Records */}
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="card-body items-center text-center">
              <DocumentTextIcon className="h-16 w-16 text-primary" />
              <h2 className="card-title">Medical Records</h2>
              <p>
                Tokenize and securely share your medical records with healthcare
                providers
              </p>
              <div className="card-actions">
                <Link href="/records" className="btn btn-primary">
                  Manage Records
                </Link>
              </div>
            </div>
          </div>

          {/* Data Marketplace */}
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="card-body items-center text-center">
              <CurrencyDollarIcon className="h-16 w-16 text-primary" />
              <h2 className="card-title">Data Marketplace</h2>
              <p>
                Earn tokens by sharing anonymized health data with researchers
              </p>
              <div className="card-actions">
                <Link href="/marketplace" className="btn btn-primary">
                  Enter Marketplace
                </Link>
              </div>
            </div>
          </div>

          {/* AI Diagnostics */}
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="card-body items-center text-center">
              <BeakerIcon className="h-16 w-16 text-primary" />
              <h2 className="card-title">AI Diagnostics</h2>
              <p>Get instant AI analysis of medical images and test results</p>
              <div className="card-actions">
                <Link href="/ai-diagnostics" className="btn btn-primary">
                  Start Analysis
                </Link>
              </div>
            </div>
          </div>

          {/* Web3 Mail */}
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="card-body items-center text-center">
              <ChatBubbleLeftRightIcon className="h-16 w-16 text-primary" />
              <h2 className="card-title">Web3 Mail</h2>
              <p>
                Exchange encrypted medical information with healthcare providers
              </p>
              <div className="card-actions">
                <Link href="/messages" className="btn btn-primary">
                  Open Inbox
                </Link>
              </div>
            </div>
          </div>

          {/* Telehealth */}
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="card-body items-center text-center">
              <VideoCameraIcon className="h-16 w-16 text-primary" />
              <h2 className="card-title">Telehealth</h2>
              <p>Secure video consultations with encrypted storage</p>
              <div className="card-actions">
                <Link href="/telehealth" className="btn btn-primary">
                  Start Session
                </Link>
              </div>
            </div>
          </div>

          {/* Privacy Shield */}
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="card-body items-center text-center">
              <ShieldCheckIcon className="h-16 w-16 text-primary" />
              <h2 className="card-title">Privacy Shield</h2>
              <p>TEE-protected data processing and blockchain security</p>
              <div className="card-actions">
                <Link href="/security" className="btn btn-primary">
                  View Security
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-base-200 py-16">
        <div className="container mx-auto px-4">
          <div className="stats shadow w-full">
            <div className="stat place-items-center">
              <div className="stat-title">Active Users</div>
              <div className="stat-value">31K</div>
              <div className="stat-desc">From 6,000 healthcare providers</div>
            </div>
            <div className="stat place-items-center">
              <div className="stat-title">Records Shared</div>
              <div className="stat-value">4.2M</div>
              <div className="stat-desc">↗︎ 400 (22%)</div>
            </div>
            <div className="stat place-items-center">
              <div className="stat-title">Data Marketplace</div>
              <div className="stat-value">$2.6M</div>
              <div className="stat-desc">In researcher payments</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
