import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-300">
      <div className="flex flex-col bg-white p-4 rounded-2xl w-80">
        <div className="rounded-3xl">
          <Image
            src={"/images/qr-code.svg"}
            width={300}
            height={300}
            alt="qr-code"
          />
        </div>
        <div className="flex flex-col mt-2 p-4 text-center">
          <span className="text-slate-900 text-[22px] font-bold">
            Improve your front-end skills by building projects
          </span>
          <span className="mt-4 text-slate-500 text-[15px]">
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </span>
        </div>
      </div>
      
    </main>
  );
}
