import { motion } from "framer-motion";
import "../styles/WidgetGrid.css";

const ProfileWidget = ({ profilePic, name, email, bio }) => {
  return (
    <motion.div
      className="profile-widget"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
    >
      <img src={profilePic} alt={`${name}'s profile`} className="profile-pic" />
      <div className="profile-info">
        <h3>{name}</h3>
        <p>{email}</p>
        <p className="bio">{bio}</p>
      </div>
    </motion.div>
  );
};

export default ProfileWidget;
