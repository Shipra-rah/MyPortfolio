import img from "../assets/Shipra.png";

function ProfilePhoto(){

    return(
         <img
          src={img}
          alt=""
          className="rounded-full border-2 border-white w-full h-4/5 p-0.5   hover:grayscale-0 transition duration-300"
        />
    )
}
export default ProfilePhoto;