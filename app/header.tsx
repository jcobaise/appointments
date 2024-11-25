"use client";
import { useDisclosure } from "@mantine/hooks";
import classes from "./css/HeaderSimple.module.css";
import { useState } from "react";
import { Burger, Container, Group, Image } from "@mantine/core";
import Link from "next/link";

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
        <Image
          src={
            "https://raw.githubusercontent.com/jcobaise/appointments/refs/heads/master/aotransparenticon.png"
          }
          mah={"100%"}
        />
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
