import Image from "next/image";
import { Icons } from "@/app/components/icons";

export default function Page() {
  return (
    <div>
      <div
        className={
          "bg-gradient-to-r from-secondary to-primary h-[332px] w-full"
        }
      ></div>
      <div className={"w-full px-[120px] -mt-32"}>
        <Image
          src={"/profile.png"}
          alt={"profile"}
          width={250}
          height={250}
          className={"w-[250px] h-[250px]"}
        />
        <h2 className={"text-[40px] font-semibold text-primary"}>
          Kate Elodie Mohr
        </h2>
        <p className={"text-[20px]"}>Web Developer at Google</p>
        <p className={"opacity-60"}>Azerbaijan</p>

        <div className={"flex  gap-12 w-full mt-12"}>
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
        <div className={"mt-12"}>
          <h3 className={"text-[32px] text-primary"}>Progress</h3>
          <div className={"flex items-center gap-8 mt-6 mb-8"}>
            <div className={"flex items-center gap-1 text-[20px]"}>
              <div className={"w-3 h-3 bg-primary rounded-full"} />
              Education
            </div>{" "}
            <div className={"flex items-center gap-1 text-[20px]"}>
              <div className={"w-3 h-3 bg-secondary rounded-full"} />
              Games
            </div>
          </div>
          <div className={"flex gap-20"}>
            <Icons.graphic />
            <Image src={"/pie.png"} alt={"pie"} height={246} width={650} />
          </div>
        </div>
      </div>
    </div>
  );
}
