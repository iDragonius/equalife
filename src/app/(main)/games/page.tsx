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
              Williams Syndrome
            </button>{" "}
            <button
              className={
                "bg-black bg-opacity-50  text-white py-4 px-5 rounded-[50px]"
              }
            >
              Autism Syndrome
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
          <h3 className={"text-primary text-[32px] font-semibold"}>
            Autism Syndrome
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
        <div className={"grid grid-cols-3 gap-14"}>
          <Link
            href={"/"}
            className={"bg-[#81B1E4] bg-opacity-30 rounded-[34px]"}
          >
            <Image
              src={"/game-card.png"}
              alt={"card"}
              width={400}
              height={177}
              className={"w-full object-cover h-[170px] rounded-[34px]"}
            />
            <div className={"px-4 pb-3"}>
              <div className={"flex justify-between  items-center "}>
                <h2 className={"text-[24px] text-primary font-semibold"}>
                  Face Memory Game
                </h2>
                <Icons.stars />
              </div>
              <p className={"text-[15px] font-medium my-3"}>
                A great mind game for kids! It improves visual
                scanning,planning, and spatial memory.
              </p>
              <button
                className={
                  "bg-secondary text-white px-4  text-[18px] font-semibold rounded-[25px] py-[2px]"
                }
              >
                PLAY NOW
              </button>
            </div>
          </Link>
          <Link
            href={"/"}
            className={"bg-[#81B1E4] bg-opacity-30 rounded-[34px]"}
          >
            <Image
              src={"/game-card.png"}
              alt={"card"}
              width={400}
              height={177}
              className={"w-full object-cover h-[170px] rounded-[34px]"}
            />
            <div className={"px-4 pb-3"}>
              <div className={"flex justify-between  items-center "}>
                <h2 className={"text-[24px] text-primary font-semibold"}>
                  Face Memory Game
                </h2>
                <Icons.stars />
              </div>
              <p className={"text-[15px] font-medium my-3"}>
                A great mind game for kids! It improves visual
                scanning,planning, and spatial memory.
              </p>
              <button
                className={
                  "bg-secondary text-white px-4  text-[18px] font-semibold rounded-[25px] py-[2px]"
                }
              >
                PLAY NOW
              </button>
            </div>
          </Link>
          <Link
            href={"/"}
            className={"bg-[#81B1E4] bg-opacity-30 rounded-[34px]"}
          >
            <Image
              src={"/game-card.png"}
              alt={"card"}
              width={400}
              height={177}
              className={"w-full object-cover h-[170px] rounded-[34px]"}
            />
            <div className={"px-4 pb-3"}>
              <div className={"flex justify-between  items-center "}>
                <h2 className={"text-[24px] text-primary font-semibold"}>
                  Face Memory Game
                </h2>
                <Icons.stars />
              </div>
              <p className={"text-[15px] font-medium my-3"}>
                A great mind game for kids! It improves visual
                scanning,planning, and spatial memory.
              </p>
              <button
                className={
                  "bg-secondary text-white px-4  text-[18px] font-semibold rounded-[25px] py-[2px]"
                }
              >
                PLAY NOW
              </button>
            </div>
          </Link>
        </div>
      </div>
      <div className={"px-[120px] mt-20"}>
        <div className={"flex justify-between items-center mb-3"}>
          <h3 className={"text-primary text-[32px] font-semibold"}>
            Autism Syndrome
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
        <div className={"grid grid-cols-3 gap-14"}>
          <Link
            href={"/"}
            className={"bg-[#81B1E4] bg-opacity-30 rounded-[34px]"}
          >
            <Image
              src={"/game-card.png"}
              alt={"card"}
              width={400}
              height={177}
              className={"w-full object-cover h-[170px] rounded-[34px]"}
            />
            <div className={"px-4 pb-3"}>
              <div className={"flex justify-between  items-center "}>
                <h2 className={"text-[24px] text-primary font-semibold"}>
                  Face Memory Game
                </h2>
                <Icons.stars />
              </div>
              <p className={"text-[15px] font-medium my-3"}>
                A great mind game for kids! It improves visual
                scanning,planning, and spatial memory.
              </p>
              <button
                className={
                  "bg-secondary text-white px-4  text-[18px] font-semibold rounded-[25px] py-[2px]"
                }
              >
                PLAY NOW
              </button>
            </div>
          </Link>
          <Link
            href={"/"}
            className={"bg-[#81B1E4] bg-opacity-30 rounded-[34px]"}
          >
            <Image
              src={"/game-card.png"}
              alt={"card"}
              width={400}
              height={177}
              className={"w-full object-cover h-[170px] rounded-[34px]"}
            />
            <div className={"px-4 pb-3"}>
              <div className={"flex justify-between  items-center "}>
                <h2 className={"text-[24px] text-primary font-semibold"}>
                  Face Memory Game
                </h2>
                <Icons.stars />
              </div>
              <p className={"text-[15px] font-medium my-3"}>
                A great mind game for kids! It improves visual
                scanning,planning, and spatial memory.
              </p>
              <button
                className={
                  "bg-secondary text-white px-4  text-[18px] font-semibold rounded-[25px] py-[2px]"
                }
              >
                PLAY NOW
              </button>
            </div>
          </Link>
          <Link
            href={"/"}
            className={"bg-[#81B1E4] bg-opacity-30 rounded-[34px]"}
          >
            <Image
              src={"/game-card.png"}
              alt={"card"}
              width={400}
              height={177}
              className={"w-full object-cover h-[170px] rounded-[34px]"}
            />
            <div className={"px-4 pb-3"}>
              <div className={"flex justify-between  items-center "}>
                <h2 className={"text-[24px] text-primary font-semibold"}>
                  Face Memory Game
                </h2>
                <Icons.stars />
              </div>
              <p className={"text-[15px] font-medium my-3"}>
                A great mind game for kids! It improves visual
                scanning,planning, and spatial memory.
              </p>
              <button
                className={
                  "bg-secondary text-white px-4  text-[18px] font-semibold rounded-[25px] py-[2px]"
                }
              >
                PLAY NOW
              </button>
            </div>
          </Link>
        </div>
      </div>
      <div className={"px-[120px] mt-20"}>
        <div className={"flex justify-between items-center mb-3"}>
          <h3 className={"text-primary text-[32px] font-semibold"}>
            Autism Syndrome
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
        <div className={"grid grid-cols-3 gap-14"}>
          <Link
            href={"/"}
            className={"bg-[#81B1E4] bg-opacity-30 rounded-[34px]"}
          >
            <Image
              src={"/game-card.png"}
              alt={"card"}
              width={400}
              height={177}
              className={"w-full object-cover h-[170px] rounded-[34px]"}
            />
            <div className={"px-4 pb-3"}>
              <div className={"flex justify-between  items-center "}>
                <h2 className={"text-[24px] text-primary font-semibold"}>
                  Face Memory Game
                </h2>
                <Icons.stars />
              </div>
              <p className={"text-[15px] font-medium my-3"}>
                A great mind game for kids! It improves visual
                scanning,planning, and spatial memory.
              </p>
              <button
                className={
                  "bg-secondary text-white px-4  text-[18px] font-semibold rounded-[25px] py-[2px]"
                }
              >
                PLAY NOW
              </button>
            </div>
          </Link>
          <Link
            href={"/"}
            className={"bg-[#81B1E4] bg-opacity-30 rounded-[34px]"}
          >
            <Image
              src={"/game-card.png"}
              alt={"card"}
              width={400}
              height={177}
              className={"w-full object-cover h-[170px] rounded-[34px]"}
            />
            <div className={"px-4 pb-3"}>
              <div className={"flex justify-between  items-center "}>
                <h2 className={"text-[24px] text-primary font-semibold"}>
                  Face Memory Game
                </h2>
                <Icons.stars />
              </div>
              <p className={"text-[15px] font-medium my-3"}>
                A great mind game for kids! It improves visual
                scanning,planning, and spatial memory.
              </p>
              <button
                className={
                  "bg-secondary text-white px-4  text-[18px] font-semibold rounded-[25px] py-[2px]"
                }
              >
                PLAY NOW
              </button>
            </div>
          </Link>
          <Link
            href={"/"}
            className={"bg-[#81B1E4] bg-opacity-30 rounded-[34px]"}
          >
            <Image
              src={"/game-card.png"}
              alt={"card"}
              width={400}
              height={177}
              className={"w-full object-cover h-[170px] rounded-[34px]"}
            />
            <div className={"px-4 pb-3"}>
              <div className={"flex justify-between  items-center "}>
                <h2 className={"text-[24px] text-primary font-semibold"}>
                  Face Memory Game
                </h2>
                <Icons.stars />
              </div>
              <p className={"text-[15px] font-medium my-3"}>
                A great mind game for kids! It improves visual
                scanning,planning, and spatial memory.
              </p>
              <button
                className={
                  "bg-secondary text-white px-4  text-[18px] font-semibold rounded-[25px] py-[2px]"
                }
              >
                PLAY NOW
              </button>
            </div>
          </Link>
        </div>
      </div>
      <div className={"px-[120px] mt-20"}>
        <div className={"flex justify-between items-center mb-3"}>
          <h3 className={"text-primary text-[32px] font-semibold"}>
            Autism Syndrome
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
        <div className={"grid grid-cols-3 gap-14"}>
          <Link
            href={"/"}
            className={"bg-[#81B1E4] bg-opacity-30 rounded-[34px]"}
          >
            <Image
              src={"/game-card.png"}
              alt={"card"}
              width={400}
              height={177}
              className={"w-full object-cover h-[170px] rounded-[34px]"}
            />
            <div className={"px-4 pb-3"}>
              <div className={"flex justify-between  items-center "}>
                <h2 className={"text-[24px] text-primary font-semibold"}>
                  Face Memory Game
                </h2>
                <Icons.stars />
              </div>
              <p className={"text-[15px] font-medium my-3"}>
                A great mind game for kids! It improves visual
                scanning,planning, and spatial memory.
              </p>
              <button
                className={
                  "bg-secondary text-white px-4  text-[18px] font-semibold rounded-[25px] py-[2px]"
                }
              >
                PLAY NOW
              </button>
            </div>
          </Link>
          <Link
            href={"/"}
            className={"bg-[#81B1E4] bg-opacity-30 rounded-[34px]"}
          >
            <Image
              src={"/game-card.png"}
              alt={"card"}
              width={400}
              height={177}
              className={"w-full object-cover h-[170px] rounded-[34px]"}
            />
            <div className={"px-4 pb-3"}>
              <div className={"flex justify-between  items-center "}>
                <h2 className={"text-[24px] text-primary font-semibold"}>
                  Face Memory Game
                </h2>
                <Icons.stars />
              </div>
              <p className={"text-[15px] font-medium my-3"}>
                A great mind game for kids! It improves visual
                scanning,planning, and spatial memory.
              </p>
              <button
                className={
                  "bg-secondary text-white px-4  text-[18px] font-semibold rounded-[25px] py-[2px]"
                }
              >
                PLAY NOW
              </button>
            </div>
          </Link>
          <Link
            href={"/"}
            className={"bg-[#81B1E4] bg-opacity-30 rounded-[34px]"}
          >
            <Image
              src={"/game-card.png"}
              alt={"card"}
              width={400}
              height={177}
              className={"w-full object-cover h-[170px] rounded-[34px]"}
            />
            <div className={"px-4 pb-3"}>
              <div className={"flex justify-between  items-center "}>
                <h2 className={"text-[24px] text-primary font-semibold"}>
                  Face Memory Game
                </h2>
                <Icons.stars />
              </div>
              <p className={"text-[15px] font-medium my-3"}>
                A great mind game for kids! It improves visual
                scanning,planning, and spatial memory.
              </p>
              <button
                className={
                  "bg-secondary text-white px-4  text-[18px] font-semibold rounded-[25px] py-[2px]"
                }
              >
                PLAY NOW
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
