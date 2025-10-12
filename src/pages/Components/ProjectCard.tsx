type ProjectCardProps = {
    title: string;
    image: {
    src: string
    alt?: string
  }
    description: string;
    link: string;
}

const ProjectCard = (props: ProjectCardProps) => {
    const { title, image, description, link} = props
    return(
    <div className="cardContainer">
    <div className="images"> 
        <img src={image.src} alt={image.alt || title} className="projectImage"/>
    </div>
    <div className="projectInfo">
        <h4>{title}</h4>
        <h5>{description}</h5>
        <a href={link} target="_blank" rel="noopener noreferrer">
        <button className="viewProjectButton">
            Visit
        </button>
        </a>
    </div>
    </div>
    )
}

export default ProjectCard