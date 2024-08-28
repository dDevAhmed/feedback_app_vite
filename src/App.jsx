import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import NavBar from './components/NavBar/NavBar';
import FeedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import FeedbackStat from './components/FeedbackStat';
import FeedbackForm from './components/FeedbackForm';
import SharedCard from './components/shared/Card';
import Button from './components/shared/Button';
import About from './pages/About';
// import Counter from './components/Counter'
// import MyInput from './components/MyInput'
// import TaskManager from './components/TaskManager'
import './App.css'

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const [lightMoodState, setlightMoodState] = useState(true);

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      const newFeed = feedback.filter(item => item.id !== id);
      setFeedback(newFeed);
    }
  }

  const filteredFeedback = () => {

  }

  const averageRating = feedback.reduce((feedback, feedbackItem) => {
    return feedback + feedbackItem.rating;
  }, 0) / feedback.length

  const handleAdd = () => {

  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = `leadway-${uuidv4()}`;
    setFeedback([newFeedback, ...feedback]);
  }

  return (
    <Router>
      <Header />
      <div className='container'>
        <Routes>
          <Route path='/' element={
            <>
              <FeedbackForm handleAdd={addFeedback} />
              <FeedbackStat feedback={feedback} averageRating={feedback.length === 0 ? 0 : averageRating} />
              <FeedbackList feedback={feedback} deleteFeedback={deleteFeedback} />
            </>
          } />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
