import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Feedbacklist from "./components/Feedbacklist";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackData from "./data/FeedbackData";
import Card from "./components/shared/Card";
import AboutPages from "./pages/AboutPages";

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <div>
      <Header />

      <div className="container">
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <Feedbacklist feedback={feedback} handleDelete={deleteFeedback} />
        <Card>Hello</Card>
        <h1>fish</h1>

        <AboutPages />
      </div>
    </div>
  );
};

// function App() {
//   return (
//     <div>
//       <h1>My App</h1>
//       <p>this is my Blog post</p>
//     </div>
//   );
// }

export default App;
