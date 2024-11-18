"use client";
import {
  AppShell,
  Avatar,
  Burger,
  Group,
  Menu,
  UnstyledButton,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { HeaderSimple } from "./header";

type LayoutClientProps = {
  children: React.ReactNode;
};

export function LayoutClient({ children }: LayoutClientProps) {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  return (
    <AppShell header={{ height: 60 }} padding="md" withBorder={false}>
      <AppShell.Header>
        <HeaderSimple />
      </AppShell.Header>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
