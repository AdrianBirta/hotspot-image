import { SidebarItemProduct } from "../styles/Sidebar.styles";

interface Product {
  img: string;
  name: string;
  price: string;
  description: string;
  addToCartLink: string;
  detailsLink: string;
}

interface SidebarItemProps {
  product: Product
}

const SidebarItem = ({ product }: SidebarItemProps) => {
  return (
    <SidebarItemProduct key={product.img}>
      <img src={product.img} alt="product img" />
      <div className="details">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>{product.price}</p>
      </div>
    </SidebarItemProduct>
  )
}

export default SidebarItem;