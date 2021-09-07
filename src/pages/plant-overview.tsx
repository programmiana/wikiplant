import React from "react";
import { Container } from "../components/container";
import { PlantCard } from "../components/plant-card";
import { Plant } from "../types";
import { plants } from "../utils/plants";
import { sortBy } from "lodash";
import { SearchField } from "../components/search-field";

export const PlantOverview = () => {
  const plantArray: Plant[] = sortBy(plants, ["scientific_name"]);

  return (
    <Container flow="row" gap={2} alignItems="start">
      <Container autoColumns="5fr 1fr">
        <h1>All Plants</h1>
        <SearchField />
      </Container>
      <Container
        flow="row"
        alignItems="stretch"
        justifyContent="space-between"
        templateColumns="1fr 1fr 1fr 1fr"
      >
        {plantArray.map((plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </Container>
    </Container>
  );
};
