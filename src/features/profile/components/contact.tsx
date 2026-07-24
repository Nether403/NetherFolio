import { MailIcon } from "lucide-react";

import { USER } from "@/features/profile/data/user";

import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

export function Contact() {
  return (
    <Panel id="contact">
      <PanelHeader>
        <PanelTitle>Contact</PanelTitle>
      </PanelHeader>

      <PanelContent className="space-y-2">
        <p className="text-sm text-muted-foreground">{USER.jobTitle}</p>
        <ul className="space-y-2">
          {USER.emails.map((item) => (
            <li key={item.address}>
              <a
                href={`mailto:${item.address}`}
                className="group flex items-center gap-2 text-sm underline-offset-4 hover:underline"
              >
                <MailIcon
                  className="size-3.5 shrink-0 text-muted-foreground"
                  aria-hidden
                />
                <span className="font-medium">{item.address}</span>
                <span className="text-muted-foreground">
                  ({item.label}
                  {item.primary ? " · primary" : ""})
                </span>
              </a>
            </li>
          ))}
        </ul>
      </PanelContent>
    </Panel>
  );
}
