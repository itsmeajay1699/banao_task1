import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown } from "react-bootstrap";

const DropdownButton = ({ text }) => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle
        style={{ backgroundColor: "#EDEEF0", color: "#000000" }}
        variant="secondary"
        id="dropdownMenuButton"
      >
        {text ? text : "Filters"}: {text ? "" : selectedFilter}
      </Dropdown.Toggle>
      {!text && (
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => handleFilterChange("All")}>
            All
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleFilterChange("Article")}>
            Article
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleFilterChange("Event")}>
            Event
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleFilterChange("Education")}>
            Education
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleFilterChange("Job")}>
            Job
          </Dropdown.Item>
        </Dropdown.Menu>
      )}
    </Dropdown>
  );
};

export default DropdownButton;
