import { Icons } from "@/app/components/icons";
import Image from "next/image";

export default function Page() {
  return (
    <div className={"mt-20"}>
      <div className={"w-full px-[120px]"}>
        <div className={"flex gap-12"}>
          <div className={"w-full"}>
            <h3 className={"text-secondary font-medium mb-1"}>
              Autism Syndrome/Intellectual Disability
            </h3>
            <div className={"flex justify-between items-center mb-4"}>
              <h1 className={"text-[36px] text-primary font-bold"}>
                Speech Development
              </h1>
              <div className={"flex gap-1 items-center"}>
                <Icons.star />
                <span>4.8</span>
                <span className={"opacity-60 text-[14px]"}>
                  (1,812 ratings)
                </span>
              </div>
            </div>
            <div className={"relative "}>
              <Image
                src={"/big-education-1.png"}
                alt={"big"}
                height={445}
                width={819}
                className={"w-full h-[445px] object-cover rounded-[30px]"}
              />
              <div
                className={
                  "w-full h-full absolute flex items-center justify-center left-0 top-0"
                }
              >
                <Image
                  src={"/play.png"}
                  alt={"play"}
                  width={105}
                  height={105}
                  className={"w-[105px] h-[105px]  "}
                />
              </div>
            </div>
            <div className={"flex justify-between py-4 border-b items-center"}>
              <div className={"flex gap-2"}>
                <Image
                  src={"/education-user.png"}
                  alt={"user"}
                  height={40}
                  width={40}
                  className={"w-10 h-10"}
                />
                <div>
                  <h4 className={"text-primary font-bold text-[12px]"}>
                    Kitani Studio
                  </h4>
                  <p className={"opacity-60 text-[10px]"}>Design Studio</p>
                </div>
              </div>
              <div className={"flex gap-5 items-center"}>
                <div className={"flex gap-1 items-center"}>
                  <Image
                    src={"/reads.png"}
                    alt={"reads"}
                    width={24}
                    height={24}
                    className={"w-6 h-6"}
                  />
                  <p className={"text-[14px] text-opacity-60"}>2.3k</p>
                </div>
                <div className={"flex gap-1 items-center"}>
                  <Image
                    src={"/comments.png"}
                    alt={"reads"}
                    width={24}
                    height={24}
                    className={"w-6 h-6"}
                  />
                  <p className={"text-[14px] text-opacity-60"}>1.4k</p>
                </div>
              </div>
            </div>
            <div className={"mt-4"}>
              <h2 className={"font-bold"}>About Course</h2>
              <p className={"mt-4 opacity-60 pb-4 border-b"}>
                Vue (pronounced /vjuː/, like view) is a progressive framework
                for building user interfaces. Unlike other monolithic
                frameworks, Vue is designed from the ground up to be
                incrementally adoptable. The core library is focused on the view
                layer only, and is easy to pick up and integrate with other
                libraries or existing projects. On the other hand, Vue is also
                perfectly capable of powering sophisticated Single-Page
                Applications when used in combination with modern tooling and
                supporting libraries.
              </p>
            </div>
            <div className={"mt-4"}>
              <h3 className={"bold"}>Review</h3>

              <div className={"flex flex-col gap-4  mt-4"}>
                <div className={"flex gap-4 "}>
                  <Image
                    src={"/blog-user.png"}
                    alt={"user"}
                    width={32}
                    height={32}
                    className={"w-8 h-8"}
                  />
                  <div className={"flex flex-col gap-0.5"}>
                    <h4 className={"text-primary font-bold"}>
                      Leonardo Da Vinci
                    </h4>
                    <p className={"text-[#1B1B1B] opacity-10"}>Today</p>
                    <p className={"opacity-60"}>
                      Loved the course. I&apos;ve learned some very subtle
                      tecniques, expecially on leaves.
                    </p>
                  </div>
                </div>
                <div className={"flex gap-4 "}>
                  <Image
                    src={"/blog-user.png"}
                    alt={"user"}
                    width={32}
                    height={32}
                    className={"w-8 h-8"}
                  />
                  <div className={"flex flex-col gap-0.5"}>
                    <h4 className={"text-primary font-bold"}>Titania S</h4>
                    <p className={"text-[#1B1B1B] opacity-10"}>Today</p>
                    <p className={"opacity-60"}>
                      I loved the course, it had been a long time since I had
                      experimented with watercolors and now I will do it more
                      often thanks to Kitani Studio
                    </p>
                  </div>
                </div>
                <div className={"flex gap-4 "}>
                  <Image
                    src={"/blog-user.png"}
                    alt={"user"}
                    width={32}
                    height={32}
                    className={"w-8 h-8"}
                  />
                  <div className={"flex flex-col gap-0.5"}>
                    <h4 className={"text-primary font-bold"}>Zhirkov</h4>
                    <p className={"text-[#1B1B1B] opacity-10"}>Today</p>
                    <p className={"opacity-60"}>
                      Yes. I just emphasize that the use of Photoshop, for
                      non-users, becomes difficult to follow. What requires a
                      course to master it. Safe and very didactic teacher.
                    </p>
                  </div>
                </div>
                <div className={"flex gap-4 "}>
                  <Image
                    src={"/blog-user.png"}
                    alt={"user"}
                    width={32}
                    height={32}
                    className={"w-8 h-8"}
                  />
                  <div className={"flex flex-col gap-0.5"}>
                    <h4 className={"text-primary font-bold"}>Miphoska</h4>
                    <p className={"text-[#1B1B1B] opacity-10"}>Today</p>
                    <p className={"opacity-60"}>
                      I haven`&apos;t finished the course yet, as I would like
                      to have some feedback from the teacher, about the comments
                      I shared on the forum 3 months ago, and I still
                      haven`&apos;t had any answer. <br /> I think the course is
                      well structured, however the explanations and videos are
                      very quick for beginners. However, it is good to go
                      practicing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={"w-[380px] min-w-[380px]"}>
            <div className={"flex text-[20px] mb-2"}>
              <p className={"w-[120px] font-bold"}>7$</p>
              <p className={"line-through opacity-60"}>10$</p>
            </div>
            <div className={"bg-[#A04AE3] p-1 mb-8 text-white font-bold w-max"}>
              20% OFF
            </div>
            <button
              className={
                "bg-primary text-white w-full h-[50px] rounded-[18px] text-[20px] font-bold mb-4"
              }
            >
              Buy
            </button>
            <button
              className={
                "border-secondary border rounded-[18px] text-secondary flex gap-2  w-full items-center h-[50px] justify-center text-[20px] font-bold"
              }
            >
              <Image src={"/like.png"} alt={"like"} width={24} height={24} />
              Wishlist
            </button>
            <div className={"mt-6 flex flex-col gap-3.5"}>
              <div className={"flex gap-4 items-center"}>
                <Icons.section />
                <p className={"text-[#1B1B1B] opacity-90"}>22 Section</p>
              </div>{" "}
              <div className={"flex gap-4 items-center"}>
                <Icons.lecture />
                <p className={"text-[#1B1B1B] opacity-90"}>152 Lectures</p>
              </div>{" "}
              <div className={"flex gap-4 items-center"}>
                <Icons.length />
                <p className={"text-[#1B1B1B] opacity-90"}>
                  21h 33m total lenghts
                </p>
              </div>{" "}
              <div className={"flex gap-4 items-center"}>
                <Icons.sound />
                <p className={"text-[#1B1B1B] opacity-90"}>English</p>
              </div>
            </div>

            <div className={"mt-[50px] flex flex-col gap-8"}>
              <div className={"relative"}>
                <Image
                  src={"/webinar1.png"}
                  alt={"webinar1"}
                  width={374}
                  height={222}
                  className={"w-full h-[222px] object-cover rounded-[18px]"}
                />
                <div
                  className={
                    "absolute w-full h-full top-0 left-0 flex flex-col justify-center px-5"
                  }
                >
                  <p
                    className={
                      "p-1 text-white bg-primary rounded-[2px] mb-1 w-max"
                    }
                  >
                    WEBINAR
                  </p>
                  <h2 className={"text-[24px] font-bold text-white"}>
                    Masterclass: Social Skills for Autism
                  </h2>
                </div>
              </div>
              <div className={"relative"}>
                <Image
                  src={"/webinar2.png"}
                  alt={"webinar2"}
                  width={374}
                  height={222}
                  className={"w-full h-[222px] object-cover rounded-[18px]"}
                />
                <div
                  className={
                    "absolute w-full h-full top-0 left-0 flex flex-col justify-center px-5"
                  }
                >
                  <p
                    className={
                      "p-1 text-white bg-primary rounded-[2px] mb-1 w-max"
                    }
                  >
                    WEBINAR
                  </p>
                  <h2 className={"text-[24px] font-bold text-white"}>
                    Masterclass: Social Skills for Autism
                  </h2>
                </div>
              </div>
              <div className={"relative"}>
                <Image
                  src={"/webinar3.png"}
                  alt={"webinar3"}
                  width={374}
                  height={222}
                  className={"w-full h-[222px] object-cover rounded-[18px]"}
                />
                <div
                  className={
                    "absolute w-full h-full top-0 left-0 flex flex-col justify-center px-5"
                  }
                >
                  <p
                    className={
                      "p-1 text-white bg-primary rounded-[2px] mb-1 w-max"
                    }
                  >
                    WEBINAR
                  </p>
                  <h2 className={"text-[24px] font-bold text-white"}>
                    Masterclass: Social Skills for Autism
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
