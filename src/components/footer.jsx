export default function Footer(props) {
  return (
    <footer className="bgmage mt-[8em] text-white flex flex-col gap-[4em]">
      <section className="flex justify-around items-center ">
        <img src={props.logo} alt="logo" className="w-[9em] " />
        <ul className="flex flex-col gap-4">
          <li>
            <a href="#about" className="hover:text-orange-400 hover:underline">
              ABOUT
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-400 hover:underline">
              MARKETPLACE
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-orange-400 hover:underline">
              CARS
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-orange-400 relative hover:underline"
            >
              ARTS & ENTERTAINMENT
            
            </a>
          </li>
        </ul>
      </section>
      <p className="text-center">&copy; 2024 MAXIMILLIAN All rights reserved</p>
    </footer>
  );
}
