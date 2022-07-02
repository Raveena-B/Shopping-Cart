const profile = new Map();

//create route

const createProfile = ({ name, age, gender }) => {
  console.log(name, age, gender);
  const _profile = { name, age, gender };
  profile.set(_profile.name, _profile);
};

//get route

const getProfile = () => {
  return [...profile.values()];
};

module.exports = { createProfile, getProfile };
