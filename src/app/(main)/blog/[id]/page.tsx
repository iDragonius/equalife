import Image from "next/image";
import Link from "next/link";
import { Icons } from "@/app/components/icons";

export default function Page() {
  return (
    <div>
      <div className={"w-full px-[180px] mt-10"}>
        <h1 className={"text-[40px] font-bold text-[#004085] mb-6"}>
          Understanding Chromosome 21 and Down Syndrome
        </h1>
        <div className={"flex gap-6 mb-6"}>
          <div className={"flex items-center gap-2"}>
            <Image
              src={"/blog-user.png"}
              alt={"user"}
              width={28}
              height={28}
              className={"w-7 h-7"}
            />
            <p className={"text-[14px] text-[#696A75]"}>Tracey Wilson</p>
          </div>
          <div className={"flex items-center gap-2"}>
            <Image
              src={"/calendar.png"}
              alt={"user"}
              width={14}
              height={14}
              className={"w-3.5 h-3.5"}
            />
            <p className={"text-[14px] text-[#696A75]"}>August 20, 2022</p>
          </div>
        </div>
        <Image
          src={"/big-blog-1.png"}
          alt={"big-blog"}
          width={1146}
          height={545}
          className={"w-full h-[545px] object-cover rounded-[12px] mb-6"}
        />

        <div className={"max-w-[868px] mx-auto mb-20"}>
          <h3 className={"text-[32px] font-medium text-primary mb-3"}>
            What is Chromosome 21?
          </h3>
          <p className={"text-[22px] mb-2"}>
            So what is chromosome 21? Containing only around 300 genes,
            chromosome 21 is one of the smaller chromosomes found in human
            cells. This equates to just 1-2% of our entire genetic code. The
            genes present on chromosome 21 provide instructions for making
            proteins crucial for several essential biological functions. These
            include proteins that play a role in regulating immune system
            activity, skeletal muscle growth and development, communication
            between nerve cells, and proper fetal development in the womb.
          </p>
          <p className={"text-[22px] mb-2"}>
            Chromosome 21 exists in pairs, with one copy inherited from each
            parent. Deviations from this, such as having a third copy in every
            cell, lead to genetic disorders like Down syndrome. The extra
            genetic material from trisomy 21 disrupts normal development and
            causes the characteristics of Down syndrome.
          </p>{" "}
          <h3 className={"text-[32px] font-medium text-primary mb-3"}>
            What is the role of chromosome 21 in Down syndrome?
          </h3>
          <p className={"text-[22px] mb-2"}>
            Chromosome 21 is important in Down syndrome because an extra copy of
            this chromosome causes the disorder . In most cases of Down
            syndrome, chromosome 21 has three copies rather than the usual two
          </p>
          <p className={"text-[22px] mb-2"}>
            This additional chromosome produces overexpression of the genes on
            chromosome 21. This in turn interrupts the typical development of
            the individual. We still study how the additional chromosome 21
            affects the development, but Down syndrome is inextricably linked to
            the disorder.
          </p>{" "}
          <h3 className={"text-[32px] font-medium text-primary mb-3"}>
            How Chromosome 21 Affects Individuals with Down Syndrome
          </h3>
          <p className={"text-[22px] mb-2"}>
            The most common cause of Down syndrome is trisomy 21. Trisomy 21 is
            when there are three copies of chromosome 21 instead of two. This
            extra copy of chromosome 21 leads to the overexpression of the genes
            it contains..
          </p>
          <p className={"text-[22px] mb-2"}>
            The presence of three copies results in amplified production of the
            proteins coded by the genes on chromosome 21. This surplus of
            proteins interrupts normal development and gives rise to the
            physical traits and health problems linked with Down syndrome.
          </p>
          <p className={"text-[22px] mb-2"}>
            The exact mechanisms behind how the extra chromosome 21 causes Down
            syndrome is still being researched. However, the overexpression of
            genes on chromosome 21 is believed to create an imbalance that
            disrupts typical growth and development.
          </p>
        </div>
        <div>
          <h3
            className={
              "text-[36px] font-semibold text-[#004085] text-center mb-12"
            }
          >
            Similar Articles
          </h3>
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
                Articulation disorder, a type of speech impairment characterized
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
          </div>
        </div>
      </div>
    </div>
  );
}
