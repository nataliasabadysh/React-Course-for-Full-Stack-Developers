const Contacts = () => {

   const [number, setNatber] = useState('09397583782');

   const contacts = useSelect(state=> state.contacts);

   const onSave = () =>{

        const data = {
            value: '90349830480'
        }

        const isExist = contacts.find(contact =>contact.number ===  number)


        if(isExist){
            // `Number isExist ` 
        }
        else{
            // REDUCER  [...state,  data]
        }
   }
    return

}