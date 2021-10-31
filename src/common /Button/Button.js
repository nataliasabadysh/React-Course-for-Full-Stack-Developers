
import { ButtonStyle } from './ButtonStyle';

const Button = ({ type, onSendButton, label, children }) => <ButtonStyle type={type}  onClick={onSendButton}>{label}</ButtonStyle>


{/* <Button onSendButton={()=> console.log('')} type="primery"  label="Save contacts" /> */}

// const Component = ({ children }) => <>{children}</>
// <Component>
//     <Header/>
//     </Component>

// <Component>
//     <Footer/>
//     </Component>