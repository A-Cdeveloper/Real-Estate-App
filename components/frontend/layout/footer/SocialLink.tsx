import Link from "next/link";

type SocialLinkProps = {
  icon: string;
  href: string;
  ariaLabel: string;
};

const SocialLink = ({ icon, href, ariaLabel }: SocialLinkProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="w-10 h-10 rounded-full bg-background/20 flex items-center justify-center hover:bg-background/30 transition-colors cursor-pointer"
    >
      <span className="text-background" aria-hidden="true">
        {icon}
      </span>
    </Link>
  );
};

export default SocialLink;
