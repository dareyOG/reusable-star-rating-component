import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

import StarRating from './App';

function TextStar({ color }) {
  const [bookRating, setBookRating] = useState(0);
  return (
    <div>
      <StarRating color="violet" maxRating={10} onSetBookRating={setBookRating} size={50} />
      <p style={{ color: `${color}` }}>This book is rated {bookRating} ⭐</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StarRating maxRating={5} />
    <StarRating maxRating={10} size={25} color="red" className="test" />
    <StarRating messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']} color="green" />
    <StarRating maxRating={5} color="cyan" defaultRating={2} />
    <TextStar color="red" />
    <StarRating
      maxRating={6}
      size={45}
      messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing', 'Excellent']}
      messageColor={['red', 'brown', 'pink', 'gray', 'greenyellow', 'green']}
    />
  </React.StrictMode>
);
