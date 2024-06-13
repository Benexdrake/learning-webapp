import Navbar from "./navbar";

export default function Layout(props:any) {
  const children = props.children;
  return (
<>
        <Navbar/>
        <div className="main">
          <div className="children">{children}</div>
        </div>       
</>
    );
  }