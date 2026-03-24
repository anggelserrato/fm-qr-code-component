import image from './assets/image-qr-code.png';

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <article className="flex flex-1 items-center justify-center">
        <figure className="flex max-w-xs flex-col gap-md rounded-2xl bg-white p-sm shadow-lg">
          <img
            src={image}
            alt="QR code para visitar Frontend Mentor"
            className="w-full rounded-xl"
          />
          <figcaption className="mb-md flex flex-col gap-sm px-sm">
            <h1 className="text-center text-[22px] leading-[120%] font-bold tracking-normal text-slate-900">
              Improve your front-end skills by building projects
            </h1>
            <p className="text-center text-[15px] leading-[140%] tracking-[0.2px] text-slate-500">
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </p>
          </figcaption>
        </figure>
      </article>

      <footer className="text-body pb-4 text-center text-slate-500">
        Challenge by{' '}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Frontend Mentor (opens in a new tab)"
          className="font-bold text-slate-900"
        >
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a
          href="https://www.frontendmentor.io/profile/anggelserrato"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Angel Serrato (opens in a new tab)"
          className="font-bold text-slate-900"
        >
          Angel Serrato
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
