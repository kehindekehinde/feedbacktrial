import { FaTimes, FaEdit } from "react-icons/fa";
import Card from "./shared/Card";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackItem = ({ item }) => {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  //   const [rating, setRating] = useState(4);
  //   const [text, setText] = useState("This is an eample of feedback item");
  //   const handleClick = () => {
  //     setRating((prev) => {
  //         console.log(prev)
  //         return prev +1
  //     })
  //   }

  return (
    <Card reverse={true}>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <button onClick={() => editFeedback(item)} className="edit">
      <FaEdit color="purple" />
    </button>

      <div className="text-display">{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;
