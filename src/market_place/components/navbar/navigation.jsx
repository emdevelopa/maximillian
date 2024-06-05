import { faCartShopping, faHeadset, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function LinkSection(props) {
    return (
      <div>
        <ul className={props.LinkSectionStyle}>
          <li>
            <a href="#" className="hover:text-[#F94C30] hover:underline">
              About
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-[#F94C30] hover:underline">
              Stores
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#F94C30] hover:underline">
              Cars
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#F94C30] hover:underline">
              A & E
            </a>
          </li>
        </ul>
      </div>
    );
}

export function CartSection(props) {
    return (
      <div>
        <ul className={props.CartSectionStyle}>
          <li>
            <a href="register" className="hover:text-[#F94C30] hover:underline">
              <FontAwesomeIcon icon={faHeadset} /> Live Chat
            </a>
          </li>
          <li>
            <a
              href="#"
              className="bg-[#ff2d2d38] px-2 py-2 rounded-md hover:bg-black"
            >
              Get Started <FontAwesomeIcon icon={faUserCircle} />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="bg-[#F94C30] px-2 py-2 rounded-sm hover:bg-black"
            >
              <FontAwesomeIcon icon={faCartShopping} /> Cart
            </a>
          </li>
        </ul>
      </div>
    );
}