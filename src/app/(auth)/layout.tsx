import Image from "next/image";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={"flex h-screen"}>
      <div className={"h-screen relative"}>
        <div
          className={
            "absolute w-full h-full left-0 top-0 bg-black bg-opacity-[42%] z-[1000]"
          }
        ></div>
        <Image
          src={"/auth-sidebar.jpeg"}
          alt={"sidebar"}
          width={666}
          height={1000}
          className={"h-full object-cover object-left z-20"}
        />
      </div>
      <div className={"w-full py-[70px] px-[54px]  "}>{children}</div>
    </div>
  );
}
