import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, status }) => {
  console.log(avatar, name, status);
  return (
    <li className={css.item}>
      <span className={status ? css.isOnline : css.isOffline}>{status}</span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
export default FriendListItem;
