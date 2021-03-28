import "./home.scss";
import UserList from "./components/UserList";

const Home = () => {
  const users = [
    {
      id: "u1",
      name: "Hank Wolf",
      image:
        "https://images.pexels.com/photos/4757198/pexels-photo-4757198.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      places: 3,
    },
    {
      id: "u2",
      name: "Shallan Stormblessed",
      image:
        "https://images.pexels.com/photos/3514150/pexels-photo-3514150.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      places: 3,
    },
  ];
  return <UserList items={users} />;
};

export default Home;
