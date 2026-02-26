import Card from "./Card";
import something from "../../assets/image/image.jpeg";
import classes from "./CardItem.module.css";
export default function CardItem({
  name,
  avatarImg,
  email,
  location,
  experience,
  role,
}) {
  return (
    <Card>
      <div className={classes.header}>
        <img className={classes.avatar} src={avatarImg} alt="profile avatar" />
        <div className={classes.userInfo}>
          <h2 className={classes.name}>{name}</h2>
          <p className={classes.role}>Frontend developr</p>
        </div>
      </div>
      <div className={classes.details}>
        <div className={classes.detailItem}>
          <span>{email}</span>
        </div>
        <div className={classes.detailItem}>
          <span className={classes.label}>Location:</span>
          <span>{location}</span>
        </div>
        <div className={classes.detailItem}>
          <span className={classes.label}>Experience:</span>
          <span>{experience}</span>
        </div>
      </div>
      <button className={classes.button}>View More</button>
    </Card>
  );
}
