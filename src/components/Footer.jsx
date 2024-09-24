import { logo_2 } from "../assets/home";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-[#212121] py-14 text-white">
      <Container>
        <div className="grid grid-cols-1 text-center place-items-center sm:text-left lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
          <img src={logo_2} alt="Grant canyon" className="w-44 h-14" />
          <div className="sm:mt-0 mt-14">
            <h1 className="pt-8 pb-4 font-bold capitalize sm:pt-0">company</h1>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Knowledge Base</a>
              </li>
              
              <li>
                <a href="#">Terms and Conditions</a>
              </li>
              
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="pt-8 pb-4 font-bold capitalize sm:pt-0">browser</h1>
            <ul>
              <li>
                <a href="#">Memberships</a>
              </li>
              <li>
                <a href="#">CJobs</a>
              </li>
              <li>
                <a href="#">Experts</a>
              </li>
              <li>
                <a href="#">Organizations</a>
              </li>
              <li>
                <a href="#">Funding</a>
              </li>
              <li>
                <a href="#">CAwards</a>
              </li>
              <li>
                <a href="#">Donors</a>
              </li>
              <li>
                <a href="#">News</a>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="pt-8 pb-4 font-bold capitalize sm:pt-0">connect</h1>
            <ul>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Linkedin</a>
              </li>
              <li>
                <a href="#">Youtube</a>
              </li>
              <li>
                <a href="#">RSS</a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
