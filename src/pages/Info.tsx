import React, { JSX } from "react";
import { InfoContent, infoNl } from "../assets/dummyData";

function Heading({ children, level = 2 }: { children: React.ReactNode; level?: 1 | 2 | 3 }) {
  const Tag = ("h" + level) as keyof JSX.IntrinsicElements;
  const sizes = {
    1: "text-2xl",
    2: "text-xl",
    3: "text-lg",
  } as const;
  return <Tag className={`${sizes[level]} font-bold mt-6 mb-2`}>{children}</Tag>;
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return <p className="leading-relaxed mb-3 whitespace-pre-line">{children}</p>;
}

function BulletSection({ title, entries }: { title: string; entries: { label: string; body: React.ReactNode }[] }) {
  return (
    <section>
      <Heading level={2}>{title}</Heading>
      <ul className="list-disc space-y-2 pl-5">
        {entries.map(({ label, body }) => (
          <li key={label}>
            <b>{label}: </b>
            {body}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function InfoPage(): JSX.Element {
  const info: InfoContent = infoNl;

  return (
    <div className="max-w-3xl mx-auto p-6 text-gray-900">
      <Heading level={1}>Festival informatie</Heading>

      <section>
        <Heading level={2}>{info.general.title}</Heading>
        <Paragraph>{info.general.description}</Paragraph>
        <BulletSection
          title="Adres"
          entries={[
            { label: "Locatie", body: info.general.address.location },
            { label: "Navigatieadres", body: info.general.address.navigation },
          ]}
        />
        <Heading level={3}>Datum & Openingstijden</Heading>
        <Paragraph>{info.general.dateTime}</Paragraph>
      </section>

      <section>
        <Heading level={2}>{info.transport.title}</Heading>
        <ul className="space-y-4">
          {info.transport.modes.map(({ mode, details }) => (
            <li key={mode}>
              <Heading level={3}>{mode}</Heading>
              <Paragraph>
                {details}
              </Paragraph>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <Heading level={2}>{info.lockers.title}</Heading>
        <Paragraph>{info.lockers.text}</Paragraph>
      </section>

      <section>
        <Heading level={2}>{info.faq.title}</Heading>
        <ul className="space-y-4">
          {info.faq.items.map(({ q, a }) => (
            <li key={q}>
              <Heading level={3}>{q}</Heading>
              <Paragraph>{a}</Paragraph>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
