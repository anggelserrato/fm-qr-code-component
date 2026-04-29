import image from './assets/image-qr-code.png';

function App() {
  return (
    <main className="bg-color-slate-300 flex min-h-screen flex-col items-center justify-center">
      <article className="flex max-w-[20rem] flex-col gap-300 rounded-[1.25rem] bg-white px-200 pt-200 pb-500 shadow-[0_25px_25px_0_rgba(0,0,0,0.05)]">
        <img
          src={image}
          alt="QR code para visitar Frontend Mentor"
          className="rounded-[0.625rem]"
        />
        <div className="flex flex-col gap-200 px-200 text-center">
          <h1 className="text-preset-1 text-slate-900">
            Improve your front-end skills by building projects
          </h1>
          <p className="text-preset-2 text-slate-500">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </article>
    </main>
  );
}

export default App;
