import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Image } from "semantic-ui-react";
import ModalForm from "../../utilities/modals/MainModal"
import LoginForm from "../Users/LoginForm";
import logo from "../../utilities/fontsAndImage/logo.jpg"
const HomePage = () => {
  const [openModal, setModal] = useState(false);

  return (
    <div className="home">
      <div className="home-segment">
        <Image size="large" src={logo} alt="logo" />
        { localStorage.getItem("jwt") ? (
          <Button
            animated
            color="black"
            size="massive"  
            as={Link}
            to="/suknie-salonowe"
          >
            <Button.Content visible>Witaj</Button.Content>
            <Button.Content hidden>
              <Icon name="sign-in" />
            </Button.Content>
          </Button>
        ) : (
          <Button
            animated
            onClick={() => {
              setModal(true);
            }}
            color="black"
            size="massive"
          >
            <Button.Content visible>Zaloguj się</Button.Content>
            <Button.Content hidden>
              <Icon name="sign-in" />
            </Button.Content>
          </Button>
        )}

        <ModalForm
          body={<LoginForm />}
          openModal={openModal}
          setModal={setModal}
        ></ModalForm>
      </div>
    </div>
  );
};

export default HomePage;
