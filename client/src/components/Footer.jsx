import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
  BsLinkedin,
} from "react-icons/bs";
export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="flex justify-center text-center self-center"
            >
              <img
                src="/mankind4dev.png"
                alt="logo"
                width={100}
                height={100}
                className=""
              />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://mankind4dev-3-d-portfolio-5cbfp5sb3.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Portfolio
                </Footer.Link>
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mankind4dev's Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/mankind4dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Mankind4dev"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href="https://www.linkedin.com/in/sunday-ogunmakin-9877751b7/" icon={BsLinkedin} />
            <Footer.Icon href="https://www.facebook.com/share/W8QnXkDUVQZ36cP1/" icon={BsFacebook} />
            <Footer.Icon href="https://www.instagram.com/mankind_4_dev?igsh=bGdyazdzcnhieDZv" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon
              href="https://github.com/mankind4dev"
              icon={BsGithub}
            />
            <Footer.Icon href="https://dribbble.com/Mankind4dev" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
