import Image from 'next/image';
import data from '../data.json';

function LinkCard({ href, title, image }: {
  href: string;
  title: string;
  image?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center w-full p-4 rounded-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1">
      <div className="flex items-center space-x-4 w-full">
        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center overflow-hidden">
          {image ? (
            <Image 
              className="w-8 h-8 object-contain"
              alt={title}
              src={image}
              width={32}
              height={32}
            />
          ) : (
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-md flex items-center justify-center">
              <span className="text-white font-semibold text-sm">
                {title.charAt(0).toUpperCase()}
              </span>
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h2 className="text-slate-900 dark:text-slate-100 font-semibold text-lg truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {title}
          </h2>
        </div>
        <div className="flex-shrink-0">
          <svg className="w-5 h-5 text-slate-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </div>
    </a>
  )
}

function Socials({ href, title, image }: {
  href: string;
  title: string;
  image?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10 transition-all duration-300 hover:scale-110 hover:-translate-y-1 mx-2">
      <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center">
        {image ? (
          <Image 
            className="w-6 h-6 object-contain group-hover:scale-110 transition-transform"
            alt={title}
            src={image}
            width={24}
            height={24}
          />
        ) : (
          <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold text-xs">
              {title.charAt(0).toUpperCase()}
            </span>
          </div>
        )}
      </div>
    </a>
  )
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
      {/* Profile Section */}
      <div className="text-center mb-12">
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
          <Image 
            className="relative rounded-full border-4 border-white/20 shadow-2xl"
            alt={data.name}
            src={data.avatar}
            width={140}
            height={140}
            priority
          />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 dark:from-slate-100 dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent mb-2">
          {data.name}
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg">
          Welcome to my digital space
        </p>
      </div>

      {/* Links Section */}
      <div className="w-full max-w-4xl mb-8">
        <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 text-center mb-6">
          Links
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.links.map((link) => (
            <LinkCard key={link.href} {...link} />
          ))}
        </div>
      </div>

      {/* Social Links Section */}
      <div className="text-center">
        <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">
          Connect with me
        </h2>
        <div className="flex justify-center space-x-2">
          {data.socials.map((link) => (
            <Socials key={link.href} {...link} />
          ))}
        </div>
      </div>
    </div>
  );
}
