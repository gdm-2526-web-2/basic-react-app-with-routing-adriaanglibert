import { Outlet } from "react-router";
import Heading from "../components/Heading/Heading";
import Section from "../components/Section/Section";

const SidebarLayout = () => {
  return (
    <div className="grid">
      <aside>
        <Heading>Let op, deze artikels zijn gemaakt met AI.</Heading>
      </aside>

      <Section>
        <Outlet />
      </Section>
    </div>
  );
};

export default SidebarLayout;
