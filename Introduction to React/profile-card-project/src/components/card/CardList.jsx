import CardItem from "./CardItem";
import userAvatarImg from "../../assets/image/image.jpeg";
import userAI from "../../assets/image/1.jpg";
import userAImage from "../../assets/image/2.jpg";
import userAvatarImgage from "../../assets/image/3.jpg";
import classes from "./CardList.module.css";

export default function CardList() {
  return (
    <div className={classes.ListContainer}>
      <CardItem
        name="Suva Junga Chhetri"
        avatarImg={userAvatarImg}
        email="suvajchhetri@gmail.com"
        location="Balaju"
        experience="2 Years"
        role="Frontend Developer"
      />
      <CardItem
        name="Ram Shrestha"
        avatarImg={userAI}
        email="ramu@gmail.com"
        location="Kalanki"
        experience="5 Years"
        role="Backend Developer"
      />
      <CardItem
        name="Boom"
        avatarImg={userAImage}
        email="sammy@gmail.com"
        location="samakushi"
        experience="1 Years"
        role="UI/UX Developer"
      />
      <CardItem
        name="Sammy"
        avatarImg={userAvatarImgage}
        email="boom@gmail.com"
        location="Ranibon"
        experience="8 Years"
        role="Developer"
      />
    </div>
  );
}
