import React from 'react';
import CollectionCard from './components/Collection-Card/CollectionCard';
import Header from './components/Header/Header'

function App() {

  return (
    <div className="app">
     <Header/>
     <CollectionCard id={0} name={'Hero Punk'} traits={[{'value': 7}]} image={'https://lh3.googleusercontent.com/hJKQWDj6ZUlEnBsdxH-_gK7sAosVTJjBLP_UE4TD-wVBFATfXgRJheHy1CGwp8Ly3Gz3yNvW7H9fJOjbyYt6qsmDzcld6ObliXouJz8=w304'}/>
    </div>
  );
}

export default App;
