import { SidebarContent, SidebarWrapper } from "../styles/Sidebar.styles";
import SidebarItem from "./SidebarItem";
import { HotspotData } from "../interfaces";

interface SidebarProps {
  data: HotspotData;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ data, onClose }) => {
  return (
    <SidebarWrapper>
      <SidebarContent>
        <h2 className='title'>Products</h2>
        {data?.hotspots.map(({ product }) => (
          <SidebarItem key={product.img} product={product} />
        ))}
        <button className='close-button' onClick={onClose}>x</button>
      </SidebarContent>
    </SidebarWrapper>
  );
};

export default Sidebar;
