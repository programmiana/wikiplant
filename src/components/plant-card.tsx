import React, { FC } from "react";
import styled from "styled-components";
import { Colors } from "../global-style";
import { Container } from "./container";
import { Plant } from "../types";

const StyledCard = styled(Container)`
  padding: 1rem;
  /* background-color: #faf8f8; */
  border-radius: 1%;

  /* box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  transition: 0.3s; */

  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  }
`;
const Italic = styled.p`
  font-style: italic;
`;

const StrongP = styled.a`
  color: ${Colors.darkGrey};
`;

type PlantCardProps = {
  plant: Plant;
};

const Img = styled.img`
  float: left;
  width: 250px;
  height: 250px;
  object-fit: cover;
`;

const NoImg = styled.div`
  display: flex;
  vertical-align: middle;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 250px;
  background-color: ${Colors.inactiveLight};
`;
// const NoImg = styled.div`
//   height: 250px;
//   width: 100%;
// `;

// // const ImgContainer = styled.div`
// //   display: flex;
// //   vertical-align: middle;
// //   align-items: center;
// //   justify-content: center;
// // `;

export const PlantCard: FC<PlantCardProps> = ({ plant }) => {
  return (
    <StyledCard flow="row" alignItems="start" justifyContent="center" gap={0.5}>
      {plant.image_url ? (
        // <ImgContainer>
        <Img
          alt={plant.common_name}
          src={
            plant.image_url.includes("https")
              ? plant.image_url.replace("https:", "")
              : plant.image_url.replace("http:", "")
          }
        />
      ) : (
        // </ImgContainer>
        // <ImgContainer>
        <NoImg>
          <p>No Image</p>
        </NoImg>
        // </ImgContainer>
      )}
      <Container flow="row" gap={0}>
        <StrongP>Scientific Name</StrongP>
        <Italic>{plant.scientific_name}</Italic>
      </Container>
      {(plant.common_name || plant.common_names) && (
        <Container flow="row" gap={0}>
          <StrongP href={`/plant/${plant.id}`}>Common Names</StrongP>
          <p>{plant.common_name}</p>
        </Container>
      )}
    </StyledCard>
  );
};
