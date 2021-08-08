
function Profile(props ) {
    const styleButtum={widht:"100",border:"solid black"};
  


    return (<div>
      <h1>{props.fullName}</h1>
      <p>{props.bio}</p>
      <p>{props.profession}</p>
      <div>{props.children}</div>
      <button  onClick={()=>props.FnHandleName(fullName)} style = {styleButtum} > Click me </button>
      </div>
    );}
    export default Profile;