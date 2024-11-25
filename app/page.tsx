"use client";
import {
  Accordion,
  Button,
  Card,
  Center,
  Grid,
  GridCol,
  Group,
  Image,
  Stack,
} from "@mantine/core";
import Link from "next/link";
import { useEffect } from "react";

export default function Page() {
  const groceries = [
    {
      value: "Bienestar y prevención",
      description:
        "Priorizamos el bienestar físico y mental de nuestros pacientes y les entregamos consejos de prevención, manejo de salud, seguimiento y apoyo para adultos y niños",
    },
    {
      value: "Consultas de salud",
      description:
        "Tratamos con una vasta experiencia en el tratamiento de condiciones crónicas además de enfermedades puntuales tan inocentes como un resfriado",
    },
    {
      value: "Experienca en tratamientos a personas LGBTQIA+ ",
      description:
        "Tenemos experiencia en los procedimientos, tratamientos y tecnología más modernos para el tratamiento de la comunidad",
    },
  ];

  useEffect(() => {
    document.title = "Aosame Salud";
  }, []);

  const items = groceries.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={undefined}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Stack gap={"xl"}>
      <Card style={{ backgroundColor: "#649cb4" }}>
        <Group wrap="nowrap" gap={"xs"} justify="end">
          <Card maw={400} style={{ backgroundColor: "#649cb4" }}>
            <div style={{ textAlign: "right", fontSize: 20, color: "white" }}>
              Ofrecemos cuidado de saud completo, incluyendo medicina
              preventativa, Cuidado de enfermedades crónicas y respuestas
              innovativas a cuidados modernos
            </div>
            <br />
            <Button component={Link} href={""}>
              Conviertete en Paciente
            </Button>
          </Card>
          <Image
            miw={"50%"}
            maw={"50%"}
            src={
              "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt="Foto de un estetoscopio"
          />
        </Group>
      </Card>
      <Card>
        <Group wrap="nowrap">
          <Card maw={"50%"}>
            <div style={{ textAlign: "right", fontSize: 20 }}>
              <h3>Nuestro Cuidado</h3>
              <div>
                AoSame Salud entra cuidado holistico de pies a cabeza,
                incluyendo cuidados de enfermedades crónicas, tratamientos
                estéticos como acne, cuidado de arrugas y verrugas y
                tratamientos especialistas como terapia de reemplazo hormonal y
                PrEP
              </div>
            </div>
          </Card>

          <Accordion maw={"50%"} defaultValue="Bienestar y prevención">
            {items}
          </Accordion>
        </Group>
      </Card>

      <Card style={{ backgroundColor: "#649cb4" }}>
        <Group wrap="nowrap">
          <Card miw={"50%"} maw={"50%"} style={{ backgroundColor: "#649cb4" }}>
            <div style={{ textAlign: "right", fontSize: 20, color: "white" }}>
              <div>
                Conviertete en un paciente y mira por que somos diferentes
              </div>
            </div>
          </Card>
          <Card miw={"50%"} style={{ backgroundColor: "#649cb4" }}>
            <Button
              miw={"100%"}
              component="a"
              href="https://beta-sacmed.novacaribe.com/ReservaOnline/11541"
            >
              Agenda
            </Button>
          </Card>
        </Group>
      </Card>
    </Stack>
  );
}
