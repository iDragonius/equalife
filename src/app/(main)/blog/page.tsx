import Image from "next/image";
import { Icons } from "@/app/components/icons";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div className={"h-[560px] w-full relative"}>
        <Image
          src={"/blog-hero.png"}
          alt={"hero"}
          height={560}
          width={1200}
          className={"w-full h-[560px] object-cover"}
        />
        <div
          className={
            "absolute left-0 top-0 w-full h-full flex items-center justify-center  flex-col"
          }
        >
          <Image
            src={"/emoji.png"}
            alt={"emoji"}
            width={82}
            height={82}
            className={"w-20 h-20"}
          />
          <h1 className={"text-[45px] font-bold text-white mb-3"}>
            Hi, what are you looking for?
          </h1>
          <div className={"relative mb-10 w-full max-w-[590px]"}>
            <Icons.gameSearch className={"absolute top-5 left-6"} />
            <input
              className={
                "bg-white w-full h-[60px] px-14  rounded-[50px] outline-none"
              }
              placeholder={"Search..."}
            />
          </div>
        </div>
      </div>
      <div className={"w-full px-[108px]"}>
        <h2
          className={"text-secondary text-[24px] font-semibold mt-[30px] mb-8"}
        >
          Recent blog posts
        </h2>
        <div className={"flex gap-8"}>
          <div className={"w-1/2"}>
            <Link href={"/blog/1"}>
              <Image
                src={"/blog1.png"}
                alt={"blog1"}
                height={238}
                width={609}
                className={"w-full h-[238px] object-cover rounded-[25px] mb-5"}
              />
              <p className={"text-[14px] text-secondary font-semibold mb-3"}>
                Sunday , 1 Jan 2023
              </p>
              <div className={"flex gap-4 justify-between mb-3"}>
                <h3 className={"text-[#004085] text-[24px] font-bold"}>
                  Virtual Learning and Its Pros and Cons for Autistic Students
                </h3>
                <Icons.link />
              </div>
              <p>
                The advancement of personal computers and their increased access
                across every household and individual have revolutionized our
                society and world.
              </p>
            </Link>
          </div>
          <div className={"flex flex-col gap-8 w-1/2"}>
            <Link href={"/blog/1"} className={"flex gap-6"}>
              <Image
                src={"/blog2.png"}
                alt={"blog1"}
                height={200}
                width={320}
                className={"w-full h-[200px] object-cover rounded-[25px] mb-5"}
              />
              <div>
                <p className={"text-[14px] text-secondary font-semibold mb-3"}>
                  Sunday , 1 Jan 2023
                </p>
                <h3 className={"text-[#004085] text-[24px] font-bold mb-2"}>
                  How to Improve Communication with Autistic Children
                </h3>
                <p>Effective communication is critical for building good...</p>
              </div>
            </Link>
            <Link href={"/blog/1"} className={"flex gap-6"}>
              <Image
                src={"/blog3.png"}
                alt={"blog1"}
                height={200}
                width={320}
                className={"w-full h-[200px] object-cover rounded-[25px] mb-5"}
              />
              <div>
                <p className={"text-[14px] text-secondary font-semibold mb-3"}>
                  Sunday , 1 Jan 2023
                </p>
                <h3 className={"text-[#004085] text-[24px] font-bold mb-2"}>
                  How Autism and Anxiety May be Linked
                </h3>
                <p>
                  Autism and anxiety are two separate conditions that sometimes
                  coexist in a person.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className={"w-full px-[108px]"}>
        <h2
          className={"text-secondary text-[24px] font-semibold mt-[30px] mb-8"}
        >
          All blog posts
        </h2>
        <div className={"grid grid-cols-3 gap-8"}>
          <Link href={"/blog/1"}>
            <Image
              src={"/all-blog-1.png"}
              alt={"blog1"}
              height={240}
              width={384}
              className={"w-full h-[240px] object-cover rounded-[25px] mb-5"}
            />
            <p className={"text-[14px] text-secondary font-semibold mb-3"}>
              Sunday , 1 Jan 2023
            </p>
            <div className={"flex gap-4 justify-between mb-3"}>
              <h3 className={"text-[#004085] text-[24px] font-bold"}>
                Articulation Disorder: Understanding the Basics
              </h3>
              <Icons.link className={"min-w-6 min-h-6"} />
            </div>
            <p>
              Articulation disorder, a type of speech impairment characterized
              by difficulty in pronouncing specific
            </p>
          </Link>
          <Link href={"/blog/1"}>
            <Image
              src={"/all-blog-2.png"}
              alt={"blog1"}
              height={240}
              width={384}
              className={"w-full h-[240px] object-cover rounded-[25px] mb-5"}
            />
            <p className={"text-[14px] text-secondary font-semibold mb-3"}>
              Sunday , 1 Jan 2023
            </p>
            <div className={"flex gap-4 justify-between mb-3"}>
              <h3 className={"text-[#004085] text-[24px] font-bold"}>
                PM mental models
              </h3>
              <Icons.link className={"min-w-6 min-h-6"} />
            </div>
            <p>
              Mental models are simple expressions of complex processes or
              relationships.
            </p>
          </Link>
          <Link href={"/blog/1"}>
            <Image
              src={"/all-blog-3.png"}
              alt={"blog1"}
              height={240}
              width={384}
              className={"w-full h-[240px] object-cover rounded-[25px] mb-5"}
            />
            <p className={"text-[14px] text-secondary font-semibold mb-3"}>
              Sunday , 1 Jan 2023
            </p>
            <div className={"flex gap-4 justify-between mb-3"}>
              <h3 className={"text-[#004085] text-[24px] font-bold"}>
                Understanding Chromosome 21 and Down Syndrome
              </h3>
              <Icons.link className={"min-w-6 min-h-6"} />
            </div>
            <p>
              Containing only around 300 genes, chromosome 21 is one of the
              smaller chromosomes found in human cells.
            </p>
          </Link>
          <Link href={"/blog/1"}>
            <Image
              src={"/all-blog-4.png"}
              alt={"blog1"}
              height={240}
              width={384}
              className={"w-full h-[240px] object-cover rounded-[25px] mb-5"}
            />
            <p className={"text-[14px] text-secondary font-semibold mb-3"}>
              Sunday , 1 Jan 2023
            </p>
            <div className={"flex gap-4 justify-between mb-3"}>
              <h3 className={"text-[#004085] text-[24px] font-bold"}>
                Tablet Computer Use in Autism Spectrum Disorder
              </h3>
              <Icons.link className={"min-w-6 min-h-6"} />
            </div>
            <p>
              In today’s world, many needs can be covered with technological
              devices.
            </p>
          </Link>
          <Link href={"/blog/1"}>
            <Image
              src={"/all-blog-5.png"}
              alt={"blog1"}
              height={240}
              width={384}
              className={"w-full h-[240px] object-cover rounded-[25px] mb-5"}
            />
            <p className={"text-[14px] text-secondary font-semibold mb-3"}>
              Sunday , 1 Jan 2023
            </p>
            <div className={"flex gap-4 justify-between mb-3"}>
              <h3 className={"text-[#004085] text-[24px] font-bold"}>
                Speech Therapy for Autism
              </h3>
              <Icons.link className={"min-w-6 min-h-6"} />
            </div>
            <p>
              Speech and language therapy (SLT) started to appear slowly as a
              profession in the 18th and 19th centuries, and has become more
              popular throughout the 20th century.
            </p>
          </Link>
          <Link href={"/blog/1"}>
            <Image
              src={"/all-blog-5.png"}
              alt={"blog1"}
              height={240}
              width={384}
              className={"w-full h-[240px] object-cover rounded-[25px] mb-5"}
            />
            <p className={"text-[14px] text-secondary font-semibold mb-3"}>
              Sunday , 1 Jan 2023
            </p>
            <div className={"flex gap-4 justify-between mb-3"}>
              <h3 className={"text-[#004085] text-[24px] font-bold"}>
                Why Applied Behavior Analysis (ABA)?
              </h3>
              <Icons.link className={"min-w-6 min-h-6"} />
            </div>
            <p>
              Starting a community doesn’t need to be complicated, but how do
              you get started?
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
