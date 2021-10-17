import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const name = "[Your Name]";
export const siteTitle = "Next.js Sample Website";

export default function Layout({
  children,
  home,
  toggleTheme,
  isDarkTheme,
}: {
  children: React.ReactNode;
  home?: boolean;
  toggleTheme?: () => void;
  isDarkTheme?: boolean;
}) {
  const router = useRouter();

  return (
    <div className="light:bg-white h-screen border-gradient font-medium font-body dark:bg-darkgrey dark:text-white">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className="flex justify-between p-10 px-14">
        <nav>
          <ul className="flex text-xl">
            <li className="mr-4">
              <Link href="/">
                <a className={router.pathname == "/" ? "" : "link"}>
                  Steffen Pedersen
                </a>
              </Link>
            </li>

            <li className="mr-4">
              <Link href="/posts">
                <a
                  className={router.pathname.startsWith("/posts") ? "" : "link"}
                >
                  Posts
                </a>
              </Link>
            </li>

            <li className="mr-4">
              <Link href="/notes">
                <a
                  className={router.pathname.startsWith("/notes") ? "" : "link"}
                >
                  Notes
                </a>
              </Link>
            </li>
          </ul>
        </nav>

        <button onClick={toggleTheme}>
          {isDarkTheme ? (
            <span aria-label="Light mode" role="img">
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </>
            </span>
          ) : (
            <span aria-label="Dark mode" role="img">
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              </>
            </span>
          )}
        </button>
      </header>
      <main className="p-5 mt-20 mx-auto max-w-screen-lg flex mt-5">
        {children}
      </main>
    </div>
  );
}
