export default function DashboardMainComponent({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:p-8">{children}</main>
  );
}
