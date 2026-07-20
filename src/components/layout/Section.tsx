import { ReactNode } from "react";

type Props = {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export default function Section({
  id,
  title,
  subtitle,
  children,
}: Props) {
  return (
    <section
      id={id}
      className="py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <h2 className="text-4xl font-bold">
            {title}
          </h2>

          {subtitle && (
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              {subtitle}
            </p>
          )}

        </div>

        {children}

      </div>
    </section>
  );
}