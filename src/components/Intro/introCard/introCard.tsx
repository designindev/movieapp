interface IntroCardProps {
    url: string;
    title: string;
    description: string;
  }

const IntroCard = ({ url, title, description }: IntroCardProps) => {
    return (
        <a
          href={url}
          className="group rounded-lg border border-transparent px-5 py-4 transition-all hover:scale-105 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            {title}{" "}
            <span className="inline-block transition-transform group-hover:translate-x-2 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            {description}
          </p>
        </a>
    );
}

export default IntroCard