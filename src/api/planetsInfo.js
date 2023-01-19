export const planetsInfo = {
  Mercury: {
    name: "Mercury",
    wikiLink: "",
    overview: {
      text: "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
    },
    structure: {
      text: "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
    },
    geology: {
      text: "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
    },
    details: {
      rotation: "58.6 days",
      revolution: "87.97 days",
      radius: "2,439.7 km",
      avgTemp: "430°c",
    },
  },
  Venus: {},
  Earth: {},
  Mars: {},
  Jupiter: {},
  Saturn: {},
  Uranus: {},
  Neptune: {},
};

export const planetsNames = Object.keys(planetsInfo);
