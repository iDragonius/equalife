import { Icons } from "@/app/components/icons";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <div
        className={
          "h-[561px] w-full relative bg-gradient-to-b from-primary to-secondary before:absolute  before:inset-0 before:bg-black before:opacity-50 flex items-center justify-center"
        }
      >
        <div className={" z-[1000] flex flex-col items-center"}>
          <div className={"flex gap-4 mb-10"}>
            <button
              className={
                "bg-black bg-opacity-50  text-white py-4 px-5 rounded-[50px]"
              }
            >
              Autism Syndrome
            </button>{" "}
            <button
              className={
                "bg-black  bg-opacity-50 text-white py-4 px-5 rounded-[50px]"
              }
            >
              Intellectual Disability{" "}
            </button>{" "}
            <button
              className={
                "bg-black bg-opacity-50 text-white py-4 px-5 rounded-[50px]"
              }
            >
              PNID
            </button>{" "}
            <button
              className={
                "bg-black bg-opacity-50  text-white py-4 px-5 rounded-[50px]"
              }
            >
              SID{" "}
            </button>{" "}
            <button
              className={
                "bg-black bg-opacity-50  text-white py-4 px-5 rounded-[50px]"
              }
            >
              Williams Syndrome
            </button>{" "}
            <button
              className={
                "bg-black bg-opacity-50  text-white py-4 px-5 rounded-[50px]"
              }
            >
              Cerebral Palsy
            </button>{" "}
            <button
              className={
                "bg-black bg-opacity-50  text-white py-4 px-5 rounded-[50px]"
              }
            >
              ASD
            </button>
          </div>
          <div className={"max-w-[600px]"}>
            <h1
              className={
                "text-[32px] font-semibold text-white text-center mb-4"
              }
            >
              Discover our courses on <br /> inclusive education
            </h1>
            <p className={"text-center text-white mb-9"}>
              &quot;Ensure inclusive and equitable quality education and promote
              lifelong <br /> learning opportunities for all.&quot;
            </p>
            <div className={"relative mb-10"}>
              <Icons.gameSearch className={"absolute top-5 left-6"} />
              <input
                className={
                  "bg-white w-full h-[60px] px-14  rounded-[50px] outline-none"
                }
                placeholder={"Search..."}
              />
            </div>
            <div className={"flex gap-1.5 text-white items-center text-[14px]"}>
              <p className={"text-[12px]"}>Trending searches</p>
              <button
                className={
                  "border border-white border-opacity-60 rounded-[50px] px-4 py-[5px]"
                }
              >
                Autism
              </button>{" "}
              <button
                className={
                  "border border-white border-opacity-60 rounded-[50px] px-4 py-[5px]"
                }
              >
                Down Syndrome
              </button>{" "}
              <button
                className={
                  "border border-white border-opacity-60 rounded-[50px] px-4 py-[5px]"
                }
              >
                Speech
              </button>{" "}
              <button
                className={
                  "border border-white border-opacity-60 rounded-[50px] px-4 py-[5px]"
                }
              >
                Williams Syndrome
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={"px-[120px] mt-20"}>
        <div className={"flex justify-between items-center mb-3"}>
          <h3 className={"text-primary text-[32px] font-semibold"}>Vebinars</h3>

          <Link
            href={"/"}
            className={
              "flex gap-1.5 text-[20px] text-secondary items-center font-medium"
            }
          >
            Browse all
            <Icons.forwardRed />
          </Link>
        </div>
        <div className={"flex gap-14"}>
          <div className={"flex flex-col gap-5 w-2/3"}>
            <Link href={"/education/1"} className={"flex gap-5"}>
              <Image
                src={"/vebinar1.png"}
                alt={"1"}
                width={360}
                height={200}
                className={"h-[200px] object-cover rounded-[7px]"}
              />
              <div className={"max-w-[320px]"}>
                <p
                  className={
                    "bg-[#DFF1F0] py-1 rounded-[3px] px-[2px] text-[#666666] w-max text-[12px] mb-0.5"
                  }
                >
                  Online
                </p>
                <h3 className={"text-primary text-[24px] font-semibold"}>
                  Management Strategies for Families
                </h3>
                <div className={"flex gap-5 items-center mb-4"}>
                  <div
                    className={
                      "flex items-center gap-2 text-[11px] text-[#777777]"
                    }
                  >
                    <Image
                      src={"/educator-mini-1.png"}
                      alt={"educator"}
                      width={20}
                      height={20}
                      className={"w-5 h-5"}
                    />
                    <p>Jesica koli</p>
                  </div>
                  <p className={" text-[11px] text-[#777777]"}>
                    02 december 2022
                  </p>{" "}
                  <p className={" text-[11px] text-[#777777] "}>Free</p>
                </div>
                <p className={"text-[15px] text-[#555555]"}>
                  Did you come here for something in particular or just general
                  Riker-bashing
                </p>
              </div>
            </Link>
            <Link href={"/education/1"} className={"flex gap-5"}>
              <Image
                src={"/vebinar2.png"}
                alt={"1"}
                width={360}
                height={200}
                className={"h-[200px] object-cover rounded-[7px]"}
              />
              <div className={"max-w-[320px]"}>
                <p
                  className={
                    "bg-[#DFF1F0] py-1 rounded-[3px] px-[2px] text-[#666666] w-max text-[12px] mb-0.5"
                  }
                >
                  Online
                </p>
                <h3 className={"text-primary text-[24px] font-semibold"}>
                  Management Strategies for Families
                </h3>
                <div className={"flex gap-5 items-center mb-4"}>
                  <div
                    className={
                      "flex items-center gap-2 text-[11px] text-[#777777]"
                    }
                  >
                    <Image
                      src={"/educator-mini-1.png"}
                      alt={"educator"}
                      width={20}
                      height={20}
                      className={"w-5 h-5"}
                    />
                    <p>Jesica koli</p>
                  </div>
                  <p className={" text-[11px] text-[#777777]"}>
                    02 december 2022
                  </p>{" "}
                  <p className={" text-[11px] text-[#777777] "}>Free</p>
                </div>
                <p className={"text-[15px] text-[#555555]"}>
                  Did you come here for something in particular or just general
                  Riker-bashing
                </p>
              </div>
            </Link>
          </div>
          <div className={"-mt-4"}>
            <h2 className={"mb-12 text-[20px] font-semibold text-[#1C1C1C]"}>
              Top Educators
            </h2>
            <div className={"flex flex-col gap-[45px] "}>
              <div className={"flex gap-6 items-center"}>
                <Image
                  src={"/educator1.png"}
                  alt={"1"}
                  width={80}
                  height={80}
                  className={"w-20 h-20"}
                />
                <div>
                  <h5
                    className={"text-[#222222] text-[17px] font-semibold mb-2"}
                  >
                    Esmira Gafarova
                  </h5>
                  <p className={"font-light text-[#666666] text-[12px]"}>
                    Logoped, Defectologist
                  </p>
                </div>
              </div>
              <div className={"flex gap-6 items-center"}>
                <Image
                  src={"/educator2.png"}
                  alt={"1"}
                  width={80}
                  height={80}
                  className={"w-20 h-20"}
                />
                <div>
                  <h5
                    className={"text-[#222222] text-[17px] font-semibold mb-2"}
                  >
                    Humay Nazarli
                  </h5>
                  <p className={"font-light text-[#666666] text-[12px]"}>
                    Senior specialist in inclusive education
                  </p>
                </div>
              </div>
              <div className={"flex gap-6 items-center"}>
                <Image
                  src={"/educator3.png"}
                  alt={"1"}
                  width={80}
                  height={80}
                  className={"w-20 h-20"}
                />
                <div>
                  <h5
                    className={"text-[#222222] text-[17px] font-semibold mb-2"}
                  >
                    Galib Ahmadov
                  </h5>
                  <p className={"font-light text-[#666666] text-[12px]"}>
                    clinical psychologist{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={"px-[120px] mt-20"}>
        <div className={"flex justify-between items-center mb-3"}>
          <h3 className={"text-primary text-[32px] font-semibold"}>
            Top Trending Courses
          </h3>

          <Link
            href={"/"}
            className={
              "flex gap-1.5 text-[20px] text-secondary items-center font-medium"
            }
          >
            Browse all
            <Icons.forwardRed />
          </Link>
        </div>
        <div className={"grid grid-cols-2 gap-x-12 gap-y-8"}>
          <Link
            href={"/education/1"}
            className={"flex p-3 w-full shadow-md rounded-[10px] "}
          >
            <Image
              src={"/course1.png"}
              alt={"course1"}
              width={190}
              height={128}
            />
            <div className={"w-full pl-4"}>
              <div className={"flex justify-between items-center mb-1.5"}>
                <h4 className={"text-[#666F8D] text-[11px]"}>
                  By Richard Gueva
                </h4>

                <Icons.stars />
              </div>
              <p className={"text-[#19213D] mb-1 text-[15px] "}>
                PM mental models - Online Certification Course
              </p>
              <p className={"text-[13px] text-[#565C72] mb-2.5"}>
                Speech Development | PM | JNSH | YZYZY | YZZY | YZY | | YZYZY |+
                More
              </p>
              <button
                className={
                  "py-2 px-6 bg-secondary text-white rounded-[8px] text-[12px] mt-3.5"
                }
              >
                Free
              </button>
            </div>
          </Link>
          <Link
            href={"/education/1"}
            className={"flex p-3 w-full shadow-md rounded-[10px] "}
          >
            <Image
              src={"/course2.png"}
              alt={"course1"}
              width={190}
              height={128}
            />
            <div className={"w-full pl-4"}>
              <div className={"flex justify-between items-center mb-1.5"}>
                <h4 className={"text-[#666F8D] text-[11px]"}>
                  By Richard Gueva
                </h4>

                <Icons.stars />
              </div>
              <p className={"text-[#19213D] mb-1 text-[15px] "}>
                PM mental models - Online Certification Course
              </p>
              <p className={"text-[13px] text-[#565C72] mb-2.5"}>
                Speech Development | PM | JNSH | YZYZY | YZZY | YZY | | YZYZY |+
                More
              </p>
              <button
                className={
                  "py-2 px-6 bg-secondary text-white rounded-[8px] text-[12px] mt-3.5"
                }
              >
                Free
              </button>
            </div>
          </Link>
          <Link
            href={"/education/1"}
            className={"flex p-3 w-full shadow-md rounded-[10px] "}
          >
            <Image
              src={"/course3.png"}
              alt={"course1"}
              width={190}
              height={128}
            />
            <div className={"w-full pl-4"}>
              <div className={"flex justify-between items-center mb-1.5"}>
                <h4 className={"text-[#666F8D] text-[11px]"}>
                  By Richard Gueva
                </h4>

                <Icons.stars />
              </div>
              <p className={"text-[#19213D] mb-1 text-[15px] "}>
                PM mental models - Online Certification Course
              </p>
              <p className={"text-[13px] text-[#565C72] mb-2.5"}>
                Speech Development | PM | JNSH | YZYZY | YZZY | YZY | | YZYZY |+
                More
              </p>
              <button
                className={
                  "py-2 px-6 bg-secondary text-white rounded-[8px] text-[12px] mt-3.5"
                }
              >
                7$
              </button>
            </div>
          </Link>
          <Link
            href={"/education/1"}
            className={"flex p-3 w-full shadow-md rounded-[10px] "}
          >
            <Image
              src={"/course4.png"}
              alt={"course1"}
              width={190}
              height={128}
            />
            <div className={"w-full pl-4"}>
              <div className={"flex justify-between items-center mb-1.5"}>
                <h4 className={"text-[#666F8D] text-[11px]"}>
                  By Richard Gueva
                </h4>

                <Icons.stars />
              </div>
              <p className={"text-[#19213D] mb-1 text-[15px] "}>
                PM mental models - Online Certification Course
              </p>
              <p className={"text-[13px] text-[#565C72] mb-2.5"}>
                Speech Development | PM | JNSH | YZYZY | YZZY | YZY | | YZYZY |+
                More
              </p>
              <button
                className={
                  "py-2 px-6 bg-secondary text-white rounded-[8px] text-[12px] mt-3.5"
                }
              >
                8$
              </button>
            </div>
          </Link>
        </div>
      </div>
      <div className={"px-[120px] mt-20"}>
        <div className={"flex justify-between items-center mb-3"}>
          <h3 className={"text-primary text-[32px] font-semibold"}>
            All courses
          </h3>

          <Link
            href={"/"}
            className={
              "flex gap-1.5 text-[20px] text-secondary items-center font-medium"
            }
          >
            Browse all
            <Icons.forwardRed />
          </Link>
        </div>
        <div className={"grid grid-cols-2 gap-x-12 gap-y-8"}>
          <Link
            href={"/education/1"}
            className={"flex p-3 w-full shadow-md rounded-[10px] "}
          >
            <Image
              src={"/course1.png"}
              alt={"course1"}
              width={190}
              height={128}
            />
            <div className={"w-full pl-4"}>
              <div className={"flex justify-between items-center mb-1.5"}>
                <h4 className={"text-[#666F8D] text-[11px]"}>
                  By Richard Gueva
                </h4>

                <Icons.stars />
              </div>
              <p className={"text-[#19213D] mb-1 text-[15px] "}>
                PM mental models - Online Certification Course
              </p>
              <p className={"text-[13px] text-[#565C72] mb-2.5"}>
                Speech Development | PM | JNSH | YZYZY | YZZY | YZY | | YZYZY |+
                More
              </p>
              <button
                className={
                  "py-2 px-6 bg-secondary text-white rounded-[8px] text-[12px] mt-3.5"
                }
              >
                Free
              </button>
            </div>
          </Link>
          <Link
            href={"/education/1"}
            className={"flex p-3 w-full shadow-md rounded-[10px] "}
          >
            <Image
              src={"/course2.png"}
              alt={"course1"}
              width={190}
              height={128}
            />
            <div className={"w-full pl-4"}>
              <div className={"flex justify-between items-center mb-1.5"}>
                <h4 className={"text-[#666F8D] text-[11px]"}>
                  By Richard Gueva
                </h4>

                <Icons.stars />
              </div>
              <p className={"text-[#19213D] mb-1 text-[15px] "}>
                PM mental models - Online Certification Course
              </p>
              <p className={"text-[13px] text-[#565C72] mb-2.5"}>
                Speech Development | PM | JNSH | YZYZY | YZZY | YZY | | YZYZY |+
                More
              </p>
              <button
                className={
                  "py-2 px-6 bg-secondary text-white rounded-[8px] text-[12px] mt-3.5"
                }
              >
                Free
              </button>
            </div>
          </Link>
          <Link
            href={"/education/1"}
            className={"flex p-3 w-full shadow-md rounded-[10px] "}
          >
            <Image
              src={"/course3.png"}
              alt={"course1"}
              width={190}
              height={128}
            />
            <div className={"w-full pl-4"}>
              <div className={"flex justify-between items-center mb-1.5"}>
                <h4 className={"text-[#666F8D] text-[11px]"}>
                  By Richard Gueva
                </h4>

                <Icons.stars />
              </div>
              <p className={"text-[#19213D] mb-1 text-[15px] "}>
                PM mental models - Online Certification Course
              </p>
              <p className={"text-[13px] text-[#565C72] mb-2.5"}>
                Speech Development | PM | JNSH | YZYZY | YZZY | YZY | | YZYZY |+
                More
              </p>
              <button
                className={
                  "py-2 px-6 bg-secondary text-white rounded-[8px] text-[12px] mt-3.5"
                }
              >
                7$
              </button>
            </div>
          </Link>
          <Link
            href={"/education/1"}
            className={"flex p-3 w-full shadow-md rounded-[10px] "}
          >
            <Image
              src={"/course4.png"}
              alt={"course1"}
              width={190}
              height={128}
            />
            <div className={"w-full pl-4"}>
              <div className={"flex justify-between items-center mb-1.5"}>
                <h4 className={"text-[#666F8D] text-[11px]"}>
                  By Richard Gueva
                </h4>

                <Icons.stars />
              </div>
              <p className={"text-[#19213D] mb-1 text-[15px] "}>
                PM mental models - Online Certification Course
              </p>
              <p className={"text-[13px] text-[#565C72] mb-2.5"}>
                Speech Development | PM | JNSH | YZYZY | YZZY | YZY | | YZYZY |+
                More
              </p>
              <button
                className={
                  "py-2 px-6 bg-secondary text-white rounded-[8px] text-[12px] mt-3.5"
                }
              >
                8$
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
