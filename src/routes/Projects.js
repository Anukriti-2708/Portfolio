
import Medify from '../images/medify image.jpg';
import Amazon from '../images/amazon store clone image.jpg';
import Blog from '../images/woman working.jpg';
import CustomCard from '../components/CustomCard';
import './Projects.css';


const Projects = () => {
  
  return (
    <div className='projects-wrapper'>
    <div className= 'projects'>
      <h2 className='title'>Projects</h2>
      <div className='wrapper'>
        <CustomCard imageSrc={Medify}
          heading="Medify App"
          description=" The app was created as a prototype of an idea for collecting and managing Patient
                       Health Records, online sharing of reports to and from the hospitals, and keeping track of patients medical history."
            url ="https://github.com/Anukriti-2708/MedifyApp"
          className="card"
          />
        
        <CustomCard imageSrc={Amazon}
          heading="Amazon Store Clone App"
          description="Built this project to understand different functionalities of an E-commerce website and get hands-on experience
                       working with React.js.Worked on this project as a member of a team of three people"
            url="https://github.com/Anukriti-2708/Shopping-App"
          className="card"
           />
        
        <CustomCard imageSrc={Blog}
            heading="Blog App"
            description="A captivating MERN stack project with Material UI frontend, offering seamless CRUD
                    operations,post-categorization, and dynamic comment functionality."
            url="https://github.com/Anukriti-2708/MERN-Blog-App"
          className="card"
           />
        
      </div>
      </div>
     </div>
  );
};

export default Projects;
