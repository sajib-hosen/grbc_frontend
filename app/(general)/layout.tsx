import AppFooter from "@/components/shared/footer/app-footer";
import TopNav from "@/components/shared/nav/top-nav";
import { ThemeProvider } from "@/context/theme-provider";

export default function GeneralLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <TopNav />
      <div className="max-w-[1100px] mt-[80px] mx-auto">
        <div className=" min-h-screen">{children}</div>
      </div>
      <AppFooter />
    </ThemeProvider>
  );
}
