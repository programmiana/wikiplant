import React, { FC } from "react";
import { Container } from "../components/container";
import { PlantCard } from "../components/plant-card";
import { Plant } from "../types";
import { plants } from "../utils/plants";
import { sortBy } from "lodash";
import { useParams } from "react-router-dom";

export const PlantProfile: FC = () => {
  const plantArray: Plant[] = plants;
  const { id } = useParams<{ id: string }>();
  const plant = plants.find((plant) => plant.id === id);

  console.log(plant);
  return (
    <Container flow="row" gap={2} alignItems="start">
      <h1>{plant.scientific_name}</h1>
      <Container
        flow="row"
        gap={5}
        alignItems="baseline"
        templateColumns="1fr 1fr 1fr 1fr"
      ></Container>
    </Container>
  );
};
