import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HorizontalScroll, HorizontalScrollItem } from "@/components/ui/horizontal-scroll";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-8 left-0 right-0 z-50 mx-auto max-w-5xl bg-background/40 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-lg rounded-full">
        <div className="flex items-center justify-between h-16 px-6">
          <Link href="/" className="font-bold text-xl relative group">JT Jung<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span></Link>
          <div className="hidden md:flex items-center space-x-6">
            <a href="https://linkedin.com/in/jtjung" target="_blank" rel="noopener noreferrer" className="text-[#0a66c2] hover:text-[#0a66c2]/80 dark:text-[#0a66c2] dark:hover:text-[#0a66c2]/80 transition-all duration-300 hover:scale-150 transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://github.com/jtjung" target="_blank" rel="noopener noreferrer" className="text-black hover:text-black/80 dark:text-white dark:hover:text-white/80 transition-all duration-300 hover:scale-150 transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://soundcloud.com/anomadsmusic/popular-tracks" target="_blank" rel="noopener noreferrer" className="text-[#FF9533] hover:text-[#FF9533]/80 dark:text-[#FF9533] dark:hover:text-[#FF9533]/80 transition-all duration-300 hover:scale-150 transform">
              <Image
                src="/soundcloud.svg"
                alt="SoundCloud"
                width={18}
                height={18}
                className="h-5 w-5"
              />
              <span className="sr-only">SoundCloud</span>
            </a>
            <a href="https://open.spotify.com/artist/22k0t2X7eo5e77cyHo7VXU?si=OrHW0DxzRtCCkuWXLNtLUg" target="_blank" rel="noopener noreferrer" className="text-[#1db954] hover:text-[#1db954]/80 dark:text-[#1db954] dark:hover:text-[#1db954]/80 transition-all duration-300 hover:scale-150 transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
              <span className="sr-only">Spotify</span>
            </a>
            <a href="mailto:jtj0828@gmail.com" className="text-[#15a5ee] hover:text-[#15a5ee]/80 dark:text-[#15a5ee] dark:hover:text-[#15a5ee]/80 transition-all duration-300 hover:scale-150 transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span className="sr-only">Email</span>
            </a>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </nav>

      <main className="">
        {/* Horizontal Scroll Section */}
        <HorizontalScroll className="py-0">
          <HorizontalScrollItem>
            <div>
              <div className="grid grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold tracking-tighter mb-4">Hi there, I'm JT.</h2>
                  <p className="text-lg text-stone-900 dark:text-stone-400">
                    Product Manager by day and Philomath by night.
                  </p>
                  <p className="text-lg text-stone-900 dark:text-stone-400">
                    I am driven by curiosity for music, tech, and people, and enjoy throwing myself into building things.
                  </p>
                </div>
                <div className="relative h-[300px] rounded-xl overflow-hidden">
                  <Image
                    src="/images/profile.jpg"
                    alt="JT Jung"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </HorizontalScrollItem>

          <HorizontalScrollItem>
            <div>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-4">
                  <div className="mb-1 flex items-center">
                    <div className="bg-white/90 dark:bg-stone-800/90 flex h-16 w-28">
                      <Image src="/logos/IBM_logo.svg.png" alt="IBM" width={80} height={32} className="object-contain h-full" />
                    </div>
                  </div>
                  <p className="text-lg text-stone-900 dark:text-stone-400">
                    My career began at IBM as a consultant, where I led the delivery of web, mobile, and enterprise products for large companies in retail, healthcare, and real estate. I had the opportunity to touch all facets of the product lifecycle.
                  </p>
                  <p className="text-lg text-stone-900 dark:text-stone-400">
                    At IBM&apos;s entry-level consulting program, I was fortunate to win the Program Transformation Warrior award, given to 8 young consultants every year.
                  </p>
                </div>
                {/* Client Logos */}
                <div className="mt-6">
                  <h3 className="text-sm font-medium text-stone-500 dark:text-stone-400 mb-3">Past Clients</h3>
                  <div className="grid grid-cols-3 md:grid-cols-4 gap-4 items-center">
                    <div className="bg-white/90 dark:bg-stone-800/90 p-3 rounded-lg flex items-center justify-center h-16">
                      <Image src="/logos/Jefferies_logo.svg.png" alt="Jefferies" width={100} height={40} className="object-contain h-full" />
                    </div>
                    <div className="bg-white/90 dark:bg-stone-800/90 p-3 rounded-lg flex items-center justify-center h-16">
                      <Image src="/logos/Peapod_logo.svg.png" alt="Peapod" width={100} height={40} className="object-contain h-full" />
                    </div>
                    <div className="bg-white/90 dark:bg-stone-800/90 p-3 rounded-lg flex items-center justify-center h-16">
                      <Image src="/logos/hannaford-1-logo-png-transparent.png" alt="Hannaford" width={100} height={40} className="object-contain h-full" />
                    </div>
                    <div className="bg-white/90 dark:bg-stone-800/90 p-3 rounded-lg flex items-center justify-center h-16">
                      <Image src="/logos/WD-07e36e8d.png" alt="Western Digital" width={100} height={40} className="object-contain h-full" />
                    </div>
                    <div className="bg-white/90 dark:bg-stone-800/90 p-3 rounded-lg flex items-center justify-center h-16">
                      <Image src="/logos/download.png" alt="Client" width={100} height={40} className="object-contain h-full" />
                    </div>
                    <div className="bg-white/90 dark:bg-stone-800/90 p-3 rounded-lg flex items-center justify-center h-16">
                      <Image src="/logos/download (1).png" alt="Client" width={100} height={40} className="object-contain h-full" />
                    </div>
                    <div className="bg-white/90 dark:bg-stone-800/90 p-3 rounded-lg flex items-center justify-center h-16">
                      <Image src="/logos/Tyson_Foods_corporate_logo_(2024).svg" alt="Tyson Foods" width={100} height={40} className="object-contain h-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </HorizontalScrollItem>

          <HorizontalScrollItem>

            <div>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-4">
                  <div className="mb-1 flex items-center">
                    <div className="bg-white/90 dark:bg-stone-800/90 flex h-16 w-28">
                      <Image src="/logos/entera-logo-full color.png" alt="Entera" width={80} height={32} className="object-contain h-full" />
                    </div>
                  </div>
                  <p className="text-lg text-stone-900 dark:text-stone-400 pt-3">
                    Afterwards, I joined Entera as their first Product Manager, launching two new business lines by driving both product development and go-to-market strategies. I also implemented automation tools across every department and optimized workflows as the company grew in complexity.
                  </p>
                  <p className="text-lg text-stone-900 dark:text-stone-400 pt-3">
                    Somehow, I became closely integrated into the <a href="https://www.builtinnyc.com/articles/focus-expansion-powers-enteras-business-and-culture" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline">company&apos;s culture campaigns</a>... purely by existing long enough.
                  </p>
                </div>
                <div className="mt-6">
                  <h3 className="text-sm font-medium text-stone-500 dark:text-stone-400 mb-3">A few of the tools I&apos;ve worked with...</h3>
                  <div className="grid grid-cols-3 md:grid-cols-4 gap-4 items-center">
                    <div className="bg-white/90 dark:bg-stone-800/90 p-3 rounded-lg flex items-center justify-center h-16">
                      <Image src="/tool_logos/Airtable_Logo.svg.png" alt="Airtable" width={100} height={40} className="object-contain h-full" />
                    </div>
                    <div className="bg-white/90 dark:bg-stone-800/90 p-3 rounded-lg flex items-center justify-center h-16">
                      <Image src="/tool_logos/appcues-logo.png" alt="Appcues" width={100} height={40} className="object-contain h-full" />
                    </div>
                    <div className="bg-white/90 dark:bg-stone-800/90 p-3 rounded-lg flex items-center justify-center h-16">
                      <Image src="/tool_logos/HubSpot_Logo.svg.png" alt="HubSpot" width={100} height={40} className="object-contain h-full" />
                    </div>
                    <div className="bg-white/90 dark:bg-stone-800/90 p-3 rounded-lg flex items-center justify-center h-16">
                      <Image src="/tool_logos/Atlassian-Logo.png" alt="Atlassian" width={100} height={40} className="object-contain h-full" />
                    </div>
                    <div className="bg-white/90 dark:bg-stone-800/90 p-3 rounded-lg flex items-center justify-center h-16">
                      <Image src="/tool_logos/Coda.io_Logo.svg.png" alt="Coda" width={100} height={40} className="object-contain h-full" />
                    </div>
                    <div className="bg-white/90 dark:bg-stone-800/90 p-3 rounded-lg flex items-center justify-center h-16">
                      <Image src="/tool_logos/Intercom_logo.png" alt="Intercom" width={100} height={40} className="object-contain h-full" />
                    </div>
                    <div className="bg-white/90 dark:bg-stone-800/90 p-3 rounded-lg flex items-center justify-center h-16">
                      <Image src="/tool_logos/snowflake-color.png" alt="Snowflake" width={100} height={40} className="object-contain h-full" />
                    </div>
                    <div className="bg-white/90 dark:bg-stone-800/90 p-3 rounded-lg flex items-center justify-center h-16">
                      <Image src="/tool_logos/mailchimp.png" alt="Mailchimp" width={100} height={40} className="object-contain h-full" />
                    </div>

                  </div>
                  <div className="text-xs pr-6 pt-10 text-center">And more...</div>
                </div>
              </div>
            </div>
          </HorizontalScrollItem>

          {/* Working on now Section */}
          <HorizontalScrollItem>
            <div>
              <div className="grid grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold tracking-tighter mb-4">Outside of work...</h2>
                  <p className="text-lg text-stone-900 dark:text-stone-400">
                    I&apos;m currently building <a href="https://fplstats.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-bold">an app</a> for a Fantasy Premier League I run every year - to help players make data-driven decisions on their team.
                  </p>
                  <p className="text-lg text-stone-900 dark:text-stone-400">
                    Claude released MCP servers in late 2024, and I&apos;m having lots of fun with it.
                  </p>
                  <p className="text-lg text-stone-900 dark:text-stone-400">
                    I also enjoy playing and engineering music. If you fancy some jazz and r&b, check out my <a href="https://open.spotify.com/artist/22k0t2X7eo5e77cyHo7VXU?si=GT56NklzQmy_BI9Stc4U_g" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-bold">Spotify</a> or <a href="https://soundcloud.com/anomadsmusic/popular-tracks" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-bold">SoundCloud</a> link above to hear some of my end products!
                  </p>
                </div>
                <div className="relative h-[300px] rounded-xl overflow-hidden">
                  <Image
                    src="/images/profile.jpg"
                    alt="JT Jung"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </HorizontalScrollItem>



          {/* Contact Section */}
          <HorizontalScrollItem>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter mb-4">Get In Touch</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-lg text-stone-700 dark:text-stone-300 mb-4">
                    Interested in working together or just want to say hello? Feel free to reach out!
                  </p>
                </div>
                <div className="p-6 border border-border rounded-lg bg-card/50">
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">Name</label>
                        <input id="name" placeholder="Your name" className="w-full p-2 rounded-md border border-border bg-background" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                        <input id="email" type="email" placeholder="Your email" className="w-full p-2 rounded-md border border-border bg-background" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">Message</label>
                        <textarea id="message" placeholder="Your message" className="w-full p-2 rounded-md border border-border bg-background min-h-[100px]" />
                      </div>
                    </div>
                    <Button className="w-full" asChild>
                      <a href="mailto:jtj0828@gmail.com">Send Message</a>
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </HorizontalScrollItem>
        </HorizontalScroll>
      </main >
    </div >
  );
}
