"use client";
import Link from "next/link";
import { Icons } from "@/app/components/icons";
import { useRouter } from "next/navigation";

export default function Page() {
  const { push } = useRouter();
  return (
    <div>
      <div className={"flex justify-between items-center mb-[135px]"}>
        <Link href={"/"}>
          <Icons.leave />
        </Link>

        <div className={"text-[18px]"}>
          <span className={"text-black opacity-[54%]"}>
            Don&apos;t have an account?
          </span>{" "}
          <Link className={"text-primary font-medium"} href={"/sign-up"}>
            Sign Up
          </Link>
        </div>
      </div>
      <div className={"flex justify-center"}>
        <div className={"w-[416px]"}>
          <h1 className={"text-secondary text-[40px] font-semibold mb-6"}>
            Sign In
          </h1>
          <div className={"flex flex-col gap-3.5"}>
            <label className={"text-[#696F79] font-medium"}>
              Email address
            </label>
            <input
              type="text"
              placeholder={"Enter email address"}
              className={
                "border border-[#8692A6] px-7 py-5 rounded-[6px] hover:border-[#1565D8] focus:border-[#1565D8] transition-all ease-in-out outline-none hover:shadow-lg focus:shadow-lg bg-gray-50"
              }
            />
          </div>
          <div className={"flex flex-col gap-3.5 mt-6"}>
            <label className={"text-[#696F79] font-medium"}>Password</label>
            <input
              type="password"
              placeholder={"Enter password"}
              className={
                "border border-[#8692A6] px-7 py-5 rounded-[6px] hover:border-[#1565D8] focus:border-[#1565D8] transition-all ease-in-out outline-none hover:shadow-lg focus:shadow-lg bg-gray-50"
              }
            />
          </div>
          <button
            onClick={() => {
              push("/");
            }}
            className={"text-white bg-primary w-full mt-8 h-16 rounded-[6px]"}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
