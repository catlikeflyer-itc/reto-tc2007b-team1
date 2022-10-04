import dummy from "../data/dummyData.json";

const login = (email, password) => {
  // Later change to API auth
};

// Test func
const userSetter = (name, email, password, setUser) => {
  setUser({ name, email, password, pos: "Admini", id: 10 });
};

export { userSetter };
