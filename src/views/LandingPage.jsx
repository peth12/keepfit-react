import React from "react";
import { NavbarLandingPage } from "../components/NavbarLogin";
import { Zoom,Slide,Fade } from "react-awesome-reveal";

export const LandingPage = () => {
  return (
    <>
      <NavbarLandingPage />
      <div className="flex-col ">
        {/* section 1 card ui show */}
        <section className="w-full h-auto bg-gradient-to-r from-red-500 to-amber-500 relative overflow-x-hidden">
          <main className="w-full lg:h-screen md:h-[50vh] h-screen relative bg-zinc-900 overflow-x-hidden pt-[60px] ">
            <Zoom className="h-full">
              <img
                src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2187"
                className=" w-full md:h-full h-1/2 object-cover"
                alt="HeroImg1"
                // style={{ width: "auto" }}
              />
            </Zoom>

            <div className="md:w-[50%] w-full md:h-full h-1/2 absolute md:top-0 top-1/2 right-0 bg-zinc-900 flex flex-col md:justify-center justify-start lg:gap-8 md:gap-4 gap-2 lg:px-20 md:px-6 px-4 overflow-x-hidden">
              <h1 className="lg:text-6xl md:text-4xl text-4xl md:mt-10 mt-10 text-zinc-100 font-extrabold">
                <Slide direction="right">this is header</Slide>
              </h1>
              <p className="lg:text-lg text-base text-zinc-400 my-4">
                <Slide direction="left">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
                  expedita ex obcaecati quam atque asperiores dolorem,
                  voluptatibus, necessitatibus iste iusto, iure fuga ratione
                  accusamus totam. Beatae dolorem vel explicabo voluptas?
                </Slide>
              </p>
              <div className="flex items-center gap-8">
                <Slide direction="up">
                  <button className="rounded-xl px-10 font-medium text-white py-2.5 border-2 border-primary hover:bg-gradient-to-r whitespace-nowrap from-red-500 to-amber-500 ">
                    <a href="/Signup">Sign up</a>
                  </button>
                </Slide>
                <div className="flex gap-2">
                  <Slide direction="up">
                    <p className="text-white hidden md:block">
                      Do you have an account?
                    </p>
                    <a
                      href="Login"
                      className="flex items-center gap-2 text-red-500 hover:text-amber-500 group"
                    >
                      Login
                    </a>
                  </Slide>
                </div>
              </div>
            </div>
          </main>
        </section>
        {/* section 2 */}
        <section className="w-full h-auto flex items-center bg-zinc-950">
          <main className="w-full md:h-[700px] grid md:grid-cols-2 items-center lg:mx-20 md:mx-10 mx-6 gap-10 md:gap-10 py-12 md:py-0">
            <div className="h-full w-full md:order-1 order-2 flex flex-col justify-center items-start gap-4 pb-8 md:pb-12">
              <Fade>
                <div className="flex flex-col mt-10 items-start relative before:absolute before:-bottom-6 before:left-0 before:w-20 before:h-1 before:rounded-lg before:bg-gradient-to-r before:from-amber-500 before:to-red-500 z-10">
                  <p className="text-amber-500 lg:text-sm text-xs tracking-widest uppercase font-medium">
                    my this About me
                  </p>
                  <h1 className="text-zinc-100 lg:text-5xl md:text-4xl text-3xl">
                    Hello my world
                  </h1>
                  Fade
                </div>
                <h2 className="text-zinc-200 mt-10 mb-4 text-lg"></h2>
                <p className="text-zinc-400 text-justify text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquid sed cumque nihil. Consequatur dolor ducimus nobis
                  rerum quod dolorum illo necessitatibus delectus. Dignissimos
                  cumque nostrum quis earum a in dolorum!
                </p>
              </Fade>
            </div>
            <div className="w-full md:h-[400px] h-[300px] md:order-2 order-1 grid grid-cols-3 grid-rows-3">
              <img
                src="https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2232"
                alt="Welcome Image"
                className="col-span-3 row-span-2 w-full h-full"
              />
            </div>
          </main>
        </section>
        {/* Section3 */}
        <section className="w-full h-auto flex items-center bg-zinc-900 ">
          <main className="w-full lg:h-[800px] grid md:grid-cols-2 items-center gap-10 md:gap-0 lg:gap-0 ">
            <div className="w-full md:h-[800px] h-[300px] grid hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1570170609489-43197f518df0?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2187"
                alt="Offer Image"
                className="w-full h-full "
              />
            </div>
            <div className="h-full w-full lg:px-10 px-4 flex flex-col lg:justify-start md:justify-end justify-center items-start md:gap-20 lg:gap-24 gap-16">
              <Fade className="w-full">
                <div className="w-full flex flex-col mt-10 lg:mt-24 items-center relative before:absolute before:-bottom-6 before:left-38 before:w-20 before:h-1 before:rounded-lg before:bg-gradient-to-r before:from-amber-500 before:to-red-500 z-10">
                  <p className="text-amber-500 lg:text-sm text-xs tracking-widest uppercase font-medium">
                    First data
                  </p>
                  <h1 className="text-zinc-100 lg:text-5xl md:text-4xl text-3xl">
                    Test jaa
                  </h1>
               
                </div>
                <ul className="flex flex-col lg:gap-8 gap-6 pb-16">
                  <li className="flex lg:gap-6 gap-4 items-start justify-start">
                    <span className="text-amber-600 ">This is icon</span>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-base text-zinc-200 font-semibold">
                  
                        hewllll
                      </h3>
                      <p className="text-zinc-400 text-justify">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eveniet, suscipit labore. Maxime veniam debitis facere
                     
                      </p>
                    </div>
                  </li>
                  <li className="flex lg:gap-6 gap-4 items-start justify-start">
                    <span className="text-amber-600 ">This is icon</span>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-base text-zinc-200 font-semibold">
                     
                        hewllll
                      </h3>
                      <p className="text-zinc-400 text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eveniet, suscipit labore. Maxime veniam debitis facere
                        
                      </p>
                    </div>
                  </li>
                  <li className="flex lg:gap-6 gap-4 items-start justify-start">
                    <span className="text-amber-600 ">This is icon</span>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-base text-zinc-200 font-semibold">
                
                        hewllll
                      </h3>
                      <p className="text-zinc-400 text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eveniet, suscipit labore. Maxime veniam debitis facere
          
                      </p>
                    </div>
                  </li>

                </ul>
              </Fade>
            </div>
          </main>
        </section>
      </div>
    </>
  );
};
