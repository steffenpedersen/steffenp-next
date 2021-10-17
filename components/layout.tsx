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
}: {
  children: React.ReactNode;
  home?: boolean;
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
                <a className={router.pathname.startsWith("/posts") ? "" : "link"}>Posts</a>
              </Link>
            </li>

            <li className="mr-4">
              <Link href="/notes">
                <a className={router.pathname.startsWith("/notes") ? "" : "link"}>Notes</a>
              </Link>
            </li>
          </ul>
        </nav>

      </header>
      <main className="p-5 mt-20 mx-auto max-w-screen-lg flex mt-5">{children}</main>
    </div>
  );
}
