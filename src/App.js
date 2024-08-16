const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
function EatNSplit() {
  return (
    <div className="eatnsplit">
      <div className="sidebar">
        <FriendsList />
        <FormAddFriend />
        <Button>Add Friend</Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

export default EatNSplit;

const FriendsList = () => {
  return (
    <ul className="friendsList">
      {initialFriends.map((friend) => (
        <Friend key={friend.id} friends={friend} />
      ))}
    </ul>
  );
};

const Friend = ({ friends }) => {
  const { name, image, balance } = friends;
  return (
    <li>
      <img src={image} alt={image}></img>
      <div>
        <h3>{name}</h3>
        {balance < 0 && (
          <p className="red">
            You owe {name} ${balance}{" "}
          </p>
        )}
        {balance > 0 && (
          <p className="green">
            {name} owes you ${balance}
          </p>
        )}
        {balance === 0 && <p>You and {name} are equal</p>}
      </div>
      <Button>Select</Button>
    </li>
  );
};

const Bill = () => {
  return <div></div>;
};

const Button = ({ children }) => {
  return <button className="button">{children}</button>;
};
const FormAddFriend = () => {
  return (
    <form className="form-add-friend">
      <label>Friend Name</label>
      <input type="text"></input>

      <label>Image Url</label>
      <input type="text"></input>
      <Button>Add</Button>
    </form>
  );
};

const FormSplitBill = () => {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with (friend)</h2>
      <label>Bill Value</label>
      <input type="text"></input>
      <label>Your Expense</label>
      <input type="text"></input>
      <label>Friend Expense</label>
      <input type="text"></input>
      <label type="text">Who is paying the bill?</label>
      <select>
        <option value={"you"}>You</option>
        <option value={"friend"}>Friend</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
};
