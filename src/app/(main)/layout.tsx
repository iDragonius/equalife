import Image from "next/image";
import Link from "next/link";
import { Icons } from "@/app/components/icons";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pages = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "About",
      url: "/about",
    },
    {
      label: "Blog",
      url: "/blog",
    },
    {
      label: "Education",
      url: "/education",
    },
    {
      label: "Games",
      url: "/games",
    },
    {
      label: "Profile",
      url: "/profile",
    },
  ];
  return (
    <>
      <div
        className={
          "sticky top-0 w-full h-[100px] flex items-center z-[30000]  bg-white "
        }
      >
        <div className={"box flex  justify-between items-center"}>
          <div className={"flex items-center gap-6 w-[33%]"}>
            {pages.map((page) => (
              <Link
                key={page.url}
                href={page.url}
                className={
                  "text-[15px] font-bold transition-all ease-in-out hover:text-primary text-[#333333]"
                }
              >
                {page.label}
              </Link>
            ))}
          </div>

          <Link href={"/"}>
            <Image src={"/logo.png"} alt={"logo"} height={90} width={120} />
          </Link>
          <div className={"flex gap-3 items-center w-[33%] justify-end "}>
            <Link
              href={"/sign-up"}
              className={"text-primary font-bold text-[15px]"}
            >
              Register
            </Link>
            <Link
              href={"/sign-in"}
              className={
                "h-[27px] bg-primary text-white flex items-center justify-center font-bold text-[15px] px-4 rounded-[4px]"
              }
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
      <div className={"mb-20"}>{children}</div>
      <div className={"bg-gradient-to-b from-primary to-secondary text-white"}>
        <div className={" px-[160px]"}>
          <div className={"py-[60px] flex justify-between gap-10"}>
            <div>
              <h3 className={"mb-6 text-[24px] font-bold"}>Exclusive</h3>
              <h3 className={"text-[20px] font-medium mb-6"}>Subscribe</h3>

              <p className={"mb-4"}>Newsletter</p>
              <input
                type="text"
                className={
                  "py-3 px-4 bg-transparent border border-white rounded-[6px]"
                }
                placeholder={"Enter your email"}
              />
            </div>
            <div className={"max-w-[175px]"}>
              <h3 className={"mb-6 text-[24px] font-bold"}>Support</h3>

              <p className={"mb-4"}>Sabunchu, Bakıkhanov</p>
              <p className={"mb-4"}>enactusasoiu@gmail.com</p>
              <p className={"mb-4"}>+994513431192 </p>
            </div>
            <div>
              <h3 className={"mb-6 text-[24px] font-bold"}>Account</h3>

              <p className={"mb-4"}>My Account</p>
              <p className={"mb-4"}>Login / Register</p>
              <p className={"mb-4"}>Cart </p>
              <p className={"mb-4"}>Wishlist </p>
              <p className={"mb-4"}>Shop </p>
            </div>
            <div>
              <h3 className={"mb-6 text-[24px] font-bold"}>Quick Link</h3>

              <p className={"mb-4"}>Privacy Policy</p>
              <p className={"mb-4"}>Terms Of Use</p>
              <p className={"mb-4"}>FAQ </p>
              <p className={"mb-4"}>Contact </p>
            </div>
            <div>
              <h3 className={"mb-6 text-[24px] font-bold"}>Social Medias</h3>
              <div className={"flex gap-6 items-center"}>
                <Link
                  href={
                    "https://www.facebook.com/share/cy351vLVpaqYaEDv/?mibextid=qi2Omg"
                  }
                >
                  <Icons.facebook />
                </Link>{" "}
                <Link
                  href={
                    "https://www.instagram.com/asoiu.enactus?igsh=MW5yZnYxN2w0NGt3YQ=="
                  }
                >
                  <Icons.instagram />
                </Link>{" "}
                <Link href={"https://www.linkedin.com/company/enactus-asoiu/"}>
                  <Icons.linkedin />
                </Link>
              </div>
            </div>
          </div>
          <hr />
          <div className={"py-6 flex items-center justify-center opacity-40"}>
            © Copyright Rimel 2022. All right reserved
          </div>
        </div>
      </div>
    </>
  );
}
