import image from './assets/image-qr-code.png';

function App() {
  return (
    <div className="min-h-screen flex flex-col border-2 border-red-400">
      <main className="flex-1 flex items-center justify-center p-4 border-2 border-green-400">
        <div className="bg-white rounded-2xl p-md flex flex-col gap-md max-w-xs shadow-lg border-2 border-blue-400">
          <img
            src={image}
            alt="QR code para visitar Frontend Mentor"
            className="rounded-xl w-full"
          />
          <div className="flex flex-col gap-sm pb-sm">
            <h1 className="text-title font-bold text-slate-900 text-center">
              Improve your front-end skills by building projects
            </h1>
            <p className="text-body text-slate-500 text-center">
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
