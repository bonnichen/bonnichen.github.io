import ProjectCard from "./Components/ProjectCard";

const Projects = () => {
  return (
    <div className="projectContainer" id="project">
      <h3 style={{ marginBottom: "6vw" }}>Projects</h3>
      <ProjectCard
        title="Chess"
        image={{
          src: "images/chess.png",
          alt: "game of chess where black is in play. Black has its bishop selected and yellow highlights on the board corresponds to all possible moves for the selected bishop.",
        }}
        description="A fully interactive chess application designed with a 
        graphical user interface. The game allows players to enjoy both local 
        multiplayer matches and single-player games against a computer AI."
        link="https://github.com/bonnichen/chess-prototype#"
      />
      <ProjectCard
        title="Cash Flow"
        image={{
          src: "images/cashflowmainboard.png",
          alt: "A overview of the users spendings. The users icome, spendings and savings are listed on the left. Their budgetting summary and a piechart visualizing the summary is on the right.",
        }}
        description="An interactive budgeting website that allows users to track their personal spending and plan for future investments."
        link="https://github.com/clin0595/finalProjectTrends"
      />
    </div>
  );
};

export default Projects;
