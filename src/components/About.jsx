function About ({image, about}) {
    const defaultImage = "https://via.placeholder.com/215";
    if (!image) {
        image = defaultImage;
    }
    return(
        <aside>
           <img src={image} alt="blog logo"/>
           <p>{about}</p>
        </aside>
    );


}

export default About;
