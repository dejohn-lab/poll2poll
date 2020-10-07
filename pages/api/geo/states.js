import csc from 'country-state-city';

export default async (req, res) => {
  const country = csc.getCountryByCode('US');
  const states = csc.getStatesOfCountry(country.id);
  res.statusCode = 200;
  res.json(states.map((s) => s.name));
};
