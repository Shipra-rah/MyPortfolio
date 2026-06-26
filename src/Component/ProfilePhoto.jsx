import img from "../assets/Shipra.png";

function ProfilePhoto(){

    return(
         <img
          src={img}
          alt="Profile"
          className="aspect-square object-cover rounded-full border-2 border-white/20 w-full p-0.5 hover:border-white/40 transition duration-300"
        />
    )
}
export default ProfilePhoto;