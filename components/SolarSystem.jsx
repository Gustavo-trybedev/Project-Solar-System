import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    const planetsList = planets.map(({ name, image }) => (
      <PlanetCard
        key={ name }
        planetName={ name }
        planetImage={ image }
      />
    ));
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        { planetsList }
      </div>
    );
  }
}

export default SolarSystem;
