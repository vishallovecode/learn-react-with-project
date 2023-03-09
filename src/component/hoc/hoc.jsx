const withClickEvent = (CustomComponent)=> {
    return (props)=> {
        const triggeredEvent = ()=> {
            console.log("Triggering user info and logging it into the server");
            props.onClick();
        }
        return  (
            <CustomComponent {...props} onClick = {triggeredEvent}/>
        )
    }

}

export default withClickEvent;

