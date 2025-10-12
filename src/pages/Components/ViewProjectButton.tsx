import "./style.css";

const ViewProjectButton = () => {
  return (
    <div>
      <button
        className="viewProjectButton"
        onClick={() => {
          const target = document.getElementById("project");
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        View My Projects
      </button>
    </div>
  );
};

export default ViewProjectButton;
