"use client";
import { useDisclosure } from "@mantine/hooks";
import classes from "./css/HeaderSimple.module.css";
import { useState } from "react";
import { Burger, Container, Group, Image } from "@mantine/core";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const links = [
  { link: "/", label: "Home" },
  { link: "/pricing", label: "Servicios" },
  { link: "/faq", label: "Preguntas Frecuentes" },
  { link: "https://www.instagram.com/sone.kei/", label: "Nosotros" },
];

export function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        setActive(link.link);
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Image c={"red"} src={"https://cdn.discordapp.com/attachments/743269430062219285/1310736658710401114/Untitled-removebg-preview.png?ex=67464e23&is=6744fca3&hm=6adfd1de22817a94f92815e221197f791bc8412b3174725f44cd43cc38b9b416&"} mah={"100%"} />
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
