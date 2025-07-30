import "./App.css";
import UserCard from "./components/UserCard";

const userData = [
  {
    id: 1,
    name: "h662",
    job: "Programmer",
    imageSrc: "avatar.webp",
  },
  {
    id: 2,
    name: "홍성현",
    job: "우주비행사",
    imageSrc: "avatar2.webp",
  },
  {
    id: 3,
    name: "가나다",
    job: "작가",
    imageSrc: "avatar3.jpeg",
  },
];

const App = () => {
  return (
    <>
      {userData.map((value, index) => (
        <UserCard
          key={value.id}
          name={value.name}
          job={value.job}
          imageSrc={value.imageSrc}
        />
      ))}
    </>
  );
};

export default App;