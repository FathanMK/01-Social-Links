import Button from "./components/Button";

export default function App() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-off-black ">
      <div className="bg-dark-grey rounded p-10 flex w-[450px] mx-4 flex-col items-center justify-center">
        <div>
          <img
            alt="avatar"
            className="rounded-full h-20 w-20"
            src="images/avatar-jessica.jpeg"
          />
        </div>
        <div className="text-center mt-6">
          <h1 className="text-white text-xl font-bold">Jessica Randall</h1>
          <h2 className="text-cool-green font-semibold text-sm mt-[2px]">
            London, United Kingdom
          </h2>
        </div>
        <p className="mt-6 text-white text-center text-sm font-medium">
          "Front-end developer and avid reader."
        </p>
        <div className="mt-6 w-full flex flex-col gap-4">
          <Button>GitHub</Button>
          <Button>Frontend Mentor</Button>
          <Button>LinkedIn</Button>
          <Button>Twitter</Button>
          <Button>Instagram</Button>
        </div>
      </div>
    </div>
  );
}
