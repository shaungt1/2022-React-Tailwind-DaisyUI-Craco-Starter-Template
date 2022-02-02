import img from "./react.png";

function App() {
  const h1 = " React";
  const newLine = <br />;

  return (
    <div className="  flex flex-row min-h-screen justify-center items-center bg-purple-500 ">
      <div className=" text-center">
        <img className="loaderIcon" src={img} alt="react tailwind daisyui" />
      </div>
      <div className="flex flex-col ">
        <h1 className="text-4xl text-center">{h1.toUpperCase()}</h1>
        <h3 className="text-lg text-center">Tailwind & DaisYUI Starter</h3>
        <p>{newLine}</p>
        <div className="flex flex-row justify-center">
          <a href="https://daisyui.com/">
            <button className="my-3 mx-2 flex  flex-col justify-center items-center btn ">
              Tailwind Docs
            </button>
          </a>
          <a href="https://daisyui.com/">
            <button className="my-3 mx-2 flex flex-col justify-center items-center btn ">
              Daisy UI Docs
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
