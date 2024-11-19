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
        "Tratamos con una basta experiencia en el tratamiento de condiciones crónicas además de enfermedades puntuales tan inocentes como un resfriado",
    },
    {
      value: "Experienca en tratamientos a personas LGBTQIA+ ",
      description:
        "Tenemos experiencia en los procedimientos, tratamientos y tecnología más modernos para el tratamiento de la comunidad",
    },
  ];

  const items = groceries.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={undefined}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Stack gap={"xl"}>
      <Card>
        <Group wrap="nowrap" gap={"xs"} justify="end">
          <Card maw={400}>
            <div style={{ textAlign: "right", fontSize: 20 }}>
              Ofrecemos cuidado de salud completo, incluyendo medicina
              preventativa, Cuidado de enfermedades crónicas y respuestas
              innovativas a cuidados modernos
            </div>
            <br />
            <Button component={Link} href={""}>
              Conviertete en Paciente
            </Button>
          </Card>
          <Image
            src={
              "https://cdn.discordapp.com/attachments/758361942972170240/1308090690965737512/B8F07C39-A1FA-4E7A-9109-F09A3FA0D2B8.png?ex=673cade3&is=673b5c63&hm=f3c72cdda4505eee424da0cd3edea0e8dfae48493384cd2f57049869f6076dbc&"
            }
            alt="Foto de un estetoscopio"
          />
        </Group>
      </Card>
      <Card>
        <Grid>
          <GridCol span={3} />
          <GridCol span={3}>
            <div style={{ textAlign: "right", fontSize: 20 }}>
              <h3>Nuestro Cuidado</h3>
              <div>
                AoSame Salud entra cuidado holistico de pies a cabeza,
                incluyendo cudados de enfermedades crónicas, tratamientos
                estéticos como ... y tratamientos especialistas como ...
              </div>
            </div>
            <br />
          </GridCol>
          <GridCol span={6}>
            <br />
            <br />
            <Accordion maw={1000} defaultValue="Apples">
              {items}
            </Accordion>
          </GridCol>
        </Grid>
      </Card>

      <Card>
        <Grid>
          <GridCol span={3} />
          <GridCol span={3}>
            <div style={{ textAlign: "right", fontSize: 20 }}>
              <div>
                Conviertete en un paciente y mira por que somos diferentes
              </div>
            </div>
            <br />
          </GridCol>
          <GridCol span={6}>
            <br />
            <Center>
              <Button
                miw={500}
                component="a"
                href="https://beta-sacmed.novacaribe.com/ReservaOnline/11541"
              >
                Agenda
              </Button>
            </Center>
          </GridCol>
        </Grid>
      </Card>
    </Stack>
  );
}
