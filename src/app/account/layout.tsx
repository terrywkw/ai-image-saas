import AccountTabs from './AccountTabs';

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AccountTabs />
      <main className="min-h-[70vh] bg-white">
        {children}
      </main>
    </>
  );
} 