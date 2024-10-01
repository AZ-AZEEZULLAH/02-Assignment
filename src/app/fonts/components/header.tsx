
import Link from "next/link";

export default function Header (){
    
    return ( 
        <div  className= "header">
           <header className="header"> 
            <ul className="header-buttons">
                <Link href={"/"}>
                <li>Home</li>
                </Link>
                <Link href={"/about-us"}>
                <li>about</li>
                </Link>
                <Link href={"/contacts-us"}>
                <li>contact</li>
                </Link>
                <Link href={"/jobs"}>
                <li>jobs</li>
                </Link>
            </ul>
            </header>
             

            
        
            <div className="introSection">

                <h1>Welcome to my page</h1>  
                </div>

                
                <div className="imageContainer">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBiZrpe3bGLvdCAQWN4hO55ou7YDrRj6QgWw&s"
                alt="Next.js image"
                width={600}
                height={200}
            />
            
            </div>

            
    
        </div>
        

    )
}