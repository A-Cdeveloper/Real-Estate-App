"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

type CustomLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

const CustomLink = ({
  href,
  children,
  className,
  onClick,
}: CustomLinkProps) => {
  const pathname = usePathname();

  const isActive =
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "text-foreground hover:text-primary transition-colors font-bold",
        className,
        isActive && "text-primary font-bold"
      )}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
