import React, { FC } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from "./components/container";
import { NavHeader } from "./components/nav-header";
import { Layout } from "./global-style";
import { PlantOverview } from "./pages/plant-overview";
import { PlantProfile } from "./pages/plant-profile";

export const Routes: FC = () => {
  return (
    <BrowserRouter>
      <NavHeader />
      <Switch>
        <Route path="/plant/:id">
          <PlantProfile />
        </Route>
        <Route path="/">
          <Layout>
            <PlantOverview />
          </Layout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
