function ProfilePhoto(){
    const url = "./src/assets/ShipraProfile.jpg";
    return(
         <img
          src={url}
          alt=""
          className="rounded-full border-2 border-white w-full h-4/5 p-0.5  filter grayscale hover:grayscale-0 transition duration-300"
        />
    )
}
export default ProfilePhoto;