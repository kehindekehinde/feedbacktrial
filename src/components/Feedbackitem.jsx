import { FaTimes} from "react-icons/fa"
// import { useState } from "react"; 
import Card from "./shared/Card";


const FeedbackItem = ({item, handleDelete}) => {
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
      <button onClick={()=> handleDelete(item.id)} className='close'>
      <FaTimes color= 'purple'/>
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;
