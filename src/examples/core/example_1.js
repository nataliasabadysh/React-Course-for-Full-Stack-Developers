// Component 
export const Header = () => {
    return <header> Header app </header>
}

// AS a Class 
export class HeaderApp extends Component {
    constructor(props){
      super(props);

      this.state = {
        myState: true
      }
    }
    
    render() {

        return <header> Header app </header>
    }
  }
  

// function AppBar(){
//     return <header> Header app </header>
// }

// export default AppBar;