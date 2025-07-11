"use client";
import { useState } from 'react';
import AccountGalleryTabs from '../../../components/account/AccountGalleryTabs';
import AccountGalleryTable from '../../../components/account/AccountGalleryTable';

export default function AccountGallery() {
  const [tab, setTab] = useState('photo');
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <AccountGalleryTabs value={tab} onChange={setTab} />
      <AccountGalleryTable filterType={tab} />
    </div>
  );
} 