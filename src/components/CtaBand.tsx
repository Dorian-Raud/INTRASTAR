import Link from "next/link";

type CtaBandProps = {
  heading: string;
  sub: string;
  buttonLabel: string;
  href: string;
};

export default function CtaBand({ heading, sub, buttonLabel, href }: CtaBandProps) {
  return (
    <section className="a-ctaband">
      <h2 className="a-cta-h">{heading}</h2>
      <p className="a-cta-sub">{sub}</p>
      <Link href={href} className="a-btn a-btn-white">
        {buttonLabel}
      </Link>
    </section>
  );
}
