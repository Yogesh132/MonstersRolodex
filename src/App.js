import logo from './logo.svg';
import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => this.setState(() => {
      return {monsters: users}
    },
    () => {
      console.log(this.state);
    }))  
  }
  onSearchChange = (event) =>{
    console.log(event.target.value)
    const searchField = event.target.value.toLocaleLowerCase(); 
    

    this.setState(() =>{
      return {searchField}
    })

  } 
  render() {
      const{monsters, searchField} = this.state;
      const{ onSearchChange } = this; 
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
      }); 

    return <div className='App'>

    { /*
      filteredMonsters.map((monster) => {
        return <div key={monster.id}><h1>{monster.name}</h1>
        </div>;

      })
      */
    }
    <h1 className='app-title'> Monsters Rolodex</h1>
<SearchBox  onChangeHandler = {onSearchChange} 
placeholder = 'search monsters' 
className='monsters-search-box  '></SearchBox>
<CardList monsters ={filteredMonsters} />
    </div>;
  } 
}


export default App;