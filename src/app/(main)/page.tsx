import Image from "next/image";
import Link from "next/link";
import { Icons } from "@/app/components/icons";

export default function Home() {
  return (
    <main>
      <div className={"h-[577px] relative"}>
        <Image
          src={"/home.jpeg"}
          alt={"home"}
          width={1300}
          height={577}
          className={"h-[577px]  z-[10] w-full "}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#123C69]  to-[#AC3B61] opacity-80"></div>
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute w-full left-0 top-0 h-full flex items-center flex-col justify-center">
          <h2
            className={"text-white text-[30px] text-center font-semibold mb-2"}
          >
            &quot;Ensure inclusive and equitable quality education and promote{" "}
            <br />
            lifelong learning opportunities for all.&quot;
          </h2>
          <p className={"mb-7 text-[23px] font-semibold text-white"}>
            Both business and individual can join us!
          </p>
          <Link
            href={"/"}
            className={
              "text-primary uppercase text-[20px] font-semibold w-[240px] bg-[#D9D9D9F0] flex justify-center items-center py-2 rounded-[26px]"
            }
          >
            Get Started
          </Link>
        </div>
      </div>

      <div className={"w-[1110px] mx-auto mt-[60px]"}>
        <h2
          className={
            "text-[30px] font-medium text-center text-primary mb-[60px]"
          }
        >
          People choose us because we serve the best for everyone
        </h2>
        <div className={"grid grid-cols-2 gap-x-24 gap-y-16"}>
          <div className={"flex gap-10"}>
            <Icons.blog className={"mt-4 min-h-11 min-w-11 "} />
            <div>
              <h4 className={"mb-1 text-secondary text-[21px] font-bold"}>
                Blog
              </h4>
              <p className={"text-[17px]"}>
                Stay updated with the latest news, tips, and personal stories
                related to mental and physical disabilities.
              </p>
            </div>
          </div>
          <div className={"flex gap-10"}>
            <Image
              src={"/games.png"}
              width={44}
              height={44}
              alt={"games"}
              className={"object-cover w-11 h-11 mt-4"}
            />
            <div>
              <h4 className={"mb-1 text-secondary text-[21px] font-bold"}>
                Games
              </h4>
              <p className={"text-[17px]"}>
                Enjoy fun and engaging games designed to improve cognitive and
                physical skills.
              </p>
            </div>
          </div>
          <div className={"flex gap-10"}>
            <Icons.education className={"mt-4 min-h-11 min-w-11 "} />
            <div>
              <h4 className={"mb-1 text-secondary text-[21px] font-bold"}>
                Education
              </h4>
              <p className={"text-[17px]"}>
                Access a variety of resources and courses to support learning
                and personal development.
              </p>
            </div>
          </div>
          <div className={"flex gap-10"}>
            <Icons.profile className={"mt-4 min-h-11 min-w-11 "} />
            <div>
              <h4 className={"mb-1 text-secondary text-[21px] font-bold"}>
                Profile
              </h4>
              <p className={"text-[17px]"}>
                Manage your personal information and track your progress on the
                website.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={"w-[1110px] mx-auto mt-[60px]"}>
        <h2
          className={
            "text-[30px] font-medium text-center text-primary mb-[60px]"
          }
        >
          How It Works?
        </h2>
        <div className={"flex gap-16 justify-between"}>
          <div className={"flex flex-col items-center"}>
            <div
              className={
                "w-[100px] h-[100px] rounded-full bg-[#D8BEC4] flex items-center justify-center mb-2 "
              }
            >
              <Icons.signUp />
            </div>
            <h4 className={"text-[25px] font-semibold text-secondary"}>
              Sign Up
            </h4>
            <p className={"max-w-[300px] text-center mt-3.5"}>
              Create your account to access personalized resources, games, and
              educational content tailored to your needs.
            </p>
          </div>
          <div className={"flex flex-col items-center"}>
            <div
              className={
                "w-[100px] h-[100px] rounded-full bg-[#D8BEC4] flex items-center justify-center mb-2 "
              }
            >
              <Icons.discover />
            </div>
            <h4 className={"text-[25px] font-semibold text-secondary"}>
              Discover and Learn
            </h4>
            <p className={"max-w-[300px] text-center mt-3.5"}>
              Explore our extensive library of educational materials and
              interactive lessons designed for all learning abilities.
            </p>
          </div>
          <div className={"flex flex-col items-center"}>
            <div
              className={
                "w-[100px] h-[100px] rounded-full bg-[#D8BEC4] flex items-center justify-center mb-2 "
              }
            >
              <Icons.discover />
            </div>
            <h4 className={"text-[25px] font-semibold text-secondary"}>
              Connect and Engage{" "}
            </h4>
            <p className={"max-w-[300px] text-center mt-3.5"}>
              Join our community to share experiences, participate in
              discussions, and engage in collaborative activities.
            </p>
          </div>
        </div>
      </div>
      <div className={"w-[1110px] mx-auto mt-[60px]"}>
        <h2
          className={
            "text-[30px] font-medium text-center text-primary mb-[60px]"
          }
        >
          Discover our collection of special education articles
        </h2>
        <div className={"flex gap-16 justify-between"}>
          <div>
            <Image
              src={"/collection1.png"}
              alt={"1"}
              width={283}
              height={186}
              className={"rounded-[25px] w-full h-[186px] object-cover mb-5"}
            />
            <p className={"text-center text-[20px] font-medium"}>
              Understanding Chromosome 21 and Down Syndrome
            </p>
          </div>{" "}
          <div>
            <Image
              src={"/collection2.jpeg"}
              alt={"1"}
              width={283}
              height={186}
              className={"rounded-[25px] w-full h-[186px] object-cover mb-5"}
            />
            <p className={"text-center text-[20px] font-medium"}>
              Speech Therapy for Autism{" "}
            </p>
          </div>{" "}
          <div>
            <Image
              src={"/collection3.jpeg"}
              alt={"1"}
              width={283}
              height={186}
              className={"rounded-[25px] w-full h-[186px] object-cover mb-5"}
            />
            <p className={"text-center text-[20px] font-medium"}>
              Articulation Disorder: Understanding the Basics
            </p>
          </div>
        </div>
      </div>
      <div className={"w-[1110px] mx-auto mt-[60px]"}>
        <h2
          className={
            "text-[30px] font-medium text-center text-primary mb-[60px]"
          }
        >
          Explore Our Courses
        </h2>
        <div className={"flex"}>
          <div className={"w-[340px] max-w-[340px] flex flex-col gap-2"}>
            <p
              className={
                "text-[20px] font-medium hover:text-secondary transition-all ease-in-out"
              }
            >
              Management Strategies for Families{" "}
            </p>{" "}
            <p
              className={
                "text-[20px] font-medium hover:text-secondary transition-all ease-in-out"
              }
            >
              Social Skills for Autism{" "}
            </p>{" "}
            <p
              className={
                "text-[20px] font-medium hover:text-secondary transition-all ease-in-out"
              }
            >
              Speech Development
            </p>{" "}
            <p
              className={
                "text-[20px] font-medium hover:text-secondary transition-all ease-in-out"
              }
            >
              Home Education and Parenting
            </p>{" "}
            <p
              className={
                "text-[20px] font-medium hover:text-secondary transition-all ease-in-out"
              }
            >
              Digital Literacy
            </p>
            <button
              className={
                "bg-secondary text-white px-7 py-2.5 w-max rounded-[10px] mt-5"
              }
            >
              All categories
            </button>
          </div>
          <div className={"w-full"}>
            <div className={"grid grid-cols-2 gap-5 ml-20"}>
              <div className={"relative"}>
                <Image
                  src={"/vide1.png"}
                  alt={"vide1"}
                  width={281}
                  height={191}
                  className={"h-[191px] rounded-[21px] w-full object-cover"}
                />
                <div
                  className={
                    "absolute bottom-2 right-3 flex gap-1.5 text-white px-3 py-1 rounded-[50px] bg-[#222222] items-center"
                  }
                >
                  <Icons.star />
                  4.9
                </div>
              </div>
              <div className={"relative"}>
                <Image
                  src={"/video2.png"}
                  alt={"video2"}
                  width={281}
                  height={191}
                  className={"h-[191px] rounded-[21px] w-full object-cover"}
                />
                <div
                  className={
                    "absolute bottom-2 right-3 flex gap-1.5 text-white px-3 py-1 rounded-[50px] bg-[#222222] items-center"
                  }
                >
                  <Icons.star />
                  4.9
                </div>
              </div>
              <div className={"relative"}>
                <Image
                  src={"/video3.png"}
                  alt={"video3"}
                  width={281}
                  height={191}
                  className={"h-[191px] rounded-[21px] w-full object-cover"}
                />
                <div
                  className={
                    "absolute bottom-2 right-3 flex gap-1.5 text-white px-3 py-1 rounded-[50px] bg-[#222222] items-center"
                  }
                >
                  <Icons.star />
                  4.9
                </div>
              </div>
              <div className={"relative"}>
                <Image
                  src={"/vide1.png"}
                  alt={"vide1"}
                  width={281}
                  height={191}
                  className={"h-[191px] rounded-[21px] w-full object-cover"}
                />
                <div
                  className={
                    "absolute bottom-2 right-3 flex gap-1.5 text-white px-3 py-1 rounded-[50px] bg-[#222222] items-center"
                  }
                >
                  <Icons.star />
                  4.9
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={"w-[1110px] mx-auto mt-[60px]"}>
        <h2
          className={
            "text-[30px] font-medium text-center text-primary mb-[60px]"
          }
        >
          Games
        </h2>
        <div className={"flex gap-16 justify-between"}>
          <div>
            <Image
              src={"/games1.png"}
              alt={"1"}
              width={283}
              height={186}
              className={"rounded-[25px] w-full h-[280px] object-cover mb-5"}
            />
            <p className={"text-center text-[20px] font-medium"}>
              Brain Game for kids
            </p>
          </div>{" "}
          <div>
            <Image
              src={"/games2.png"}
              alt={"1"}
              width={283}
              height={186}
              className={"rounded-[25px] w-full h-[280px] object-cover mb-5"}
            />
            <p className={"text-center text-[20px] font-medium"}>
              Brain Game for kids
            </p>
          </div>{" "}
          <div>
            <Image
              src={"/games3.png"}
              alt={"1"}
              width={300}
              height={186}
              className={"rounded-[25px] w-full h-[280px] object-cover mb-5"}
            />
            <p className={"text-center text-[20px] font-medium"}>
              Brain Game for kids
            </p>
          </div>
        </div>
      </div>
      <div className={"w-[1110px] mx-auto mt-[60px]"}>
        <h2
          className={
            "text-[30px] font-medium text-center text-primary mb-[60px]"
          }
        >
          Follow your child&apos;s daily progress
        </h2>
        <div>
          <div>
            <h3>Progress</h3>
            <div className={"flex items-center gap-3 mt-6 mb-8"}>
              <div className={"flex items-center gap-1 text-[12px]"}>
                <div className={"w-3 h-3 bg-primary rounded-full"} />
                Education
              </div>{" "}
              <div className={"flex items-center gap-1 text-[12px]"}>
                <div className={"w-3 h-3 bg-secondary rounded-full"} />
                Games
              </div>
            </div>
          </div>
          <div className={"flex items-center"}>
            <Icons.graphic className={"min-w-[480px]"} />
            <div className={"flex justify-evenly w-full"}>
              <div className={"flex items-center gap-5"}>
                <Icons.leaderboard />
                <div>
                  <h4 className={"text-[21px] font-semibold"}>#2</h4>
                  <p className={"text-[#9098A3] text-[15px] font-semibold"}>
                    Leaderboard
                  </p>
                </div>
              </div>
              <div className={"flex items-center gap-5"}>
                <Icons.point />
                <div>
                  <h4 className={"text-[21px] font-semibold"}>55</h4>
                  <p className={"text-[#9098A3] text-[15px] font-semibold"}>
                    Point
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={"w-[1110px] mx-auto mt-[60px]"}>
        <h2
          className={
            "text-[30px] font-medium text-center text-primary mb-[60px]"
          }
        >
          Get more opportunities!
        </h2>
        <div className={"grid grid-cols-3 gap-9 justify-between"}>
          <div
            className={
              "rounded-[30px] bg-gradient-to-b from-[#0E345C] to-[#19497C] py-8 px-6  text-white "
            }
          >
            <p className={"mb-4"}>Free</p>
            <div className={"flex items-center gap-2 mb-8"}>
              <h1 className={"text-[36px] font-extrabold"}>$0</h1>

              <span className={"text-[12px] text-[#868C92]"}>/monthly</span>
            </div>

            <div className={"flex flex-col gap-3 h-[227px]"}>
              <div className={"flex items-center gap-2"}>
                <Icons.planTick />
                <p className={"text-[#D2D7D9] font-light"}>
                  30h Fast generations
                </p>
              </div>
              <div className={"flex items-center gap-2"}>
                <Icons.planTick />
                <p className={"text-[#D2D7D9] font-light"}>
                  Unlimited Relaxed generations
                </p>
              </div>
              <div className={"flex items-center gap-2"}>
                <Icons.planTick />
                <p className={"text-[#D2D7D9] font-light"}>
                  General commercial terms
                </p>
              </div>
              <div className={"flex items-center gap-2"}>
                <Icons.planTick />
                <p className={"text-[#D2D7D9] font-light"}>
                  Access to member gallery
                </p>
              </div>
              <div className={"flex items-center gap-2"}>
                <Icons.planTick />
                <p className={"text-[#D2D7D9] font-light"}>
                  Optional credit top ups
                </p>
              </div>
            </div>
            <button
              className={"w-full bg-white text-[#272727] h-10 rounded-[8px]"}
            >
              Choose a plan
            </button>
          </div>
          <div
            className={
              "rounded-[30px] bg-gradient-to-b from-[#AC3B61] to-[#461827] py-8 px-6  text-white"
            }
          >
            <p className={"mb-4"}>Premium </p>
            <div className={"flex items-center gap-2 mb-8"}>
              <h1 className={"text-[36px] font-extrabold"}>$5</h1>

              <span className={"text-[12px] text-[#868C92]"}>/monthly</span>
            </div>

            <div className={"flex flex-col gap-3 h-[227px] max-h-max"}>
              <div className={"flex items-center gap-2"}>
                <Icons.planTick />
                <p className={"text-[#D2D7D9] font-light"}>
                  30h Fast generations
                </p>
              </div>
              <div className={"flex items-center gap-2"}>
                <Icons.planTick />
                <p className={"text-[#D2D7D9] font-light"}>
                  Unlimited Relaxed generations
                </p>
              </div>
              <div className={"flex items-center gap-2"}>
                <Icons.planTick />
                <p className={"text-[#D2D7D9] font-light"}>
                  General commercial terms
                </p>
              </div>
              <div className={"flex items-center gap-2"}>
                <Icons.planTick />
                <p className={"text-[#D2D7D9] font-light"}>
                  Access to member gallery
                </p>
              </div>
              <div className={"flex items-center gap-2"}>
                <Icons.planTick />
                <p className={"text-[#D2D7D9] font-light"}>
                  Optional credit top ups
                </p>
              </div>
            </div>
            <button
              className={"w-full bg-white text-[#272727] h-10 rounded-[8px]"}
            >
              Choose a plan
            </button>
          </div>
          <div
            className={
              "rounded-[30px] bg-gradient-to-b from-[#0E345C] to-[#19497C] py-8 px-6  text-white"
            }
          >
            <p className={"mb-4"}>Premium Plus</p>
            <div className={"flex items-center gap-2 mb-8"}>
              <h1 className={"text-[36px] font-extrabold"}>$10</h1>

              <span className={"text-[12px] text-[#868C92]"}>/monthly</span>
            </div>

            <div className={"flex flex-col gap-3 h-[227px]"}>
              <div className={"flex items-center gap-2"}>
                <Icons.planTick />
                <p className={"text-[#D2D7D9] font-light"}>
                  30h Fast generations
                </p>
              </div>
              <div className={"flex items-center gap-2"}>
                <Icons.planTick />
                <p className={"text-[#D2D7D9] font-light"}>
                  Unlimited Relaxed generations
                </p>
              </div>
              <div className={"flex items-center gap-2"}>
                <Icons.planTick />
                <p className={"text-[#D2D7D9] font-light"}>
                  General commercial terms
                </p>
              </div>
              <div className={"flex items-center gap-2"}>
                <Icons.planTick />
                <p className={"text-[#D2D7D9] font-light"}>
                  Access to member gallery
                </p>
              </div>
              <div className={"flex items-center gap-2"}>
                <Icons.planTick />
                <p className={"text-[#D2D7D9] font-light"}>
                  Optional credit top ups
                </p>
              </div>
            </div>
            <button
              className={"w-full bg-white text-[#272727] h-10 rounded-[8px]"}
            >
              Choose a plan
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
