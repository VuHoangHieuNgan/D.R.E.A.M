export default function Projects({ name, img, alt, type, link, year, tools }) {
  return (
    <div>
      <a
        target="_blank"
        rel="noreferrer"
        href={link}
        className="img group inline-block overflow-hidden duration-200 ease-linear hover:rounded-3xl"
      >
        <img
          className="w-screen duration-700 ease-in-out group-hover:scale-105"
          src={img}
          alt={alt}
          width="800"
          height="600"
        />
      </a>
      <div className="mt-4">
        {(year || tools) && (
          <div className="flex space-x-2 mb-3">
            {year && (
              <p className="rounded-full bg-transparent border border-secondary-600 flex justify-center items-center px-4 py-1 text-secondary-600 text-body-4 2xl:text-3xl font-roboto font-light">{year}</p>
            )}
            {tools && (
              <p className="rounded-full bg-transparent border border-secondary-600 flex justify-center items-center px-4 py-1 text-secondary-600 text-body-4 2xl:text-3xl font-roboto font-light">{tools}</p>
            )}
          </div>
        )}
        <div className={year || tools ? "2xl:space-y-3" : "space-y-4"}>
          {name && (
            year || tools ? (
              <h3 className="text-works-title 2xl:text-5xl font-inter font-bold uppercase text-black">
                {name}
              </h3>
            ) : (
              <p className="text-body-2 2xl:text-xl font-roboto font-bold leading-relaxed text-black max-w-4xl whitespace-pre-line">
                {name}
              </p>
            )
          )}
          {type && (
            year || tools ? (
              <p className="text-body-2 2xl:text-4xl font-roboto font-light text-black">{type}</p>
            ) : (
              <p className="text-body-2 2xl:text-xl font-roboto font-light leading-relaxed text-black max-w-4xl whitespace-pre-line">
                {type}
              </p>
            )
          )}
        </div>
      </div>
    </div>
  );
}
