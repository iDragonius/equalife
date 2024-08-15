"use client";
import { Icons } from "@/app/components/icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [step, setStep] = useState<
    "INITIAL" | "INDIVIDUAL_FORM" | "BUSINESS_FORM" | "SUCCESS"
  >("INITIAL");
  const { push } = useRouter();
  return (
    <div className={"w-full"}>
      <div className={"flex justify-between items-center mb-[135px]"}>
        <Link href={"/"}>
          <Icons.leave />
        </Link>

        <div className={"text-[18px]"}>
          <span className={"text-black opacity-[54%]"}>
            Already have an account?
          </span>{" "}
          <Link className={"text-primary font-medium"} href={"/sign-in"}>
            Sign In
          </Link>
        </div>
      </div>
      <div className={"flex justify-center"}>
        {step === "INITIAL" && (
          <div className={"w-[366px]"}>
            <h1 className={"mb-[18px] text-[30px] font-bold"}>Join Us!</h1>
            <p className={"mb-[27px] opacity-60"}>
              To begin this journey, tell us what type of account you’d be
              opening.
            </p>
            <button
              onClick={() => setStep("INDIVIDUAL_FORM")}
              className={
                "mb-7 flex items-center gap-9 bg-white  border shadow-lg h-[108px] px-9 rounded-[6px] transition-all ease-in-out border-white hover:border-primary"
              }
            >
              <Icons.individual />
              <div>
                <h3 className={"text-left font-medium"}>Individual</h3>
                <p className={"text-left text-[14px] opacity-70"}>
                  Personal account to manage all you activities.
                </p>
              </div>
            </button>{" "}
            <button
              onClick={() => setStep("BUSINESS_FORM")}
              className={
                "flex items-center gap-9 bg-white  border shadow-lg h-[108px] px-9 rounded-[6px] transition-all ease-in-out border-white hover:border-secondary"
              }
            >
              <Icons.business />
              <div>
                <h3 className={"text-left font-medium"}>Business</h3>
                <p className={"text-left text-[14px] opacity-70"}>
                  Own or balon to a company, this is for you.
                </p>
              </div>
            </button>
          </div>
        )}
        {step === "BUSINESS_FORM" && (
          <div className={"w-[411px]"}>
            <h1 className={"text-[30px] font-bold mb-2.5"}>
              Register Business Account!
            </h1>
            <p className={"text-[#8692A6] text-[18px] mb-4"}>
              For the purpose of industry regulation, your details are required.
            </p>
            <hr />
            <div className={"flex flex-col gap-6 mt-4"}>
              <div className={"flex flex-col gap-3.5"}>
                <label className={"text-[#696F79] font-medium"}>
                  Your fullname*
                </label>
                <input
                  type="text"
                  placeholder={"Enter your fullname"}
                  className={
                    "border border-[#8692A6] px-7 py-5 rounded-[6px] hover:border-[#1565D8] focus:border-[#1565D8] transition-all ease-in-out outline-none hover:shadow-lg focus:shadow-lg bg-gray-50"
                  }
                />
              </div>
              <div className={"flex flex-col gap-3.5"}>
                <label className={"text-[#696F79] font-medium"}>
                  Email address*
                </label>
                <input
                  type="text"
                  placeholder={"Enter email address"}
                  className={
                    "border border-[#8692A6] px-7 py-5 rounded-[6px] hover:border-[#1565D8] focus:border-[#1565D8] transition-all ease-in-out outline-none hover:shadow-lg focus:shadow-lg bg-gray-50"
                  }
                />
              </div>
              <div className={"flex flex-col gap-3.5"}>
                <label className={"text-[#696F79] font-medium"}>
                  Profession*
                </label>
                <input
                  type="text"
                  placeholder={"Enter profession"}
                  className={
                    "border border-[#8692A6] px-7 py-5 rounded-[6px] hover:border-[#1565D8] focus:border-[#1565D8] transition-all ease-in-out outline-none hover:shadow-lg focus:shadow-lg bg-gray-50"
                  }
                />
              </div>
              <div className={"flex flex-col gap-3.5"}>
                <label className={"text-[#696F79] font-medium"}>
                  Create password*
                </label>
                <input
                  type="password"
                  placeholder={"Enter password"}
                  className={
                    "border border-[#8692A6] px-7 py-5 rounded-[6px] hover:border-[#1565D8] focus:border-[#1565D8] transition-all ease-in-out outline-none hover:shadow-lg focus:shadow-lg bg-gray-50"
                  }
                />
              </div>
              <div className={"flex items-center gap-2"}>
                <input
                  type={"checkbox"}
                  id={"agree"}
                  className={"w-5 h-5 accent-primary"}
                />
                <label htmlFor="agree" className={"text-[#696F79]"}>
                  I agree to terms & conditions
                </label>
              </div>
            </div>
            <button
              onClick={() => {
                setStep("SUCCESS");
                setTimeout(() => {
                  push("/");
                }, 3000);
              }}
              className={"text-white bg-primary w-full mt-8 h-16 rounded-[6px]"}
            >
              Register Account
            </button>
          </div>
        )}
        {step === "INDIVIDUAL_FORM" && (
          <div className={"w-[411px]"}>
            <h1 className={"text-[30px] font-bold mb-2.5"}>
              Sign Up Individual Account!
            </h1>
            <p className={"text-[#8692A6] text-[18px] mb-4"}>
              For the purpose of industry regulation, your details are required.
            </p>
            <hr />
            <div className={"flex flex-col gap-6 mt-4"}>
              <div className={"flex flex-col gap-3.5"}>
                <label className={"text-[#696F79] font-medium"}>
                  Your fullname*
                </label>
                <input
                  type="text"
                  placeholder={"Enter your fullname"}
                  className={
                    "border border-[#8692A6] px-7 py-5 rounded-[6px] hover:border-[#1565D8] focus:border-[#1565D8] transition-all ease-in-out outline-none hover:shadow-lg focus:shadow-lg bg-gray-50"
                  }
                />
              </div>
              <div className={"flex flex-col gap-3.5"}>
                <label className={"text-[#696F79] font-medium"}>
                  Email address*
                </label>
                <input
                  type="text"
                  placeholder={"Enter email address"}
                  className={
                    "border border-[#8692A6] px-7 py-5 rounded-[6px] hover:border-[#1565D8] focus:border-[#1565D8] transition-all ease-in-out outline-none hover:shadow-lg focus:shadow-lg bg-gray-50"
                  }
                />
              </div>

              <div className={"flex flex-col gap-3.5"}>
                <label className={"text-[#696F79] font-medium"}>
                  Create password*
                </label>
                <input
                  type="password"
                  placeholder={"Enter password"}
                  className={
                    "border border-[#8692A6] px-7 py-5 rounded-[6px] hover:border-[#1565D8] focus:border-[#1565D8] transition-all ease-in-out outline-none hover:shadow-lg focus:shadow-lg bg-gray-50"
                  }
                />
              </div>
              <div className={"flex items-center gap-2"}>
                <input
                  type={"checkbox"}
                  id={"agree"}
                  className={"w-5 h-5 accent-primary"}
                />
                <label htmlFor="agree" className={"text-[#696F79]"}>
                  I agree to terms & conditions
                </label>
              </div>
            </div>
            <button
              onClick={() => {
                setStep("SUCCESS");
                setTimeout(() => {
                  push("/");
                }, 3000);
              }}
              className={"text-white bg-primary w-full mt-8 h-16 rounded-[6px]"}
            >
              Register Account
            </button>
          </div>
        )}
        {step === "SUCCESS" && (
          <div className={"flex mt-[20%] gap-3"}>
            <p className={"text-[20px] font-medium"}>Successfully completed!</p>
            <Icons.tick />
          </div>
        )}
      </div>
    </div>
  );
}
