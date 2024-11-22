import PropTypes from "prop-types";
import Panel from "./Panel.jsx";
import { getImageUrl } from "./utils.js";

Profile.propTypes = {
  person: PropTypes.object,
};

let currentPerson;

export default function Profile({ person }) {
  currentPerson = person;
  // 点击collapse的时候不会去打印这里
  console.log(currentPerson, "== currentPerson");
  return (
    <Panel>
      <Header />
      <Avatar />
    </Panel>
  );
}

function Header() {
  return <h1>{currentPerson.name}</h1>;
}

function Avatar() {
  return (
    <img
      className="avatar"
      src={getImageUrl(currentPerson)}
      alt={currentPerson.name}
      width={50}
      height={50}
    />
  );
}
