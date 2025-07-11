"use client";
import AccountSettingsNotification from '../../../components/account/AccountSettingsNotification';
import AccountSettingsPrivacy from '../../../components/account/AccountSettingsPrivacy';
import AccountSettingsOther from '../../../components/account/AccountSettingsOther';

export default function AccountSettings() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <AccountSettingsNotification />
      <AccountSettingsPrivacy />
      <AccountSettingsOther />
    </div>
  );
} 