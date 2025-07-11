"use client";
import AccountInfo from '../../../components/account/AccountInfo';
import AccountSubscription from '../../../components/account/AccountSubscription';
import AccountPoints from '../../../components/account/AccountPoints';
import AccountHistory from '../../../components/account/AccountHistory';

export default function AccountProfile() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <AccountInfo />
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="flex-1">
          <AccountSubscription />
        </div>
        <div className="flex-1">
          <AccountPoints />
        </div>
      </div>
      <AccountHistory />
    </div>
  );
} 