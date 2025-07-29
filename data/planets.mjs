export const planets = {
  "solarSystem": {
    "star": "Sun",
    "planets": [
      {
        "name": "Mercury",
        "type": "terrestrial",
        "position": 1,
        "diameter_km": 4879,
        "mass_kg": 3.30e23,
        "orbital_period_days": 88,
        "day_length_hours": 1407.6,
        "average_temp_c": 167,
        "moons": 0,
        "rings": false,
        "atmosphere": ["oxygen", "sodium", "hydrogen"],
        "fun_fact": "Smallest planet in our solar system"
      },
      {
        "name": "Venus",
        "type": "terrestrial",
        "position": 2,
        "diameter_km": 12104,
        "mass_kg": 4.87e24,
        "orbital_period_days": 225,
        "day_length_hours": 5832.5,
        "average_temp_c": 464,
        "moons": 0,
        "rings": false,
        "atmosphere": ["carbon dioxide", "nitrogen"],
        "fun_fact": "Hottest planet with a runaway greenhouse effect"
      },
      {
        "name": "Earth",
        "type": "terrestrial",
        "position": 3,
        "diameter_km": 12742,
        "mass_kg": 5.97e24,
        "orbital_period_days": 365.25,
        "day_length_hours": 24,
        "average_temp_c": 15,
        "moons": 1,
        "rings": false,
        "atmosphere": ["nitrogen", "oxygen", "argon"],
        "fun_fact": "Only known planet to support life"
      },
      {
        "name": "Mars",
        "type": "terrestrial",
        "position": 4,
        "diameter_km": 6779,
        "mass_kg": 6.42e23,
        "orbital_period_days": 687,
        "day_length_hours": 24.6,
        "average_temp_c": -65,
        "moons": 2,
        "rings": false,
        "atmosphere": ["carbon dioxide", "nitrogen", "argon"],
        "fun_fact": "Home to the largest volcano in the solar system (Olympus Mons)"
      },
      {
        "name": "Jupiter",
        "type": "gas giant",
        "position": 5,
        "diameter_km": 139820,
        "mass_kg": 1.90e27,
        "orbital_period_days": 4333,
        "day_length_hours": 9.9,
        "average_temp_c": -110,
        "moons": 95,
        "rings": true,
        "atmosphere": ["hydrogen", "helium"],
        "fun_fact": "Largest planet with a storm (Great Red Spot) lasting centuries"
      },
      {
        "name": "Saturn",
        "type": "gas giant",
        "position": 6,
        "diameter_km": 116460,
        "mass_kg": 5.68e26,
        "orbital_period_days": 10759,
        "day_length_hours": 10.7,
        "average_temp_c": -140,
        "moons": 146,
        "rings": true,
        "atmosphere": ["hydrogen", "helium"],
        "fun_fact": "Has the most extensive ring system made of ice and rock"
      },
      {
        "name": "Uranus",
        "type": "ice giant",
        "position": 7,
        "diameter_km": 50724,
        "mass_kg": 8.68e25,
        "orbital_period_days": 30687,
        "day_length_hours": 17.2,
        "average_temp_c": -195,
        "moons": 28,
        "rings": true,
        "atmosphere": ["hydrogen", "helium", "methane"],
        "fun_fact": "Rotates on its side (98° axial tilt)"
      },
      {
        "name": "Neptune",
        "type": "ice giant",
        "position": 8,
        "diameter_km": 49244,
        "mass_kg": 1.02e26,
        "orbital_period_days": 60190,
        "day_length_hours": 16.1,
        "average_temp_c": -200,
        "moons": 16,
        "rings": true,
        "atmosphere": ["hydrogen", "helium", "methane"],
        "fun_fact": "Has the strongest winds in the solar system (2,100 km/h)"
      },
      {
        "name": "Pluto",
        "type": "dwarf planet",
        "position": 9,
        "diameter_km": 2376,
        "mass_kg": 1.31e22,
        "orbital_period_days": 90560,
        "day_length_hours": 153.3,
        "average_temp_c": -225,
        "moons": 5,
        "rings": false,
        "atmosphere": ["nitrogen", "methane", "carbon monoxide"],
        "fun_fact": "Heart-shaped glacier (Tombaugh Regio) larger than Texas"
      }
    ],
    "metadata": {
      "source": "NASA Planetary Fact Sheet",
      "last_updated": "2023-11-15",
      "note": "Moon counts as of 2023. Pluto classified as dwarf planet since 2006."
    }
  }
};