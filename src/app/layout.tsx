import "./globals.css";
import RefreshRedirect from '@/components/RefreshRedirect'

export const metadata = {
  title: "Joyal Biju | Cloud & DevOps Engineer",
  description: "Portfolio of Joyal Biju — Associate Cloud Engineer with hands-on experience in AWS, DevOps, Kubernetes, Terraform, CI/CD pipelines, and Infrastructure Automation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <RefreshRedirect />
        {children}
      </body>
    </html>
  );
}
