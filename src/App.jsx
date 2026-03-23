import image from './assets/image-qr-code.png';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex flex-1 items-center justify-center">
        <div className="bg-white rounded-2xl p-sm flex flex-col gap-md max-w-xs shadow-lg">
          <img
            src={image}
            alt="QR code para visitar Frontend Mentor"
            className="rounded-xl w-full"
          />
          <div className="flex flex-col gap-sm px-sm mb-md">
            <h1 className="text-[22px] font-bold leading-[120%] tracking-normal text-slate-900 text-center">
              Improve your front-end skills by building projects
            </h1>
            <p className="text-[15px] text-slate-500 text-center leading-[140%] tracking-[0.2px]">
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </p>
          </div>
        </div>
      </main>

      <footer className="text-center pb-4 text-body text-slate-500">
        Challenge by{' '}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          className="text-slate-900 font-bold"
        >
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a href="#" className="text-slate-900 font-bold">
          Angel Serrato
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
