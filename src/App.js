import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import Feedbacklist from "./components/Feedbacklist";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import Card from "./components/shared/Card";
import AboutPages from "./pages/AboutPages";
import { FeedbackProvider } from "./context/FeedbackContext";
import AboutIconLink from "./components/AboutIconLink";

const App = () => {
  return (
    <FeedbackProvider>
      <Router>
        <Header />

        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <React.Fragment>
                  <FeedbackForm />
                  <FeedbackStats />
                  <Feedbacklist />
                  <Card>Hello</Card>
                  <h1>fish</h1>
                </React.Fragment>
              }
            ></Route>

            <Route path="/about" element={<AboutPages />} />
          </Routes>

          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
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
